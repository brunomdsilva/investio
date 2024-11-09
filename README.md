# Investio

Investio is a portfolio project created to demonstrate programming and development skills with the RILT stack: React, Inertia, Laravel, and Tailwindcss. This application simulates an investment platform, featuring assets, transactions, holdings, and portfolio distribution.

> **Note**: This project may be updated over time as I gain more experience and have more time to add new features and improvements. The goal is to develop a robust and well-rounded portfolio project that reflects my skills.

## Prerequisites

-   PHP
-   Composer
-   Node.js & npm
-   A database (MySQL, PostgreSQL, etc.)

## Installation

1. Clone the repository and navigate into the project directory.
2. Run `composer install` to install PHP dependencies.
3. Run `npm install` to install JavaScript dependencies.
4. Copy `.env.example` to `.env` and update the database credentials.
5. Run `php artisan key:generate` to generate the application key.
6. Run `php artisan migrate --seed` to set up and seed the database.
7. (Optional) Start the Laravel scheduler with `php artisan schedule:work` to keep asset values updated periodically, simulating real-world market fluctuations as asset values change over time.
8. Run `npm run dev` to start the development server.

## Tools and Libraries Used

Throughout the development of this project, I used several tools and packages to enhance structure, type safety, and functionality:

-   **Laravel Blueprint**: Used to generate database structure and boilerplate code. This helped with a quick and efficient setup for models, factories, and migrations.
-   **Laravel Data and TypeScript Transformer**: These tools provided a bridge between backend data models and TypeScript types in the frontend, ensuring consistent type safety across the application.
-   **Spatie Options**: This package was used to manage select input options, making it easy to handle predefined values and improve data consistency in forms.
-   **Axios**: Employed for making asynchronous HTTP requests within React components, which helps avoid prop drilling, keeps the codebase cleaner, and improves performance.

## Future Ideas

Here are some planned features and improvements that I’d like to implement as the project evolves:

-   **Virtual Wallet**: Implement a virtual wallet for users to have a “real” balance that can be used to buy or sell assets.
-   **Multilingual Support**: Add language options for English and Portuguese to make the app accessible to a broader audience.
-   **Asset Value History**: Track historical changes in asset values, allowing users to view trends over time.
-   **General Improvements**: Continue to refine the user interface, add new features, and improve performance and code quality.

## Contact

For questions or feedback, you can reach me through:

-   [GitHub](https://github.com/brunomdsilva)
-   [Email](mailto:brunosilva010601@gmail.com)
-   [LinkedIn](https://www.linkedin.com/in/bruno-m-silva-24bb4222a/)

## License

This project is licensed under the MIT License.
