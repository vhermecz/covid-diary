"""diarybase data models
"""
__author__ = "Gabor Guta"
__copyright__ = "Copyright 2020, Gabor Guta"
__license__ = "MIT"
from django.shortcuts import render
from django.views.generic import ListView, CreateView
from .models import Symptoms, Reporter, EpidemicActivity
from rest_framework import viewsets, permissions
from .serializers import ReporterSerializer, SymptomSerializer
# Create your views here.


class ReporterViewSet(viewsets.ModelViewSet):
    queryset = Reporter.objects.all()
    serializer_class = ReporterSerializer
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'user'


class SymprtomsReportViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        return Symptoms.objects.filter(reporter=self.kwargs['reporter_user'])
    serializer_class = SymptomSerializer
    permission_classes = [permissions.IsAuthenticated]


def overview(request):
    reporter = Reporter.objects.get(id=1)
    symptoms = reporter.symptoms.all()
    return render(request, 'diarybase/overview.html', {'symptoms': symptoms, 'reporter': reporter})


def add_symptom(request):
    if request.method == 'POST':
        form = SymptomForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'diarybase/symptom_reg.html', {'fields': form})
    # if a GET (or any other method) we'll create a blank form
    else:
        pass
    return render(request, 'diarybase/symptom_reg.html', {'form': form})
