# Generated by Django 3.2.8 on 2021-10-20 21:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('journeys', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='journey',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]