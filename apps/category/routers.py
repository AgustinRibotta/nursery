from rest_framework.routers import DefaultRouter
from .views import CategoryPlantModelViewSet, CategoryModelViewSet

router = DefaultRouter()

router.register(r'category-plants', CategoryPlantModelViewSet, basename='category-plants')
router.register(r'category', CategoryModelViewSet, basename='category')

urlpatterns = router.urls