from rest_framework import serializers

from .models import Nursery

class NurserySerilizers(serializers.ModelSerializer):

    class Meta:
        model = Nursery
        fields = '__all__'


