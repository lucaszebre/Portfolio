"use client";

import React, { useEffect } from "react";
import {
  useAnimate,
  useAnimation,
  useInView,
  useTransform,
} from "framer-motion";
import Reveal from "./Reveal";
import DialogProject from "./DialogProject";
import Image from "next/image";
const Projets = () => {
  return (
    <div className="flex flex-col items-center  justify-center w-full">
      <div className="mt-[5vw]  max-w-[1440px] w-[80%] flex flex-col justify-center items-center">
        <div className="flex flex-col  justify-center items-center w-full ">
          <div className="flex items-end justify-between w-full">
            <Reveal
              v={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h1 className="text-white text-xl md:text-6xl font-semibold">
                Projets
              </h1>
            </Reveal>

            <Reveal
              v={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="md:text-4xl text-lg text-white underline decoration-4 decoration-[#07ff6a] cursor-pointer ">
                CONTACT ME
              </div>
            </Reveal>
          </div>
          <div className="flex flex-col items-start gap-10 lg:flex-row mt-[5vw] mb-[5vw] justify-between w-full">
            <DialogProject
              readme={`# Instagram Clone
![App Screenshot](./assets/instagram.jpg)

This project is a clone of Instagram built using Next js, Prisma, and Pusher. It aims to replicate some of the core features of Instagram such as posting images, liking and commenting on posts, real-time updates, user authentication, and more.

## Features

- **User Authentication**: Users can sign up, log in, and log out securely.
- **Posting Images**: Users can upload and share images with captions.
- **Liking and Commenting**: Users can like and comment on posts.
- **Real-time Updates**: Utilizing Pusher, the application provides real-time updates for likes, comments, and new posts.
- **User Profiles**: Each user has a profile page displaying their posts and other relevant information.

## Technologies Used

- **Next.js**: Next.js is a React framework that enables server-side rendering, routing, and more.
- **Prisma**: Prisma is a modern database toolkit for TypeScript and Node.js. It provides an ORM for working with databases.
- **Pusher**: Pusher is a hosted service that provides real-time messaging via WebSockets.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository.
2. Install dependencies using 'npm install' or 'yarn install'.
3. Set up your database with Prisma.
4. Configure your Pusher account.
5. Run the development server using 'npm run dev' or 'yarn dev'.

## Usage

Once the development server is running, you can access the application in your web browser at 'http://localhost:3000'. Sign up for an account, explore the features, and start sharing photos with your friends!

## Contributing

Contributions are welcome! If you d like to contribute to this project feel free to fork the repository and submit a pull request Please follow the existing code style and conventions`}
              code={"https://github.com/lucaszebre/instaclone"}
              demo={"https://instaclone-gules-one.vercel.app/auth"}
            >
              <Reveal
                v={{
                  hidden: { opacity: 0, y: 175, width: "100%" },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="flex flex-col cursor-pointer w-full relative rounded-3xl rounded-gray-300 items-start justify-start">
                  <div className=" w-full relative h-[20rem]">
                    <Image
                      className="rounded-xl"
                      fill={true}
                      src={"/assets/letter.png"}
                      alt="EntertainnementWeb-app"
                    />
                  </div>
                  <div className="text-[4vw] font-300 gap-3 flex flex-row flex-wrap text-white mt-[0.5em] mb-[1em] md:text-[2.5vw] lg:text-[1vw] md:font-600">
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] "'>
                      NEXT.JS
                    </span>
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                      NEXT-AUTH
                    </span>
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                      POSTGRESQL
                    </span>
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                      PRISMA
                    </span>
                  </div>
                  <h2 className="text-[5vw]  md:text-[2.5vw] lg:text-[1.7vw] font-bold text-white mt-[0.5rem]">
                    LETTEREASY - SASS{" "}
                  </h2>
                </div>
              </Reveal>
            </DialogProject>

            <DialogProject
              readme={`# Twitter Clone
![App Screenshot](./assets/twitter.png)

This project is a Twitter clone developed using PHP, MySQL, and jQuery. It aims to replicate some of the core features of Twitter such as posting tweets, following other users, liking and retweeting tweets, user authentication, and more.

## Features

- **User Authentication**: Users can sign up, log in, and log out securely.
- **Posting Tweets**: Users can compose and share tweets with text, images, or links.
- **Following Users**: Users can follow other users to see their tweets on their timeline.
- **Liking and Retweeting**: Users can like and retweet tweets from other users.
- **Real-time Updates**: Utilizing jQuery for AJAX requests, the application provides real-time updates for likes, retweets, and new tweets.
- **User Profiles**: Each user has a profile page displaying their tweets, followers, and other relevant information.

## Technologies Used

- **PHP**: PHP is a server-side scripting language widely used for web development.
- **MySQL**: MySQL is an open-source relational database management system.
- **jQuery**: jQuery is a fast, small, and feature-rich JavaScript library for simplifying tasks like HTML document traversal and manipulation, event handling, and AJAX.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository.
2. Set up your PHP development environment (e.g., XAMPP, WAMP, MAMP).
3. Import the provided MySQL database schema.
4. Configure your database connection settings in the PHP files.
5. Run your PHP development server.
6. Access the application in your web browser.

## Usage

Once the development server is running, you can access the application in your web browser. Sign up for an account, explore the features, follow other users, and start tweeting and interacting with the community!

## Contributing

Contributions are welcome! If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Please follow the existing code style and conventions.


`}
              demo="https://previously-on-eight.vercel.app/"
            >
              <Reveal
                v={{
                  hidden: { opacity: 0, y: 175, width: "100%" },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="flex  w-full cursor-pointer relative flex-col items-start justify-start md:items-end md:justify-end">
                  <div className="w-full relative h-[20rem]">
                    <Image
                      className="rounded-xl"
                      fill={true}
                      src={"/assets/previously_on.png"}
                      alt="Previously_on"
                    />
                  </div>
                  <div className="text-[4vw] font-300 gap-3  flex justify-end flex-row flex-wrap text-white mt-[0.5em] mb-[1em] md:text-[2.5vw] lg:text-[1vw] md:font-600">
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                      REACT.JS
                    </span>
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                      USEQUERY
                    </span>
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                      BETASERIES API
                    </span>
                  </div>
                  <h2 className="text-[5vw] md:text-[2.5vw] lg:text-[1.7vw] flex justify-end font-bold text-white mt-[0.5rem]">
                    PREVIOUSLY_ON{" "}
                  </h2>
                </div>
              </Reveal>
            </DialogProject>
          </div>{" "}
          <div className="flex flex-col items-start gap-10 lg:flex-row mt-[5vw] mb-[5vw] justify-between w-full">
            <DialogProject
              readme={`# Instagram Clone
![App Screenshot](./assets/instagram.jpg)

This project is a clone of Instagram built using Next js, Prisma, and Pusher. It aims to replicate some of the core features of Instagram such as posting images, liking and commenting on posts, real-time updates, user authentication, and more.

## Features

- **User Authentication**: Users can sign up, log in, and log out securely.
- **Posting Images**: Users can upload and share images with captions.
- **Liking and Commenting**: Users can like and comment on posts.
- **Real-time Updates**: Utilizing Pusher, the application provides real-time updates for likes, comments, and new posts.
- **User Profiles**: Each user has a profile page displaying their posts and other relevant information.

## Technologies Used

- **Next.js**: Next.js is a React framework that enables server-side rendering, routing, and more.
- **Prisma**: Prisma is a modern database toolkit for TypeScript and Node.js. It provides an ORM for working with databases.
- **Pusher**: Pusher is a hosted service that provides real-time messaging via WebSockets.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository.
2. Install dependencies using 'npm install' or 'yarn install'.
3. Set up your database with Prisma.
4. Configure your Pusher account.
5. Run the development server using 'npm run dev' or 'yarn dev'.

## Usage

Once the development server is running, you can access the application in your web browser at 'http://localhost:3000'. Sign up for an account, explore the features, and start sharing photos with your friends!

## Contributing

Contributions are welcome! If you d like to contribute to this project feel free to fork the repository and submit a pull request Please follow the existing code style and conventions`}
              code={"https://github.com/lucaszebre/instaclone"}
              demo={"https://instaclone-gules-one.vercel.app/auth"}
            >
              <Reveal
                v={{
                  hidden: { opacity: 0, y: 175, width: "100%" },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="flex flex-col cursor-pointer w-full relative rounded-3xl rounded-gray-300 items-start justify-start">
                  <div className=" w-full relative h-[20rem]">
                    <Image
                      className="rounded-xl"
                      fill={true}
                      src={"/assets/instagram.jpg"}
                      alt="EntertainnementWeb-app"
                    />
                  </div>
                  <div className="text-[4vw] font-300 gap-3 flex flex-row flex-wrap text-white mt-[0.5em] mb-[1em] md:text-[2.5vw] lg:text-[1vw] md:font-600">
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] "'>
                      NEXT.JS
                    </span>
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                      SUPABASE AUTH
                    </span>
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                      POSTGRESQL
                    </span>
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                      PRISMA
                    </span>
                  </div>
                  <h2 className="text-[5vw]  md:text-[2.5vw] lg:text-[1.7vw] font-bold text-white mt-[0.5rem]">
                    INSTAGRAM CLONE{" "}
                  </h2>
                </div>
              </Reveal>
            </DialogProject>
            <DialogProject
              readme={`# Twitter Clone
![App Screenshot](./assets/twitter.png)

This project is a Twitter clone developed using PHP, MySQL, and jQuery. It aims to replicate some of the core features of Twitter such as posting tweets, following other users, liking and retweeting tweets, user authentication, and more.

## Features

- **User Authentication**: Users can sign up, log in, and log out securely.
- **Posting Tweets**: Users can compose and share tweets with text, images, or links.
- **Following Users**: Users can follow other users to see their tweets on their timeline.
- **Liking and Retweeting**: Users can like and retweet tweets from other users.
- **Real-time Updates**: Utilizing jQuery for AJAX requests, the application provides real-time updates for likes, retweets, and new tweets.
- **User Profiles**: Each user has a profile page displaying their tweets, followers, and other relevant information.

## Technologies Used

- **PHP**: PHP is a server-side scripting language widely used for web development.
- **MySQL**: MySQL is an open-source relational database management system.
- **jQuery**: jQuery is a fast, small, and feature-rich JavaScript library for simplifying tasks like HTML document traversal and manipulation, event handling, and AJAX.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository.
2. Set up your PHP development environment (e.g., XAMPP, WAMP, MAMP).
3. Import the provided MySQL database schema.
4. Configure your database connection settings in the PHP files.
5. Run your PHP development server.
6. Access the application in your web browser.

## Usage

Once the development server is running, you can access the application in your web browser. Sign up for an account, explore the features, follow other users, and start tweeting and interacting with the community!

## Contributing

Contributions are welcome! If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Please follow the existing code style and conventions.


`}
            >
              <Reveal
                v={{
                  hidden: { opacity: 0, y: 175, width: "100%" },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="flex  w-full cursor-pointer relative flex-col items-start justify-start md:items-end md:justify-end">
                  <div className="w-full relative h-[20rem]">
                    <Image
                      className="rounded-xl"
                      fill={true}
                      src={"/assets/twitter.png"}
                      alt="KanbanTask-app"
                    />
                  </div>
                  <div className="text-[4vw] font-300 gap-3  flex justify-end flex-row flex-wrap text-white mt-[0.5em] mb-[1em] md:text-[2.5vw] lg:text-[1vw] md:font-600">
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                      PHP
                    </span>
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                      JQUERY
                    </span>
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                      MYSQL
                    </span>
                  </div>
                  <h2 className="text-[5vw] md:text-[2.5vw] lg:text-[1.7vw] flex justify-end font-bold text-white mt-[0.5rem]">
                    TWITTER CLONE
                  </h2>
                </div>
              </Reveal>
            </DialogProject>
          </div>
          <div className="flex flex-col items-start gap-10 lg:flex-row mt-[5vw] mb-[5vw]  justify-between w-full">
            <DialogProject
              readme={`# Kanban Task Manager

![App Screenshot](./assets/Kanban.jpg)

## Overview

The Kanban Task Manager is a web application built with Next.js, Nest.js, and PostgreSQL that helps you efficiently manage your tasks using the Kanban methodology. It provides a visual way to organize, track, and prioritize your work, making it easier to collaborate with your team and stay organized.

## Features

- **Kanban Boards:** Create and manage multiple Kanban boards for different projects or workflows.
- **Columns and Tasks:** Each board consists of columns representing different stages of your workflow (e.g., To Do, In Progress, Done), and you can add tasks to these columns.
- **Drag and Drop:** Easily move tasks between columns by dragging and dropping them.
- **Subtasks:** Break down tasks into smaller subtasks to manage them more effectively.
- **Task Details:** Add descriptions and additional information to your tasks.
- **User Authentication:** Securely sign in and manage your tasks with user accounts.
- **Responsive Design:** Access and manage your tasks on various devices, including desktop and mobile.

## Getting Started

To get started with the Kanban Task Manager, follow these steps:

1. **Clone the Repository:** Clone this repository to your local machine.

   bash
   git clone https://github.com/lucaszebre/kanbanwithapi
   
2.  **Install Dependencies:** Navigate to the project directory and install the required dependencies.


   cd kanban-task-manager
    npm install

3. **Start the Application:** Start the frontend application.

    npm run dev

4. **Acces the App*** Open your web browser and access the app at http://localhost:3000.

### Technologies Used

    Frontend: Next.js, React, React Query, Chakra UI, TypeScript
    Backend: Nest.js, PostgreSQL, TypeORM, JWT Authentication
    Styling: CSS Modules
    State Management: React Query
    Drag and Drop: react-beautiful-dnd
    User Authentication: JWT (JSON Web Tokens)
    Contributing
    Contributions are welcome! If you d like to contribute to this project, please follow our Contributing Guidelines.

### License
This project is licensed under the MIT License - see the LICENSE.md file for details.

### Acknowledgments
Special thanks to the open-source community for their amazing contributions and libraries.
Inspired by the Kanban methodology for project management.
Happy task managing!
`}
              demo={"https://kanbanwithapi.vercel.app/"}
              code={"https://github.com/lucaszebre/kanbanwithapi"}
            >
              <Reveal
                v={{
                  hidden: { opacity: 0, y: 175, width: "100%" },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="flex flex-col cursor-pointer w-full relative items-start justify-start">
                  <div className="w-full relative h-[20rem]">
                    <Image
                      className="rounded-xl"
                      fill={true}
                      src={"/assets/Kanban.jpg"}
                      alt="KanbanTask-app"
                    />
                  </div>
                  <div className="text-[4vw] font-300 gap-3 flex justify-start flex-row flex-wrap text-white mt-[0.5em] mb-[1em] md:text-[2.5vw] lg:text-[1vw] md:font-600">
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                      REACT.JS
                    </span>
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                      EXPRESS.JS
                    </span>
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                      POSTGRESQL
                    </span>
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                      MATERIAL UI
                    </span>
                  </div>
                  <h2 className="text-[5vw] md:text-[2.5vw] lg:text-[1.7vw] flex justify-start font-bold text-white mt-[0.5rem]">
                    KANBAN TASK MANAGER
                  </h2>
                </div>
              </Reveal>
            </DialogProject>
            <DialogProject
              readme={`# Linkedev - A Developer's Link Tree
![App Screenshot](./assets/LinkDev.jpg)

## Overview

Linkedev is a developer's link tree web application that allows you to create a personalized landing page with links to your various online profiles, projects, and social media accounts. Built with Supabase, Next.js, and React Query, Linkedev offers a seamless and customizable solution for developers to showcase their online presence.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication:** Securely log in and manage your link tree.
- **Link Management:** Add, edit, and delete links to your online profiles.
- **Customization:** Personalize your link tree's appearance with themes, colors, and backgrounds.
- **Responsive Design:** Ensure your link tree looks great on various devices, including desktop and mobile.
- **Analytics:** Track the performance of your links and view visitor statistics.

## Getting Started

To start using Linkedev, follow these steps:

1. **Clone the Repository:** Clone this repository to your local machine:

   bash
   git clone https://github.com/yourusername/linkedev.git
2. **Set Up Supabase**: Create a Supabase project and configure your environment variables for authentication.

3.**Start the Application**: Start the frontend application:
npm run dev

4.**Access the App**: Open your web browser and access the app at http://localhost:3000.

### Usage
  Once you have Linkedev up and running, you can:

  Log in with your credentials.
  Add links to your link tree.
  Customize the appearance of your link tree.
  Share your link tree URL with others.
  Customization
  Customize your link tree's appearance and functionality:

Themes: Choose from different themes to match your personal style.
Colors: Select your preferred color scheme.
Backgrounds: Upload custom backgrounds to enhance your link tree's visual appeal.
Contributing
Contributions to Linkedev are welcome! If you'd like to contribute to this project, please follow our Contributing Guidelines.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.

Acknowledgments
Special thanks to the open-source community for their amazing contributions and libraries.

Inspired by the idea of link trees for developers.
`}
              demo={"https://linkdev2.vercel.app/"}
              code={"https://github.com/lucaszebre/linkdev2"}
            >
              <Reveal
                v={{
                  hidden: { opacity: 0, y: 175, width: "100%" },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="flex flex-col w-full cursor-pointer rounded-3xl rounded-gray-300 items-start justify-start md:items-end md:justify-end">
                  <div className="w-full relative h-[20rem]">
                    <Image
                      className="rounded-xl"
                      fill={true}
                      src={"/assets/LinkDev.jpg"}
                      alt="EntertainnementWeb-app"
                    />
                  </div>
                  <div className="text-[4vw] font-300 gap-3  flex flex-row justify-start md:justify-end flex-wrap text-white mt-[0.5em] mb-[1em] md:text-[2.5vw] lg:text-[1vw] md:font-600">
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                      REACT.JS
                    </span>
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                      SUPABASE
                    </span>
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                      POSTGRESQL
                    </span>
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                      MATERIAL UI
                    </span>
                  </div>
                  <h2 className="text-[5vw] md:text-[2.5vw] lg:text-[1.7vw] font-bold text-white mt-[0.5rem]">
                    LINK DEV{" "}
                  </h2>
                </div>
              </Reveal>
            </DialogProject>
          </div>
          <div className="flex flex-col items-start gap-10 lg:flex-row mt-[5vw] mb-[5vw]  justify-between w-full">
            <DialogProject
              readme={`# Invoice Manager

![App Screenshot](./assets/Invoice.jpg)

## Overview

The Invoice Manager is a web application built with Next.js, Supabase, and Redux that simplifies your invoice management process. It enables users to log in, create new invoices, change their status, and even delete invoices. Streamline your invoicing workflow with this user-friendly solution.

## Features

**User Authentication**: Securely log in and manage your invoices with user accounts.
**Create Invoices**: Generate new invoices effortlessly by entering essential details.
**Invoice Status**: Easily change the status of invoices (e.g., Pending, Paid, Overdue).
**Delete Invoices**: Remove unwanted invoices from your list.
**Responsive Design**: Access and manage your invoices across various devices, including desktop and mobile

## Getting Started

To get started with the Kanban Task Manager, follow these steps:

1. **Clone the Repository:** Clone this repository to your local machine.

   bash
   git clone https://github.com/lucaszebre/invoice
   
2.  **Install Dependencies:** Navigate to the project directory and install the required dependencies.


  cd invoice-manager
npm install

3. **Configure Supabase:** Set up your Supabase project and update the configuration with your Supabase credentials.

4. **Start the Application:** Launch the frontend application.

bash
npm run dev

5. **Access the App:** Open your web browser and access the app at http://localhost:3000.

### Technologies Used

- Frontend: Next.js, React, Redux, Chakra UI, TypeScript
- Backend: Supabase (Database, Authentication)
- State Management: Redux Toolkit
- Styling: CSS Modules
- Responsive Design: Ensures usability across devices.

### Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow our Contributing Guidelines.

### License

This project is licensed under the MIT License - see the LICENSE.md file for details.

### Acknowledgments

Special thanks to the open-source community for their amazing contributions and libraries. Your support makes projects like this possible.

We hope you find the Invoice Manager helpful in streamlining your invoicing process. Happy invoicing!

Please note that this documentation assumes you already have a Supabase project set up. If not, refer to the Supabase documentation for guidance on setting up your Supabase project.

You can also include additional sections or details as needed for your specific application.`}
              demo={"https://invoice-lovat.vercel.app/connexion"}
              code="https://github.com/lucaszebre/invoice"
            >
              <Reveal
                v={{
                  hidden: { opacity: 0, y: 175, width: "100%" },
                  visible: { opacity: 1, y: 0 },
                }}
                width="100%"
              >
                <div className="flex w-full relative flex-col cursor-pointer rounded-3xl rounded-gray-300 items-start justify-start">
                  <div className="w-full relative h-[20rem]">
                    <Image
                      className="rounded-xl"
                      fill={true}
                      src={"/assets/Invoice.jpg"}
                      alt="EntertainnementWeb-app"
                    />
                  </div>
                  <div className="text-[4vw] font-300 gap-3  flex flex-row flex-wrap text-white mt-[0.5em] mb-[1em] md:text-[2.5vw] lg:text-[1vw] md:font-600">
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                      REACT.JS
                    </span>
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                      FIREBASE
                    </span>
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                      TYPESCRIPT
                    </span>
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                      MATERIAL UI
                    </span>
                  </div>
                  <h2 className="text-[5vw] md:text-[2.5vw] lg:text-[1.7vw] font-bold text-white mt-[0.5rem]">
                    INVOICE APP{" "}
                  </h2>
                </div>
              </Reveal>
            </DialogProject>
            <DialogProject
              readme={`# Audiophile Ecommerce Web App
![App Screenshot](./assets/Audiophile.jpg)

Welcome to the Audiophile Ecommerce Web App! This project is a multi-page e-commerce website built using only React.js. It allows users to browse through products, add/remove products from the cart, edit product quantities, fill in checkout details, and more.

## Features

- **Product Management**: Users can browse through a selection of products available in the store.
- **Add/Remove Products**: Users can add products to their cart and remove them as needed.
- **Edit Product Quantities**: Users can adjust the quantity of products in their cart.
- **Checkout Process**: Users can fill in checkout details including shipping information.
- **Form Validations**: Form validations ensure that all required fields are filled correctly during checkout.
- **Checkout Totals**: Users can see correct checkout totals including shipping costs and VAT.
- **Order Confirmation Modal**: After checking out, users receive an order confirmation modal with an order summary.
- **Responsive Design**: The app provides an optimal layout for various screen sizes.
- **Hover States**: Interactive elements on the page have hover states for enhanced user experience.
- **Bonus Feature**: Cart items are persisted even after refreshing the browser (using localStorage).

## Technologies Used

- **React.js**: React.js is a JavaScript library for building user interfaces.
- **localStorage**: localStorage is used to store cart items locally for persistence (bonus feature).
- **CSS**: Custom CSS styles are applied to create the layout and design of the web app.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository.
2. Install dependencies using 'npm install'
3. Run the development server using 'npm start'.
4. Access the application in your web browser.

## Usage

Once the development server is running, you can access the application in your web browser. Browse through the products, add items to your cart, proceed to checkout, fill in your details, and complete the order. Enjoy shopping at Audiophile Ecommerce Web App!

## Contributing

Contributions are welcome! If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Please follow the existing code style and conventions.


`}
              demo="https://lucaszebre.github.io/AudiophileEcommerce/"
              code="https://github.com/lucaszebre/AudiophileEcommerce"
            >
              <Reveal
                v={{
                  hidden: { opacity: 0, y: 175, width: "100%" },
                  visible: { opacity: 1, y: 0 },
                }}
                width="100%"
              >
                <div className="flex flex-col w-full relative  cursor-pointer items-start justify-start md:items-end md:justify-end">
                  <div className="w-full relative h-[20rem]">
                    <Image
                      className="rounded-xl"
                      fill={true}
                      src={"/assets/Audiophile.jpg"}
                      alt="KanbanTask-app"
                    />
                  </div>
                  <div className="text-[4vw] font-300 gap-3 justify-end  flex flex-row flex-wrap text-white mt-[0.5em] mb-[1em] md:text-[2.5vw] lg:text-[1vw] md:font-600">
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                      REACT.JS
                    </span>
                  </div>
                  <h2 className="text-[5vw] md:text-[2.5vw] lg:text-[1.7vw] flex justify-end text-end font-bold text-white mt-[0.5rem]">
                    Audiophile E-Commerce Website
                  </h2>
                </div>
              </Reveal>
            </DialogProject>
          </div>
          <div className="flex flex-col items-start gap-10 lg:flex-row mt-[5vw] mb-[5vw]  justify-between w-full">
            <DialogProject
              readme={`# Designo Multi Page
![App Screenshot](./assets/Designo.jpg)

Welcome to Designo Multi Page, a multi-page website built using React.js. This project aims to closely replicate the provided design, allowing users to view the optimal layout for each page depending on their device's screen size, see hover states for all interactive elements throughout the site, and receive error messages when submitting the contact form.

## Features

- **Responsive Design**: The website provides an optimal layout for each page based on the user's device screen size.
- **Hover States**: Interactive elements throughout the site have hover states for improved user experience.
- **Contact Form Validation**: Users receive error messages when submitting the contact form if required fields are empty or if the email address is not formatted correctly.

## Technologies Used

- **React.js**: React.js is a JavaScript library for building user interfaces.
- **CSS**: Custom CSS styles are applied to create the layout and design of the website.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository.
2. Install dependencies using 'npm install'.
3. Run the development server using 'npm start'.
4. Access the website in your web browser.

## Usage

Once the development server is running, you can access the website in your web browser. Explore the different pages, view the layout responsiveness, and interact with the hover states on interactive elements. Try submitting the contact form to see the validation in action.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Please follow the existing code style and conventions.


`}
              demo={"https://lucaszebre.github.io/Designo/#/"}
              code={"https://github.com/lucaszebre/Designo"}
            >
              <Reveal
                v={{
                  hidden: { opacity: 0, y: 175, width: "100%" },
                  visible: { opacity: 1, y: 0 },
                }}
                width="100%"
              >
                <div className="flex w-full relative flex-col rounded-xl cursor-pointer rounded-3xl rounded-gray-300 items-start justify-start">
                  <div className="w-full relative h-[20rem]">
                    <Image
                      className="rounded-xl"
                      fill={true}
                      src={"/assets/Designo.jpg"}
                      alt="EntertainnementWeb-app"
                    />
                  </div>
                  <div className="text-[4vw] font-300 gap-3  flex flex-row flex-wrap text-white mt-[0.5em] mb-[1em] md:text-[2.5vw] lg:text-[1vw] md:font-600">
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                      REACT.JS
                    </span>
                  </div>
                  <h2 className="text-[5vw] md:text-[2.5vw] lg:text-[1.7vw] font-bold text-white mt-[0.5rem]">
                    Designo MultiPage Website
                  </h2>
                </div>
              </Reveal>
            </DialogProject>
            <DialogProject
              readme={`# Art Gallery Showcase

Welcome to Art Gallery Showcase, an art gallery slideshow site built to showcase paintings. This project aims to closely replicate the provided design, allowing users to navigate the slideshow, view each painting in a lightbox, and experience the optimal layout for the app based on their device's screen size. Additionally, users can see hover states for all interactive elements on the page.

## Features

- **Slideshow Navigation**: Users can navigate through the slideshow to view each painting.
- **Lightbox**: Clicking on a painting opens it in a lightbox for a closer view.
- **Responsive Design**: The website provides an optimal layout for different screen sizes.
- **Hover States**: Interactive elements on the page have hover states for improved user experience.

## Technologies Used

- **JavaScript**: JavaScript is used for handling slideshow navigation and lightbox functionality.
- **HTML/CSS**: HTML and CSS are used for structuring the webpage and styling the elements.
- **JSON Data**: Paintings data is provided in a local data.json file.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository.
2. If using the provided data.json file, ensure it's in the correct directory.
3. Open the index.html file in your web browser.

## Usage

Once the webpage is open in your browser, you can navigate through the slideshow, click on paintings to view them in the lightbox, and experience the responsive design by resizing your browser window. Hover over interactive elements to see their hover states.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Please follow the existing code style and conventions.


`}
              demo={"https://lucaszebre.github.io/Galleria-App/"}
              code={"https://github.com/lucaszebre/Galleria-App"}
            >
              <Reveal
                v={{
                  hidden: { opacity: 0, y: 175, width: "100%" },
                  visible: { opacity: 1, y: 0 },
                }}
                width="100%"
              >
                <div className="flex flex-col w-full relative rounded-xl cursor-pointer items-start justify-start md:items-end md:justify-end">
                  <div className="w-full relative h-[20rem]">
                    <Image
                      className="rounded-xl"
                      fill={true}
                      src={"/assets/images/thumbnail-project-6-large.webp"}
                      alt="KanbanTask-app"
                    />
                  </div>
                  <div className="text-[4vw] font-300 gap-3 justify-end  flex flex-row flex-wrap text-white mt-[0.5em] mb-[1em] md:text-[2.5vw] lg:text-[1vw] md:font-600">
                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                      REACT.JS
                    </span>
                  </div>
                  <h2 className="text-[5vw] md:text-[2.5vw] lg:text-[1.7vw] flex justify-end text-end font-bold text-white mt-[0.5rem]">
                    ART GALLERY SHOWCASE
                  </h2>
                </div>
              </Reveal>
            </DialogProject>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projets;
