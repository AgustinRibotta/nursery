import django_filters
from .models import Plant

class PlantFilter(django_filters.FilterSet):
    nursery_id = django_filters.CharFilter(field_name='nursery_id__name', lookup_expr='icontains')

    class Meta:
        model = Plant
        fields = [ 'nursery_id', 'name']