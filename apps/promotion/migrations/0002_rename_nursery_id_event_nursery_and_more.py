# Generated by Django 5.1 on 2024-08-31 10:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('promotion', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='event',
            old_name='nursery_id',
            new_name='nursery',
        ),
        migrations.RenameField(
            model_name='higtlight',
            old_name='nursery_id',
            new_name='nursery',
        ),
        migrations.RenameField(
            model_name='offer',
            old_name='nursery_id',
            new_name='nursery',
        ),
    ]
