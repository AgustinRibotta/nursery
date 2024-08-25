from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination
from django_filters.rest_framework import DjangoFilterBackend

from .models import Plant, Inventory
from .serializers import PlantSerializer, PlantSerializerList, InventorySerializer, InventorySerializerList
from .filters import PlantFilter

# Plant Model View Set
class PlantModelViewSet(viewsets.ModelViewSet):
    queryset = Plant.objects.all().select_related('nursery_id') 
    filter_backends = [DjangoFilterBackend]
    filterset_class = PlantFilter
    pagination_class = PageNumberPagination

    def get_serializer_class(self):
        if self.action == 'list':
            return PlantSerializerList
        return PlantSerializer

# Inventory Model View Set
class InventoryModelViewSet(viewsets.ModelViewSet):
    queryset = Inventory.objects.all()
    pagination_class = PageNumberPagination

    def get_serializer_class(self):
        if self.action == 'list':
            return InventorySerializerList
        return InventorySerializer