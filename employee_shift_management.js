//Task 1: Create an Employees Array of Employee Objects

const employees = [
    { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] }, //John work schedule
    { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] }, //Sara work schedule
    { name: 'David', shifts: [{ day: 'Monday', hours: 8 }] }, //David work schedule
    { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }, //Emily work schedule
];

//Task 2: Create a Function to Display Employee Shift Details

function displayEmployeeShifts(employee) { //function to display employee shifts
    console.log(`Employee's Shift - ${employee.name}`); //output displaying employee's name assigned to the shift
    employee.shifts.forEach(shifts => { //finding the shifts for each employee
        console.log(`Day of Shift - ${shift.day}, Hours of Shift - ${shift.hours}`) //output displaying shift days and hours
    });
};

//Task 3: Create a Function to Assign a New Shift

function assignShift(employeeName, days, hours) { //function to assign shifts to workers
    const employee = employees.find(worker => worker.name === employeeName); //find employees
    const hasShift = employee.shifts.find(shift => shift.day === day); //finding shifts for employees
    if (hasShift) {
        console.log(`${employeeName} already has a shift`) //error message if an employee already ahs a shift
    } else { //else function if not assigned to a shift
        employee.shifts.push({day,hours});
        console.log(`${employeeName} will work ${hours} on ${day}`) //output diplays when and what hours an employee is working
    };
};