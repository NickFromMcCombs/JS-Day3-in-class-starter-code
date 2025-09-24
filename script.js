const members = [
    {first_name:"John", last_name: "Doe", email:"johndoe@example.com", birthdate:"1999-12-31", salary:80000},
    {first_name:"Jane", last_name: "Smith", email:"janesmith@example.com", birthdate:"2015-09-01", salary:75000}
];

class Employee {
    constructor(firstName, lastName, email, birthdate, salary = 0) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.birthdate = birthdate;
      this.salary = Number(salary) || 0;
    }   

    // Returns all fields in the object
    getEmployees() {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        birthdate: this.birthdate,
        salary: this.salary,
      };
    }

    // Static method to add a new employee
    static addEmployee(firstName, lastName, email, birthdate, salary) {
      return new Employee(firstName, lastName, email, birthdate, salary);
    }

    // Method to edit employee fields
    editEmployee(updates) {
      Object.assign(this, updates);
    }
}

const nick = new Employee("Nick", "Star", "nas4226@eid.utexas.edu", "1990-07-15", 90000);
console.log(nick);
console.log(nick.firstName);
console.log(nick.email);

const staff = [
    new Employee("Alice", "Johnson", "alicejohnson@test.com", "1985-03-22", 85000),
    new Employee("Bob", "Brown", "bobbrown@test.com", "1990-05-15", 78000),
    new Employee("Charlie", "Davis", "charliedavis@test.com", "1992-11-30", 72000),
    new Employee("Diana", "Evans", "dianaevans@test.com", "1988-02-28", 80000)
];

console.log(staff);
console.log(staff[2]);
console.log(staff[3].email);

function displayEmployees(employees) {
    const tableBody = document.getElementById('employeeTableBody');
    tableBody.innerHTML = ''; // Clear existing rows
    employees.forEach(emp => {
        const row = document.createElement('tr');
        row.innerHTML = ` <td>${emp.firstName}</td>
                         <td>${emp.lastName}</td>
                         <td>${emp.email}</td>
                         <td>${emp.birthdate}</td>`;
        tableBody.appendChild(row);
    });
}

// Test static addEmployee
const bill = Employee.addEmployee("Bill", "Doe", "bill@example.com", "1990-01-01", 50000);
console.log(bill.getEmployees());

// Test editEmployee
bill.editEmployee({ salary: 7777777, email: "xxxxxxx@example.com" });
console.log(bill.getEmployees());

displayEmployees(staff.slice(0, 3));

//OLD WAY DEMO - CONSTRUCTOR FUNCTION
// function Employee(firstName, lastName, email, birthdate, salary) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.birthdate = birthdate;
//     this.salary = salary;
//   }

  // Employee.addEmployee = function(firstName, lastName, email, birthdate, salary) {
  //   return new Employee(firstName, lastName, email, birthdate, salary);
  // };

  // Employee.prototype.editEmployee = function(updates) {
  //   Object.assign(this, updates);
  // };


  // Usage example:
  // const bill = Employee.addEmployee("Bill", "Doe", "bill@example.com", "1990-01-01", 50000);
  // console.log(bill);

  // bill.editEmployee({ salary: 7777777, email: "xxxxxxx@example.com" });
  // console.log(bill);


//ES6 way - CLASSES - Create a new Employee class that adds a new employee and console logs them
// Goals:
// 1. Create a new Employee class with a constructor for Employee giving them a firstname, lastname, email, and birthdate
// 2. Instantiate (i.e. create a new instance) of an Employee with your info and save it to a const with your first name
// 3. After step 2, console log your const and then try to console.log parts of the object
// 4. Then create a const array that creates many "new Employee" objects and says to an array.  Console this object as a whole and parts of it
// 5. Add methods to your class to "getEmployees" which just returns all the fields in the object.
//    Also add methods to addEmployee (this will be static) and a method to editEmployee
//    Test your methods using JS
// 6. Try to get instances of your class object to display in the table.  You can set the innerhtml of the
//    of the table to be empty and then replace it with the looped-through values of your object





//Try to output 3 instances of your class object into the table



// Callbacks version
function verifyPayment(orderTotal, callback) {
    setTimeout(() => {
        if (orderTotal < 5000) {
            callback("Payment verified.");
        } else {
            callback("Order requires manager approval.");
        }
    }, 2000);
}

// Test with $3000
verifyPayment(3000, (message) => {
    console.log("Test $3000:", message);
});

// Test with $6000
verifyPayment(6000, (message) => {
    console.log("Test $6000:", message);
});

///// promises
function promisePayment(orderTotal) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (orderTotal < 5000) {
                resolve("Payment verified.");
            } else {
                reject("Order requires manager approval.");
            }
        }, 2000); // 2 second delay to simulate server response
    });
}

// Test with $3000
processPayment(3000)
    .then(result => console.log("Test $3000:", result))
    .catch(error => console.log("Test $3000:", error));

// Test with $6000
processPayment(6000)
    .then(result => console.log("Test $6000:", result))
    .catch(error => console.log("Test $6000:", error));