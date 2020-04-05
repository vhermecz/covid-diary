"""diarybase data models
"""
__author__ = "Gabor Guta"
__copyright__ = "Copyright 2020, Gabor Guta"
__license__ = "MIT"

from django.urls import path, include
from rest_framework_nested import routers
from . import views

app_name = 'diarybase'

router = routers.DefaultRouter()
router.register(r'reporters', views.ReporterViewSet)
reporters_router = routers.NestedSimpleRouter(
    router, r'reporters', lookup='reporter')
reporters_router.register(
    r'symptomsreports', views.SymprtomsReportViewSet, basename='reporter-symptomsreports')

urlpatterns = [
    path('', include(router.urls)),
    path('', include(reporters_router.urls)),
    path('overview', views.overview, name='overview'),
    path('add_symptom', views.add_symptom, name='add_symptom'),
]
