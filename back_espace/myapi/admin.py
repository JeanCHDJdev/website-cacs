from django import forms
from django.contrib import admin
from django.db import models
from django.forms import CheckboxSelectMultiple
from .models import *
from django import forms
from django.contrib import admin
from django.db import models
from django.forms import CheckboxSelectMultiple
from .models import *
from modeltranslation.translator import translator, TranslationOptions
from modeltranslation.admin import TranslationAdmin, TranslationTabularInline


class MemberRoleInline(admin.TabularInline):
    model = MemberRole

class MembreAdmin(admin.ModelAdmin):
    inlines = [MemberRoleInline]



# class RocketDetailInline(admin.TabularInline, TranslationAdmin):  # Use TabularInline or StackedInline based on your preference
#     model = RocketDetail
#     extra = 1  # Number of empty forms to display for adding new RocketDetail instances

# class RocketDetailInline(TranslationTabularInline):
#     model = RocketDetail
#     extra = 1
#     classes = ['collapse']  # Add the 'collapse' class to make it collapsible
#     show_change_link = True  # Show the change link for each inline instance

class ProjetAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {'fields': ['nom', 'description', 'logo', 'annee_creation']}),
    ]
    # inlines = [RocketDetailInline]

class ProjetAdminTranslated(ProjetAdmin, TranslationAdmin):
    pass

class RoleAdminTranslated(TranslationAdmin):
    pass

class SponsorAdminTranslated(TranslationAdmin):
    pass

# admin.site.register(Projet, ProjetAdminTranslated)





admin.site.register(Membre, MembreAdmin)
admin.site.register(Role, RoleAdminTranslated)
admin.site.register(Projet, ProjetAdminTranslated)
admin.site.register(Sponsor, SponsorAdminTranslated)
