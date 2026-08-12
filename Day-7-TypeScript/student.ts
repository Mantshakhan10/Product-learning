interface Student {
    name: string;
    age: number;
    course: string;
    skills: string[];
}

const student: Student = {
    name: "Mantsha Khan",
    age: 20,
    course: "BCA",
    skills: ["HTML", "CSS", "JavaScript", "React"]
};

function displayStudent(student: Student): void {
    console.log("Name:", student.name);
    console.log("Age:", student.age);
    console.log("Course:", student.course);
    console.log("Skills:", student.skills.join(", "));
}

displayStudent(student);