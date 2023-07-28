//Declaring a classs
class Employee{
    //constructor
    constructor(eid, designation, department, salary)
    {
    this.eid = eid;
    this.designation = designation;
    this.department = department;
    this.salary = salary;
    }
};
getdesignation(){
    return this.designation + "is a post";
}

class admin extends Employee{

}
let promotion = new admin(1,"Front-end Developer", "Software Development", 40000);

// //create object using class
// let promotion = new Employee(1,"Front-end Developer", "Software Development", 40000);

// //getter & setter

// get  getSalary() {
//     return this.salary;
// }
// set setSalary(value){
//     this.salary = value;
// }
// };
