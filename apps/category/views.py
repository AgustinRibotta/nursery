from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet

from .models import CategoryPlant, Category
from .serializers import CategoryPlantSerilizers, CategoryPlantSerilizers

class CategoryPlantModelViewSet(ModelViewSet):
    
    serializer_class = CategoryPlantSerilizers
    queryset = CategoryPlant.objects.all()

    def create(self, request, *args, **kwargs):
        pass

class CategoryModelViewSet(ModelViewSet):
    
    serializer_class = CategoryPlantSerilizers
    queryset = Category.objects.all()