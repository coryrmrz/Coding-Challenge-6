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