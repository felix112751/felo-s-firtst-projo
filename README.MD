## JavaScript Challenges Repository
This repository contains solutions to three toy problems implemented in JavaScript. Each problem is solved in its own file within the repository. Below are details on each challenge and how to use the solutions provided.

## Challenges
 ### Challenge 1: Student Grade Generator
Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond to the correct grade:

A > 79
B - 60 to 79
C - 50 to 59
D - 40 to 49
E - less than 40
File: studentGradeGenerator.js

### Challenge 2: Speed Detector
Write a program that takes the speed of a car as input. If the speed is less than or equal to 70 km/h, it should print "Ok". Otherwise, for every 5 km/h above the speed limit (70 km/h), it should give the driver one demerit point and print the total number of demerit points. If the driver accumulates more than 12 points, it should print "License suspended".

File: speedDetector.js

### Challenge 3: Net Salary Calculator
Write a program to calculate an individual’s Net Salary based on inputs of basic salary and benefits. The program calculates:

Gross Salary (Basic Salary + Benefits)
PAYE (Tax deduction based on KRA rates)
NHIF Deductions (Based on NHIF rate)
NSSF Deductions (Based on NSSF rate)
Net Salary (Gross Salary - PAYE - NHIF Deductions - NSSF Deductions)
File: netSalaryCalculator.js

## Usage Instructions
Clone the repository to your local machine:

bash

git clone <REPOSITORY SSH KEY>
Navigate to the directory of the specific challenge you want to run:

bash

cd <challenge_directory>
Run the JavaScript file using Node.js:



### Notes
Ensure Node.js is installed on your machine to run the JavaScript files.
Modify tax rates and thresholds as per your jurisdiction's requirements.
Input validations are included to handle common input errors gracefully.