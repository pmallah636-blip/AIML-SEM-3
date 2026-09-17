class Person {
    static count = 0;

    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;

        Person.count++;
    }

    displayDetails() {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }

    static displayTotalPersons() {
        console.log("Total Persons:", Person.count);
    }
}

class Doctor extends Person {
    constructor(id, name, age, specialization, consultationFee) {
        super(id, name, age);

        this.specialization = specialization;
        this.consultationFee = consultationFee;
    }

    displayDetails() {
        console.log("Doctor Details:");
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Specialization:", this.specialization);
        console.log("Consultation Fee: Rs.", this.consultationFee);
        console.log("----------------------");
    }
}

class Patient extends Person {
    constructor(id, name, age, disease, roomNo) {
        super(id, name, age);

        this.disease = disease;
        this.roomNo = roomNo;
    }

    displayDetails() {
        console.log("Patient Details:");
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Disease:", this.disease);
        console.log("Room No:", this.roomNo);
        console.log("");
    }
}

let doctor1 = new Doctor(101, "Dr. Rahul", 40, "Cardiologist", 1000);
let doctor2 = new Doctor(102, "Dr. Priya", 35, "Neurologist", 1200);
let patient1 = new Patient(201, "Amit", 25, "Fever", 101);
let patient2 = new Patient(202, "Neha", 30, "Diabetes", 102);


doctor1.displayDetails();
doctor2.displayDetails();

patient1.displayDetails();
patient2.displayDetails();


Person.displayTotalPersons();