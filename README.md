# Star Wars DB

A webapp that uses [SWAPI](https://swapi.dev/) to display information on characters from the Star Wars universe!

## Using the app

### Install Dependencies
```
npm install
```

### Run the App
```
npm run start
```

### Building For Production
```
npm run build
```

## About Star Wars DB

### The Problem

Build a web app that does the following:
- Displays a paginated list of Star Wars characters
- Displays a detail page to view more information about each character
- Remembers the user's page in the list after clicking for a character detail

### The Solution

Use the Fetch API to communicate with SWAPI.dev, then create a single-page application with React to display it. The app uses React Router and React Hooks to navigate between pages and keep track of which page the user is on.

### Technical Decisions

For state management, React Router's built-in hooks provided a simple way to keep track of which page the user was on as they navigate throughout the site. Redux would also work well, especially for a larger app with more data to keep track of, but for a project of this size it wasn't necessary to add another library like Redux.

Components are structured in a way that uses container components to handle how things work, and presentational components that handle how things look. For example, `CharacterList` is used to query SWAPI.dev using Fetch and keep track of pagination. It passes that data down to `CharacterListItem` which simply receives a character as a prop and presents the necessary info. This allows for a better separation of concerns, which helps with understanding code and better follows SOLID principles.

### Trade-offs

If I were to spend more time on the project I would first work to clean up code and modularize where I can. One example is that the fetch calls take place inside each component, but it would be better to have that code moved to a separate module. This would allow for reusability if necessary, while also making the code more readable and easier to understand.

If I wanted to add more features to the app like users liking characters, I could use Redux for state management instead of react hooks. It can better act as a single source of truth for the app's state, and is likely a more scalable option over hooks for a larger app.
