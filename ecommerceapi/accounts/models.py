from distutils.command.upload import upload
from tkinter import CASCADE
from django.db import models
from django.contrib.auth.models import User



#used just for testin at the initial steps
class Student(models.Model):
    name = models.CharField(max_length=30)
    age = models.IntegerField()
    address = models.CharField(max_length=50)
    product_image = models.ImageField(upload_to="productImage")

    
#products models
class Product(models.Model):
    title = models.CharField(max_length=100)
    price = models.FloatField()
    discription = models.TextField()
    gender=models.CharField(max_length=10)
    brand = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    product_image = models.ImageField(upload_to='productImage',blank=True, null=True)

    def __str__(self):
        return str(self.id)

#user details models
class UserDetails(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    fullName = models.CharField(max_length=50)
    address = models.CharField(max_length=75)
    phone = models.BigIntegerField()


#models of cart
class Cart(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)


class OrderPlaced(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    order_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField( max_length=50, default='pending')
    
    def __str__(self):
        return str(self.user)