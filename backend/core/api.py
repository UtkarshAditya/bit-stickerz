from ninja import NinjaAPI
from typing import List
from .schemas import StickerSchema, StickerCreateSchema, MessageSchema
from .services import StickerService

api = NinjaAPI()


@api.get("/health", response=MessageSchema)
def health_check(request):
    """Health check endpoint."""
    return {"message": "API is running"}


@api.get("/stickers", response=List[StickerSchema])
def list_stickers(request):
    """List all stickers."""
    stickers = StickerService.get_all_stickers()
    return stickers


@api.get("/stickers/{sticker_id}", response=StickerSchema)
def get_sticker(request, sticker_id: int):
    """Get a single sticker by ID."""
    sticker = StickerService.get_sticker_by_id(sticker_id)
    return sticker


@api.post("/stickers", response=StickerSchema)
def create_sticker(request, payload: StickerCreateSchema):
    """Create a new sticker."""
    sticker = StickerService.create_sticker(
        title=payload.title,
        description=payload.description
    )
    return sticker


@api.delete("/stickers/{sticker_id}", response=MessageSchema)
def delete_sticker(request, sticker_id: int):
    """Delete a sticker."""
    StickerService.delete_sticker(sticker_id)
    return {"message": "Sticker deleted successfully"}
