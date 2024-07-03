
# Searchable Web Application

This project is a Next.js web application built using TypeScript, designed to provide a searchable interface with browse and detailed pages. The application leverages the Mantine UI library and showcases best practices in Next.js, React, and TypeScript development.

## Features

- **Browse Page**
  - Search functionality with debounce
  - (Optional) Filters for search results
  - (Optional) Download search results as CSV
  - Pagination or lazy loading for search results
- **Details Page**
  - Detailed view of selected item from the Browse page
  - (Optional) Add items to favorites
  - (Optional) Highlight items added to favorites
- **Navigation**
  - Seamless navigation between Browse and Details pages
  - (Optional) View items in favorites

## Technologies Used

- **Next.js** (version 14 or later)
- **TypeScript**
- **Mantine** (UI Library)
- **Storybook** (for technical documentation)
- **Jest** (for testing)

## Setup and Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Run the development server:
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

4. Run Storybook for component documentation:
   ```sh
   npm run storybook
   ```
   Open [http://localhost:6006](http://localhost:6006) in your browser to view the component documentation.

5. Run tests:
   ```sh
   npm run test
   ```

## Project Structure

- `pages/`
  - `browse.tsx`: Browse page with search and pagination functionality.
  - `details/[id].tsx`: Details page for selected items.
- `components/`: Reusable components used across the application.
- `context/`: Context for state management (e.g., search results, favorites).
- `styles/`: Styling for the application.
- `.storybook/`: Configuration for Storybook.
- `tests/`: Unit tests for components and data fetching logic.

## API Usage

This project uses a public API for data fetching. You can choose any public API for development (e.g., [PokeAPI](https://pokeapi.co/api/v2/), [GitHub API](https://api.github.com/), etc.).

## Approach

1. **Setup Project**: Initialize a Next.js project with TypeScript, ESLint, Prettier, Mantine, and Storybook.
2. **Browse Page**: Implement search, filters, CSV download, pagination/lazy loading, and data fetching.
3. **Details Page**: Implement detailed view, navigation, and optional favorites functionality.
4. **State Management**: Use React context or a state management library to manage the state.
5. **Testing**: Write unit tests for components using Jest and mock API responses.
6. **Documentation**: Document components and functionality using Storybook.

## Testing

- Unit tests for components and data fetching logic are written using Jest.
- Mock API responses are used for predictable testing behavior.
- Various scenarios are tested, including successful searches, empty results, and error handling.

## Deployment

To build the application for production:
```sh
npm run build
npm start
```

## Contact

For any questions or inquiries, please contact [shubhamt619@gmail.com].
