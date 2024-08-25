from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet

from .models import SocialNetwork, Aboutus
from .serializers import SocialNetworkSerilizers, AboutcusSerilizers

class SocialNetworkModelViewSet(ModelViewSet):
    
    serializer_class = SocialNetworkSerilizers
    queryset = SocialNetwork.objects.all()


class AboutusModelViewSet(ModelViewSet):
    
    serializer_class = AboutcusSerilizers
    queryset = Aboutus.objects.all()