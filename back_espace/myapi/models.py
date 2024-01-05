from django.db import models
from django.contrib import admin

# # Create your models here.
# class React(models.Model):
#     pass

class Role(models.Model):
    nom = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    def __str__(self):
        return self.nom

class Membre(models.Model):
    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    promo = models.IntegerField()
    email = models.EmailField()
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    photo = models.ImageField(upload_to='myapi/static/myapi/images/membres/')
    def __str__(self):
        return self.prenom + " " + self.nom
    
class Projet(models.Model):
    nom = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    logo = models.ImageField(upload_to='myapi/static/myapi/images/logo_projets/')
    membres = models.ManyToManyField(Membre)
    annee_creation = models.IntegerField()
    def __str__(self):
        return self.nom
    
class Sponsor(models.Model):
    nom = models.CharField(max_length=100)
    logo = models.ImageField(upload_to='myapi/static/myapi/images/logo_sponsors/')
    projets = models.ManyToManyField(Projet)
    description = models.CharField(max_length=1000)
    def __str__(self):
        return self.nom