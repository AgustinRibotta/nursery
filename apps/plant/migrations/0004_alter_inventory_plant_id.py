# Generated by Django 5.1 on 2024-08-25 21:39

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plant', '0003_alter_inventory_plant_id_alter_plant_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='inventory',
            name='plant_id',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='inventories', to='plant.plant', verbose_name='Plants'),
        ),
    ]
