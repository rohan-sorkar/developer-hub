# developer-hub
A simple web application, where developers can find some useful videos related to development and programming👦.

#### [Live-App](https://developer-hub-rohan.netlify.app/)

## How to run the app
1. Either fork or download the app and open the folder in the cli
2. Install all dependencies using `npm install` command
3. Start the web app server using the `npm run dev` command. the app will be served at http://127.0.0.1:5173/

## How to use this app
first of all, when you enter on the application, you will get a sign in page. from where you can sign in or sign up your account. remember, you must be a authenticated user to get access the underlying pages of the application. after logging your account you will get the home page. where you will have lists of video. choose your favorite one and watch it. or if you want to search or filter a video, in the top of the home page you will get a search input field and a lists of tag section by using those you can search or filter your desire video. when you click on a video it will redirect you to the video details page. where you can like, dislike, comment on that video. video details page also have a related videos section. in that section you can prioritize your related videos by dragging and dropping the video. 

## Features
- users can register and login
- users won’t see anything before they logged in
- users can see a lists of video in the home page
- videos will have infinite scrolling system
- users can search for a video
- users can filter the videos by selecting the tag
- users can reset the selected tags
- each video will have a details page where users can watch and see video description
- every video details page will have their related videos and related videos section
- related videos section will have drag and drop functionality
- users can like and dislike an video
- users can comment on a video even with emoji
- users can like on a comment also they can remove the like
- users can edit and delete their own comment


## Dependencies
- React (typescript)
- Redux-toolkit
- Tailwind css
- React-hook-form
- React-infinite-scroll-component
- React-beautiful-dnd
- React-router-dom
- Sweetalert2
- Emoji-picker-react
- etc. etc.

## What the app look like
![Alt text](https://github.com/rohan-sorkar/developer-hub/blob/main/blueprint/user%20interface/home-page.png)
![Alt text](https://github.com/rohan-sorkar/developer-hub/blob/main/blueprint/user%20interface/video-page.png)
![Alt text](https://github.com/rohan-sorkar/developer-hub/blob/main/blueprint/user%20interface/comment-section.png)
![Alt text](https://github.com/rohan-sorkar/developer-hub/blob/main/blueprint/user%20interface/register-page.png)
![Alt text](https://github.com/rohan-sorkar/developer-hub/blob/main/blueprint/user%20interface/notfound.png)