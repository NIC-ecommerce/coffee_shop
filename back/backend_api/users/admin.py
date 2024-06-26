from django.contrib import admin
from django.utils.html import format_html

from .models import User, UserProfile
from django.contrib.auth.admin import UserAdmin

class UserAdmin(UserAdmin):
    list_display = ('email', 'first_name', 'last_name', 'username', 'last_login', 'date_joined', 'is_active')
    list_display_links = ('email', 'first_name', 'last_name')
    readonly_fields = ('last_login', 'date_joined')
    ordering = ('-date_joined',)

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()




class UserProfileAdmin(admin.ModelAdmin):
    def thumbnail(self, object):
        return format_html('<img src="{}" width="30" style="border-radius:50%;">'.format(object.profile_picture.url))
    list_display = ['thumbnail', 'user', 'city', 'region', 'country']

admin.site.register(UserProfile, UserProfileAdmin)
admin.site.register(User, UserAdmin)
