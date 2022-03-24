from statistics import mode
from rest_framework import serializers
from django.contrib.auth.models import User
from accounts.models import Student,Product,UserDetails, Cart,  OrderPlaced

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])

        return user




class StudentSerializer(serializers.HyperlinkedModelSerializer):
    
    class Meta:
        model = Student
        fields = ['id','name','age','address','product_image']


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ["id","title","price","discription","gender","brand","product_image","category"]

class ProductSerializerSecond(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ["id","title","price","discription","gender","brand","category"]




class UserDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDetails
        fields = ["id","fullName","address","phone"]


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ["id","product","quantity"]



class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderPlaced
        fields = ['id','product','quantity','order_date','status']


class OrderSerializerAdmin(serializers.ModelSerializer):
    class Meta:
        model = OrderPlaced
        fields = ['id','product',"user",'quantity','order_date','status']