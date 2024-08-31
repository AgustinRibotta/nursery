from django.utils.translation import gettext_lazy as _
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Nursery(models.Model):
    name = models.CharField(_("Nursery Name"), max_length=50)
    created_by = models.ForeignKey(User, verbose_name=_("User"), on_delete=models.CASCADE)
    

    class Meta:
        verbose_name = _("Nursery")
        verbose_name_plural = _("Nurseryes")

    def __str__(self):
        return self.name

