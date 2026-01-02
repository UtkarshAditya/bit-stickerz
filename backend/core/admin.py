from django.contrib import admin
from .models import Sticker


@admin.register(Sticker)
class StickerAdmin(admin.ModelAdmin):
    list_display = ['title', 'created_at', 'updated_at']
    search_fields = ['title', 'description']
    list_filter = ['created_at']
