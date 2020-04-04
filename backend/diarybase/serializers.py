from django.contrib.auth.models import User
from .models import Reporter, Symptom, EpidemicActivity
from rest_framework import serializers


class ReporterSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Reporter
        fields = ['zip', 'age', 'country_code']


class SymptomSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Symptom
        fields = ['timestamp']
