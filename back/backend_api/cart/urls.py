from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', views.CartItemAPIView, basename='cartitem')

urlpatterns = [
    path('', views.CartAPIView.as_view(), name='cart'),
    path('items/', include(router.urls))

]
