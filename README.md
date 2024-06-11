# Ron Swanson Quotes

A simple React app to display random quotes from Ron Swanson and save your favorite quotes to a list. 

## Features

- Fetches random quotes from the [Ron Swanson Quotes API](https://ron-swanson-quotes.herokuapp.com/v2/quotes).
- Displays the quote in a styled card.
- Allows users to save their favorite quotes to a list.

## Live Demo

Check out the live demo of the app [here](https://ron-swanson-quotes.vercel.app).

## Screenshots

![Screenshot](screenshots/main.png)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/ron-swanson-quotes.git
    cd ron-swanson-quotes
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

    Or, if you added the "dev" script:

    ```bash
    npm run dev
    ```

    The app should now be running on `http://localhost:3000`.

## Usage

- Click the "New Quote" button to fetch a new random quote.
- Click the "Save Quote" button to save the current quote to the list of saved quotes.

## Deployment

This project is deployed using Vercel. To deploy your own copy:

1. Push your local repository to GitHub.
2. Go to [Vercel]((https://ron-swanson-quotes-rho.vercel.app/)), connect your GitHub account, and import the project.
3. Follow the instructions to deploy the app.

## Project Structure

```plaintext
├── public
│   ├── index.html
├── src
│   ├── components
│   │   ├── QuoteCard.js
│   │   ├── SavedQuotes.js
│   ├── App.js
│   ├── App.css
│   ├── QuoteCard.css
│   ├── SavedQuotes.css
│   ├── index.js
├── .gitignore
├── package.json
├── README.md


### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
