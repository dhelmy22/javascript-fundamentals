let student = {
    name: "Gloria",
    awesome: true,
    specialty: "JavaScript",
    week: 1,
};
console.log(student.name);

for(x in student){
    console.log(x);
}
for(x in student){
    console.log(student['awesome']);
}
for(x in student){
    console.log(student[x]);
}

// forIn loops will return to you the KEYS of some collection
let grades = ["a", "f", "f-", "c++", "b+"]
for(x in grades){
    console.log(grades[x]);
}