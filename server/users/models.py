from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext as _

from .managers import CustomUserManager


class CustomUser(AbstractUser):
    username = models.CharField(max_length=32, unique=True, blank=True)
    first_name = models.CharField("First name", max_length=64, blank=True)
    last_name = models.CharField("Last name", max_length=64, blank=True)
    email = models.EmailField(_("email address"), unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True, editable=True)
    last_visit = models.DateTimeField(auto_now=True, editable=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []
    EMAIL_FIELD = "email"

    objects = CustomUserManager()

    def __str__(self):
        return f"{self.first_name} {self.last_name} {self.email}"

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"
