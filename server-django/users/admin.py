"""USER ADMIN"""
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

# from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser

admin.site.site_header = "Site Administration"


class CustomUserAdmin(UserAdmin):
    # add_form = CustomUserCreationForm
    # form = CustomUserChangeForm
    model = CustomUser
    list_display = ("email", "last_visit")
    list_filter = ("created_at", "last_visit")
    fieldsets = (
        (None, {"fields": ("email", "password")}),
        ("Details", {"fields": ("first_name", "last_name", "avatar")}),
        (None, {"fields": ("username", "is_staff", "is_superuser", "is_active")}),
    )
    add_fieldsets = ((None, {"classes": ("wide",), "fields": ("first_name", "last_name", "email", "password")}),)
    search_fields = ("email", "last_name")
    ordering = ("first_name", "last_name")


admin.site.register(CustomUser)
