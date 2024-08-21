from django.db import models
from django.core.validators import MinValueValidator

class Product(models.Model):
    name = models.CharField(max_length=50, blank=False, null=False)
    description = models.TextField(max_length=200, blank=True, null=True)
    value = models.FloatField(validators = [MinValueValidator(0.0)], blank=False, null=False)

    def __str__(self):
        return self.name

    class Meta:
        constraints = [
            models.CheckConstraint(check=models.Q(value__gte=0), name="value_gte_0"),
        ]
