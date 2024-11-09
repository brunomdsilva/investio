# Investio

Investio is a portfolio project created to demonstrate programming and development skills with Laravel, React, and Inertia. This application simulates an investment platform, featuring assets, transactions, holdings, and portfolio distribution.

> **Note**: This project may be updated over time as I gain more experience and have more time to add new features and improvements. The goal is to develop a robust and well-rounded portfolio project that reflects my skills.

## Installation

1. Clone the repository and navigate into the project directory.
2. Run `composer install` to install PHP dependencies.
3. Run `npm install` to install JavaScript dependencies.
4. Copy `.env.example` to `.env` and update the database credentials.
5. Run `php artisan key:generate` to generate the application key.
6. Run `php artisan migrate --seed` to set up and seed the database.
7. (Optional) Start the Laravel scheduler with `php artisan schedule:work` to keep asset values updated periodically, simulating real-world market fluctuations as asset values change over time.
8. Run `npm run dev` to start the development server.

## License

This project is licensed under the MIT License.
