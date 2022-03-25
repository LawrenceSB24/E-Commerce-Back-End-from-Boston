# E-Commerce-Back-End-from-Boston

An e-commerce application that allows for a company to compete with other e-commerce companies. Uses back-end Express.js API to enable Sequelize interaction with a MySQL database. 

## User Story

```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria
```
GIVEN a functional Express.js API

WHEN I add my database name, MySQL username, and MySQL password to an environment variable file (.env)

THEN I am able to connect to a database using Sequelize

WHEN I enter schema and seed commands

THEN a development database is created and seeded with test data

WHEN I enter the command to invoke the application

THEN my server is started and the Sequelize models are synched to the MySQL database

WHEN I open API GET routes in Insomnia for categories, products, or tags

THEN the data for each of these routes displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia

THEN I am able to successfully create, update, and delete data in my database
```

## Packages Used
> 1. Express: UI for application
> 2. MySQL2: Enables MySQL connection to Node.js
> 3. Sequelize: Connects Express.js API to MySQL databases
> 4. dotenv: Stores sensitive data like MySQL password, username, and database name


**NOTE** This next section WILL BE deleted upon completion

## Database Models (schema.sql)
* `Category`
    * `id`
        * Interger.
        * Doesn't allow null values.
        * Set as primary key.
        * Uses auto increment.
    
    * `category_name`
        * String.
        * Doesn't allow null values.

* `Product`
    * `id`
        * Interger.
        * Doesn't allow null values.
        * Set as primary key.
        * Uses auto increment.
    
    * `product_name`
        * String.
        * Doesn't allow null values.

    * `price`
        * Decimal.
        * Doesn't allow null values.
        * Validates that the value is a decimal.
    
    * `stock`
        * Integer.
        * Doesn't allow null values.
        * Set a default value of `10`.
        * Validates that the value is numeric.
    
    * `category_id`
        * Integer.
        * Referneces the `Category` model's `id`.

* `Tag`
    * `id`
        * Integer.
        * Doesn't allow null values.
        * Set as primary key.
        * Uses auto increment.
    
    * `tag_name`
        * String.

* `ProductTag`
    * `id`
        * Integer.
        * Doesn't allow null values.
        * Set as primary key.
        * Uses auto increment.
    
    * `product_id`
        * Integer.
        * References the `Product` model's `id`.
    
    * `tag_id`
        * Integer.
        * References the `Tag` model's `id`.


===============================================================

## Associations

1. `Product` belongs to `Category`

    * `Category` has many `Product` models.

    * a category can have multiple products but only one product can belong to one category.

2. `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models

    * Allow products to have multiple tags and tags to have multiple products.
        * Use `ProductTag` through model.

**Hint** Remember foreign key relationships to match columns created in respective models.

===============================================================

## API Routes

* Fill out unfinished routes to perform create, update, read, and delete operations via Sequelize models:

    * `product-routes.js`
    * `tag-routes.js`
    * `category-routes.js`

    ***Note*** Functionality for creating the many-to-many relationship for the products has been created

    **Hint** Review mini-project code for syntax help and use model's column definitions to determine req.body for POST and PUT routes

===============================================================

## Seeding Database

After models and routes have been created
    * Run `npm run seed` to seed data to your database so you can test the routes

===============================================================

## Sync Sequelize to the Database on Server Start

Create the code needed in server.js to sync Sequelize models to the MySQL database on server start