from django.contrib import admin
from .models import Reporter, Symptom, EpidemicActivity
# Register your models here.
admin.site.register(Reporter)
admin.site.register(Symptom)
admin.site.register(EpidemicActivity)