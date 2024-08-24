from django.db import models
from django.utils.translation import gettext_lazy as _

from ..nursery.models import Nursery

# Social Network
class SocialNetwork(models.Model):
    name = models.CharField(_("Name"), max_length=50)
    urls = models.TextField(_("Urls"), blank=True, null=True)
    img = models.ImageField(_("Image"), upload_to="socialnetwork", height_field=None, width_field=None, max_length=None, blank=True, null=True)
    nursery_id = models.ForeignKey(Nursery, verbose_name=_("Nursery"), on_delete=models.CASCADE)

    class Meta:
        verbose_name = _("SocialNetwork")
        verbose_name_plural = _("SocialNetworks")

    def __str__(self):
        return self.name


# Aboutus 
class Aboutus(models.Model):
    title = models.CharField(_("Title"), max_length=250)
    description = models.TextField(_("Description"))
    nursery_id = models.ForeignKey(Nursery, verbose_name=_("Nursery"), on_delete=models.CASCADE)

    class Meta:
        verbose_name = _("Aboutus")
        verbose_name_plural = _("Aboutus")

    def __str__(self):
        return self.title



