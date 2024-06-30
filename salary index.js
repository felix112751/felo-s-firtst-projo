function calculateNetSalary(basicSalary, benefits) {
    
    const KRA_RATE = 0.3;
    const NHIF_RATE = 0.025;
    const NSSF_RATE = 0.06;


    let grossSalary = basicSalary + benefits;

    
    let payee = grossSalary * KRA_RATE;
    let nhifDeductions = grossSalary * NHIF_RATE;
    let nssfDeductions = grossSalary * NSSF_RATE;

    
    let netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    
    return {
        basicSalary: basicSalary,
        benefits: benefits,
        grossSalary: grossSalary,
        payee: payee,
        nhifDeductions: nhifDeductions,
        nssfDeductions: nssfDeductions,
        netSalary: netSalary
    };
}


function netSalaryCalculator() {
    
    let basicSalary = parseFloat(prompt("Enter basic salary:"));

    
    let benefits = parseFloat(prompt("Enter benefits:"));

    
    if (!isNaN(basicSalary) && !isNaN(benefits) && basicSalary >= 0 && benefits >= 0) {
        
        let salaryDetails = calculateNetSalary(basicSalary, benefits);

        
        console.log(`Basic Salary: ${salaryDetails.basicSalary}`);
        console.log(`Benefits: ${salaryDetails.benefits}`);
        console.log(`Gross Salary: ${salaryDetails.grossSalary}`);
        console.log(`PAYE: ${salaryDetails.payee}`);
        console.log(`NHIF Deductions: ${salaryDetails.nhifDeductions}`);
        console.log(`NSSF Deductions: ${salaryDetails.nssfDeductions}`);
        console.log(`Net Salary: ${salaryDetails.netSalary}`);
    } else {

        console.log("Invalid input. Salary and benefits must be positie numbers.");
    }
}