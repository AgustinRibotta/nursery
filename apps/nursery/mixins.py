from rest_framework.exceptions import PermissionDenied
from .models import Nursery

class NurseryOwnershipMixin:

    
    def get_nursery(self):
        nursery_name = self.kwargs.get('nursery_name')
        user = self.request.user
        try:
            nursery = Nursery.objects.get(name=nursery_name, created_by=user)
        except Nursery.DoesNotExist:
            raise PermissionDenied("You do not have permission to access this nursery.")
        return nursery
    
   
    def get_queryset(self):
        nursery = self.get_nursery()
        return self.queryset.filter(nursery=nursery)

    
    def perform_create(self, serializer):
        nursery = self.get_nursery()
        category = serializer.save(nursery=nursery)
        if category.nursery != nursery:
            raise PermissionDenied("You do not have permission to create a category for this nursery.")

    
    def perform_update(self, serializer):
        nursery = self.get_nursery()
        instance = serializer.instance
        if instance.nursery != nursery:
            raise PermissionDenied("You do not have permission to update this category.")
        serializer.save()
        
    
    def perform_destroy(self, instance):
        nursery = self.get_nursery()
        if instance.nursery != nursery:
            raise PermissionDenied("You do not have permission to delete this category.")
        instance.delete()
