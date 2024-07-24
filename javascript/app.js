
let studentInformation = JSON.parse(localStorage.getItem('student')) || [];
let generateRollno = 20050001;


document.addEventListener('DOMContentLoaded', loadStudentData);

document.getElementById('submit-btn').addEventListener('click', getInfo);

document.getElementById('delete-btn').addEventListener('click', deleteInfo);


function loadStudentData() {
    let studentDataContainer = document.getElementById('student-data-container');
    studentDataContainer.innerHTML = ''; 

    studentInformation.forEach((student, index) =>
    {
        studentDataContainer.innerHTML += `
            <tr class="border-t-2">
                <td class="p-3">${index + 1}</td>
                <td class="p-3">${student.studentName}</td>
                <td class="p-3">${student.studentRollNo}</td>
                <td class="p-3">${student.studentClassNSection}</td>
                <td class="p-3">${student.studentCourse}</td>
            </tr>
        `;
    });
}

function getInfo() {

    let userName = document.getElementById('username').value;
    let classAndSection = document.getElementById('class-and-section').value;
    let course = document.getElementById('course').value;


    if (userName !== '' && classAndSection !== '' && course !== '') {

        generateRollno++;

        const studentInfo = {
            studentName: userName,
            studentClassNSection: classAndSection,
            studentRollNo: generateRollno,
            studentCourse: course
        }

        studentInformation.push(studentInfo);
        localStorage.setItem('student', JSON.stringify(studentInformation));

        
        loadStudentData();
        countStudent()
    }


    document.getElementById('username').value = '';
    document.getElementById('class-and-section').value = '';
    document.getElementById('course').value = '';
}

function deleteInfo() {

    let serialNo = parseInt(document.getElementById('del-no').value, 10);
    let name = document.getElementById('del-name').value;
    let rollNo = parseInt(document.getElementById('del-roll-no').value, 10);

    let index = studentInformation.findIndex(student => student.studentName === name && student.studentRollNo === rollNo);

    if (index !== -1) {

        studentInformation.splice(index, 1);
        localStorage.setItem('student', JSON.stringify(studentInformation));

        loadStudentData();

        alert('Student data deleted successfully');

    } else {

        alert('No matching student data found');

    }

    countStudent()

    document.getElementById('del-no').value = '';
    document.getElementById('del-name').value = '';
    document.getElementById('del-roll-no').value = '';
}



function countStudent() {
    let totalStudent = document.getElementById('total-student');

    let totalStudentClass11 = document.getElementById('total-student-class-11');
    let totalStudentClass12 = document.getElementById('total-student-class-12');

    let totalStudentPreMedical = document.getElementById('total-student-pre-medical');
    let totalStudentPreEngineering = document.getElementById('total-student-pre-engineering');
    let totalStudentComputerScience = document.getElementById('total-student-computer-science');
    let totalStudentCommerce = document.getElementById('total-student-commerce');
    let totalStudentHumanities = document.getElementById('total-student-humanities');
    let totalStudentHomeconomics = document.getElementById('total-student-homeconomics');


    let totalNumberOfStudent = 0;
    let totalNumberOfStudentClass11 = 0;
    let totalNumberOfStudentClass12 = 0;
    let totalNumberOfStudentPreMedical = 0
    let totalNumberOfStudentPreEngineering = 0
    let totalNumberOfStudentComputerScience = 0
    let totalNumberOfStudentCommerce = 0
    let totalNumberOfStudenthumanities = 0
    let totalNumberOfStudenthomeconomics = 0


    for (const student of studentInformation) {


        if (student.studentClassNSection.slice(0,2) == 11) {
            totalNumberOfStudentClass11++
        } else {
            totalNumberOfStudentClass12++
        }


        if (student.studentCourse == 'PRE-MEDICAL') {
            totalNumberOfStudentPreMedical++
        } else if (student.studentCourse == 'PRE-ENGINEERING') {
            totalNumberOfStudentPreEngineering++
        } else if (student.studentCourse == 'COMPUTER SCIENCE') {
            totalNumberOfStudentComputerScience++
        } else if (student.studentCourse == 'COMMERCE') {
            totalNumberOfStudentCommerce++
        } else if (student.studentCourse == 'HUMANITES') {
            totalNumberOfStudenthumanities++
        } else {
            totalNumberOfStudenthomeconomics++
        }

        totalNumberOfStudent++

    }


    totalStudent.textContent = totalNumberOfStudent

    totalStudentClass11.textContent = totalNumberOfStudentClass11
    totalStudentClass12.textContent = totalNumberOfStudentClass12

    totalStudentPreMedical.textContent = totalNumberOfStudentPreMedical
    totalStudentPreEngineering.textContent = totalNumberOfStudentPreEngineering
    totalStudentComputerScience.textContent = totalNumberOfStudentComputerScience
    totalStudentHomeconomics.textContent = totalNumberOfStudenthomeconomics
    totalStudentCommerce.textContent = totalNumberOfStudentCommerce
    totalStudentHumanities.textContent = totalNumberOfStudenthumanities

    console.log(totalNumberOfStudent);
    console.log(totalNumberOfStudentClass11);
    console.log(totalNumberOfStudentClass12);
}
