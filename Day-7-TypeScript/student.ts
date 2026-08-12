interface Student {
    name: string;
    age: number;
    course: string;
    skills: string[];
}

export {};

const studentData: Student = {
    name: "Mantsha Khan",
    age: 20,
    course: "BCA",
    skills: ["HTML", "CSS", "JavaScript", "React"]
};

function displayStudentInfo(student: Student): void {
    console.log("Name:", student.name);
    console.log("Age:", student.age);
    console.log("Course:", student.course);
    console.log("Skills:", student.skills.join(", "));
}

displayStudentInfo(studentData);