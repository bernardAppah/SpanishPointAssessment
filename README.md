# Spanish Point Assessment
---

## Overview
An automation solution that employs Cypress to perform the following actions:
+ Visit https://www.matchingengine.com/
+	Expand ‘Modules’ in the header section
+	Click ‘Repertoire Management Module’ from the menu
+	Scroll to the ‘Additional Features’ section
+	Click ‘Products Supported’
+	Assert on the list of supported products under the heading ‘There are several types of Product Supported:’

---

## Installation
+ First step would involve cloning the repo by employing the following command
  
  ```
  git clone https://github.com/bernardAppah/SpanishPointAssessment.git
  ```
  
+ Navigate into the project directory if not already on it.
+ Ensure you have Node.js installed. You can check this by running:
  ```
  node -v
   ```
+ Install the necessary packages using npm:
   ```
   npm install
   ```
+ If you have the Cypress test runner, you can run the test with the following command
   ```
   npx cypress open --browser chrome
   ```
  ![Sample1](img_1.png)
  ![Sample2](img_2.png)
  ![Sample3](img_3.png)

+ Alternatively, you can  do a headless run of the test with the following command:
   ```
  npx cypress run --browser chrome --spec "cypress/e2e/MatchingEngine.cy.js"
  ```
  ![Sample4](./img.png)

---

## Solution decisions
 


