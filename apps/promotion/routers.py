from rest_framework.routers import DefaultRouter
from .views import EventModelViewSet, HigtLightModelViewSet, OfferModelViewSet

router = DefaultRouter()

router.register(r'event', EventModelViewSet, basename='event')
router.register(r'higt-ligth', HigtLightModelViewSet, basename='higt-ligth')
router.register(r'offer', OfferModelViewSet, basename='offer')

urlpatterns = router.urls