from rest_framework import generics
from django.db.models import Q
from .models import Product, ReviewRating, ProductGallery
from .serializers import ProductSerializer, ReviewRatingSerializer, ProductGallerySerializer
from category.models import Category
from drf_spectacular.utils import extend_schema

class ProductListAPIView(generics.ListAPIView):
    """
    A view to list products.

    Optional query parameters:
    - category_slug: Filter products by category slug.
    - keyword: Filter products by keyword in product description or name.
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    @extend_schema(responses=ProductSerializer(many=True))
    def get_queryset(self):
        """
        Get the queryset of products.
        http://127.0.0.1:8001/store/products/?category_slug={{name of category slug}}
        If category_slug is provided, filter products by category.
        If keyword is provided, filter products by keyword in description or name.
        """
        queryset = super().get_queryset()
        category_slug = self.request.query_params.get('category_slug')
        if category_slug:
            category = Category.objects.filter(slug=category_slug).first()
            if category:
                queryset = queryset.filter(category=category)
        keyword = self.request.query_params.get('keyword')
        if keyword:
            queryset = queryset.filter(Q(description__icontains=keyword) | Q(product_name__icontains=keyword))
        return queryset

class ProductDetailAPIView(generics.RetrieveAPIView):
    """
    A view to retrieve product details.
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    @extend_schema(responses=ProductSerializer)
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

class ReviewRatingListAPIView(generics.ListAPIView):
    """
    A view to list review ratings.
    """
    queryset = ReviewRating.objects.all()
    serializer_class = ReviewRatingSerializer

    @extend_schema(responses=ReviewRatingSerializer(many=True))
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

class ProductGalleryListAPIView(generics.ListAPIView):
    """
    A view to list product galleries.
    """
    queryset = ProductGallery.objects.all()
    serializer_class = ProductGallerySerializer

    @extend_schema(responses=ProductGallerySerializer(many=True))
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)
