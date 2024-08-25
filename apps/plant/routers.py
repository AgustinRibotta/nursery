from rest_framework.routers import DefaultRouter
from .views import PlantModelViewSet, InventoryModelViewSet

router = DefaultRouter()

router.register(r'plant', PlantModelViewSet)
router.register(r'inventory', InventoryModelViewSet)

urlpatterns = router.urls