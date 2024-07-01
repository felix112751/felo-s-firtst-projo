USAGE
TO USE THIS PROGRAM:

Clone the Repository: Clone this repository to your local machine.

Open index.html in a Browser: Since this program uses prompt and console.log, it's best to run it in an environment that supports JavaScript execution, such as a web browser console or a Node.js environment.

STUDENT GRADE CALCULATOR


This JavaScript program allows you to calculate a student's grade based on their marks input. It defines two functions: one for calculating the grade (calculateGrade) and another for generating the grade based on user input (studentGradeGenerator).

Functions
calculateGrade
The calculateGrade function takes a numeric input (marks) and returns a corresponding grade based on predefined ranges:

A: Marks greater than 79
B: Marks between 60 and 79 (inclusive)
C: Marks between 50 and 59 (inclusive)
D: Marks between 40 and 49 (inclusive)
E: Marks below 40
studentGradeGenerator
The studentGradeGenerator function prompts the user to enter a student's marks (within the range of 0 to 100). It then validates the input, calculates the grade using the calculateGrade function, and outputs the result to the console.

If the entered marks are valid (a number between 0 and 100), it displays the corresponding grade. Otherwise, it informs the user that the input is invalid.

NET SALARY CALCULATOR


This JavaScript program calculates the net salary of an employee based on their basic salary and benefits. It utilizes predefined rates for deductions such as KRA, NHIF, and NSSF.

Features
calculateNetSalary Function: Calculates the net salary based on the provided basic salary and benefits, taking into account the following rates:

KRA (PAYE) Rate: 30% of the gross salary
NHIF Rate: 2.5% of the gross salary
NSSF Rate: 6% of the gross salary
netSalaryCalculator Function: Prompts the user to input the employee's basic salary and benefits. It validates the input and calculates and displays the gross salary, deductions (PAYE, NHIF, NSSF), and net salary.


SPEED DETECTOR


This JavaScript program determines if a vehicle's speed exceeds the speed limit and calculates demerit points accordingly. It also checks if the demerit points exceed a threshold that could lead to license suspension.

Features
speedDetector Function: Checks the provided speed against a predefined speed limit (70 km/h):

If the speed is within the limit, it returns "Ok".
If the speed exceeds the limit, it calculates demerit points based on the excess speed and returns a message indicating the demerit points.
If the demerit points exceed a threshold of 12 points, it notifies that the license will be suspended.
speedDetectorProgram Function: Prompts the user to input the speed of the car in kilometers per hour (km/h). It validates the input and displays the result of the speed detection.
