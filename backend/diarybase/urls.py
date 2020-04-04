from django.urls import path, include
from rest_framework import routers
from . import views

app_name = 'covidbase'

router = routers.DefaultRouter()
router.register(r'reporters', views.ReporterViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('overview', views.overview, name='overview'),
    path('add_symptom', views.add_symptom, name='add_symptom'),
]
