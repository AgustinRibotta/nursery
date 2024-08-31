from django.utils.translation import gettext_lazy as _
from django.db import models

from ..plant.models import Plant
from ..nursery.models import Nursery

# Category
class Category(models.Model):
    name = models.CharField(_("Name"), max_length=150)
    nursery = models.ForeignKey(Nursery, verbose_name=_("Nurseryes"), on_delete=models.CASCADE)
    
    
    class Meta:
        verbose_name = _("Category")
        verbose_name_plural = _("Categoryes")

    def __str__(self):
        return self.name


# Category Plant
class CategoryPlant(models.Model):
    category_id = models.ForeignKey(Category, verbose_name=_("Categoryes"), on_delete=models.CASCADE)
    plant_id = models.ForeignKey(Plant, verbose_name=_("Plants"), on_delete=models.CASCADE)
    nursery = models.ForeignKey(Nursery, verbose_name=_("Nurseryes"), on_delete=models.CASCADE)
    

    class Meta:
        verbose_name = _("Category Plant")
        verbose_name_plural = _("Categoryes Plants")

    def __str__(self):
        return self.category_id.name + " " + self.plant_id.name


