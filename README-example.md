# S1-2-Bootstrap-and-SASS

## 📄 Description - Task Statement

This project involves creating a responsive web page using Bootstrap and SASS. The implementation follows a design mockup for a bookmark manager landing page, with custom styling using SASS to override Bootstrap defaults.

## 💻 Technologies Used

-   HTML5
-   CSS3
-   Bootstrap 5
-   SASS/SCSS
-   JavaScript (for form validation and modal handling)

## 📋 Requirements

-   Node.js (for SASS compilation)
-   NPM (for package management)
-   VS Code with Ritwick Dey's "Live Sass Compiler" extension (recommended for development)

## 🛠️ Installation

1. Clone this repository:

    ```sh
    git clone https://github.com/alejandrolemamarques/1.2.-Bootstrap-and-SASS.git
    ```

    > **Note:** The repository name contains periods (.) which may cause issues with folder naming on some systems. You may need to rename the directory after cloning or specify a different directory name during cloning:
    >
    > ```sh
    > git clone https://github.com/alejandrolemamarques/1.2.-Bootstrap-and-SASS.git my-directory
    > ```

2. Navigate to the project directory:

    ```sh
    cd my-directory
    ```

3. Install dependencies:

    ```sh
    npm install
    ```

4. If using VS Code, install the "Live Sass Compiler" extension:
    - Open VS Code
    - Go to Extensions (Ctrl+Shift+X)
    - Search for "Live Sass Compiler" by Ritwick Dey
    - Click Install

## ▶️ Execution

1. Open the `index.html` file in your browser to view the project.
2. To compile SASS changes, you have two options:

    **Option 1: Using Live Sass Compiler (Recommended for VS Code users)**

    - Open the project in VS Code
    - Click on "Watch Sass" in the status bar at the bottom of VS Code
    - The extension will automatically compile SASS files to CSS when changes are saved

    **Option 2: Using npm scripts**

    For development (watches for changes and automatically recompiles):

    ```sh
    npm run sass
    ```

    For production (creates minified CSS):

    ```sh
    npm run sass:build
    ```

    These scripts are defined in the package.json file and use the sass package that's installed as a dev dependency.

## 🌐 Deployment

The project is a static website that can be deployed to any web hosting service:

1. Upload all files to your web hosting service
2. Ensure the file structure remains intact
3. Make sure the `main.css` file is properly linked in the HTML

## 🏗️ Project Structure

-   `index.html` - Main HTML file
-   `main.scss` - SASS source file with custom styling
-   `main.css` - Compiled CSS file
-   `Imagenes/` - Directory containing all project images

## 📱 Features

-   Fully responsive design using Bootstrap's grid system
-   Interactive components:
    -   Mobile-friendly navigation with modal menu
    -   Feature tabs with custom styling
    -   Custom accordion for FAQ section
    -   Browser extension cards with decorative elements
-   Form validation with custom styling and error messages
-   Custom button styling with hover and focus states
-   Decorative elements using CSS pseudo-elements
-   Accessibility features:
    -   ARIA labels for interactive elements
    -   Semantic HTML structure
    -   Focus states for keyboard navigation
-   Social media integration in footer
-   Custom color scheme using SASS variables

## 🎨 Design Approach

The SCSS is organized into logical sections:

-   Variables (colors, typography, component overrides)
-   Typography styles
-   Layout & Spacing
-   Components
    -   Navigation
    -   Modal
    -   Cards
    -   Forms
    -   Accordion
-   Buttons
-   Decorative Elements
-   Utilities

Bootstrap components are extended with custom styling while maintaining the responsive behavior of the framework.

## 🤝 Contributions

Contributions to improve the project are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature:
    ```sh
    git checkout -b feature/your-feature-name
    ```
3. Make your changes:
    - Follow the existing code style
    - Keep the SCSS organization consistent
    - Ensure responsive design for all additions
    - Test across different browsers and screen sizes
4. Commit your changes with descriptive commit messages:
    ```sh
    git commit -m "Add feature: brief description of the changes"
    ```
5. Push to your branch:
    ```sh
    git push origin feature/your-feature-name
    ```
6. Open a Pull Request against the main branch.

### Contribution Guidelines

-   Maintain the existing code style and organization
-   Keep Bootstrap as the core framework
-   Use SASS variables and mixins where possible
-   Add appropriate comments for complex code
-   Ensure all changes are responsive
-   Test on multiple browsers and screen sizes
-   Update documentation if necessary
