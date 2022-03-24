"use strict";
var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Student;
}());
function greeter(student) {
    return "Hello, " + student.firstName + " " + student.middleName + " " + student.lastName;
}
var user = new Student("Greeshma", "B", "kulal");
/*const result=greeter(user);
const ele=document.getElementById('info');
var show=document.createElement('p');
show.textContent=result;
//ele?.appendChild(show);
document.body.appendChild(show);
*/
console.log(greeter(user));
