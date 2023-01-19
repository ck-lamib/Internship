from django.contrib import admin
from django.urls import path, include
from items import views

urlpatterns = [
    path('index/',views.index, name='index'),
]