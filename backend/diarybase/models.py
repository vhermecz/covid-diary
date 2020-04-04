from django.db import models

# Create your models here.
class Reporter(models.Model):
    validated = models.BooleanField('Validált')
    zip = models.CharField('Irányítószám', max_length=10)
    age = models.IntegerField('Kor')
    country_code = models.CharField('Ország kód', max_length=2)

    def __str__(self):
        return f'Kor: {self.age}, Irányítószám: {self.country_code}{self.zip} ({"Ellenőrzött" if self.validated else ""})'

class Symptom(models.Model):
    timestamp = models.DateTimeField()
    duration_days = models.IntegerField()
    fixed_symptom = models.CharField(max_length=30)
    related_text = models.CharField(max_length=50)
    related_val = models.DecimalField(decimal_places=2, max_digits=10)
    reporter = models.ForeignKey(Reporter, on_delete=models.PROTECT, related_name='symptoms')

class EpidemicActivity(models.Model):
    fixed_actvity = models.CharField(max_length=100)
    reporter = models.ForeignKey(Reporter, on_delete=models.PROTECT)
