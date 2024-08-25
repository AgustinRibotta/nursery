from rest_framework.routers import DefaultRouter
from .views import SocialNetworkModelViewSet, AboutusModelViewSet

router = DefaultRouter()

router.register(r'social-network', SocialNetworkModelViewSet)
router.register(r'about-us', AboutusModelViewSet)

urlpatterns = router.urls