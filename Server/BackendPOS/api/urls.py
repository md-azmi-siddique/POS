from django.conf import settings
from django.conf.urls.static import static
from . views import *
from django.urls import path

urlpatterns = [
    #--------------Product Model--------------#
    path('products/create/', ProductCreateView.as_view(), name='Brands Create'),
    path('products/', ProductReadView.as_view(), name='Brands Read'),
    path('products/update/<int:pk>/', ProductUpdateView.as_view(), name='Brands Update'),
    path('products/delete/<int:pk>', ProductDeleteView.as_view(), name='Brands Delete'),
]