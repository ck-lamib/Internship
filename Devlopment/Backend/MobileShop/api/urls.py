from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('items/', views.getItems, name='items'),
    path('items/create', views.createItem, name='createItems'),
    path('items/<int:pk>/', views.getItem, name='item'),
    path('items/<int:pk>/update', views.updateItem, name='updateItem'),
    path('items/<int:pk>/delete', views.deleteItem, name='deleteItem'),
]
