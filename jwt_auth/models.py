from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    email = models.CharField(unique=True, max_length=80)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    home = ArrayField(models.FloatField(), size=2)
