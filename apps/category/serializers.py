from rest_framework import serializers

from .models import Category, CategoryPlant

class CategorySerilizers(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'


class CategoryPlantSerilizers(serializers.ModelSerializer):

    class Meta:
        model = CategoryPlant
        fields = '__all__'
