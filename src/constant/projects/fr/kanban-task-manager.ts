export const KANBAN_TASK_MANAGER_FR = `# Gestionnaire de Tâches Kanban

![App Screenshot](./assets/Kanban.jpg)

## Aperçu

Le Gestionnaire de Tâches Kanban est une application web moderne construite avec Vite.js, Hono et PostgreSQL qui vous aide à gérer efficacement vos tâches en utilisant la méthodologie Kanban. Elle fournit un moyen visuel d'organiser, suivre et prioriser votre travail, facilitant la collaboration avec votre équipe et l'organisation.

## Fonctionnalités

- **Tableaux Kanban :** Créez et gérez plusieurs tableaux Kanban pour différents projets ou flux de travail.
- **Colonnes et Tâches :** Chaque tableau se compose de colonnes représentant différentes étapes de votre flux de travail (par exemple, À Faire, En Cours, Terminé), et vous pouvez ajouter des tâches à ces colonnes.
- **Glisser-Déposer :** Déplacez facilement les tâches entre les colonnes grâce à DND Core pour des interactions fluides de glisser-déposer.
- **Sous-tâches :** Décomposez les tâches en sous-tâches plus petites pour les gérer plus efficacement.
- **Détails des Tâches :** Ajoutez des descriptions et des informations supplémentaires à vos tâches.
- **Authentification Utilisateur :** Connectez-vous en toute sécurité et gérez vos tâches avec des comptes utilisateurs.
- **Design Responsive :** Accédez et gérez vos tâches sur différents appareils, y compris ordinateur et mobile.

### Technologies Utilisées

    Frontend : Vite.js, React 19, React Query, Chakra UI, TypeScript
    Backend : Hono (hébergé sur Cloudflare Workers), Cloudflare D1 (base de données basée sur SQLite), Authentification JWT
    Note : Une version Express.js de l'API est également disponible (utilisant PostgreSQL)
    Style : Modules CSS
    Gestion d'État : React Query
    Glisser-Déposer : DND Core
    Authentification Utilisateur : JWT (JSON Web Tokens)
    Hébergement Cloud : Cloudflare Workers
    Base de données : Cloudflare D1 Storage
`;
