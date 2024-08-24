from django.contrib import admin
from .models import (Plant, Inventory)

# Register your models here.
admin.site.register(Plant)
admin.site.register(Inventory)