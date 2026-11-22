# ED Equipment Quiz (prototype)

Mobile-first static quiz: a picture of an emergency-department item, four choices (A–D), then what it is and what it's used for.

- 139 items across 13 categories, 3 levels; 127 Wikimedia Commons photos + 12 simple illustrations drawn for the app
- ★ star hard items (saved in this browser's localStorage) and retake with "Hard ones only"
- Live score with percent in the sticky header; swipe left = next, right = back; keys A–D / 1–4, ←/→, S = star
- Image credits (author, license, source) in the in-app Credits sheet and on every card; data in `images.js`
- Educational prototype, not medical advice.

Run locally: `python3 -m http.server` in this folder, then open http://localhost:8000/
