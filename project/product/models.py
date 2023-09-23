from django.db import models

# Create your models here.

class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    price = models.FloatField()
    stock = models.IntegerField()
    image_url = models.CharField(max_length=2000)
    description = models.CharField(max_length=2000)
    district = models.CharField(max_length=2000)
    address = models.CharField(max_length=2000)
    artisan = models.OneToOneField('userconf.User', on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Cart(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.OneToOneField('userconf.User', on_delete=models.CASCADE)
    product = models.ManyToManyField(Product)

    def __str__(self):
        return self.user.username

class Wishlist(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.OneToOneField('userconf.User', on_delete=models.CASCADE)
    product = models.ManyToManyField(Product)

    def __str__(self):
        return self.user.username