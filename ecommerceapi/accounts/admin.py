from django.contrib import admin
from accounts.models import Student,Product,UserDetails, Cart,OrderPlaced
# Register your models here.
@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display=["id","name","age","address","product_image"]


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display=["id","title","price","discription","gender","brand","category","product_image"]


@admin.register(UserDetails)
class UserDetailsAdmin(admin.ModelAdmin):
    list_display=["id","user","fullName","address","phone"]


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display=["id","user","product","quantity"]

@admin.register(OrderPlaced)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ['id','user','product','quantity','order_date','status']
