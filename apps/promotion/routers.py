from rest_framework.routers import DefaultRouter
from .views import EventModelViewSet, HigtLightModelViewSet, OfferModelViewSet

router = DefaultRouter()

router.register(r'nursery/(?P<nursery_name>[^/]+)/event', EventModelViewSet, basename='event')
router.register(r'nursery/(?P<nursery_name>[^/]+)/higt-ligth', HigtLightModelViewSet, basename='higt-ligth')
router.register(r'nursery/(?P<nursery_name>[^/]+)/offer', OfferModelViewSet, basename='offer')

urlpatterns = router.urls