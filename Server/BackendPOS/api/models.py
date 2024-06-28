from django.db import models

# Create your models here.
class ProductModel(models.Model):
    productName = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    img = models.CharField(max_length=8000)
    
    def __str__(self):
        return self.productName
