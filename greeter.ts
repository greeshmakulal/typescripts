
class Student  {
    fullName:string;
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {
      this.fullName = firstName + " " + middleName + " " + lastName;
    }
  }
   
  function greeter(student: Student) {
    return "Hello, " + student.firstName + " " + student.middleName +" " +student.lastName;
  }
   
  let user = new Student("Greeshma", "B", "kulal");
  /*const result=greeter(user);
  const ele=document.getElementById('info');
 var show=document.createElement('p');
  show.textContent=result;
  //ele?.appendChild(show);
  document.body.appendChild(show);
  */
 console.log(greeter(user));