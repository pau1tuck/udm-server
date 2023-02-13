from django.db import models


class Track(models.Model):
    id = models.AutoField(primary_key=True)
    artist = models.CharField(max_length=128)
    title = models.CharField(max_length=128)
    version = models.CharField(max_length=128, blank=True)
    label = models.CharField(max_length=128)
    year = models.IntegerField()
    month = models.IntegerField()
    buyUrl = models.URLField(blank=True)
    location = models.URLField()
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)
