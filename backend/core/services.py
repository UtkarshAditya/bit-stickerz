from typing import List
from .models import Sticker


class StickerService:
    """Service layer for Sticker operations."""

    @staticmethod
    def get_all_stickers() -> List[Sticker]:
        """Retrieve all stickers."""
        return Sticker.objects.all()

    @staticmethod
    def get_sticker_by_id(sticker_id: int) -> Sticker:
        """Retrieve a sticker by ID."""
        return Sticker.objects.get(id=sticker_id)

    @staticmethod
    def create_sticker(title: str, description: str = "") -> Sticker:
        """Create a new sticker."""
        return Sticker.objects.create(title=title, description=description)

    @staticmethod
    def delete_sticker(sticker_id: int) -> bool:
        """Delete a sticker by ID."""
        sticker = Sticker.objects.get(id=sticker_id)
        sticker.delete()
        return True
