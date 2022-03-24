
import json
from django.http import Http404, JsonResponse
from django.shortcuts import render

from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import OrderSerializerAdmin, ProductSerializer, UserSerializer, RegisterSerializer, StudentSerializer,UserDetailsSerializer, ProductSerializerSecond, OrderSerializer, CartSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import viewsets
from django.contrib.auth import login
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.views import LoginView as KnoxLoginView
from accounts.models import Product, Student, UserDetails, OrderPlaced, Cart
from knox.auth import TokenAuthentication as KnoxTokenAuthentication
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser 
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin
from rest_framework.parsers import FileUploadParser

# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
        "user": UserSerializer(user, context=self.get_serializer_context()).data,
        "token": AuthToken.objects.create(user)[1]
        })

#user login API
class LoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginAPI, self).post(request, format=None)


#testing api
class StudentFunction(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    authentication_classes = [KnoxTokenAuthentication]
    # permission_classes = [IsAuthenticated]
    permission_classes = [IsAdminUser]


#API to get products by brand
class ProductListByBrand(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = Product.objects.all()
        brandname = self.request.query_params.get('brand')
        if brandname is not None:
            try:
                queryset = queryset.filter(brand=brandname)[:6]
            except:
                queryset = queryset.filter(brand=brandname)

        return queryset

#API to get broduct by gender
class ProductListByGender(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = Product.objects.all()
        gender = self.request.query_params.get('gender')
        if gender is not None:
            try:
                queryset = queryset.filter(gender=gender)[:6]
            except:
                queryset = queryset.filter(brand=gender)

        return queryset


#API tp get user details
class UserDetailsList(generics.ListAPIView):
    serializer_class = UserDetailsSerializer
    def get_queryset(self):
        queryset = UserDetails.objects.all().filter(user=self.request.user)
        return queryset

@api_view(['GET','POST', 'PUT', 'DELETE'])
def userDetailsApiView(request):
    if request.method=='GET':
        userDetails = UserDetails.objects.all().filter(user=request.user)
        udSerializers = UserDetailsSerializer(userDetails,many=True)
        return JsonResponse(udSerializers.data,safe=False)
    
    elif request.method=='POST':
        userDetails_serializer = UserDetailsSerializer(data=request.data)
        if userDetails_serializer.is_valid():
            print("hello")
            userDetails_serializer.save(user=request.user)
            return JsonResponse(userDetails_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(userDetails_serializer.errors, status=status.HTTP_400_BAD_REQUEST)





#API to get particular product with help of id
class GetProductClass(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = Product.objects.all()
        id = self.request.query_params.get('id')
        if id is not None:
            try:
                queryset = queryset.filter(id=id)
            except:
                queryset = {}
        return queryset

#API to get similar product based on brand with the help of product id
class GetSimilarProducts(generics.ListAPIView):
    serializer_class = ProductSerializer
    def get_queryset(self):
        queryset = Product.objects.all()
        id = self.request.query_params.get('id')
        if id is not None:
            try:
                p = Product.objects.get(id=id)
                queryset = queryset.filter(brand=p.brand)[:6]
            except:
                queryset = {}
        return queryset


# class IsAdminOrNot(generics.ListAPIView):
#     authentication_classes = [KnoxTokenAuthentication]
#     permission_classes = [IsAuthenticated]
#     def get_queryset(self):
#         if(self.request.user.is_staff):
#             return True
#         else:
#             return False

#to check weather logedin user is admin or not
class IsAdminOrNot(APIView):

    authentication_classes = [KnoxTokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        if(self.request.user.is_staff):
            return Response(data={'message':True})
        else:
            return Response(data={'message':False})




#crud for admin
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    authentication_classes = [KnoxTokenAuthentication]
    permission_classes = [IsAdminUser]


class ProductViewSet(viewsets.ModelViewSet):
    # parser_class = (FileUploadParser)
    queryset = Product.objects.all()
    serializer_class = ProductSerializerSecond

    authentication_classes = [KnoxTokenAuthentication]
    permission_classes = [IsAdminUser]


class ViewAllProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer



class UserDetailsCrud(GenericAPIView,ListModelMixin, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin):
    authentication_classes = [KnoxTokenAuthentication]
    permission_classes = [IsAuthenticated]

    queryset = UserDetails.objects.all()
    serializer_class = UserDetailsSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)
    
    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class UserDetailsViewSet(viewsets.ModelViewSet):
    queryset = UserDetails.objects.all()
    serializer_class = UserDetailsSerializer

    authentication_classes = [KnoxTokenAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        queryset = UserDetails.objects.filter(user=user)
  
        return queryset

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    
    def perform_update(self, serializer):
        serializer.save(user=self.request.user)
    
    # def perform_update(self, serializer):
    #     instance = serializer.save()
    #     UserDetailsSerializer(user=self.request.user, modified=instance)

class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

    authentication_classes = [KnoxTokenAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        queryset = Cart.objects.filter(user=user)
  
        return queryset

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    
    def destroy(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            self.perform_destroy(instance)
        except Http404:
            pass
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    # def perform_destroy(self,serializer):
    #     # id = self.request.query_params.get('id')
    #     serializer.delete(id=id)
        
    
    # def perform_update(self, serializer):
    #     serializer.save(user=self.request.user)

    
    

class OrderPlacedViewSet(viewsets.ModelViewSet):
    queryset = OrderPlaced.objects.all()
    serializer_class = OrderSerializer

    authentication_classes = [KnoxTokenAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        queryset = OrderPlaced.objects.filter(user=user)

        return queryset

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    
    def destroy(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            self.perform_destroy(instance)
        except Http404:
            pass
        return Response(status=status.HTTP_204_NO_CONTENT)

class OrderPlacedAdminViewSet(viewsets.ModelViewSet):
    queryset = OrderPlaced.objects.all()
    serializer_class = OrderSerializerAdmin

    authentication_classes = [KnoxTokenAuthentication]
    permission_classes = [IsAdminUser]





    





