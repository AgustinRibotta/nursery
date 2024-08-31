from rest_framework.routers import DefaultRouter
from .views import NurseryModelViewSet

router = DefaultRouter()

router.register(r'nursery', NurseryModelViewSet)


urlpatterns = router.urls