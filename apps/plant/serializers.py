from rest_framework import serializers

from .models import Plant, Inventory

# Serialaizer for Inventory (LIST)
class InventorySerializerList(serializers.ModelSerializer):
    
    plant_name = serializers.SerializerMethodField()

    class Meta:
        model = Inventory
        fields = ['stock', 'price', 'plant_name']

    def get_plant_name(self, obj):
        return obj.plant_id.name

# Serialaizer for Inventory (CREATE, UPDATE, DELETE)
class InventorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Inventory
        fields = ['stock', 'price', 'plant_id']  

# Serialaizer for Inventory en Plant
class InventorySerializerForPlant(serializers.ModelSerializer):

    class Meta:
        model = Inventory
        fields = ['stock', 'price']

# Serialaizer for Plant (LIST)
class PlantSerializerList(serializers.ModelSerializer):
    inventories = InventorySerializerForPlant(read_only=True) 

    class Meta:
        model = Plant
        fields = ['name', 'description', 'img', 'inventories']

# Serialaizer for Plant (CREATE, UPDATE, DELETE)
class PlantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plant
        fields = '__all__'  