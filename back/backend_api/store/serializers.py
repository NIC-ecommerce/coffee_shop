from rest_framework import serializers
from .models import Product, ReviewRating, ProductGallery


class ReviewRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReviewRating
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    reviews = ReviewRatingSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        # fields = '__all__'
        fields =["id", "reviews", "product_name", "slug", "description" ,"price" ,"stock", "images", "is_available", "created_date", "modified_date", "category"]


class ProductGallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductGallery
        fields = '__all__'
