// function person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date (dob);
//     this.getBirthYear = function(){
//         return this.dob.getFullYear();
//     }
//     this.getFullName = function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }
// person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

//CLASS
// class person{
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date (dob);
//     }
//     getBirthYear(){
//         return this.dob.getFullYear();
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// INSTANTIATE OBJRCT

// const person1 = new person('john','Doe','4-3-1980');
// const person2 = new person('iqbal','waris','3-6-1970');

// console.log(person2.getFullName());
// console.log(person1);
