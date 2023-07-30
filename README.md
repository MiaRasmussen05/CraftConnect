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
  
  __Site Navigation FLowchart__

## Skeleton

  #### __Wireframes

  #### __Databases

## Surface

  ### Visual Design

  #### __Typography__

  #### __Color Scheme__

## Agile Methodology

  An Agile approach was taken for the management of this project.

  - User stories were written for each features on the side.

  - The user stories were then managed in a Kanban board, which was created inside the GitHub Projects.

## Features

  ### Existing Features

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

  __As a Site User:__

  - __CREATE__: 

  - __READ__:

  - __UPDATE__:

  - __DELETE__: