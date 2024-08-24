from django.utils.translation import gettext_lazy as _
from django.db import models

from ..nursery.models import Nursery

# Plant
class Plant(models.Model):
    name = models.CharField(_("Name"), max_length=150)
    decription = models.TextField(_("Description"))
    img = models.ImageField(_("Image"), upload_to="plant", height_field=None, width_field=None, max_length=None)
    nursery_id = models.ForeignKey(Nursery, verbose_name=_("Nursery"), on_delete=models.CASCADE)    

    class Meta:
        verbose_name = _("Plant")
        verbose_name_plural = _("Plants")

    def __str__(self):
        return self.name


# Inventory
class Inventory(models.Model):
    stock = models.PositiveIntegerField(_("Stock"))
    price = models.DecimalField(_("Price"), max_digits=5, decimal_places=2)
    plant_id = models.ForeignKey(Plant, verbose_name=_(""), on_delete=models.CASCADE)


    class Meta:
        verbose_name = _("Inventory")
        verbose_name_plural = _("Inventoryes")

    def __str__(self):
        return self.plant_id.name + self.stock



