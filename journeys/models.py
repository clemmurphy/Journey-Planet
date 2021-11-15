from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.

class Journey(models.Model):
    origin_string = models.CharField(max_length=50)
    destination_string = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    origin = ArrayField(models.FloatField(), size=2)
    destination = ArrayField(models.FloatField(), size=2)
    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name="journeys",
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f"{self.origin_string} to {self.destination_string} - {self.created_at}"