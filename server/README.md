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

## Step 3: Running the Django Application

Run the application:
    ```bash
    python manage.py runserver
    ```

