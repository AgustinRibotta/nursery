from rest_framework.routers import DefaultRouter
from .views import SocialNetworkModelViewSet, AboutusModelViewSet

router = DefaultRouter()

router.register(r'nursery/(?P<nursery_name>[^/]+)/social-network', SocialNetworkModelViewSet)
router.register(r'nursery/(?P<nursery_name>[^/]+)/about-us', AboutusModelViewSet)

urlpatterns = router.urls