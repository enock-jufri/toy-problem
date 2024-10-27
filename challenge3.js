/** 
 * prompts user for basic salary and benefits
 * slipts the input into repective variables 
 * calls the respective functions to output 
 **/ 

process.stdout.write("Enter basic salary and benefits in the format salary benefits: ");
process.stdin.on("data", (data) => {
  const salary = data.toString().trim()
  const [basic, benefits] = salary.split(' ')

  const gSalary = parseInt(basic) + parseInt(benefits)
  const netSalary = gSalary - (kra(gSalary) + nhif(gSalary) + nssf(gSalary))

  console.log("paye: ",kra(gSalary))
  console.log("nhif: ",nhif(gSalary))
  console.log("nssf: ",nssf(gSalary))
  console.log('gross salary: ',gSalary)
  console.log('net salary: ',netSalary)  

  process.stdin.pause();
});

// kra function to calculate tax
const kra = function (salary) {
  switch (true) {
    case salary <= 24000:
      return salary * 0.1;
    case salary > 24000 && salary <= 32333:
      return salary * 0.25;
    case salary > 32333 && salary <= 500000:
      return salary * 0.3;
    case salary > 500000 && salary <= 800000:
      return salary * 0.325;
    default:
      return salary * 0.35;
  }
};

// function calculates nhif deductions by taking in gross salary
function nhif(salary) {
    if (salary <= 5999) return 150;
    else if (salary >= 6000 && salary <= 7999) return 300;
    else if (salary >= 8000 && salary <= 11999) return 400;
    else if (salary >= 12000 && salary <= 14999) return 500;
    else if (salary >= 15000 && salary <= 19999) return 600;
    else if (salary >= 20000 && salary <= 24999) return 750;
    else if (salary >= 25000 && salary <= 29999) return 850;
    else if (salary >= 30000 && salary <= 34999) return 900;
    else if (salary >= 35000 && salary <= 39999) return 950;
    else if (salary >= 40000 && salary <= 44999) return 1000;
    else if (salary >= 45000 && salary <= 49999) return 1100;
    else if (salary >= 50000 && salary <= 59999) return 1200;
    else if (salary >= 60000 && salary <= 69999) return 1300;
    else if (salary >= 70000 && salary <= 79999) return 1400;
    else if (salary >= 80000 && salary <= 89999) return 1500;
    else if (salary >= 90000 && salary <= 99999) return 1600;
    else if (salary >= 100000) return 1700;
    else return 0;
}

// functions calculates nssf by taking gross salary as parameter
function nssf(salary){
    return 0.06*salary
}