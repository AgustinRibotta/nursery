from rest_framework.routers import DefaultRouter
from .views import PlantModelViewSet, InventoryModelViewSet

router = DefaultRouter()

router.register(r'nursery/(?P<nursery_name>[^/]+)/plant', PlantModelViewSet)
router.register(r'nursery/(?P<nursery_name>[^/]+)/inventory', InventoryModelViewSet)

urlpatterns = router.urls