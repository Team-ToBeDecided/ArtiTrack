from django.db import models

# Create your models here.

class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    price = models.FloatField()
    stock = models.IntegerField()
    description = models.CharField(max_length=2000)
    district = models.CharField(max_length=2000)
    address = models.CharField(max_length=2000)
    artisan = models.OneToOneField('userconf.User', on_delete=models.CASCADE)
    material = models.CharField(max_length=100, null=True, blank=True)
    craft = models.CharField(max_length=100, null=True, blank=True)
    measurement = models.CharField(max_length=100, null=True, blank=True)
    weight = models.CharField(max_length=100, null=True, blank=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name

class ProductImage(models.Model):
    id = models.AutoField(primary_key=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='product_images/')

    def __str__(self):
        return self.product.name

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