from django.contrib import admin
from django.urls import path, include
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView
from django.conf.urls.static import static
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from .views import *
from django.urls import path, include


app_name='users'
urlpatterns = [
    path('registration/',RegistrationView.as_view(),name='user-registration'),
    path('login/',LoginView.as_view(),name='user-login'),
    path('logout/',LogoutView.as_view(),name='user-logut'),
    path('verify_email/<str:uidb64>/<str:token>/', VerifyEmailView.as_view(), name='verify_email'),

]
