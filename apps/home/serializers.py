from rest_framework import serializers

from .models import SocialNetwork, Aboutus

class SocialNetworkSerilizers(serializers.ModelSerializer):

    class Meta:
        model = SocialNetwork
        fields = '__all__'


class AboutcusSerilizers(serializers.ModelSerializer):

    class Meta:
        model = Aboutus
        fields = '__all__'