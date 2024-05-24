import inquirer from "inquirer";

class student {
    id: string;
    name: string;
    coursesEnrolled: string[];
    feesAmount: number;

    constructor(id: string, name: string, coursesEnrolled: string[],  feesAmount:number){
        this.id = id
        this.name = name
        this.coursesEnrolled = coursesEnrolled
        this.feesAmount = feesAmount
    }
}


let baseId = 10100
let studentId = "";
let continueEnrollment = true;

let students: student[] = []


do{
    let action = await inquirer.prompt({
        type: "list",
        name: "ans",
        message: "Please select an opition:\n",
        choices: ["Enroll a student", "Show student status"]
    })

    if(action.ans === "Enroll a student"){
        let studentName = await inquirer.prompt({
            type: "input",
            name: "ans",
            message: "Please Enter your name:",
        })

        let trimmedStudentName = (studentName.ans).trim().toLowerCase()
        let studentNameCheck = students.map(obj => obj.name)

        if(studentNameCheck.includes(trimmedStudentName) === false ){
            if(trimmedStudentName !== ""){
                baseId++
                studentId = "STID" + baseId
    
                console.log("\n\tYour account has been created");
                console.log(`Welcome, ${trimmedStudentName}!` );

                let cource = await inquirer.prompt({
                    type: "list",
                    name: "ans",
                    message: "Please select a cource",
                    choices: ["GEN AI", "Cloud Computing", "Metaverse"]
                })

                let courseFees = 0;
                switch(cource.ans) {
                    case "GEN AI":
                        courseFees = 2000;
                        break;
                        
                        case "Cloud Computing":
                        courseFees = 5000;
                        break;

                        case "Metaverse":
                        courseFees = 7000;
                        break;
                 }

                 let courceConfirm = await inquirer.prompt({
                    type: "confirm",
                    name: "ans",
                    message: "Do you want to enroll in this cource"
                 })

                 if(courceConfirm.ans === true){
                    let Student = new student(studentId, trimmedStudentName, [cource.ans], courseFees)
                    
                    students.push(Student)
                    console.log("You have enrolled in this course");
                 }
            }else{
                console.log("Please write your Name ");
            }
        }else{
            console.log("This name is already exisit");
        }

    } else if(action.ans = "Show student status"){
            if(students.length !==0){
                let studentNameCheck = students.map(e => e.name)

                let selectedStudent = await inquirer.prompt({
                    type: "list",
                    name: "ans",
                    message: "Please select name",
                    choices: studentNameCheck
                })

                let foundStudent = students.find(student => student.name === selectedStudent.ans)
                console.log("Student Info");
                console.log(foundStudent);
                console.log("\n");
            }else{
                console.log("Record is empty");
            }
    }

           let userConfirm = await inquirer.prompt({
            type: "confirm",
            name: "ans",
            message: "Do you want to continue?"
           })

           if(userConfirm.ans === false){
            continueEnrollment = false
           }


}while(continueEnrollment)

