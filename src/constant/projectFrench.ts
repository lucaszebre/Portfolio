type ProjectType = {
  id: string;
  readme: string;
  demo?: string;
  image: string;
  alt: string;
  tags: string[];
  name: string;
  code?: string;
};

export const ALL_PROJECT_FRENCH: ProjectType[] = [
  {
    id: "3c250198-0dd9-4dfb-b02a-6ebd9dbee4bde",
    readme: `# Letter Easy

![App Screenshot](./assets/letter.png)

Letter Easy est une application SaaS (Software as a Service) innovante conçue pour simplifier le processus de création de lettres de motivation. En utilisant la technologie d'IA, cet outil permet aux utilisateurs de générer des lettres de motivation personnalisées et convaincantes pour différents objectifs, notamment les candidatures d'emploi, les admissions universitaires, et plus encore.

## Fonctionnalités

- **Génération de Lettres par IA**: Utilise une IA avancée pour créer des lettres de motivation personnalisées basées sur les informations de l'utilisateur.
- **Bibliothèque de Modèles**: Propose une variété de modèles adaptés à différents objectifs et secteurs.
- **Intégration CV**: Permet aux utilisateurs de télécharger et d'incorporer les détails de leur CV dans la lettre.
- **Édition en Temps Réel**: Les utilisateurs peuvent modifier et affiner le contenu généré par l'IA en temps réel.
- **Export Multi-format**: Exportez vos lettres dans différents formats incluant PDF, Word, et texte brut.
- **Stockage Cloud**: Stockez et accédez à vos lettres en toute sécurité depuis n'importe où.
- **Outils de Collaboration**: Partagez et collaborez sur les lettres avec les membres de votre équipe ou vos mentors.

## Technologies Utilisées

Letter Easy est construit avec des technologies de pointe pour offrir une expérience utilisateur fluide et efficace :

- **Next.js**: Pour une expérience front-end rapide et optimisée pour le SEO.
- **Prisma**: Assure des opérations de base de données robustes et efficaces.
- **React Query (useQuery)**: Pour une gestion optimale des données et des états.
- **Intégration IA**: Utilise des modèles de langage de pointe pour générer des lettres de qualité.

## Pour Commencer

Pour commencer à utiliser Letter Easy :

1. Visitez notre site web [www.lettereasy.co](https://www.lettereasy.co)
2. Créez un compte
3. Choisissez un plan d'abonnement qui vous convient
4. Commencez à créer des lettres de motivation professionnelles assistées par l'IA !

## Utilisation

Après vous être connecté à votre compte Letter Easy :

1. Sélectionnez un modèle de lettre ou partez de zéro
2. Saisissez les informations clés vous concernant et le poste pour lequel vous postulez
3. Laissez notre IA générer une lettre de base
4. Modifiez et affinez la lettre selon vos préférences
5. Exportez votre lettre finalisée dans le format de votre choix
`,
    demo: "https://lettereasy.co/",
    image: "/assets/letter.png",
    alt: "lettereasy-app",
    tags: ["GO", "REACT", "WEBSOCKET"],
    name: "LETTEREASY - SASS",
  },
  {
    id: "acbaf2b4-8f0a-4520-9987-0c8d57a4b3d0de",
    readme: `# Previously_On

![App Screenshot](./assets/previously_on.png)

Previously On est une application web qui permet aux utilisateurs de suivre leurs séries TV et films préférés. Construite avec Next.js et intégrant l'API BetaSeries, cette application fournit une plateforme complète pour gérer votre contenu visionné, explorer de nouvelles séries et interagir avec une communauté de passionnés de TV et de cinéma.

## Fonctionnalités

- **Gestion de Liste de Visionnage**: Gardez une trace des séries et films que vous avez regardés.
- **Suivi des Épisodes**: Marquez les épisodes comme vus ou non vus.
- **Détails des Acteurs**: Explorez les informations détaillées sur les acteurs de vos séries préférées.
- **Visionnage de Bandes-annonces**: Regardez les bandes-annonces des séries et films disponibles.
- **Intégration BetaSeries**: Connectez-vous avec votre compte BetaSeries pour une expérience fluide.
- **Interaction Communautaire**: Publiez des commentaires sur les séries et les films.
- **Design Responsive**: Profitez d'une excellente expérience sur ordinateur comme sur mobile.

## Technologies Utilisées

- **Next.js**: Framework React pour construire des applications web efficaces et évolutives.
- **shadcn/ui**: Une collection de composants réutilisables construits avec Radix UI et Tailwind CSS.
- **API BetaSeries**: Fournit des données complètes sur les séries TV et les films.

## Pour Commencer

Pour commencer avec Previously On, suivez ces étapes :

1. Clonez ce dépôt :
   "
   git clone https://github.com/lucaszebre/Previously_On
   "
2. Naviguez vers le répertoire du projet :
   "
   cd previously-on
   "
3. Install dependencies:
   "
   npm install
   "
4. Set up your environment variables:
   - Create a ".env.local" file in the root directory
   - Add your BetaSeries API key:
     "
     BETASERIES_API_KEY=your_api_key_here
     "
5. Run the development server:
   "
   npm run dev
   "

## Usage

1. Open your browser and navigate to "http://localhost:3000"
2. Log in with your BetaSeries account
3. Start adding series and movies to your watch list
4. Mark episodes as watched, explore actor details, and watch trailers
5. Engage with the community by posting comments on series and movies

## Contributing

Contributions are welcome! If you'd like to contribute to Previously On, please follow these steps:

1. Fork the repository
2. Create a new branch: "git checkout -b feature/your-feature-name"
3. Make your changes and commit them: "git commit -m 'Add some feature'"
4. Push to the branch: "git push origin feature/your-feature-name"
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Thanks to BetaSeries for providing the API that powers this application.
- Shout out to the Next.js and shadcn/ui communities for their excellent tools and documentation.`,
    alt: "CHAT_PET",
    demo: "https://previously-on-eight.vercel.app/",
    image: "/assets/previously_on.png",
    tags: ["REACT.JS", "NODEJS", "LLM", "PRISMA"],
    name: "CHAT PET",
  },
  {
    id: "3c250198-0dd9-4dfb-b02a-6ebd9dbee4bc",
    readme: `# Letter Easy

![App Screenshot](./assets/letter.png)

Letter Easy is an innovative SaaS (Software as a Service) application designed to simplify the process of creating motivation letters. Leveraging AI technology, this tool enables users to generate personalized and compelling motivation letters for various purposes, including job applications, university admissions, and more.

## Features

- **AI-Powered Letter Generation**: Utilizes advanced AI to create customized motivation letters based on user input.
- **Template Library**: Offers a variety of templates to suit different purposes and industries.
- **CV Integration**: Allows users to upload and incorporate details from their CV into the letter.
- **Real-time Editing**: Users can edit and refine the AI-generated content in real-time.
- **Multi-format Export**: Export letters in various formats including PDF, Word, and plain text.
- **Cloud Storage**: Safely store and access your letters from anywhere.
- **Collaboration Tools**: Share and collaborate on letters with team members or mentors.

## Technologies Used

Letter Easy is built using cutting-edge technologies to provide a seamless and efficient user experience:

- **Next.js**: For a fast, SEO-friendly front-end experience.
- **Prisma**: Ensuring robust and efficient database operations.
- **React Query (useQuery)**: For optimal data fetching and state management.
- **AI Integration**: Leveraging state-of-the-art language models for high-quality letter generation.

## Getting Started

To start using Letter Easy:

1. Visit our website at [www.lettereasy.co](https://www.lettereasy.co)
2. Sign up for an account
3. Choose a subscription plan that fits your needs
4. Start creating professional, AI-assisted motivation letters!

## Usage

After logging in to your Letter Easy account:

1. Select a letter template or start from scratch
2. Input key details about yourself and the position you're applying for
3. Let our AI generate a base letter
4. Edit and refine the letter to your liking
5. Export your finished letter in your preferred format
`,
    demo: "https://lettereasy.co/",
    image: "/assets/letter.png",
    alt: "lettereasy-app",
    tags: ["NEXT.JS", "NEXT-AUTH", "POSTGRESQL", "PRISMA"],
    name: "LETTEREASY - SASS",
  },
  {
    id: "acbaf2b4-8f0a-4520-9987-0c8d57a4b3d0",
    readme: `# Previously_On

![App Screenshot](./assets/previously_on.png)

Previously On is a web application that allows users to track their favorite TV series and movies. Built with Next.js and integrating with the BetaSeries API, this app provides a comprehensive platform for managing your watched content, exploring new shows, and engaging with a community of fellow TV and movie enthusiasts.

## Features

- **Watch List Management**: Keep track of series and movies you've watched.
- **Episode Tracking**: Mark episodes as watched or unwatched.
- **Actor Details**: Explore detailed information about actors in your favorite shows.
- **Trailer Viewing**: Watch trailers for series and movies when available.
- **BetaSeries Integration**: Log in with your BetaSeries account for a seamless experience.
- **Community Interaction**: Post comments on series and movies.
- **Responsive Design**: Enjoy a great experience on both desktop and mobile devices.

## Technologies Used

- **Next.js**: React framework for building efficient and scalable web applications.
- **shadcn/ui**: A collection of re-usable components built with Radix UI and Tailwind CSS.
- **BetaSeries API**: Provides comprehensive data on TV series and movies.

## Getting Started

To get started with Previously On, follow these steps:

1. Clone this repository:
   "
   git clone https://github.com/lucaszebre/Previously_On
   "
2. Navigate to the project directory:
   "
   cd previously-on
   "
3. Install dependencies:
   "
   npm install
   "
4. Set up your environment variables:
   - Create a ".env.local" file in the root directory
   - Add your BetaSeries API key:
     "
     BETASERIES_API_KEY=your_api_key_here
     "
5. Run the development server:
   "
   npm run dev
   "

## Usage

1. Open your browser and navigate to "http://localhost:3000"
2. Log in with your BetaSeries account
3. Start adding series and movies to your watch list
4. Mark episodes as watched, explore actor details, and watch trailers
5. Engage with the community by posting comments on series and movies

## Contributing

Contributions are welcome! If you'd like to contribute to Previously On, please follow these steps:

1. Fork the repository
2. Create a new branch: "git checkout -b feature/your-feature-name"
3. Make your changes and commit them: "git commit -m 'Add some feature'"
4. Push to the branch: "git push origin feature/your-feature-name"
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Thanks to BetaSeries for providing the API that powers this application.
- Shout out to the Next.js and shadcn/ui communities for their excellent tools and documentation.`,
    alt: "Previously_on",
    demo: "https://previously-on-eight.vercel.app/",
    image: "/assets/previously_on.png",
    tags: ["REACT.JS", "USEQUERY", "BETASERIES API"],
    name: "PREVIOUSLY_ON",
  },
  {
    id: "1bdb0437-3c27-46fc-a95a-cf694936141f",
    readme: `# Clone Instagram
![App Screenshot](./assets/instagram.jpg)

Ce projet est un clone d'Instagram construit avec Next.js, Prisma et Pusher. Il vise à reproduire certaines des fonctionnalités principales d'Instagram comme le partage d'images, les likes et commentaires sur les publications, les mises à jour en temps réel, l'authentification des utilisateurs, et plus encore.

## Fonctionnalités

- **Authentification Utilisateur**: Les utilisateurs peuvent s'inscrire, se connecter et se déconnecter en toute sécurité.
- **Partage d'Images**: Les utilisateurs peuvent télécharger et partager des images avec des légendes.
- **Likes et Commentaires**: Les utilisateurs peuvent aimer et commenter les publications.
- **Mises à Jour en Temps Réel**: Grâce à Pusher, l'application fournit des mises à jour en temps réel pour les likes, les commentaires et les nouvelles publications.
- **Profils Utilisateurs**: Chaque utilisateur dispose d'une page de profil affichant ses publications et autres informations pertinentes.

## Technologies Utilisées

- **Next.js**: Next.js est un framework React qui permet le rendu côté serveur, le routage, et plus encore.
- **Prisma**: Prisma est un toolkit de base de données moderne pour TypeScript et Node.js. Il fournit un ORM pour travailler avec les bases de données.
- **Pusher**: Pusher est un service hébergé qui fournit des messages en temps réel via WebSockets.

## Pour Commencer

Pour démarrer avec ce projet, suivez ces étapes :

1. Clonez ce dépôt.
2. Installez les dépendances en utilisant 'npm install' ou 'yarn install'.
3. Configurez votre base de données avec Prisma.
4. Configurez votre compte Pusher.
5. Lancez le serveur de développement avec 'npm run dev' ou 'yarn dev'.

## Utilisation

Une fois le serveur de développement lancé, vous pouvez accéder à l'application dans votre navigateur web à l'adresse 'http://localhost:3000'. Inscrivez-vous pour créer un compte, explorez les fonctionnalités, et commencez à partager des photos avec vos amis !

## Contribution

Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, n'hésitez pas à forker le dépôt et à soumettre une pull request. Veuillez suivre le style de code et les conventions existants`,
    demo: "https://instaclone-gules-one.vercel.app/auth",
    image: "/assets/instagram.jpg",
    alt: "EntertainnementWeb-app",
    tags: ["NEXT.JS", "SUPABASE AUTH", "POSTGRESQL", "PRISMA"],
    name: "INSTAGRAM CLONE",
    code: "https://github.com/lucaszebre/instaclone",
  },
  {
    id: "b09a1a77-8112-4a8c-a74f-496f1f225b73",
    readme: `# Clone Twitter
![App Screenshot](./assets/twitter.png)

Ce projet est un clone de Twitter développé avec PHP, MySQL et jQuery. Il vise à reproduire certaines des fonctionnalités principales de Twitter comme la publication de tweets, le suivi d'autres utilisateurs, les likes et retweets, l'authentification des utilisateurs, et plus encore.

## Fonctionnalités

- **Authentification Utilisateur**: Les utilisateurs peuvent s'inscrire, se connecter et se déconnecter en toute sécurité.
- **Publication de Tweets**: Les utilisateurs peuvent composer et partager des tweets avec du texte, des images ou des liens.
- **Suivi d'Utilisateurs**: Les utilisateurs peuvent suivre d'autres utilisateurs pour voir leurs tweets sur leur fil d'actualité.
- **Likes et Retweets**: Les utilisateurs peuvent aimer et retweeter les tweets d'autres utilisateurs.
- **Mises à Jour en Temps Réel**: En utilisant jQuery pour les requêtes AJAX, l'application fournit des mises à jour en temps réel pour les likes, retweets et nouveaux tweets.
- **Profils Utilisateurs**: Chaque utilisateur dispose d'une page de profil affichant ses tweets, ses abonnés et autres informations pertinentes.

## Technologies Utilisées

- **PHP**: PHP est un langage de script côté serveur largement utilisé pour le développement web.
- **MySQL**: MySQL est un système de gestion de base de données relationnelle open-source.
- **jQuery**: jQuery est une bibliothèque JavaScript rapide, légère et riche en fonctionnalités pour simplifier des tâches comme la manipulation du DOM HTML, la gestion des événements et AJAX.

## Pour Commencer

Pour démarrer avec ce projet, suivez ces étapes :

1. Clonez ce dépôt.
2. Configurez votre environnement de développement PHP (ex: XAMPP, WAMP, MAMP).
3. Importez le schéma de base de données MySQL fourni.
4. Configurez vos paramètres de connexion à la base de données dans les fichiers PHP.
5. Lancez votre serveur de développement PHP.
6. Accédez à l'application dans votre navigateur web.

## Utilisation

Une fois le serveur de développement lancé, vous pouvez accéder à l'application dans votre navigateur web. Inscrivez-vous pour créer un compte, explorez les fonctionnalités, suivez d'autres utilisateurs, et commencez à tweeter et à interagir avec la communauté !

## Contribution

Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, n'hésitez pas à forker le dépôt et à soumettre une pull request. Veuillez suivre le style de code et les conventions existants.

`,
    image: "/assets/twitter.png",
    alt: "KanbanTask-app",
    tags: ["PHP", "JQUERY", "MYSQL"],
    name: "TWITTER CLONE",
  },
  {
    id: "f740bb66-67a7-43b2-8a46-bbfa23c5a8cd",
    readme: `# Gestionnaire de Tâches Kanban

![App Screenshot](./assets/Kanban.jpg)

## Aperçu

Le Gestionnaire de Tâches Kanban est une application web construite avec Next.js, Nest.js et PostgreSQL qui vous aide à gérer efficacement vos tâches en utilisant la méthodologie Kanban. Elle fournit un moyen visuel d'organiser, suivre et prioriser votre travail, facilitant la collaboration avec votre équipe et l'organisation.

## Fonctionnalités

- **Tableaux Kanban :** Créez et gérez plusieurs tableaux Kanban pour différents projets ou flux de travail.
- **Colonnes et Tâches :** Chaque tableau se compose de colonnes représentant différentes étapes de votre flux de travail (par exemple, À Faire, En Cours, Terminé), et vous pouvez ajouter des tâches à ces colonnes.
- **Glisser-Déposer :** Déplacez facilement les tâches entre les colonnes par glisser-déposer.
- **Sous-tâches :** Décomposez les tâches en sous-tâches plus petites pour les gérer plus efficacement.
- **Détails des Tâches :** Ajoutez des descriptions et des informations supplémentaires à vos tâches.
- **Authentification Utilisateur :** Connectez-vous en toute sécurité et gérez vos tâches avec des comptes utilisateurs.
- **Design Responsive :** Accédez et gérez vos tâches sur différents appareils, y compris ordinateur et mobile.

## Pour Commencer

Pour démarrer avec le Gestionnaire de Tâches Kanban, suivez ces étapes :

1. **Clonez le Dépôt :** Clonez ce dépôt sur votre machine locale.

   bash
   git clone https://github.com/lucaszebre/kanbanwithapi
   
2. **Installez les Dépendances :** Naviguez vers le répertoire du projet et installez les dépendances requises.

   cd kanban-task-manager
   npm install

3. **Démarrez l'Application :** Lancez l'application frontend.

   npm run dev

4. **Accédez à l'App :** Ouvrez votre navigateur web et accédez à l'application sur http://localhost:3000.

### Technologies Utilisées

    Frontend : Next.js, React, React Query, Chakra UI, TypeScript
    Backend : Nest.js, PostgreSQL, TypeORM, Authentification JWT
    Style : Modules CSS
    Gestion d'État : React Query
    Glisser-Déposer : react-beautiful-dnd
    Authentification Utilisateur : JWT (JSON Web Tokens)
    
Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, veuillez suivre nos Directives de Contribution.

### Licence
Ce projet est sous licence MIT - voir le fichier LICENSE.md pour plus de détails.

### Remerciements
Un grand merci à la communauté open-source pour leurs incroyables contributions et bibliothèques.
Inspiré par la méthodologie Kanban pour la gestion de projet.
Bonne gestion de tâches !`,
    demo: "https://kanbanwithapi.vercel.app/",
    code: "https://github.com/lucaszebre/kanbanwithapi",
    tags: ["REACT.JS", "EXPRESS.JS", "POSTGRESQL", "MATERIAL UI"],
    name: "KANBAN TASK MANAGER",
    image: "/assets/Kanban.jpg",
    alt: "KanbanTask-app",
  },
  {
    id: "1ca8f42c-ea6a-4d09-b54d-8c9c0b269ba4",
    readme: `# Linkedev - Un Arbre de Liens pour Développeurs
![App Screenshot](./assets/LinkDev.jpg)

## Aperçu

Linkedev est une application web d'arbre de liens pour développeurs qui vous permet de créer une page d'accueil personnalisée avec des liens vers vos différents profils en ligne, projets et comptes de réseaux sociaux. Construit avec Supabase, Next.js et React Query, Linkedev offre une solution fluide et personnalisable pour les développeurs souhaitant mettre en valeur leur présence en ligne.

## Table des Matières

- [Fonctionnalités](#fonctionnalités)
- [Pour Commencer](#pour-commencer)
- [Utilisation](#utilisation)
- [Personnalisation](#personnalisation)
- [Contribution](#contribution)
- [Licence](#licence)

## Fonctionnalités

- **Authentification Utilisateur :** Connectez-vous en toute sécurité et gérez votre arbre de liens.
- **Gestion des Liens :** Ajoutez, modifiez et supprimez des liens vers vos profils en ligne.
- **Personnalisation :** Personnalisez l'apparence de votre arbre de liens avec des thèmes, des couleurs et des arrière-plans.
- **Design Responsive :** Assurez-vous que votre arbre de liens est parfait sur différents appareils, y compris ordinateur et mobile.
- **Analytiques :** Suivez les performances de vos liens et consultez les statistiques des visiteurs.

## Pour Commencer

Pour commencer à utiliser Linkedev, suivez ces étapes :

1. **Clonez le Dépôt :** Clonez ce dépôt sur votre machine locale :

   bash
   git clone https://github.com/yourusername/linkedev.git
2. **Configurez Supabase** : Créez un projet Supabase et configurez vos variables d'environnement pour l'authentification.

3. **Démarrez l'Application** : Lancez l'application frontend :
npm run dev

4. **Accédez à l'App** : Ouvrez votre navigateur web et accédez à l'application sur http://localhost:3000.

### Utilisation
  Une fois que Linkedev est installé et lancé, vous pouvez :

  Vous connecter avec vos identifiants.
  Ajouter des liens à votre arbre de liens.
  Personnaliser l'apparence de votre arbre de liens.
  Partager l'URL de votre arbre de liens avec d'autres.

### Personnalisation
  Personnalisez l'apparence et la fonctionnalité de votre arbre de liens :

Thèmes : Choisissez parmi différents thèmes pour correspondre à votre style personnel.
Couleurs : Sélectionnez votre schéma de couleurs préféré.
Arrière-plans : Téléchargez des arrière-plans personnalisés pour améliorer l'attrait visuel de votre arbre de liens.

### Contribution
Les contributions à Linkedev sont les bienvenues ! Si vous souhaitez contribuer à ce projet, veuillez suivre nos Directives de Contribution.

### Licence
Ce projet est sous licence MIT - voir le fichier LICENSE.md pour plus de détails.

### Remerciements
Un grand merci à la communauté open-source pour leurs incroyables contributions et bibliothèques.

Inspiré par l'idée des arbres de liens pour développeurs.`,
    demo: "https://linkdev2.vercel.app/",
    code: "https://github.com/lucaszebre/linkdev2",
    image: "/assets/LinkDev.jpg",
    alt: "EntertainnementWeb-app",
    tags: ["REACT.JS", "SUPABASE", "POSTGRESQL", "MATERIAL UI"],
    name: "LINK DEV",
  },
  {
    id: "791528df-07ef-49b1-bc7b-1af8758671ca",
    readme: `# Gestionnaire de Factures

![App Screenshot](./assets/Invoice.jpg)

## Aperçu

Le Gestionnaire de Factures est une application web construite avec Next.js, Supabase et Redux qui simplifie votre processus de gestion des factures. Elle permet aux utilisateurs de se connecter, de créer de nouvelles factures, de changer leur statut et même de supprimer des factures. Simplifiez votre flux de facturation avec cette solution conviviale.

## Fonctionnalités

**Authentification Utilisateur** : Connectez-vous en toute sécurité et gérez vos factures avec des comptes utilisateurs.
**Création de Factures** : Générez de nouvelles factures sans effort en saisissant les détails essentiels.
**Statut des Factures** : Changez facilement le statut des factures (par exemple, En Attente, Payée, En Retard).
**Suppression de Factures** : Supprimez les factures indésirables de votre liste.
**Design Responsive** : Accédez et gérez vos factures sur différents appareils, y compris ordinateur et mobile.

## Pour Commencer

Pour démarrer avec le Gestionnaire de Factures, suivez ces étapes :

1. **Clonez le Dépôt :** Clonez ce dépôt sur votre machine locale.

   bash
   git clone https://github.com/lucaszebre/invoice
   
2. **Installez les Dépendances :** Naviguez vers le répertoire du projet et installez les dépendances requises.

   cd invoice-manager
   npm install

3. **Configurez Supabase :** Configurez votre projet Supabase et mettez à jour la configuration avec vos identifiants Supabase.

4. **Démarrez l'Application :** Lancez l'application frontend.

   bash
   npm run dev

5. **Accédez à l'App :** Ouvrez votre navigateur web et accédez à l'application sur http://localhost:3000.

### Technologies Utilisées

- Frontend : Next.js, React, Redux, Chakra UI, TypeScript
- Backend : Supabase (Base de données, Authentification)
- Gestion d'État : Redux Toolkit
- Style : Modules CSS
- Design Responsive : Assure l'utilisabilité sur tous les appareils.

### Contribution

Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, veuillez suivre nos Directives de Contribution.

### Licence

Ce projet est sous licence MIT - voir le fichier LICENSE.md pour plus de détails.

### Remerciements

Un grand merci à la communauté open-source pour leurs incroyables contributions et bibliothèques. Votre soutien rend possible des projets comme celui-ci.

Nous espérons que vous trouverez le Gestionnaire de Factures utile pour simplifier votre processus de facturation. Bonne facturation !

Veuillez noter que cette documentation suppose que vous avez déjà configuré un projet Supabase. Si ce n'est pas le cas, consultez la documentation Supabase pour obtenir des conseils sur la configuration de votre projet Supabase.

Vous pouvez également inclure des sections ou des détails supplémentaires selon les besoins de votre application spécifique.`,
    demo: "https://invoice-lovat.vercel.app/connexion",
    code: "https://github.com/lucaszebre/invoice",
    image: "/assets/Invoice.jpg",
    alt: "EntertainnementWeb-app",
    tags: ["REACT.JS", "FIREBASE", "TYPESCRIPT", "MATERIAL UI"],
    name: "INVOICE APP",
  },
  {
    id: "522704e2-c059-430e-b32f-6d8249266643",
    readme: `# Application Web E-commerce Audiophile
![App Screenshot](./assets/Audiophile.jpg)

Bienvenue sur l'application Web E-commerce Audiophile ! Ce projet est un site e-commerce multi-pages construit uniquement avec React.js. Il permet aux utilisateurs de parcourir les produits, d'ajouter/supprimer des produits du panier, de modifier les quantités de produits, de remplir les détails de paiement, et plus encore.

## Fonctionnalités

- **Gestion des Produits** : Les utilisateurs peuvent parcourir une sélection de produits disponibles dans la boutique.
- **Ajout/Suppression de Produits** : Les utilisateurs peuvent ajouter des produits à leur panier et les supprimer selon leurs besoins.
- **Modification des Quantités** : Les utilisateurs peuvent ajuster la quantité de produits dans leur panier.
- **Processus de Paiement** : Les utilisateurs peuvent remplir les détails de paiement, y compris les informations d'expédition.
- **Validations des Formulaires** : Les validations de formulaire garantissent que tous les champs requis sont correctement remplis lors du paiement.
- **Totaux de Paiement** : Les utilisateurs peuvent voir les totaux corrects incluant les frais d'expédition et la TVA.
- **Modal de Confirmation** : Après le paiement, les utilisateurs reçoivent une fenêtre modale de confirmation avec un résumé de la commande.
- **Design Responsive** : L'application offre une mise en page optimale pour différentes tailles d'écran.
- **États de Survol** : Les éléments interactifs de la page ont des états de survol pour une meilleure expérience utilisateur.
- **Fonctionnalité Bonus** : Les articles du panier sont conservés même après l'actualisation du navigateur (utilisant localStorage).

## Technologies Utilisées

- **React.js** : React.js est une bibliothèque JavaScript pour construire des interfaces utilisateur.
- **localStorage** : localStorage est utilisé pour stocker les articles du panier localement pour la persistance (fonctionnalité bonus).
- **CSS** : Des styles CSS personnalisés sont appliqués pour créer la mise en page et le design de l'application web.

## Pour Commencer

Pour démarrer avec ce projet, suivez ces étapes :

1. Clonez ce dépôt.
2. Installez les dépendances en utilisant 'npm install'
3. Lancez le serveur de développement en utilisant 'npm start'.
4. Accédez à l'application dans votre navigateur web.

## Utilisation

Une fois le serveur de développement lancé, vous pouvez accéder à l'application dans votre navigateur web. Parcourez les produits, ajoutez des articles à votre panier, procédez au paiement, remplissez vos coordonnées et complétez la commande. Bonne shopping sur l'application Web E-commerce Audiophile !

## Contribution

Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, n'hésitez pas à forker le dépôt et à soumettre une pull request. Veuillez suivre le style de code et les conventions existants.
`,
    demo: "https://lucaszebre.github.io/AudiophileEcommerce/",
    code: "https://github.com/lucaszebre/AudiophileEcommerce",
    image: "/assets/Audiophile.jpg",
    alt: "KanbanTask-app",
    tags: ["REACT.JS"],
    name: "Audiophile E-Commerce Website",
  },
  {
    id: "6fac4cf5-19cd-43fd-81fc-b657117ab85c",
    readme: `# Designo Multi-Page
![App Screenshot](./assets/Designo.jpg)

Bienvenue sur Designo Multi-Page, un site web multi-pages construit avec React.js. Ce projet vise à reproduire fidèlement le design fourni, permettant aux utilisateurs de voir la mise en page optimale pour chaque page en fonction de la taille d'écran de leur appareil, de voir les états de survol pour tous les éléments interactifs du site, et de recevoir des messages d'erreur lors de la soumission du formulaire de contact.

## Fonctionnalités

- **Design Responsive** : Le site web offre une mise en page optimale pour chaque page en fonction de la taille d'écran de l'appareil de l'utilisateur.
- **États de Survol** : Les éléments interactifs du site ont des états de survol pour une meilleure expérience utilisateur.
- **Validation du Formulaire de Contact** : Les utilisateurs reçoivent des messages d'erreur lors de la soumission du formulaire de contact si les champs requis sont vides ou si l'adresse e-mail n'est pas correctement formatée.

## Technologies Utilisées

- **React.js** : React.js est une bibliothèque JavaScript pour construire des interfaces utilisateur.
- **CSS** : Des styles CSS personnalisés sont appliqués pour créer la mise en page et le design du site web.

## Pour Commencer

Pour démarrer avec ce projet, suivez ces étapes :

1. Clonez ce dépôt.
2. Installez les dépendances en utilisant 'npm install'.
3. Lancez le serveur de développement en utilisant 'npm start'.
4. Accédez au site web dans votre navigateur web.

## Utilisation

Une fois le serveur de développement lancé, vous pouvez accéder au site web dans votre navigateur web. Explorez les différentes pages, visualisez la réactivité de la mise en page, et interagissez avec les états de survol sur les éléments interactifs. Essayez de soumettre le formulaire de contact pour voir la validation en action.

## Contribution

Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, n'hésitez pas à forker le dépôt et à soumettre une pull request. Veuillez suivre le style de code et les conventions existants.
`,
    demo: "https://lucaszebre.github.io/Designo/#/",
    code: "https://github.com/lucaszebre/Designo",
    image: "/assets/Designo.jpg",
    alt: "EntertainnementWeb-app",
    tags: ["REACT.JS"],
    name: "Designo MultiPage Website",
  },
  {
    id: "d4de4603-e769-4d9c-90e9-7de3ee935f00",
    readme: `# Galerie d'Art Vitrine

Bienvenue sur la Galerie d'Art Vitrine, un site de diaporama de galerie d'art conçu pour présenter des peintures. Ce projet vise à reproduire fidèlement le design fourni, permettant aux utilisateurs de naviguer dans le diaporama, de voir chaque peinture dans une lightbox, et de profiter d'une mise en page optimale pour l'application en fonction de la taille d'écran de leur appareil. De plus, les utilisateurs peuvent voir les états de survol pour tous les éléments interactifs de la page.

## Fonctionnalités

- **Navigation du Diaporama** : Les utilisateurs peuvent naviguer dans le diaporama pour voir chaque peinture.
- **Lightbox** : Cliquer sur une peinture l'ouvre dans une lightbox pour une vue rapprochée.
- **Design Responsive** : Le site web offre une mise en page optimale pour différentes tailles d'écran.
- **États de Survol** : Les éléments interactifs de la page ont des états de survol pour une meilleure expérience utilisateur.

## Technologies Utilisées

- **JavaScript** : JavaScript est utilisé pour gérer la navigation du diaporama et la fonctionnalité de la lightbox.
- **HTML/CSS** : HTML et CSS sont utilisés pour structurer la page web et styler les éléments.
- **Données JSON** : Les données des peintures sont fournies dans un fichier data.json local.

## Pour Commencer

Pour démarrer avec ce projet, suivez ces étapes :

1. Clonez ce dépôt.
2. Si vous utilisez le fichier data.json fourni, assurez-vous qu'il est dans le bon répertoire.
3. Ouvrez le fichier index.html dans votre navigateur web.

## Utilisation

Une fois la page web ouverte dans votre navigateur, vous pouvez naviguer dans le diaporama, cliquer sur les peintures pour les voir dans la lightbox, et expérimenter le design responsive en redimensionnant votre fenêtre de navigateur. Survolez les éléments interactifs pour voir leurs états de survol.

## Contribution

Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, n'hésitez pas à forker le dépôt et à soumettre une pull request. Veuillez suivre le style de code et les conventions existants.
`,
    demo: "https://lucaszebre.github.io/Galleria-App/",
    code: "https://github.com/lucaszebre/Galleria-App",
    tags: ["REACT.JS"],
    name: "ART GALLERY SHOWCASE",
    image: "/assets/images/thumbnail-project-6-large.webp",
    alt: "KanbanTask-app",
  },
];
