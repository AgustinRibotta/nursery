from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated

from .models import Nursery
from .serializers import NurserySerilizers

class NurseryModelViewSet(ModelViewSet):

    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = NurserySerilizers
    queryset = Nursery.objects.all()

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

    def get_queryset(self):
        return Nursery.objects.filter(created_by=self.request.user)
    

