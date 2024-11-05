# Project Backend Setup Guide

This document outlines the steps to set up the Backend.

## Prerequisites

Ensure you have the following installed on your machine:

- Python 3.12 or later
- pip

## Step 1: Setting Up the Virtual Environment

1. Navigate to the server folder:
    ```bash
    cd server
    ```

2. Create a virtual environment:
    ```bash
    python3 -m venv venv
    ```

3. Activate the virtual environment:
    - On macOS and Linux:
      ```bash
      source venv/bin/activate
      ```
    - On Windows:
      ```bash
      venv\Scripts\activate
      ```

## Step 2: Install Required Dependencies

Install all dependencies from `requirements.txt`:
    ```bash
    pip install -r requirements.txt
    ```

## Step 3: Configure PostgreSQL Database locally

1. Ensure PostgreSQL is running:
    - On macOS with Homebrew:
      ```bash
      brew services start postgresql@14
      ```
    - On Linux:
      ```bash
      sudo service postgresql start
      ```
    - On Windows: Start the PostgreSQL service via `pgAdmin` or services.msc.

2. Open your PostgreSQL client using the default `postgres` database:
    ```bash
    psql -U $(whoami) -d postgres
    ```

3. Create a new user (if one doesn’t exist):
    ```sql
    CREATE USER <your_username> WITH PASSWORD '<your_password>';
    ```

4. Create a new database (if you don't want to use `postgres`):
    ```sql
    CREATE DATABASE <your_database>;
    ```

5. Grant privileges to the newly created user:
    ```sql
    GRANT ALL PRIVILEGES ON DATABASE <your_database> TO <your_username>;
    ```

6. (Optional) To create a database for your system user if you want to use it:
    ```sql
    CREATE DATABASE $(whoami);
    ```

## Step 4: Configure Your `.env` File

Rename the sample.env in the server folder and add environment variables

## Step 5: Run migrations 

Run migrations 
```bash
    python manage.py migrate
```
    
## Step 6: Running the Django Application

Run the application:
    ```bash
    python manage.py runserver
    ```

## File Structuring

![alt text](image1.jpeg)
