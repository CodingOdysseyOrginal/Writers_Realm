# Writer's Realm

## Description  

Writer's Realm is a platform designed to help writers overcome the daunting challenge of starting from scratch. Instead of staring at a blank document, users can log in, set the number of chapters they want, and begin writing and editing their work. The platform also allows writers to publish their chapters, share them with a community of fellow writers, and receive valuable feedback on their projects as they grow.  

## Tech Stack  

- **Frontend:** React, Tailwind CSS  
- **Backend:** Express, Node.js  
- **Authentication & Database:** Supabase  
- **Testing:** Vitest, Playwright  
- **Development Tools:** Husky  

## Key Features  

- **User Authentication** – Secure sign-up and login using Supabase Auth, allowing users to create personal profiles.  
- **Chapter Writing & Storage** – Users can create, edit, and store their chapters in a database, accessible only to the author.  
- **Content Management** – Edit or delete stored chapters as needed.  
- **Publishing & Feedback** – Users can publish chapters for public viewing, where others can leave comments and provide feedback.  

More features and improvements will be added as the project evolves!  

## MVP 1 - Currently in Progress  

- Set up the basic file structure for the frontend and backend.  
- Set up a Docker container for continuous deployment with GitHub Hooks.  
- Install continuous testing with Husky to maintain workflow consistency.  
- Implement authentication to establish user sessions and connect them to their data in the database.  
- Define user access levels for authenticated vs unauthenticated users.  
- Set up a basic homepage accessible to all users.  
- Link signed-in users to their profiles, including personal data such as bio, username, and profile picture.  

## MVP 2  

- Develop a basic text editor with routes to save progress and define chapter details.  
- Implement the ability to edit and delete individual chapters.  
- Introduce Playwright testing at this stage to validate API routes and frontend functionality.  

## MVP 3  
- Create a publish page
- Enable publishing of chapters to the publish section of the application.  
- Allow other users to leave comments, including their username and timestamp.
- Allow editing of comments or deleting.  

## Stretch Goals  

- **Personal Notes & Writer’s Comments** – Allow users to add private notes to each chapter for brainstorming and self-feedback.  
- **Collaborative Writing** – Introduce an option for co-authoring stories, where multiple users can contribute to the same project.  
- **Version History** – Implement a versioning system so users can track changes and revert to previous drafts if needed.  
- **Rich Text Formatting** – Enhance the text editor with options for bold, italics, headings, bullet points, and embedded links.  
- **Dark Mode** – Provide a dark mode toggle for a better reading and writing experience.  
- **Tagging System** – Allow users to add genre tags to their works for better discoverability.  
- **Customisable Profile Pages** – Let users showcase their work, bio, and social links in a personalised profile.  
- **AI-Powered Writing Assistant** – Integrate AI-powered writing suggestions to help with grammar, style, and inspiration.  
