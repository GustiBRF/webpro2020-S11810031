// Class & Construct

class Person {

    constructor(fName,lName){
        this.fName=fName;
        this.lName=lName;
    }

    display(){
        console.log(`${this.fName} ${this.lName}`);
    }
};

const person1 = new Person("Gusti","Bagus");
person1.display();

// Inheritance

class Student extends Person{
    constructor(fName,lName,NIM,age){
        super(fName,lName);
        this.NIM = NIM;
        this.age = age;
    }
    displayNIM(){
        console.log(`Your NIM is ${this.NIM}`);
    }

    
    displayAge(){
        console.log(`Your Age is ${this.age}`);
    }

    
// Static Member
    static sayHello(){
        console.log(`Hello World`)
    }

    // Settes dan Getter
    set studentScore(score){
        this.score = score;
    }

    get studentScore() {
        return this.score;
    }
}

const john = new Student("John","Doc","123456",28)
john.displayAge()
john.display()
Student.sayHello()

john.studentScore = 90;
console.log(john.studentScore)


