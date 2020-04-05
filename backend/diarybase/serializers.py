"""diarybase data models
"""
__author__ = "Gabor Guta"
__copyright__ = "Copyright 2020, Gabor Guta"
__license__ = "MIT"

from django.contrib.auth.models import User
from .models import Reporter, Symptoms, EpidemicActivity
from rest_framework import serializers
from rest_framework.relations import HyperlinkedIdentityField


class SymptomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Symptoms
        fields = '__all__'


class ReporterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reporter
        fields = '__all__'
        depth = 1
 #   symptomsreports = HyperlinkedIdentityField(
 #       view_name='reporter-symptomsreport-list',
 #       lookup_url_kwarg='reporter_pk'
 #   )
