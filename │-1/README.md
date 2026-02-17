# rnellis-list-all

This is an Angular web application that allows users to create and manage lists. The application features a landing page for viewing collections of lists and dedicated pages for viewing and editing specific lists.

## Features

- **Collections Page**: Displays a collection of lists.
- **List View Page**: Allows users to view a specific list.
- **List Edit Page**: Enables users to edit existing lists or create new ones.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ricnellis/rnellis-list-all.git
   cd rnellis-list-all
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application (development)**:
   ```bash
   npm start
   ```
   - In Codespaces / devcontainer the server is exposed on port `4200`. If you run locally and need to bind the host manually:
     ```bash
     npx ng serve --host 0.0.0.0 --port 4200
     ```

4. **Open your browser**:
   Navigate to `http://localhost:4200` (or the forwarded Codespaces port) to view the application.

## Project Structure

- `src/`: Contains the source code for the application.
- `src/app/`: The main application module and components.
- `src/core/`: Core services and models.
- `src/features/`: Feature modules for collections and list management.
- `src/shared/`: Shared components and pipes.
- `src/environments/`: Environment-specific configurations.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.