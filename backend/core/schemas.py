from ninja import Schema
from datetime import datetime


class StickerSchema(Schema):
    id: int
    title: str
    description: str
    created_at: datetime
    updated_at: datetime


class StickerCreateSchema(Schema):
    title: str
    description: str = ""


class MessageSchema(Schema):
    message: str
