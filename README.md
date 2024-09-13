# User Management Application

## Overview
This project is a **User Management Application** built using **React**, **Redux Toolkit**, and **TypeScript**. The application displays a list of users with features for filtering and deleting users. It demonstrates the usage of advanced filtering, state management via Redux Toolkit, and strongly typed components with TypeScript.

## Features
- **User List Display**: Fetches users from an API and displays them in a table format.
- **Advanced Filtering**: Users can filter the table by name, username, email, and phone number using search inputs.
- **Delete User**: Users can be deleted from the list dynamically.
- **Loading Spinner**: A spinner is shown while fetching users from the API.
- **State Management with Redux Toolkit**: The application uses Redux Toolkit for managing the global state of users.
- **TypeScript Support**: All components and logic are strongly typed for better maintainability and developer experience.

## Tech Stack
- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: A toolset for efficient Redux development.
- **TypeScript**: A strongly typed superset of JavaScript for building scalable applications.
- **Bootstrap**: For styling components and making the UI responsive.

## Key Concepts

### 1. **React**
React is used to create a dynamic and responsive user interface. Components like `TableBody`, `TableHead`, `UserRow`, and `SearchPanel` are designed to manage different parts of the application, ensuring modularity and code reusability.

### 2. **Redux Toolkit**
Redux Toolkit simplifies state management by providing powerful abstractions and tools such as:
   - **createSlice**: For creating Redux state slices, including reducers and actions.
   - **createAsyncThunk**: For handling asynchronous logic (like fetching data from an API).
   - **useDispatch**: A hook to dispatch actions.
   - **useSelector**: A hook to select data from the Redux store.
   
The `userSlice.ts` file manages the user data, fetching it from an API and allowing for user deletion with actions and reducers.

### 3. **TypeScript**
TypeScript is used to ensure type safety across the application. The project uses TypeScript's type annotations for:
   - **Component Props**: Ensuring each component receives the correct types for props, such as `UserRow` and `TableBody`.
   - **Redux State**: Defining types for the state managed by Redux (e.g., `User[]`).

### 4. **Advanced Filtering**
The table supports advanced filtering by allowing users to input text in search fields corresponding to each column (`name`, `username`, `email`, `phone`). The search results update in real-time as the user types.

### 5. **Component Structure**
The component structure is modular and reusable. Some important components are:
   - **TableHead**: Renders the table headers.
   - **TableBody**: Displays user rows and handles filtering logic.
   - **UserRow**: Displays individual user data and includes a delete button.
   - **SearchPanel**: Allows users to search/filter the table data based on multiple fields.

### 6. **User Deletion**
Users can be removed from the table by clicking the delete icon in each row. This functionality is handled through:
   - **Redux State**: Dispatching the `deleteUser` action to update the global state.
   - **onDelete**: A function passed down as a prop to handle the deletion logic in child components.

## Project Structure

```bash
src/
│
├── components/
│   ├── SearchPanel.tsx  # Component for advanced filtering
│   ├── TableBody.tsx    # Renders table rows with user data
│   ├── TableHead.tsx    # Renders table headers
│   ├── TableInfo.tsx    # Displays total users count
│   ├── UserRow.tsx      # Renders a row for each user with delete functionality
│
├── store/
│   ├── index.ts         # Redux store setup
│   ├── userSlice.ts     # Redux slice for users (fetch, delete)
│
├── App.tsx              # Main application file
├── index.tsx            # Application entry point
└── types.ts             # Common TypeScript types
