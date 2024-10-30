from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/nasa-data/', views.fetch_nasa_data, name='fetch_nasa_data'),
]
