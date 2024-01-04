# Getting Started with The Movie Tracker

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), [Tailwind CSS](https://tailwindcss.com/) and [Redux Toolkit](https://redux-toolkit.js.org/).

## Overview

The Movie Tracker is a React app that allows users to track and manage their movie preferences. The app features user authentication, movie categorization, favorites management, and a dark mode toggle. This README provides instructions on how to set up and run the app locally, highlights key features, and explains the user interface.

## Local Setup

To run the app locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/imtinanzia/the-movie-tracker.git
cd the-movie-tracker
```

2. Install dependencies using one of the following commands:

```bash
yarn
or
yarn install
```

3. To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_MOVIE_API_TOKEN`

`REACT_APP_BASE_URL`

`REACT_APP_IMAGE_URL`

3. Start the development server:

### `yarn start`

4. Open your browser and navigate to http://localhost:3000 to view the app.
   The page will reload if you make edits.\
   You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Features

### User Authentication

- The app uses the username stored in cookies for user identification.
- If a username is present in the cookie, the user will be redirected to the home page; otherwise, they will be directed to the login page.

### Movie List

- The app displays a list of movies categorized as currently watching, suggested to watch, and previously watched.
- Hovering over a movie reveals detailed information, including a play button and a heart icon.

### Favourites Management

- The heart icon indicates whether a movie is in the user's favorites list.
- Clicking the heart icon will toggle the movie's status as a favorite, with a corresponding toaster message.
- Favourite movies are stored using cookies.

### Search Bar

- A debounced search bar is located in the header, accessible from any page.
- Results are displayed when the user stops typing.

### Dark Mode

- The app supports a dark mode toggle at the bottom.
- Dark mode preferences are stored in cookies.
- Movie Details Page
- The movie details page includes the movie title, an "Add to Wishlist" button, a poster, genres, description, rating, and views.
- A play button redirects to the movie details page, and another poster with a play button redirects to the movie URL.

## Authors

- [@imtinanzia](https://github.com/imtinanzia)
