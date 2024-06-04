from rest_framework.viewsets import ModelViewSet
from .models import *
from .serializer import *

class RoleViewSet(ModelViewSet):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer


class MembreViewSet(ModelViewSet):
    queryset = Membre.objects.all()
    serializer_class = MembreSerializer

class ProjetViewSet(ModelViewSet):
    queryset = Projet.objects.all()
    serializer_class = ProjetSerializer

class SponsorViewSet(ModelViewSet):
    queryset = Sponsor.objects.all()
    serializer_class = SponsorSerializer

# class RocketDetailViewSet(ModelViewSet):
#     queryset = RocketDetail.objects.all()
#     serializer_class = RocketDetailSerializer

class MemberRoleViewSet(ModelViewSet):
    queryset = MemberRole.objects.all()
    serializer_class = MemberRoleSerializer