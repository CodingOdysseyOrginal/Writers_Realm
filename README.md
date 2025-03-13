# Writer's Realm

## Description

Writer's Realm is a platform designed to help writers overcome the daunting challenge of starting from scratch. Instead of staring at a blank document, users can log in, set the number of chapters they want, and begin writing and editing their work. The platform also allows writers to publish their chapters, share them with a community of fellow writers, and receive valuable feedback on their projects.

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Express, Node.js
- **Authentication & Database:** Supabase
- **Testing:** Vitest, Playwright
- **Development Tools:** Husky

## Key Features

- **User Authentication**: Secure sign-up and login using Supabase Auth, allowing users to create personal profiles.
- **Chapter Writing & Storage**: Users can create, edit, and store their chapters in a database, accessible only to the author.
- **Content Management**: Edit or delete stored chapters as needed.
- **Publishing & Feedback**: Users can publish chapters for public viewing, where others can leave comments and provide feedback.

More features and improvements will be added as the project evolves!

## MVP 1 - Currently in progress

- Set up basic file structure for front and backend
- Set up a Docker container for continuous deployment with GitHub Hooks. 
- Install continuous testing along with Husky to keep track of the flow  
- Set up authentication so I have a start point with my Database and connecting the users to their data along with where I want the user to have access to on the frontend before logging in
- Set up a basic homepage for any users to see
- Connect the signed-in user to their profile with personal data such as bio, username, and maybe picture

## MVP 2 

- Create a basic text editor for users to use along with the routes to save their progress and then select the chapter's information.
- Create the ability to edit each chapter as well as delete the chapter.
- Make sure to add in playWright at this point to test routes.

## MVP 3

- Set up the ability to publish the whole chapter to a public area within the application.
- allow other users to add comments with the username and time on the comment as well.

## Stretch goals

- Add personal notes and writers comments
  











