# store/urls.py
from django.urls import path
from . import views
# urlpatterns = [
#     path('api/v0.0.1/products/', views.ProductListAPIView.as_view(), name='product-list-api'),
#     path('api/v0.0.1/products/<int:pk>/', views.ProductDetailAPIView.as_view(), name='product-detail-api'),
#     path('api/v0.0.1/reviews/', views.ReviewRatingListAPIView.as_view(), name='review-list-api'),
#     path('api/v0.0.1/product_gallery/', views.ProductGalleryListAPIView.as_view(), name='product-gallery-api'),

# #     path('', P, name='store'),
# #     path('category/<slug:category_slug>/', views.store, name='products_by_category'),
# #     path('category/<slug:category_slug>/<slug:product_slug>/', views.product_detail, name='product_detail'),
# #     path('search/', views.search, name='search'),
# #     path('submit_review/<int:product_id>/', views.submit_review, name='submit_review')
# ]
# # urlpatterns = [
# #     path('', views.ProductListAPIView.as_view(), name='store'),
# #     path('category/<slug:category_slug>/', views.store, name='products_by_category'),
# #     path('category/<slug:category_slug>/<slug:product_slug>/', views.product_detail, name='product_detail'),
# #     path('search/', views.search, name='search'),
# #     path('submit_review/<int:product_id>/', views.submit_review, name='submit_review')
# # ]


from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.ProductListAPIView.as_view(), name='product-list'),
    path('products/<int:pk>/', views.ProductDetailAPIView.as_view(), name='product-detail'),
    path('reviews/', views.ReviewRatingListAPIView.as_view(), name='review-list'),
    path('product_gallery/', views.ProductGalleryListAPIView.as_view(), name='product-gallery'),
]
