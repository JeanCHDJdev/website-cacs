from django.shortcuts import render
from django.http import JsonResponse
from .models import Members, Projects

def home(request):
    return render(request, '../../front-espace/page.tsx')

def get_member(request):
    data = Members.objects.values()
    return JsonResponse(list(data), safe=False)

def get_project(request):
    data = Members.objects.values()
    return JsonResponse(list(data), safe=False)