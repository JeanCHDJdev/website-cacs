from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter

role_router = DefaultRouter()
role_router.register(r'roles', RoleViewSet)

membre_router = DefaultRouter()
membre_router.register(r'membres', MembreViewSet)

projet_router = DefaultRouter()
projet_router.register(r'projets', ProjetViewSet)

sponsor_router = DefaultRouter()
sponsor_router.register(r'sponsors', SponsorViewSet)

# rocketdetail_router = DefaultRouter()
# rocketdetail_router.register(r'rocketdetails', RocketDetailViewSet)

memberrole_router = DefaultRouter()
memberrole_router.register(r'memberroles', MemberRoleViewSet)