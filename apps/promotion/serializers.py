from rest_framework import serializers

from .models import Event, HigtLight, Offer

class EventSerilizers(serializers.ModelSerializer):

    class Meta:
        model = Event
        fields = '__all__'


class HigtLightSerilizers(serializers.ModelSerializer):

    class Meta:
        model = HigtLight
        fields = '__all__'


class OfferSerilizers(serializers.ModelSerializer):

    class Meta:
        model = Offer
        fields = '__all__'