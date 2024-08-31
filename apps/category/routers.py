from rest_framework.routers import DefaultRouter
from .views import CategoryPlantModelViewSet, CategoryModelViewSet

router = DefaultRouter()

router.register(r'nursery/(?P<nursery_name>[^/]+)/category-plants', CategoryPlantModelViewSet, basename='category-plants')
router.register(r'nursery/(?P<nursery_name>[^/]+)/category', CategoryModelViewSet, basename='category')

urlpatterns = router.urls