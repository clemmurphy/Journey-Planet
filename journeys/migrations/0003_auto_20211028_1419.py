# Generated by Django 3.2.8 on 2021-10-28 13:19

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('journeys', '0002_journey_owner'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='journey',
            name='data',
        ),
        migrations.AddField(
            model_name='journey',
            name='destination',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.FloatField(), default=[0, 1], size=2),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='journey',
            name='origin',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.FloatField(), default=[0, 1], size=2),
            preserve_default=False,
        ),
    ]