from django.utils.translation import gettext_lazy as _
from django.db import models

from ..nursery.models import Nursery
from ..plant.models import Plant
from ..category.models import CategoryPlant


# Event
class Event(models.Model):
    name = models.CharField(_("Name"), max_length=250)
    date = models.DateTimeField(_("Date"), auto_now=False, auto_now_add=False)
    description = models.TextField(_("Description"), blank=True, null=True)
    active = models.BooleanField(_("Active"), default=False)
    plant_id = models.ForeignKey(Plant, verbose_name=_("Plant"), on_delete=models.CASCADE, blank=True, null=True)
    category_plant_id = models.ForeignKey(CategoryPlant, verbose_name=_("CategoryPlant"), on_delete=models.CASCADE, blank=True, null=True)
    nursery = models.ForeignKey(Nursery, verbose_name=_("Nursery"), on_delete=models.CASCADE, blank=True, null=True)

    class Meta:
        verbose_name = _("Event")
        verbose_name_plural = _("Events")

    def __str__(self):
        return self.name


# HigtLight
class HigtLight(models.Model):
    reason = models.CharField(_("Reason"), max_length=250)
    active = models.BooleanField(_("Active"), default=False)
    plant_id = models.ForeignKey(Plant, verbose_name=_("Plant"), on_delete=models.CASCADE, blank=True, null=True)
    category_plant_id = models.ForeignKey(CategoryPlant, verbose_name=_("CategoryPlant"), on_delete=models.CASCADE, blank=True, null=True)
    nursery = models.ForeignKey(Nursery, verbose_name=_("Nursery"), on_delete=models.CASCADE, blank=True, null=True)

    class Meta:
        verbose_name = _("HigtLight")
        verbose_name_plural = _("HigtLights")

    def __str__(self):
        return self.reason


# Offer
class Offer(models.Model):
    reason = models.CharField(_("Reason"), max_length=250)
    active = models.BooleanField(_("Active"), default=False)
    start_date = models.DateTimeField(_("Start"), auto_now=False, auto_now_add=False)
    End_date = models.DateTimeField(_("End"), auto_now=False, auto_now_add=False)
    plant_id = models.ForeignKey(Plant, verbose_name=_("Plant"), on_delete=models.CASCADE, blank=True, null=True)
    category_plant_id = models.ForeignKey(CategoryPlant, verbose_name=_("CategoryPlant"), on_delete=models.CASCADE, blank=True, null=True)
    nursery = models.ForeignKey(Nursery, verbose_name=_("Nursery"), on_delete=models.CASCADE, blank=True, null=True)

    class Meta:
        verbose_name = _("Offer")
        verbose_name_plural = _("Offers")

    def __str__(self):
        return self.reason

