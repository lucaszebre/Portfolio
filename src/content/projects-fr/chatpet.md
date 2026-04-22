---
title: "Chat Pet"
description: "Une application de compagnon virtuel alimentée par l'IA utilisant l'API Gemini, construite avec Vite.js, Hono et Better Auth."
tags: ["Vite.js", "Hono", "Gemini API", "Cloudflare", "Better Auth"]
image: "/assets/chatpet.png"
demoUrl: "https://chatpet.yakirisk.workers.dev/"
codeUrl: "https://github.com/lucaszebre/ChatPet"
featured: false
date: 2026-02-20
order: 2
---

![Capture d'écran](/assets/chatpet.png)

Chat Pet est une application de compagnon virtuel alimentée par l'IA développée lors du programme WebAcademie. Les utilisateurs peuvent créer des animaux virtuels et converser avec eux grâce à une technologie IA avancée.

## Fonctionnalités

- **Chat IA** — Engagez des conversations naturelles avec votre animal virtuel alimenté par l'API Gemini de Google.
- **Authentification utilisateur** — Connexion sécurisée avec GitHub et Google via Better Auth.
- **Téléchargement d'images** — Téléchargez et partagez des images de votre animal avec UploadThing.
- **Gestion d'animaux virtuels** — Créez et personnalisez votre propre compagnon virtuel.
- **Design responsive** — Accédez à votre animal virtuel sur desktop et mobile.

## Stack technique

- **Frontend :** Vite.js
- **Backend :** Hono sur Cloudflare Workers
- **Auth :** Better Auth (GitHub + Google OAuth)
- **IA :** Google Gemini API
- **Stockage :** Cloudflare D1
