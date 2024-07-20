let studentInformation = JSON.parse(localStorage.getItem('student')) || [];
let generateRollno = 20050001;


document.addEventListener('DOMContentLoaded', loadStudentData);

document.getElementById('submit-btn').addEventListener('click', getInfo);

document.getElementById('delete-btn').addEventListener('click', deleteInfo);


function loadStudentData()
{

    let studentDataContainer = document.getElementById('student-data-container');
    studentDataContainer.innerHTML = ''; 


    studentInformation.forEach((student, index) =>
    {
        studentDataContainer.innerHTML += `
            <tr>
                <td class="p-3 border border-gray-500">${index + 1}</td>
                <td class="p-3 border border-gray-500">${student.studentName}</td>
                <td class="p-3 border border-gray-500">${student.studentRollNo}</td>
                <td class="p-3 border border-gray-500">${student.studentClassNSection}</td>
                <td class="p-3 border border-gray-500">${student.studentCourse}</td>
            </tr>
        `;

        generateRollno = Math.max(generateRollno, student.studentRollNo + 1);

    });
}

function getInfo()
{

    let userName = document.getElementById('username').value;
    let classAndSection = document.getElementById('class-and-section').value;
    let course = document.getElementById('course').value;


    if (userName !== '' && classAndSection !== '' && course !== '') {

        const studentInfo = {
            studentName: userName,
            studentClassNSection: classAndSection,
            studentRollNo: generateRollno,
            studentCourse: course
        }

        studentInformation.push(studentInfo);
        localStorage.setItem('student', JSON.stringify(studentInformation));

        loadStudentData();
    }

    generateRollno++;

    document.getElementById('username').value = '';
    document.getElementById('class-and-section').value = '';
    document.getElementById('course').value = '';
}

function deleteInfo()
{

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

    document.getElementById('del-no').value = '';
    document.getElementById('del-name').value = '';
    document.getElementById('del-roll-no').value = '';
}
