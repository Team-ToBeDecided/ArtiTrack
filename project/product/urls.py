from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()

router.register('product', views.ProductViewSet)
router.register('productimage', views.ProductImageViewSet)
router.register('cart', views.CartViewSet)
router.register('wishlist', views.WishlistViewSet)
router.register('order', views.OrderViewSet)
router.register('supplyrequest', views.SupplyRequestViewSet)

urlpatterns = [
    path('', include(router.urls)),
]