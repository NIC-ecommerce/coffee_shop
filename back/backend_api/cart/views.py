from rest_framework import generics, viewsets, serializers
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from .models import CartItem, Cart
from .serializers import  CartItemSerializer, CartSerializer
from django.shortcuts import get_object_or_404
from django.core import serializers as ser
from django.db.models import Count
from drf_spectacular.utils import extend_schema, inline_serializer


class CartItemAPIView(viewsets.ViewSet):
    @extend_schema(request=inline_serializer(
        name="InlineFormSerializer",
        fields={
            "quantity": serializers.IntegerField(),
            "is_active": serializers.BooleanField(),
            "product": serializers.IntegerField(),  
            "variations": serializers.ListField(child=serializers.IntegerField())
        },
    ), responses=CartItemSerializer)
    def create(self, request):
        if not Cart.objects.filter(user=request.user.id):
            Cart.objects.create(user=request.user)
        cart = Cart.objects.get(user=request.user.id)

        target_variations = set(request.data['variations'])

        candidate_cart_item = CartItem.objects.filter(cart=cart.id, user=request.user.id, product=request.data['product']).annotate(c=Count('variations')).filter(c=len(target_variations))

        for variation in target_variations:
            candidate_cart_item = candidate_cart_item.filter(variations=variation)

        cart_item = candidate_cart_item.first()

        if cart_item:
            cart_item.quantity += int(request.data['quantity'])
            cart_item.save()
            
            data = CartItemSerializer(cart_item)
            return Response(data.data, status=status.HTTP_200_OK)
      
        if int(request.data['quantity']) <= 0:
            return Response({'error: quantity must be greater than 0'}, status=status.HTTP_400_BAD_REQUEST)
        
        serializer = CartItemSerializer(data=request.data | {'user': 1, 'cart': cart.id})
        
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    @extend_schema(request=inline_serializer(
        name="InlineFormSerializer",
        fields={
            "quantity": serializers.IntegerField(),
        },
    ), responses=CartItemSerializer)

    def partial_update(self, request, pk=None):
        if int(request.data['quantity']) <= 0:
            return Response({'error: quantity must be greater than 0'}, status=status.HTTP_400_BAD_REQUEST)
        
        cart_item = CartItem.objects.get(pk=pk)
        cart_item.quantity = request.data['quantity']
        cart_item.save()

        data = CartItemSerializer(CartItem.objects.get(pk=pk))
        return Response(data.data, status=status.HTTP_200_OK)
    
    def destroy(self, request, pk=None):
        CartItem.objects.get(pk=pk).delete()


class CartAPIView(generics.ListAPIView):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer
    def list(self, request):
        queryset = self.get_queryset()
        items = []
        for i in queryset:
            if i.user.id == request.user.id:
                items.append(i)
        serializer = CartItemSerializer(items, many=True)
        return Response(serializer.data)


