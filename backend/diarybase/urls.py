from django.urls import path

from . import views

app_name = 'covidbase'

urlpatterns = [
    path('', views.overview, name='overview'),
    path('add_symptom', views.add_symptom, name='add_symptom'),
]