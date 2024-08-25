from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet

from .models import Event, HigtLight, Offer
from .serializers import EventSerilizers, HigtLightSerilizers, OfferSerilizers

class EventModelViewSet(ModelViewSet):
    
    serializer_class = EventSerilizers
    queryset = Event.objects.all()


class HigtLightModelViewSet(ModelViewSet):
    
    serializer_class = HigtLightSerilizers
    queryset = HigtLight.objects.all()


class OfferModelViewSet(ModelViewSet):
    
    serializer_class = OfferSerilizers
    queryset = Offer.objects.all()