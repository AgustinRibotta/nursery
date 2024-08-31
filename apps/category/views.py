from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated

from  ..nursery.mixins import NurseryOwnershipMixin
from .models import CategoryPlant, Category
from .serializers import CategoryPlantSerilizers, CategorySerilizers


# Category
class CategoryModelViewSet(NurseryOwnershipMixin, ModelViewSet):

    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    serializer_class = CategorySerilizers
    queryset = Category.objects.all()


# Category Plant
class CategoryPlantModelViewSet(NurseryOwnershipMixin, ModelViewSet):
    
    permission_classes = [IsAuthenticated]
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    
    serializer_class = CategoryPlantSerilizers
    queryset = CategoryPlant.objects.all()
