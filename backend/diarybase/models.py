"""diarybase data models
"""
__author__ = "Gabor Guta"
__copyright__ = "Copyright 2020, Gabor Guta"
__license__ = "MIT"
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

SEX_CHOICES = [
    ('M', 'Férfi'),
    ('F', 'Nő'),
]
SMOKING_CHOICE = [
    ('Never', 'sohasem'),
    ('Earlier', 'korábban'),
    ('Casual', 'alkalmanként'),
    ('Regular', 'naponta'),
]


class Reporter(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, primary_key=True)
    validated = models.BooleanField('Validált', default=False)
    zip = models.CharField('Irányítószám', max_length=10)
    age = models.IntegerField('Kora')
    country_code = models.CharField('Ország kód', max_length=2, default='HU')
    sex = models.CharField('Neme', max_length=1,
                           choices=SEX_CHOICES, default='F')
    smoking = models.CharField(
        'Dohányzik', max_length=10, choices=SMOKING_CHOICE)
    cronic_illnes = models.BooleanField('Krónikus alapbetegség')
    flu_shot = models.BooleanField('Idei influenzaoltás')
    living_with_high_risk_condition = models.BooleanField(
        'veszélyeztetettel (pl idős, krónikus beteg) él együtt')
    liwing_with_high_risk_ocupation = models.BooleanField(
        'fertőződésnek kitettel (pl egészségügyi dolgozó) él együtt')

    def __str__(self):
        return f'[{self.user}] Kor: {self.age}, Irányítószám: {self.country_code}{self.zip} ({"Ellenőrzött" if self.validated else ""})'


TEMP_CHOICE = [
    ('N', 'normál testhőmérséklet: 36-37 °C'),
    ('E', 'Hőemelkedés: 37-38 °C'),
    ('F', 'Láz: 38-39 °C'),
    ('H', 'Magas láz: 39 °C felett'),
]
COUGHING_CHOICE = [
    ('N', 'nincs'),
    ('D', 'száraz'),
    ('C', 'hurutos'),
]


class Symptoms(models.Model):
    timestamp = models.DateTimeField()
    duration_days = models.IntegerField()
    body_temperature = models.CharField(
        'Láz/Hőemelkedés', max_length=1, choices=TEMP_CHOICE)
    fatigue = models.BooleanField('Levertség')
    cold_shivers = models.BooleanField('Hidegrázás')
    coughing = models.CharField(
        'Köhögés', max_length=1, choices=COUGHING_CHOICE)
    sore_throat = models.BooleanField('Torokfájás')
    runny_nose = models.BooleanField('Orrfolyás')
    breathing_difficulty = models.BooleanField('Nehézlégzés')
    headache = models.BooleanField('Fejfájás')
    joint_pain = models.BooleanField('Izületi és végtagfájdalmak')
    abdominal_complaint = models.BooleanField('Hasmenés, hasi panaszok')
    decreased_smell_and_taste = models.BooleanField(
        'Csökkent szaglás, ízlelés')
    other_symptom = models.CharField('Egyéb tünet', max_length=50)
    overal_quality = models.IntegerField(
        'Összességében hogy érzi magát egészségileg')
    reporter = models.ForeignKey(
        Reporter, on_delete=models.PROTECT, related_name='symptoms')


class EpidemicActivity(models.Model):
    fixed_actvity = models.CharField(max_length=100)
    reporter = models.ForeignKey(
        Reporter, on_delete=models.PROTECT, related_name='epidemic_activities')
