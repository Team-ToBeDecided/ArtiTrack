from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import *

# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )

router = DefaultRouter()

# router.register('users', UserViewSet, basename='users')

urlpatterns = [
    path('register/', RegistrationView.as_view(), name='register'),
    path('update/<int:pk>/', RegistrationView.as_view(), name='update'),
    path('login/', MyTokenObtainPairView.as_view(), name='login'),
]