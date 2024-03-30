from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken ,AccessToken
from users.serializers import  RegistrationSerializer , LoginSerializer
from django.core.mail import send_mail
from .models import User
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode,urlsafe_base64_decode
from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import default_token_generator


class RegistrationView(APIView):
    """
        Endpoint to register a new user.

        - POST /users/registration/: Register a new user.

        Parameters:
        - request: The HTTP request object containing user registration data.

        Returns:
        - Response: HTTP response indicating the success or failure of the registration attempt.
        """

    def post(self, request):
        """
               Register a new user.

               Parameters:
               - request: The HTTP request object.

               Returns:
               - Response: HTTP response indicating the success or failure of the registration attempt.
               """
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()

            # Send verification email
            current_site = get_current_site(request)
            domain = current_site.domain
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            token = default_token_generator.make_token(user)
            verification_link = f"http://{domain}/verify_email/{uid}/{token}/"
            subject = 'Please activate your account'
            message = f'Hi {user.username},\n\nThank you for registering with us. Please click the link below to activate your account:\n\n{verification_link}\n\nIf you did not register on our website, please ignore this email.\n\nBest regards,\nOur Team'
            send_mail(subject, message, to=[user.email],)

            return Response({
                "message": "User registered successfully. Verification email sent.",
                "user": serializer.data,
            }, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VerifyEmailView(APIView):
    """
       Endpoint to verify a user's email.

       - GET /users/verify_email/{uidb64}/{token}/: Verify a user's email using the provided UID and token.

       Parameters:
       - request: The HTTP request object.
       - uidb64 (str): The base64-encoded user ID.
       - token (str): The verification token.

       Returns:
       - Response: HTTP response indicating the success or failure of the email verification attempt.
       """
    def get(self, request, uidb64, token):
        """
              Verify a user's email using the provided UID and token.

              Parameters:
              - request: The HTTP request object.
              - uidb64 (str): The base64-encoded user ID.
              - token (str): The verification token.

              Returns:
              - Response: HTTP response indicating the success or failure of the email verification attempt.
              """
        try:
            uid = force_bytes(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None

        if user is not None and default_token_generator.check_token(user, token):
            user.is_active = True
            user.save()
            return Response({"message": "Email verified successfully"}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Invalid token"}, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    """
      Endpoint to authenticate a user and generate JWT tokens.

      - POST /users/login/: Authenticate a user and generate JWT tokens.

      Parameters:
      - request: The HTTP request object containing user login credentials.

      Returns:
      - Response: HTTP response containing the JWT tokens or an error message.
      """
    permission_classes = [AllowAny]

    def post(self, request):
        """
              Authenticate a user and generate JWT tokens.

              Parameters:
              - request: The HTTP request object.

              Returns:
              - Response: HTTP response containing the JWT tokens or an error message.
              """
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']

        if user.is_active:
            refresh = RefreshToken.for_user(user)
            refresh.payload.update({
                'user_id': user.id,
                'email': user.email
            })
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Email not verified"}, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    """
        Endpoint to logout a user and invalidate their JWT tokens.

        - POST /users/logout/: Logout a user and invalidate their JWT tokens.

        Parameters:
        - request: The HTTP request object containing the refresh token.

        Returns:
        - Response: HTTP response indicating the success or failure of the logout attempt.
        """
    permission_classes = [IsAuthenticated]
    def post(self, request):
        """
               Logout a user and invalidate their JWT tokens.

               Parameters:
               - request: The HTTP request object containing the refresh token.

               Returns:
               - Response: HTTP response indicating the success or failure of the logout attempt.
               """
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response({"message": "Logout successful"}, status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response({"error": "Invalid or expired token"}, status=status.HTTP_400_BAD_REQUEST)
