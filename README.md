# ED Equipment Quiz (prototype, v2 "harder small items")

Mobile-first static quiz: a picture of an emergency-department item or part, four look-alike choices (A–D), then what it is and what it's used for.

- 117 items across 6 categories (Airway & Suction, Intubation, Ventilator & Respiratory, Trauma, Vascular Access & Infusion, Procedures & Other), 3 levels
- v2 drops the very easy items (gloves, masks, sharps box, basic bandages, wheelchair…) and adds airway/intubation kit parts, vent circuit parts, trauma kit items, IO/IV sizes, warmers and rapid infusers
- Some cards ask about an arrow-marked part (ETT cuff, pilot balloon, Murphy eye, circuit wye…) or a size by color code
- Images: 90 Wikimedia Commons photos + 7 Commons illustrations (credited; crops/arrows/blurs noted) + 20 simple illustrations drawn for the app
- ★ star hard items (localStorage `edq-stars-v1`; IDs from older decks are dropped quietly) and retake with "Hard ones only"
- Live score with percent in the sticky header; swipe left = next, right = back; keys A–D / 1–4, ←/→, S = star
- Educational prototype, not medical advice.

Run locally: `python3 -m http.server` in this folder, then open http://localhost:8000/
