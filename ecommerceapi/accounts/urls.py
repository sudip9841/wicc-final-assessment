from .views import RegisterAPI
from django.urls import path, include
from knox import views as knox_views
from .views import LoginAPI
from rest_framework.routers import DefaultRouter
from accounts import views
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register('student', views.StudentFunction, basename='studentFunction')
router.register('user', views.UserViewSet, basename='userviewset')
router.register('prod', views.ProductViewSet, basename='productviewset')
router.register('viewallprod', views.ViewAllProductViewSet, basename='viewallprod')
router.register('udetails',views.UserDetailsViewSet, basename='userdetailsviewset')
router.register('cart',views.CartViewSet, basename='cartviewset')
router.register('orders',views.OrderPlacedViewSet, basename='orders')
router.register('ordersadmin',views.OrderPlacedAdminViewSet, basename='ordersadmin')

# router.register('productbrand',views.ProductListByBrand, basename='brand')

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/product/brand/',views.ProductListByBrand.as_view(),name='brand'),
    path('api/userdetails/<int:pk>',views.UserDetailsCrud.as_view(),name='userDetails'),
    path('api/isadmin/',views.IsAdminOrNot.as_view(),name="isadmin"),
    path('api/product/',views.GetProductClass.as_view(),name='getProduct'),
    path('api/similarproducts/',views.GetSimilarProducts.as_view(),name='getSimilarProducts'),
    path('api/product/gender/',views.ProductListByGender.as_view(),name='brand'),
    path('api/register/', RegisterAPI.as_view(), name='register'),
    path('api/login/', LoginAPI.as_view(), name='login'),
    path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
] + static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)