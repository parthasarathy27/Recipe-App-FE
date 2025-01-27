# Recipe App with Favorites and Filters

This **Recipe App** allows users to browse and search for recipes, save their favorite recipes, and apply filters to find specific types of recipes. Built with **ReactJS**, **Redux**, and styled using **CSS**, this app allows users to interact with a recipe API, view detailed recipes, and manage a list of favorites.

## Features

- **Browse Recipes**: Users can browse through a collection of recipes fetched from an external API.
- **Search Recipes**: Allows users to search for recipes based on keywords, ingredients, or dietary preferences (e.g., vegetarian, gluten-free).
- **Recipe Details**: Displays detailed information about recipes, including ingredients, instructions, preparation time, and serving size.
- **Favorites**: Users can mark recipes as favorites and view them in a favorites list.
- **Filters**: Recipes can be filtered based on categories like breakfast, lunch, dinner, or dietary restrictions.
- **State Management**: Utilizes **Redux** for state management, including actions, reducers, and the store.
- **Loading State**: A loading spinner is displayed while fetching data from the API.
- **Alert System**: A notification/alert system that informs users about important actions, such as empty search results.

## Tech Stack

- **Frontend**: ReactJS, Redux, CSS
- **State Management**: Redux
- **API**: Edamam Recipe API (https://api.edamam.com)
- **Styling**: Plain CSS (can be extended to SCSS or CSS-in-JS)

## Project Structure

```
src/
├── api/
│   └── recipeApi.js        # Contains API fetching logic
├── Components/
│   ├── Alert.js            # Displays alerts or notifications
│   ├── Favourite.js        # Handles displaying and managing favorites
│   ├── Home.js             # Main home page with recipe search and listing
│   ├── Loader.js           # Displays loading spinner during API calls
│   ├── Main.css            # Main CSS file for styling
│   ├── Main.js             # Main file that aggregates other components
│   ├── NavBar.js           # Navigation bar for the app
│   ├── RecipeInstruction.js # Displays detailed recipe instructions
│   ├── SearchList.js       # Displays list of searched recipes
│   └── SearchListAlert.js  # Displays alert for no search results
├── Redux/
│   ├── RecipeActions.js    # Redux actions for fetching and managing recipes
│   ├── RecipeReducer.js    # Redux reducer for managing recipe state
│   ├── RecipeTypes.js      # Action types for recipes
│   └── store.js            # Redux store configuration
├── App.js                  # Main app component
├── App.test.js             # Test file for the App component
├── index.css               # Global CSS styles
├── index.js                # Entry point for React app
├── reportWebVitals.js      # Measures app performance
├── setupTests.js           # Sets up testing environment
├── .gitignore              # Git ignore file
├── README.md               # Project documentation
└── package.json            # Project dependencies and scripts
```

## API Integration

The app fetches recipe data from the **Edamam Recipe API**. It uses the following API endpoint to get recipes based on user input:

```
https://api.edamam.com/search?q={query}&app_id={your_app_id}&app_key={your_app_key}&from=0&to=50
```

### API Setup

To start fetching recipe data, you'll need to replace the API credentials (app_id and app_key) in the `recipeApi.js` file, located in the `src/api/` folder.

1. Go to [Edamam API](https://developer.edamam.com/) and sign up for an API key.
2. Replace the following variables in the `recipeApi.js` file with your own credentials:

```js
const appId = 'your_app_id';
const appKey = 'your_app_key';
```

## Setting Up the Project Locally

### Prerequisites

Before you begin, ensure that you have the following installed:

- **Node.js** (version 12 or higher)
- **npm** (Node Package Manager)

### Steps to Set Up

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/Recipe-App-FE.git
   cd Recipe-App-FE
   ```

2. Install the project dependencies:

   ```bash
   npm install
   ```

3. Set up your API credentials:

   - Follow the instructions above to obtain your API keys from Edamam and update them in the `src/api/recipeApi.js` file.

4. Start the app locally:

   ```bash
   npm start
   ```

   The app should now be running on `http://localhost:3000`.

### Project Features in Detail

#### 1. Recipe Search
The app allows users to search for recipes based on:
- **Keywords** (e.g., "pizza", "pasta").
- **Ingredients** (e.g., "chicken", "spinach").
- **Dietary restrictions** (e.g., vegetarian, gluten-free).

#### 2. Recipe Details
When a user selects a recipe, they can see:
- **Ingredients**: A list of ingredients needed to make the recipe.
- **Instructions**: Step-by-step guide to preparing the dish.
- **Preparation time** and **Serving size**.

#### 3. Favorites List
- Users can mark recipes as favorites, which will then be saved in the state and accessible in the "Favorites" section.
  
#### 4. Filters
Users can filter recipes based on:
- **Meal type** (e.g., breakfast, lunch, dinner).
- **Dietary restrictions** (e.g., vegetarian, gluten-free).

#### 5. Loading and Error Handling
The app displays a loading spinner while fetching data from the API and shows an error message if no recipes are found.

#### 6. Alerts
An alert system notifies users if no recipes match the search criteria or if there is an issue with fetching data from the API.

## Redux Setup

### Actions (`Redux/RecipeActions.js`)

Actions are responsible for dispatching API calls and updating the state with the fetched recipe data.

### Reducers (`Redux/RecipeReducer.js`)

Reducers handle the state changes based on dispatched actions, updating the app state with the list of recipes, favorite recipes, and any search-related data.

### Store (`Redux/store.js`)

The store configures the app’s state management with Redux and integrates it with React using the `Provider` component.

## Testing

Testing is set up using **Jest** and **React Testing Library**. You can run the tests by executing:

```bash
npm test
```

## Deployment

You can deploy the app to services like **Vercel**, **Netlify**, or **GitHub Pages**. These platforms will automatically build and deploy your React app from your repository.
