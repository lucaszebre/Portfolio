"use client"

import React, { useEffect } from 'react'
import { useAnimate, useAnimation, useInView, useTransform } from 'framer-motion'
import  Reveal  from './Reveal'
import DialogProject from './DialogProject'
import Image from 'next/image'
const Projets = () => {



    return (
        <div 
         className="flex flex-col items-center  justify-center w-full">
            <div className="mt-[5vw]  max-w-[1440px] w-[80%] flex flex-col justify-center items-center">
                <div className="flex flex-col  justify-center items-center w-full ">
                    <div className="flex items-end justify-between w-full">
                    <Reveal v={{
                    hidden: {opacity:0 , x:-75},
                    visible: {opacity:1 , x:0}
                    }}>
                        <h1 className="text-white text-xl md:text-6xl font-semibold">Projets</h1>
                    </Reveal>

                    <Reveal v={{
                    hidden: {opacity:0 , x:75},
                    visible: {opacity:1 , x:0}
                    }}>
                        <div className="md:text-4xl text-lg text-white underline decoration-4 decoration-[#07ff6a] cursor-pointer " >CONTACT ME</div>
                    </Reveal>
                        
                    </div>

                    <div className="flex flex-col items-start gap-10 md:flex-row mt-[5vw] mb-[5vw]  justify-between w-full">
                    <DialogProject  readme={`# Instagram Clone
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

Contributions are welcome! If you d like to contribute to this project feel free to fork the repository and submit a pull request Please follow the existing code style and conventions`} code={'https://github.com/lucaszebre/instaclone'} demo={'https://instaclone-gules-one.vercel.app/auth'}>
                        <Reveal v={{
                        hidden: {opacity:0 , y:175,width:'100%'},
                        visible: {opacity:1 , y:0},
                        
                        }}
                        > 
                            <div className="flex flex-col cursor-pointer w-full relative rounded-3xl rounded-gray-300 items-start justify-start">
                                    <div className=" w-full relative h-[20rem]">
                                    <Image fill={true}  src={"/assets/instagram.jpg"} alt="EntertainnementWeb-app" />

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
                                    <h2 className="text-[5vw]  md:text-[2.5vw] lg:text-[1.7vw] font-bold text-white mt-[0.5rem]">INSTAGRAM CLONE </h2>

                            </div>
                            </Reveal>
                        </DialogProject>
                        <DialogProject readme={`# Twitter Clone
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


` } code='https://github.com/lucaszebre/Twitter-clone' >

                        <Reveal v={{
                            hidden: {opacity:0 , y:175,width:'100%'},
                            visible: {opacity:1 , y:0},
                            }}
                            >
                            <div className="flex  w-full cursor-pointer relative flex-col items-start justify-start md:items-end md:justify-end">
                                <div className="w-full relative h-[20rem]">
                                    <Image fill={true} src={"/assets/twitter.png"} alt="TWITTER APP PHOTO" />

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
                                <h2 className="text-[5vw] md:text-[2.5vw] lg:text-[1.7vw] flex justify-end font-bold text-white mt-[0.5rem]">TWITTER CLONE</h2>
                            </div>  
                    </Reveal>
                       
                    </DialogProject>

                    </div> <div className="flex flex-col items-start gap-10 md:flex-row mt-[5vw] mb-[5vw]  justify-between w-full">
                    <DialogProject  readme={` ### Free Ads

#### Introduction

The goal of this project is to create a classified ads website using the Laravel framework.

#### Language

PHP

#### Requirements

The entirety of your source files, except for any unnecessary files (binaries, temporary files, object files, etc.), must be included in your delivery.

#### Day 1

##### Objectives

*   Install Laravel.
*   Set up the homepage.

##### Steps

1.  Install Laravel: https\://[laravel.com/docs/8.x/installation](https://laravel.com/docs/8.x/installation)
2.  Create a new application named "freeads" in the root of your web directory. All subsequent work will be done in this directory.
3.  Start the development server with "artisan" and access the application in your browser to verify that Laravel is installed correctly.
4.  Create a homepage:
    *   Create a view named "index.php" that contains the basic HTML structure.
    *   Create a controller named "IndexController."
        *   Add a "showIndex" method that calls your view.
5.  Create the route to access the homepage.
6.  Conduct tests, for example, you should be able to access the URL http\://localhost:3000. A default route already exists; delete it to replace it with yours.

Laravel is an MVC framework; you can find these three components in the "/app" directory.

#### Day 2

##### Objectives

*   Registration and login page.
*   Profile editing page.

##### Steps

1.  Create a "User" resource using "artisan" to generate the files.
2.  Create a registration form:
    *   Send a confirmation email to activate the user account.
3.  Create a login form (refer to the documentation, "Authentication" section).
4.  Create a CRUD to modify user information (e.g., email, password, etc.).
5.  Conduct tests.

#### Day 3

##### Objectives

*   Ad creation.
*   Display the list of ads.

##### Steps

1.  Create the "Ad" model and its controller.
    *   An ad consists of at least:
        *   A title
        *   A description
        *   A photo
        *   A price
2.  Create the ad creation form.
3.  Create a page that will list all the ads.
4.  Make it possible to modify and delete your own ads.
5.  Make it possible to have multiple photos in an ad.
6.  Test.

#### Day 4

##### Objectives

*   Ad search system with filters (name, product type, price, etc.).
*   Ad suggestion system by matching (proximity, tastes, color, etc.).

##### Steps

1.  Complete the "Ads" and "Users" resources to add:
    *   Ad search.
    *   Ad filtering by criteria.
    *   List of published ads.
    *   List of most recent ads.
    *   List of most relevant ads (matching).
2.  Test again.

#### Day 5

##### Objectives

*   Messaging system between users.
*   Testing and debugging.

##### Steps

1.  Create the "Message" resource.
2.  Create a sending page and a receiving page.
3.  Indicate the number of new messages received in the menu.
4.  Test and debug.`} code={'https://github.com/lucaszebre/FreeAds'} >
                        <Reveal v={{
                        hidden: {opacity:0 , y:175,width:'100%'},
                        visible: {opacity:1 , y:0},
                        
                        }}
                        > 
                            <div className="flex flex-col cursor-pointer w-full relative rounded-3xl rounded-gray-300 items-start justify-start">
                                    <div className=" w-full relative h-[20rem]">
                                    <Image fill={true}  src={"/freeads.png"} alt="Free ads" />

                                    </div>
                                    <div className="text-[4vw] font-300 gap-3 flex flex-row flex-wrap text-white mt-[0.5em] mb-[1em] md:text-[2.5vw] lg:text-[1vw] md:font-600">
                                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] "'>
                                    LARAVEL
                                    </span>
                                    
                                    </div>
                                    <h2 className="text-[5vw]  md:text-[2.5vw] lg:text-[1.7vw] font-bold text-white mt-[0.5rem]">FREEADS </h2>

                            </div>
                            </Reveal>
                        </DialogProject>
                        <DialogProject readme={`
                        ### MVC_My_Quiz

#### Introduction

This project involves developing a quiz website in PHP using the Symfony framework (version 3 or later). The site will allow users to test their general knowledge on various topics and track their progress.

#### Restrictions

*   **JavaScript forbidden:** The use of JavaScript is forbidden, even for bonus features.
*   **Non-deducible answers:** Quiz answers must not be able to be deduced from the source code.

#### Features

##### Unconnected users

*   Answer quizzes.
*   View the history of past quizzes and scores obtained.
*   Register (with email validation) and log in.

##### Connected users

*   Change their email address (with revalidation) and password.
*   Create quizzes.

##### Administrators

*   Manage user accounts (create, update, delete, activate).
*   Manage categories and quizzes (create, update, delete).
*   Promote users to administrators.
*   Send emails to users based on specific criteria (activity, quizzes taken, etc.).
*   View detailed statistics on quizzes and users.
*   Display graphs on the number of unique visitors and the number of quizzes taken over different periods.

#### Technologies

*   **PHP**
*   **Symfony 3+**
*   **Doctrine (Repositories, Entities, Relations)**
*   **Twig**
*   **Form Builder**

#### Instructions

1.  **Clone the repository:** "git clone <repository URL>"
2.  **Install dependencies:** "composer install"
3.  **Configure the database:** Update connection information in "parameters.yml".
4.  **Create the database:** "php bin/console doctrine:database:create"
5.  **Update the database schema:** "php bin/console doctrine:schema:update --force"
6.  **Start the server:** "php bin/console server:run"

#### Remarks

*   The repository name is "MVC_My_Quiz".
*   All source files (except unnecessary files) must be included in the repository.


`} code='https://github.com/lucaszebre/My_Quizz'>

                        <Reveal v={{
                            hidden: {opacity:0 , y:175,width:'100%'},
                            visible: {opacity:1 , y:0},
                            }}
                            >
                            <div className="flex  w-full cursor-pointer relative flex-col items-start justify-start md:items-end md:justify-end">
                                <div className="w-full relative h-[20rem]">
                                    <Image fill={true} src={"/myquizz.png"} alt="KanbanTask-app" />

                                </div>
                                <div className="text-[4vw] font-300 gap-3  flex justify-end flex-row flex-wrap text-white mt-[0.5em] mb-[1em] md:text-[2.5vw] lg:text-[1vw] md:font-600">
                                <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                                SYMFONY
                                </span>  
                                <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                                DOCTRINE
                                </span> 
                                <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                                TWIG
                                </span>
                               
                                </div>
                                <h2 className="text-[5vw] md:text-[2.5vw] lg:text-[1.7vw] flex justify-end font-bold text-white mt-[0.5rem]">MYQUIZZ</h2>
                            </div>  
                    </Reveal>
                       
                    </DialogProject>

                    </div> 
                    
                    <div className="flex flex-col items-start gap-10 md:flex-row mt-[5vw] mb-[5vw]  justify-between w-full">
                    <DialogProject  readme={`### my_meetic

#### Repository Name

my_meetic

#### Language

JQuery, PHP

#### Project Overview

This project aims to create a dating website similar to Meetic, focusing on connecting people within a school environment who share common interests. The site will be built using object-oriented PHP, JQuery, and Ajax, with a strong emphasis on data validation and error handling.

#### Skills to Acquire

*   HTML5/CSS
*   JQuery
*   Ajax
*   PHP
*   Object-oriented programming
*   Front-end and back-end data validation

#### Presentation/Restrictions

*   **Visitors:** Can only access registration and login forms.
*   **Database Design:** Pay special attention to the database structure, as it will be evaluated during project defense.
*   **Dropdown Menu:** Each page (except login/registration) should have a JQuery-based dropdown menu.
*   **Error Handling:** Handle all possible error cases (SQL injections, database duplicates, etc.).
*   **jQuery Plugins:** Do not use jQuery plugins.
*   **Bootstrap JavaScript:** Do not use Bootstrap's JavaScript files (bootstrap.js and bootstrap.min.js).

#### Mandatory Features

##### Registration/Login

*   **Minimum Required Information:**
    *   Last name
    *   First name
    *   Date of birth (age verification, 18+ only)
    *   Gender (male, female, other)
    *   City
    *   Email (unique, used for login)
    *   Password (hashed, used for login)
    *   Interests (at least one)

##### My Account Page

*   **Account Information Summary:**
    *   Last name
    *   First name
    *   Date of birth
    *   Gender
    *   Email
    *   Interests
*   **Account Management:**
    *   Change password
    *   Change email
    *   Delete account (soft delete, no actual deletion from the database)

##### Search

*   **Filters:**
    *   Gender (Male/Female/Other)
    *   Location (city, multiple selections allowed)
    *   Interests (Dance, Skateboard, Manga, Unicorn, Cooking/Other)
    *   Age Range (18/25, 25/35, 35/45, 45+)
*   **Search Results:** Displayed as a JQuery-based carousel, each item containing a person's information.

#### Bonus Features

*   **Messaging System:**
    *   Allow members to send messages to each other.
    *   "Messaging" page to view received, sent, and deleted messages.
    *   Display date, sender/recipient, and message content for each message.
*   **Boosted Carousel:**
    *   Add an option to directly contact the selected person from the carousel.

#### Additional Notes

*   All source files, excluding unnecessary files, must be included in the repository.
*   Bonus features will only be evaluated if the mandatory features are fully functional.`}
code='https://github.com/lucaszebre/MyMeetic'>
                        <Reveal v={{
                        hidden: {opacity:0 , y:175,width:'100%'},
                        visible: {opacity:1 , y:0},
                        
                        }}
                        > 
                            <div className="flex flex-col cursor-pointer w-full relative rounded-3xl rounded-gray-300 items-start justify-start">
                                    <div className=" w-full relative h-[20rem]">
                                    <Image fill={true}  src={"/mymeetic.png"} alt="MYMEETIC" />

                                    </div>
                                    <div className="text-[4vw] font-300 gap-3 flex flex-row flex-wrap text-white mt-[0.5em] mb-[1em] md:text-[2.5vw] lg:text-[1vw] md:font-600">
                                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] "'>
                                   PHP
                                    </span>
                                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                                    MYSQL
                                    </span>
                                    <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                                    JQUERY
                                    </span>
                                     <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                                    AJAX
                                    </span>
                                    
                                    </div>
                                    <h2 className="text-[5vw]  md:text-[2.5vw] lg:text-[1.7vw] font-bold text-white mt-[0.5rem]">MYMEETIC</h2>

                            </div>
                            </Reveal>
                        </DialogProject>
                        <DialogProject readme={`### my\_snapchat

#### Introduction

This project aims to recreate a simplified version of the Snapchat application, named "my\_snapchat." The app allows users to send images to friends with a set viewing time limit, after which the images are automatically deleted.

#### Technical Details

*   **Language:** REACT-Native
*   **API Endpoint:** [https://snapchat.epidoc.eu/](https://snapchat.epidoc.eu/)
*   **Deployment:** The app will be deployed on a group member's smartphone for demonstration during the project defense.
*   **External Libraries:** The use of npm packages requires approval from the teaching team.

#### Project Stages

1.  **Authentication:**
    *   Create a signup page (email, password, username).
    *   Create a login page (email, password).
    *   Hide these pages after successful login.
    *   Implement a logout feature.
    *   Consider using a splash screen.

2.  **Core Functionality:**
    *   Allow users to select an image from their gallery or camera.
    *   Display a list of registered users after image capture.
    *   Enable users to select a recipient and set a viewing time limit for the image.

3.  **Receiving Snaps:**
    *   Display the sender's username.
    *   Upon tapping the username, show the snap for the specified duration.
    *   Automatically delete the snap from all storage after the time limit expires and notify the API.

#### Bonus Features

*   User profile pictures.
*   User data editing (email, password, username, profile picture).
*   Account deletion.
*   Adding and removing friends.
*   Drawing or writing on snaps.
*   "Remember me" feature for login.
*   Offline snap saving.

#### Repository

The project's source code, excluding unnecessary files, will be available in the "my\_snapchat" repository.


`} code='https://github.com/lucaszebre/Mysnapchat' >

                        <Reveal v={{
                            hidden: {opacity:0 , y:175,width:'100%'},
                            visible: {opacity:1 , y:0},
                            }}
                            >
                            <div className="flex  w-full cursor-pointer relative flex-col items-start justify-start md:items-end md:justify-end">
                                <div className="w-full relative h-[20rem]">
                                    <Image fill={true} src={"/snapchat.png"} alt="MYSNAPCHAT" />

                                </div>
                                <div className="text-[4vw] font-300 gap-3  flex justify-end flex-row flex-wrap text-white mt-[0.5em] mb-[1em] md:text-[2.5vw] lg:text-[1vw] md:font-600">
                                <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                                REACT NATIVE
                                </span>
                                
                                </div>
                                <h2 className="text-[5vw] md:text-[2.5vw] lg:text-[1.7vw] flex justify-end font-bold text-white mt-[0.5rem]">MYSNAPCHAT</h2>
                            </div>  
                    </Reveal>
                       
                    </DialogProject>

                    </div> 
                    
                    <div className="flex flex-col items-start gap-10 md:flex-row mt-[5vw] mb-[5vw] w-full justify-between ">
                    
                    <DialogProject readme={`# Kanban Task Manager

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
`} demo={'https://kanbanwithapi.vercel.app/'} code={'https://github.com/lucaszebre/kanbanwithapi'}>

                            <Reveal v={{
                                hidden: {opacity:0 , y:175,width:'100%'},
                                visible: {opacity:1 , y:0}
                                }}
                                >
                                <div className="flex flex-col cursor-pointer w-full relative items-start justify-start">
                                    <div className="w-full relative h-[20rem]">
                                    <Image fill={true} src={"/assets/Kanban.jpg"} alt="KanbanTask-app" />

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
                                    <h2 className="text-[5vw] md:text-[2.5vw] lg:text-[1.7vw] flex justify-start font-bold text-white mt-[0.5rem]">KANBAN TASK MANAGER</h2>
                                </div>  
                        </Reveal>
                        </DialogProject>
                        <DialogProject readme={`# Linkedev - A Developer's Link Tree
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
`} demo={'https://linkdev2.vercel.app/'} code={'https://github.com/lucaszebre/linkdev2'}>
                        <Reveal v={{
                        hidden: {opacity:0 , y:175,width:'100%'},
                        visible: {opacity:1 , y:0}
                        }}
                        >
                            <div className="flex flex-col w-full cursor-pointer rounded-3xl rounded-gray-300 items-start justify-start md:items-end md:justify-end">
                                    <div className="w-full relative h-[20rem]" >
                                        <Image fill={true} src={"/assets/LinkDev.jpg"} alt="EntertainnementWeb-app" />
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
                                    <h2 className="text-[5vw] md:text-[2.5vw] lg:text-[1.7vw] font-bold text-white mt-[0.5rem]">LINK DEV </h2>

                            </div>
                            </Reveal>
                            </DialogProject>

                        
                    </div> 
                    <div className="flex flex-col items-start gap-10 md:flex-row mt-[5vw] mb-[5vw] w-full justify-between w-full">
                    <DialogProject readme={`# Invoice Manager

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

You can also include additional sections or details as needed for your specific application.`} demo={'https://invoice-lovat.vercel.app/connexion'} code='https://github.com/lucaszebre/invoice'>
                    <Reveal v={{
                    hidden: {opacity:0 , y:175,width:'100%'},
                    visible: {opacity:1 , y:0}
                    }}
                    width='100%'
                    >
                        <div className="flex w-full relative flex-col cursor-pointer rounded-3xl rounded-gray-300 items-start justify-start">
                                <div className="w-full relative h-[20rem]">
                                    <Image fill={true}  src={"/assets/Invoice.jpg"} alt="EntertainnementWeb-app" />
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
                                <h2 className="text-[5vw] md:text-[2.5vw] lg:text-[1.7vw] font-bold text-white mt-[0.5rem]">INVOICE APP </h2>

                        </div>
                        </Reveal>
                        </DialogProject>
                        <DialogProject readme={`# Audiophile Ecommerce Web App
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


`} demo='https://lucaszebre.github.io/AudiophileEcommerce/' code='https://github.com/lucaszebre/AudiophileEcommerce'>
                        <Reveal v={{
                            hidden: {opacity:0 , y:175,width:'100%'},
                            visible: {opacity:1 , y:0}
                            }}
                            width='100%'
                            >
                            <div className="flex flex-col w-full relative cursor-pointer items-start justify-start md:items-end md:justify-end">
                                <div className="w-full relative h-[20rem]">
                                    <Image fill={true} src={"/assets/Audiophile.jpg"} alt="KanbanTask-app" />
                                </div>
                                <div className="text-[4vw] font-300 gap-3 justify-end  flex flex-row flex-wrap text-white mt-[0.5em] mb-[1em] md:text-[2.5vw] lg:text-[1vw] md:font-600">
                                <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                                REACT.JS
                                </span>
                               
                                
                                </div>
                                <h2 className="text-[5vw] md:text-[2.5vw] lg:text-[1.7vw] flex justify-end text-end font-bold text-white mt-[0.5rem]">Audiophile E-Commerce Website</h2>
                            </div>  
                    </Reveal>
                    </DialogProject>

                       
                        
                    </div>  
                    <div className="flex flex-col items-start gap-10 md:flex-row mt-[5vw] mb-[5vw] w-full justify-between w-full">
                    <DialogProject readme={`# Designo Multi Page
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


`} demo={'https://lucaszebre.github.io/Designo/#/'} code={'https://github.com/lucaszebre/Designo'}>

                    <Reveal v={{
                    hidden: {opacity:0 , y:175,width:'100%'},
                    visible: {opacity:1 , y:0}
                    }}
                    width='100%'
                    >
                        <div className="flex w-full relative flex-col cursor-pointer rounded-3xl rounded-gray-300 items-start justify-start">
                                <div className="w-full relative h-[20rem]">
                                <Image fill={true}  src={"/assets/Designo.jpg"} alt="EntertainnementWeb-app" />

                                </div>
                                <div className="text-[4vw] font-300 gap-3  flex flex-row flex-wrap text-white mt-[0.5em] mb-[1em] md:text-[2.5vw] lg:text-[1vw] md:font-600">
                                <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                                REACT.JS
                                </span>
                             
                                </div>
                                <h2 className="text-[5vw] md:text-[2.5vw] lg:text-[1.7vw] font-bold text-white mt-[0.5rem]">Designo MultiPage Website</h2>

                        </div>
                        </Reveal>
                        </DialogProject>
                        <DialogProject readme={`# Art Gallery Showcase

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


`} demo={'https://lucaszebre.github.io/Galleria-App/'} code={'https://github.com/lucaszebre/Galleria-App'}>

                        <Reveal v={{
                            hidden: {opacity:0 , y:175, width:'100%'},
                            visible: {opacity:1 , y:0}
                            }}
                            width='100%'
                            >
                            <div className="flex flex-col w-full relative cursor-pointer items-start justify-start md:items-end md:justify-end">
                                <div className="w-full relative h-[20rem]">
                                    <Image fill={true} src={"/assets/images/thumbnail-project-6-large.webp"} alt="KanbanTask-app" />
                                </div>
                                <div className="text-[4vw] font-300 gap-3 justify-end  flex flex-row flex-wrap text-white mt-[0.5em] mb-[1em] md:text-[2.5vw] lg:text-[1vw] md:font-600">
                                <span className='bg-[#201726]  rounded-lg border px-3 py-1 border-[rgba(255,255,255,.02)] opacity-80"'>
                                REACT.JS
                                </span>
                               
                                
                                </div>
                                <h2 className="text-[5vw] md:text-[2.5vw] lg:text-[1.7vw] flex justify-end text-end font-bold text-white mt-[0.5rem]">ART GALLERY SHOWCASE</h2>
                            </div>  
                    </Reveal>
                    </DialogProject>

                       
                        
                    </div> 
                      <h1 className='text-white font-bold text-6xl'>Want to meet me ? </h1>
                </div>
            </div>
        </div>
    )
}

export default Projets
