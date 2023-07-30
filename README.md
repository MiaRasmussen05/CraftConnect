# Craft|Hub Frontend

Welcome to Craft|Hub! This website was made for my last project with Code Institute for my React project. DIY is only getting bigger by the minute and that is what Craft|Hub is all about. To connect, share, inspire. Learn from others and share your own experinces. Follow your favorite users or your friends. Keep an eye out on events. Make your own list to never forget your DIY ideas and get started on them. Comment and like posts and be apart of community.

[Link to live side on Heroku](https://craftconnect-6c932655ea4f.herokuapp.com/)

[Link to live side fpr the API on Heroku](https://drf-api-crafthub-d1d89ee1951b.herokuapp.com/)


![GitHub shield last commit](https://img.shields.io/github/last-commit/MiaRasmussen05/craftconnect-frontend?color=red)
![GitHub shield language count](https://img.shields.io/github/languages/count/MiaRasmussen05/craftconnect-frontend?color=orange)
![GitHub shield contributors](https://img.shields.io/github/contributors/MiaRasmussen05/craftconnect-frontend?color=yellow)
![GitHub shield top language](https://img.shields.io/github/languages/top/MiaRasmussen05/craftconnect-frontend?color=brightgree&label=html)

# Table of Contents

[UX Design](#ux-design)
- [Strategy](#strategy)
  - [User Stories](#user-stories)
- [Scope](#scope)
- [Structure](#structure)
- [Skeleton](#skeleton)
  - [Wireframes](#wireframes)
- [Surface](#surface)
  - [Visual Design](#visual-design)
    - [Typography](#typography)
    - [Color Scheme](#color-scheme)

[Agile Methodology](#agile-methodology)

[Features](#features)
- [Existing Features](#existing-features)
- [CRUD](#crud)
- [Other Features](#other-features)
- [Future Features](#future-features)

[Technology](#technology)
- [Languages Used](#languages-used)
- [Libraries and Programs Used](#libraries-and-programs-used)
- [Components](#components)

[Testing](#testing)
- [Automated Testing](#automated-testing)
- [Manual Test Cases](#manual-test-cases)
- [Code Validation](#code-validation)
- [Debugging](#debugging)
- [Unfixed Bugs](#unfixed-bugs)
- [Test on Different Browsers and Screen Sizes](#test-on-different-browsers-and-screen-sizes)

[Deployment](#deployment)

[Credits](#credits)
- [Resources Used](#resources-used)
- [Content](#content)
- [Honourable mentions](#honourable-mentions)

# UX Design
  My goal for creating this app was to create a social platform only for the creativity that lives in all of us. I have found out that using the React library and its implemented feature has helped to improve the user experience more then I originally thought:

  - Allow users to be able to learn, experince and inspire others to make their own projects.
  - Helping the user to avoid refreshing the page all the time.
  - Quick responce form the website to the user.
  - Creating a space where a user can comment, like and keep up on new events that keeps their creativity going.

This site was created respecting the Five Planes of website design:

## Strategy

  __Typical User__

  *Site User*

  A typical site user would be any soul that has any kind of creativity inside them. All ages that want to either share thei own ideas, reading other peoples tips, fact or ideas.

  __User Stories__

  All the user stories where managed in the Kanban board which was created inside GitHub Projects. User stories were then prioritized with the MoSCoW approach and the labels on the Kanban board where used to manage this. The Kanban board was split into three columns to manage the various stages of development:

  1. To do: This item hasn't been started yet.
  2. In Progress: This item is actively being worked on in the Backend and Frontend.
  3. Done: All tasks have been completed.

## Scope
  
  An MVP (Minimum Viable Product) approach was taken to the development of this site. The main features deemed as basic requirements for this site were:

  - Account Registration
  - CRUD Functionality (For logged in users)
  - Device Responsiveness

  For a more detailed explanation of all existing features see [Existing Features](#existing-features). [Future Features](#future-features) were still within the possible scope of this project, they were not necessary at this point in time for the site to still work.

## Structure
  
  - The Craft|Hub website is interactive, both for non registered, non logged-in users and for users signed into their account. 
  - It depends on login status on what they can see though. When the user is logged out the pages: Home, and Sign In/Up are available from the Navbar they can also see user profiles but only the most popular once. 
  - When the user is logged in Feed, Liked, Events, Ideas, Signout and Profile Page also become available to the user, here they can also like and comment on posts.

## Skeleton

  #### __Wireframes__

  <details>
  <summary>Wireframes Home/Feed/Liked pages</summary>
  <a href="https://imgur.com/zS09DNP"><img src="https://imgur.com/zS09DNP.png" title="source: imgur.com" /></a>
  </details>
  <br>

  <details>
  <summary>Wireframes Event Page</summary>
  <a href="https://imgur.com/PutFPOd"><img src="https://imgur.com/PutFPOd.png" title="source: imgur.com" /></a>
  </details>
  <br>

  <details>
  <summary>Wireframes Ideas Page</summary>
  <a href="https://imgur.com/2knOzi8"><img src="https://imgur.com/2knOzi8.png" title="source: imgur.com" /></a>
  </details>
  <br>

  <details>
  <summary>Wireframes Profiles</summary>
  <a href="https://imgur.com/LGoFbt3"><img src="https://imgur.com/LGoFbt3.png" title="source: imgur.com" /></a>
  </details>
  <br>

  <details>
  <summary>Wireframes Login Page</summary>
  <a href="https://imgur.com/hXWTb1m"><img src="https://imgur.com/hXWTb1m.png" title="source: imgur.com" /></a>
  </details>
  <br>

  <details>
  <summary>Wireframes Signup Page</summary>
  <a href="https://imgur.com/WIEmkTY"><img src="https://imgur.com/WIEmkTY.png" title="source: imgur.com" /></a>
  </details>
  <br>

  ### __Databases__

  Data normalisation to structure each model to help reduce data redundancy and improve data integrity. This was used after setting out all of the information required for the site.

  ![Databases](https://imgur.com/LlYfNNi.png)

## Surface

  ### Visual Design

  #### __Typography__

  I went for the already used font style "DM Sans" from the walkthrough to be my sites font, with a secondary font of 'sans-serif'. I did this to keep the writing easy to read and to fit with the minimalistic classic style of the site. 

  #### __Color Scheme__

  I went for minimalistic color scheme with teal for the main color that is used to show buttons and some backgrounds to make all of these easily distinguishable. I choose teal because it represent creativity.
    The color pallet was made with [Coolors](https://coolors.co/).

  ![Color scheme](https://imgur.com/1IoJVS9.png)

# Agile Methodology

  An Agile approach was taken for the management of this project.

  - User stories were written for each features on the side.

  - The user stories were then managed in a Kanban board, which was created inside the GitHub Projects.

# Features

  ## Existing Features

  __Logo/Favicon__

  ![Logo](https://imgur.com/EQ2WaP2.png)

  __Navigation Bar__

  Logged Out

  ![Logged out nav bar full screen](https://imgur.com/vpdfkeJ.png)
  ![Logged out nav bar smaller screens](https://imgur.com/ukUgfra.png)

  Logged In

  ![Logged in nav bar full screen](https://imgur.com/y6jnAiy.png)
  ![Logged in nav bar smaller screens](https://imgur.com/dv9F9r6.png)
  <details>
    <summary>Logged in nav bar drop down</summary>
    <a href="https://imgur.com/1auSce4"><img src="https://imgur.com/1auSce4.png" title="source: imgur.com" /></a>
  </details>

  <br>

  __Home/Feed/Liked Pages__

  - The home page is the first page a user sees it is where all posts from all users show up after being posted, the feed and liked pages are the exact same in layout. 
  - The feed page is for a users to see the people they follows posts where the liked page is for the posts a user has liked"

  ![Home/Feed/Liked pages full screen](https://imgur.com/Rsjtx6T.png)
  ![Home/Feed/Liked pages smaller screens](https://imgur.com/x2Wcb47.png)

  __Post Page__

  - The Post page is linked to each post, it is also here a user cna comment on a post or answser to a comment if it is their own post. This is only possible for loggedin users. 
  - The owner of the post can as well edit and delete a post on the post page.

  ![Post page](https://imgur.com/Av34rmg.png)

  <details>
    <summary>Post create page</summary>
    <a href="https://imgur.com/K2ZWwja"><img src="https://imgur.com/K2ZWwja.png" title="source: imgur.com" /></a>
  </details>
  <details>
    <summary>Post edit page</summary>
    <a href="https://imgur.com/n4PZ4JI"><img src="https://imgur.com/n4PZ4JI.png" title="source: imgur.com" /></a>
  </details>

  <br>

  __Events Page__

  - The Event page is only for logged in users. This is where a user can keep themselves up to date if any exisitng events are happening that they would like yo join.
  - On the event page you can read more about the event if it has some content in it. 
  - It is possible for all users to click to join the event also the owner of the event.
  - It is though only the owner of the event that can edit and delete it.

  ![Events page](https://imgur.com/7GAXkEZ.png)
  ![Event page](https://imgur.com/bpqU7tV.png)

  <details>
    <summary>Events create page</summary>
    <a href="https://imgur.com/LfDlC0Y"><img src="https://imgur.com/LfDlC0Y.png" title="source: imgur.com" /></a>
  </details>
  <details>
    <summary>Events edit page</summary>
    <a href="https://imgur.com/xUlsgk3"><img src="https://imgur.com/xUlsgk3.png" title="source: imgur.com" /></a>
  </details>

  <br>

  __Ideas Page__

  - The Ideas page is for the eyes of the profile owner only.
  - Here they can add ideas for new DIY projects, edit and delete them.
  - They can also make a todo list for one of these ideas so it can become a reality.

  ![Ideas page](https://imgur.com/0EZgGz6.png)

  __Profile__

  - Every user have their own profile where tey can see their own post or another user scroll through the posts
  - This page also tells you how many posts, how many followers, and how many they follow.

  ![Profile](https://imgur.com/40FMXMy.png)

  <details>
    <summary>Profile edit page</summary>
    <a href="https://imgur.com/Mv3BwHT"><img src="https://imgur.com/Mv3BwHT.png" title="source: imgur.com" /></a>
  </details>

  __Auth Pages__

  Login

  ![Login page](https://imgur.com/aKSva0K.png)

  Signup

  ![Signup page](https://imgur.com/4tjlKr6.png)

  __Buttons__

  Profile

  - The profile buttons are to edit items for the profile.

  ![Profile buttons](https://imgur.com/kYxL72e.png)

  CRUD

  ![CRUD buttons](https://imgur.com/JxbWAF8.png)

  ## CRUD

  __As a Visiting User:__
  - __READ__: 
    - A visiting user I can view the posts as well as profiles of users.

  __As a Site User:__

  - __CREATE__:
    - As a user I have signed up and therefor have a profile.
    - As a user I can create posts as well as comment on them.
    - I can add all the events I know and join any I am intressted in.
    - I have my own ideas page so I can remember and plan my next project. 

    <br>

  - __READ__:
    - As a user I can see all posts, and comments.
    - I can look through the events and serch for them.
    - I can read my own ideas.
    - I can look through other users profiles.

    <br>

  - __UPDATE__:
    - As a user I can edit my own posts and comments.
    - As a user I can edit my own events.
    - As a user I can edit everything in my own ideas page.
    - I can edit my own profile.

    <br>

  - __DELETE__:
    - Site users can delete any of their own posts or comments.
    - I can delete my own events.
    - As a site user I can delete everything on my ideas page.
  
  ## Other Features

  - Infinite Scroll
  - Error messages for creating a post, event, task.
  - New Badge in events
  
  ![New Badge](https://imgur.com/6Sr3jgj.png)

  ## Future Features

  - A future feaute could be to be able to delete your profile again.
  - Adding more then one image at a time maybe 3-4.
  - Messages for when someone follow you, like or comments on your posts.
  - Seeing users that follow you or who I liked your posts.

# Technology

  ### Languages Used

  - HTML
  - CSS
  - JavaScript
  - SQL (Postgres)

  ### Libraries and Programs Used

  - __Github__: Was used to store the project code and display the project in GitHub Pages.
  - __Git__: Was used for version control, the Gitpod terminal to commit and push to GitHub.
  - __Heroku__: Where used for site Deployment.
  - __Cloudinary__: WHere used for serving static media files.
  - __ElephantSQL__: Used for PostgreSQL database hosting.
  - __React.js__: Used for Front-end application.
  - __React-Bootstrap__: Where used for CSS styling library.
  - __Google Chrome, Microsoft Edge, Mozilla Firefox, Safari__: Where all used for site testing - on alternative browsers.
  - __Google Dev Tools__: Were used to test and troubleshoot the webpage as well as fix problems with responsive design and styling.
  - __Figma__: Was used to create the wireframes.
  - __Am I Responsive__: Used for takking a screenshots of the final project for the README.
  - __Font Awesome__: To add icons to the site.
  - __Favicon__: For creating the favicon.
  - __Jwt-decode__: Used to decode and extract information from a JWT token.
  - __Axios__: Promise based HTTP client for the browser and node.js. Used to make HTTP requests from throughout the application.
  - __Shields__: Was used to add different shields into the README.

 ## Components

  Several of the components have been reused throughout this project:

  - AxiosDefault.js: For ease of communication with the backend API.
  - Asset.js: To supply the loading spinner throughout the site.
  - MoreDropdown.js: To allow users to edit/delete their posts, events ideas, tasks and edit things on their profile.
  - CurrentUserContext.js: To confirm that a user is logged-in and to determine what functionality is available to that user.
  - UseRedirect.js: Redirects the user to another page if they are not authorised to be on the page they are trying to access.
  - Utils.js: Supplies functionality to all of the components that uses the Infinite Scroll.

# Testing

  ## Automated Testing
  ## Manual Test Cases
  ## Code Validation

  - CSS: No errors were found when passing any of the css files through the official W3C CSS validator. ANd the 4 warnings found was from the change to the scrollbar.

  ![W3C Validator](https://imgur.com/JcVmyQd.png)

  - JSHint: The following warnings were raised, and have been intentionally ignored as they are in relation to later version of ES:

    1. 'const' is available in ES6 (use 'esversion: 6').
    2. 'import' is only available in ES6 (use 'esversion: 6').
    3. Unclosed regular expression.
    4. 	'Optional chaining' is only available in ES11 (use 'esversion: 11').
    5. 'export' is only available in ES6 (use 'esversion: 6').
    6. 'destructuring binding' is available in ES6 (use 'esversion: 6').
    7. 	'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
    8. 'spread operator' is only available in ES6 (use 'esversion: 6').
    9. 'async functions' is only available in ES8 (use 'esversion: 8').

  ## Debugging

  Most Bugs were gone after 5 minutes or replaced but these 2 took me quite a bit to figure out and then fix.

  - One of the bugs happened every time I would try and log in, everything would turn white and I had to update to go back to the login page. This had something to do with the fact I hadn't updated the CLIENT_ORIGIN and CLIENT_ORIGIN_DEV in my Config Vars on Heroku so my deployed page could not work with my backend.

  - The second was everything in my ideas page would not load, edit or delete before updating the whole page. This took a long time finding out that I had missid adding setIdeas={setIdeas} on to all the imported forms on my taskspage. 

  ## Unfixed Bugs

  - A bug I could not figure out how to fix in time was the fact that when yo go to edit an event you to write the dates in again. I did find a way so this would not happen but then every time you would edit it, the dates would have counted down with one day and you would have to update them again.

  ## Test on Different Browsers and Screen Sizes

  |   Tests   |   Small (≥576px) |  Medium (≥768px)   |   Large (≥992px)   |   Functionality (Pass)   |
|----------|:----------------:|:------------------:|:------------------:|:------------------------:|
|Chrome    |      ☑           |         ☑         |         ☑         |            ☑             |
|Safari    |      ☑           |         ☑         |         ☑         |            ☑             |
|Edge      |      ☑           |         ☑         |         ☑         |            ☑             |
|Firefox   |      ☑           |         ☑         |         ☑         |            ☑             |

# Deployment

  ## Create the Heroku App:

  - Log in on Heroku and then go to the Dashboard
  - Click "__New__" and select then "__Create new app__" from the drop-down menu in Heroku
  - Add a new unique app name (UNIQUE-NAME) and choose the relevant region
  - Click the "__Create app__" button

  ## Creating (ElephantSQL) the PostgreSQL database:'

  - Log on to ElephantSQL
  - Then click "__Create New Instance__"
  - Set up a then plan by giving it a name and then select the "Tiny Turtle" for the free plan.
  - Then click "__Select Region__" and choose the appropriate data centre which is the nearest by location
  - Click "__Review__"
  - Check over all details and then click "__Create Instance__"
  - Back to the dashboard and click on the name of the newly created database
  - Copy the database URL from the page from the details section

  ## Create env.py file:

  - You need to create env.py file, and then checking it is included in the .gitignore file
  - Add then "__import os__" to env.py file at the top
  - Set the environment variables

  - For DATABASE_URL to the URL copied from ElephantSQL: os.environ["DATABASE_URL"]="<copiedURL>"
  - Set SECRET_KEY variable can be any multiple letters from 20 +: os.environ["SECRET_KEY"]="MY_SECRET_KEY"
  - Add any others that is needed as well

  ## Connecting Cloudinary:

  - Log on to Cloudinary
  - From the Cloudinary dashboard, you copy the API Environment variable
  - Add this to the env.py file: os.environ["CLOUDINARY_URL"] = "<COPIED_CARIABLE>"
  - Then in the INSTALLED_APPS list of the settings.py file, above django.contrib.staticfiles you add: __'cloudinary_storage',__
  - Then you add, below django.contrib.staticfiles: __'cloudinary',__
  - Add to the settings.py, to make sure to define Cloudinary as the static file and media storage:

    STATICFILES_STORAGE = 'cloudinary_storage.storage.StaticHashedCloudinaryStorage'

    DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage'

  ## Add Heroku Config Vars:

  - In Heroku dashboard you need to add a few things 
  - Go to settings tab on Heroku
  - Then add five new config vars:
    1. DATABASE_URL (value "<copiedURL>")
    2. SECRET_KEY (value "MY_SECRET_KEY")
    3. PORT (value "8000")
    4. DISABLE_COLLECTSTATIC (value "1") 
    - The last step will be removed again before deployment
    5. CLOUDINARY_URL (value "<COPIED_CARIABLE>")
    6. And any other Config Vars you will need 

  ## First Deployment

  This project was deployed on Heroku using Code Institute's walkthrough videos. After creating the GitHub repository, the steps taken to create the Heroku App were as follows:

  - Run terminal command npx create-react-app . --use-npm to create React app, once the workspace has loaded.
  - Run terminal command npm start to check app is working, once the app is installed.
  - Run terminal command npm install react-bootstrap@1.6.3 bootstrap@4.6.0 to install Bootstrap.
  - In App.js, replace the standard React Header element with some text and remove the logo import.
  - Confirm the added test renders in the browser preview then add, commit and push changes.
  - Create a new Heroku app.
  - Go to 'Settings' and confirm that the "heroku/nodejs" buildpack is present.
  - Click on the 'Deploy' tab and click on GitHub in the 'Deployment Method'.
  - Go to 'App connected to GitHub'. Search and select the relevant repository and click 'Connect'.
  - Go to 'Manual Deploy' section and click 'Deploy Branch'.
  - Click 'Open App' button to view newly deployed app.

  ## Last Deployment

  - Add the Procfile at the root of the project.
  - Committed all finalised code and pushed to Github repositories.
  - Then open up the dashboard for your react app in Heroku.
  - Remember to manually Deploy Branch.
  - Click the "Open App" button.
  - Just to make sure it matches the development version, then test the final deployed version of the app.

# Credits

  ## Resources Used

  - Code Institutes 'Django Rest Framework Walkthrough Videos'
  - Code Institutes 'Moments Walkthrough Videos'
  - React Bootstrap documentation
  - W3C Schools 
  - Stack Overflow for enquiries relating to React.js.
  - Slack

  ## Content
    
  - All images, logo, and text have been made and written by me, this does not include post by other people and event information.

  ## Honourable mentions

  - My mentor Rohit for the support and helping me understand what I needed to do.
  - All my favorite people that have gone through and tested my site whenever I asked.
  - Martin CI Tutor for helping me find out my config vars need to be updated.
  - Rebecca CI Tutor for going over 404 error for problems in my settings file for my deployed DRF API.