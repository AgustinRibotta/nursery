# Generated by Django 5.1 on 2024-08-31 10:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('nursery', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='nursery',
            old_name='user_id',
            new_name='created_by',
        ),
    ]
