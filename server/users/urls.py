from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import UserRegistrationView  

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='user_register'),  # Registration endpoint
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Login endpoint (JWT access + refresh)
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Refresh token endpoint
]