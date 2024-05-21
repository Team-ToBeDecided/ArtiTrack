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
    artisan = models.ForeignKey('userconf.User', on_delete=models.CASCADE)
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
        return self.user.email

class Wishlist(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.OneToOneField('userconf.User', on_delete=models.CASCADE)
    product = models.ManyToManyField(Product)

    def __str__(self):
        return self.user.email
    
class Order(models.Model):
    id = models.AutoField(primary_key=True)
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    artisan = models.ForeignKey('userconf.User', related_name='orders_made', on_delete=models.CASCADE)
    user = models.ForeignKey('userconf.User', related_name='orders_received', on_delete=models.CASCADE)
    amount = models.FloatField()
    nft_token_id = models.CharField(max_length=200, null=True, blank=True)
    delievered = models.BooleanField(default=False)
    delivery_address = models.CharField(max_length=2000)
    supplier = models.ForeignKey('userconf.User', related_name='orders_supplied', on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f"Order {self.id} by {self.user.email}"
    
class SupplyRequest(models.Model):
    id = models.AutoField(primary_key=True)
    order = models.ForeignKey('Order', on_delete=models.CASCADE)
    new_supplier_address = models.CharField(max_length=2000)
    artisan = models.ForeignKey('userconf.User', related_name='supply_requests', on_delete=models.CASCADE)
    amount = models.FloatField()