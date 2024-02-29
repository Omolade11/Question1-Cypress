# Cypress Test Automation

This repository contains automated test scripts written in Cypress for testing the PractiTest website.

## Prerequisites

Before running the Cypress test scripts, ensure that you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [Cypress](https://www.cypress.io/)

## Setup

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/your-repository.git


2. Navigate to the project directory:

    ```bash
    cd your-repository

3. Install project dependencies:

    ```bash
    npm install

## Running the Cypress Test Scripts

To run the Cypress test scripts, follow these steps:

1. **Ensure that the PractiTest website is accessible and ready for testing.**

2. **Open a terminal and navigate to the project directory.**

3. **Run the following command to open the Cypress Test Runner:**

   ```bash
   npx cypress open

Cypress Test Runner will open asking one to pick between E2E testing and Component testing, Select E2E testing and a list of available test scripts will be displayed.

Select the 'question-1.cy.js' test script from the list, and Cypress will execute the test against the PractiTest website.

Once the test is completed, Cypress will display the test results in the Test Runner interface.
