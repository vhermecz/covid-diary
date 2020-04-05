from django.contrib import admin
from .models import Reporter, Symptoms, EpidemicActivity
# Register your models here.
admin.site.register(Reporter)
admin.site.register(Symptoms)
admin.site.register(EpidemicActivity)
