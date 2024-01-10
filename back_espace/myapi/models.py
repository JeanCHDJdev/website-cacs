from django.db import models, IntegrityError
from django.contrib import admin
from django.db.models import Q, F
# from polymorphic.models import PolymorphicModel
# # Create your models here.
# class React(models.Model):
#     pass

class Role(models.Model):
    nom = models.CharField(max_length=100)
    priority = models.IntegerField()
    description = models.CharField(max_length=1000)
    badge = models.ImageField(upload_to='myapi/static/myapi/images/badges/', blank=True, null=True)
    def __str__(self):
        return self.nom


class Membre(models.Model):
    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    promo = models.IntegerField()
    email = models.EmailField()
    linkedin = models.CharField(max_length=100)
    roles = models.ManyToManyField(Role, through='MemberRole')
    photo = models.ImageField(upload_to='myapi/static/myapi/images/membres/')
    ok_to_be_displayed = models.BooleanField(default=True)
    def __str__(self):
        return self.prenom + " " + self.nom


# class RocketDetail(models.Model):
#     projet = models.ForeignKey('Projet', on_delete=models.CASCADE)
#     flight_status = models.CharField(max_length=255)
#     years = models.CharField(max_length=255)
#     number_members = models.IntegerField()
#     launch_date = models.CharField(max_length=255)
#     launch_location = models.CharField(max_length=255)
#     project_type = models.CharField(max_length=255)
#     propulsion_type = models.CharField(max_length=255)
#     diameter = models.CharField(max_length=255)
#     length = models.CharField(max_length=255)
#     exps = models.JSONField(default=list)
#     exps_state = models.JSONField(default=list)
#     prizes = models.JSONField(default=list)
#     rocket_image = models.ImageField(upload_to='myapi/static/myapi/images/rocket_images/', blank=True, null=True)
#     rocket_styles = models.JSONField(default=dict)
#     paragraph_array = models.JSONField(default=list)
#     def __str__(self):
#         return f"RocketDetail for {self.projet.nom}"


class Projet(models.Model):
    nom = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    logo = models.ImageField(upload_to='myapi/static/myapi/images/logo_projets/', blank=True, null=True)
    membres = models.ManyToManyField(Membre, through='MemberRole')
    annee_creation = models.IntegerField()
    # is_rocket = models.BooleanField(default=False)
    # is_motor = models.BooleanField(default=False)
    # def clean(self):
    #     if self.is_rocket and self.is_motor:
    #         raise IntegrityError("Cannot be both a rocket and a motor at the same time.")
    #     if self.is_rocket and not self.RocketDetail:
    #         raise IntegrityError("A rocket must have a RocketDetail.")
    #     if self.RocketDetail and not self.is_rocket:
    #         raise IntegrityError("A RocketDetail must be linked to a rocket.")
        
    # def save(self, *args, **kwargs):
    #     self.clean()
    #     super().save(*args, **kwargs)

    def __str__(self):
        return self.nom

    
    
class MemberRole(models.Model):
    member = models.ForeignKey(Membre, on_delete=models.CASCADE)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    project = models.ForeignKey(Projet, on_delete=models.CASCADE)
    year = models.IntegerField()

    
class Sponsor(models.Model):
    nom = models.CharField(max_length=100)
    logo = models.ImageField(upload_to='myapi/static/myapi/images/logo_sponsors/')
    link = models.CharField(max_length=100)
    projets = models.ManyToManyField(Projet)
    description = models.CharField(max_length=1000)
    def __str__(self):
        return self.nom