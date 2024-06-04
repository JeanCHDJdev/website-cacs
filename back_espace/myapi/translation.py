from modeltranslation.translator import register, TranslationOptions
from .models import *

@register(Role)
class RoleTranslationOptions(TranslationOptions):
    fields = ('nom', 'description')

# @register(RocketDetail)
# class RocketDetailTranslationOptions(TranslationOptions):
#     fields = ('flight_status',
#               'years',
#               'launch_date',
#               'launch_location',
#               'project_type',
#               'propulsion_type',
#               'diameter',
#               'length',
#               'exps',
#               'exps_state',
#               'prizes',
#               'rocket_styles',
#               'paragraph_array',)
    
@register(Projet)
class ProjetTranslationOptions(TranslationOptions):
    fields = ('description',)

@register(Sponsor)
class SponsorTranslationOptions(TranslationOptions):
    fields = ('nom', 'description',)