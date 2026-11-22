# Social & Creative Content Manifest (`@atifrecommends`)

This folder manages the real Instagram and literary content displayed on the **Creative Tab** of Atif Khan's portfolio (`https://atif-web-mu.vercel.app`).

---

## 1. File Structure
- `manifest.json`: The single source of truth for all social posts, poems, book reviews, film essays, and psychology cards.
- `public/assets/social/`: Directory containing all local post images and poster frames.

---

## 2. Post Schema

Each post object in `manifest.json` conforms to the following schema:

```json
{
  "id": "unique-slug-id",
  "title": "Display Title or Headline",
  "tag": "poem" | "book" | "film" | "psychology" | "other",
  "postType": "image" | "carousel" | "reel",
  "date": "YYYY-MM-DD",
  "permalink": "https://www.instagram.com/p/SHORTCODE/ or https://instagram.com/atifrecommends",
  "author": "Atif Khan" | "Fyodor Dostoevsky" | etc.,
  "excerpt": "Short 1-2 sentence preview text for cards.",
  "caption": "Full post caption. Preserve line breaks with \\n\\n and Urdu/Unicode text.",
  "hashtags": ["#tag1", "#tag2", "#tag3"],
  "image": "/assets/social/filename.webp",
  "originalImage": "/assets/social/filename.jpg"
}
```

---

## 3. How to Add a Post by Hand

1. **Save your image or reel poster:**
   - Drop the image file into `public/assets/social/` (e.g., `my-new-post.webp` or `.jpg`).
2. **Open `src/data/social/manifest.json`:**
   - Add a new object to the array at the beginning or end.
   - For **Poems**: Set `"tag": "poem"`. The site will automatically render it as real selectable text with a toggle to view the original post image.
   - For **Books, Film, Psychology**: Set `"tag": "book"`, `"tag": "film"`, or `"tag": "psychology"`. The card will appear in the filterable grid with modal lightbox support.
3. **Save and commit:**
   - Run `npm run build` or push to git.

---

## 4. Importing an Official Instagram Data Export

If you download your Instagram data export (`your_instagram_activity/content/posts_1.json`):
1. Place the export in `src/data/instagram-export/`.
2. Map your media files into `public/assets/social/`.
3. Update `manifest.json` with the corresponding extracted entries.
