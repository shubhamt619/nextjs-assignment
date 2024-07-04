
# Searchable Web Application

This project is a Next.js web application built using TypeScript, designed to provide a searchable interface with browse and detailed pages. The application leverages the Mantine UI library and showcases best practices in Next.js, React, and TypeScript development.

## Features

- **Browse Page**
  - Search functionality with debounce
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
   git clone https://github.com/shubhamt619/nextjs-assignment.git
   cd nextjs-assignment
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
- `.storybook/`: Configuration for Storybook.
- `__tests__/`: Unit tests for components and data fetching logic.
- `src`
  - `stories`: Stories for storybook.
  - `app`
      - `components/`: Reusable components used across the application.
            - `PokemonCard.tsx`: Card to display basic pokemon details and add to favourites button.
            - `PokemonDetailsCard.tsx`: Card to display pokemon details and add to favourites button.
            - `PokemonList.tsx`: List to display Pokemons, and to lazy load / infinite scroll them.
            - `SearchInput`: A search input for searching pokemons.
      - `context/`: Context for state management (e.g. favorites).
      - `details/[id]/page.tsx`: Details page for selected pokemon.
      - `services/api.ts`: Api service to fetch data.

## API Usage

This project uses a public API for data fetching. You can choose any public API for development (e.g., [PokeAPI](https://pokeapi.co/api/v2/), [GitHub API](https://api.github.com/), etc.).

## Testing

- Unit tests for components and data fetching logic are written using Jest.
- Mock API responses are used for predictable testing behavior.
- Various scenarios are tested, including successful searches, empty results, and error handling.

## Deployment

To build the application for production:
```sh
npm run build
npm run start
```

## Contact

For any questions or inquiries, please contact [shubhamt619@gmail.com].
