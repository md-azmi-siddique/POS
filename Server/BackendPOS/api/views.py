from django.shortcuts import render
from rest_framework import generics
from . models import *
from . serializers import *

# Create your views here.

class ProductCreateView(generics.ListCreateAPIView):
    queryset = ProductModel.objects.all()
    serializer_class = ProductSerializer

class ProductReadView(generics.ListAPIView):
    queryset = ProductModel.objects.all()
    serializer_class = ProductSerializer

class ProductUpdateView(generics.RetrieveUpdateAPIView):
    queryset = ProductModel.objects.all()
    serializer_class = ProductSerializer

class ProductDeleteView(generics.DestroyAPIView):
    queryset = ProductModel.objects.all()
    serializer_class = ProductSerializer
