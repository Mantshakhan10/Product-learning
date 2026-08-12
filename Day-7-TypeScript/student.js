"use strict";
const student = {
    name: "Mantsha Khan",
    age: 20,
    course: "BCA",
    skills: ["HTML", "CSS", "JavaScript", "React"]
};
function displayStudent(student) {
    console.log("Name:", student.name);
    console.log("Age:", student.age);
    console.log("Course:", student.course);
    console.log("Skills:", student.skills.join(", "));
}
displayStudent(student);
