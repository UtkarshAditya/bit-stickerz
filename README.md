# BitStickerz

An online sticker shop built with Django and Next.js. Customers can browse from a wide selection of stickers and place orders online.

## Tech Stack

**Backend:**

- Django 5.0
- Django Ninja (API framework)
- PostgreSQL
- Python 3.13+

**Frontend:**

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript

## Project Structure

```
bitstickerz/
├── backend/
│   ├── bitstickerz/       # Django project settings
│   ├── core/              # Main app
│   │   ├── models.py      # Database models
│   │   ├── schemas.py     # API schemas
│   │   ├── services.py    # Business logic
│   │   └── api.py         # API endpoints
│   ├── manage.py
│   └── requirements.txt
└── frontend/
    ├── app/               # Next.js app directory
    ├── public/            # Static files
    └── package.json
```
