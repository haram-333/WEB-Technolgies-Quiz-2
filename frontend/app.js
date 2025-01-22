// Function to fetch and display student data
async function fetchStudents() {
    try {
        const response = await fetch('http://localhost:5000/api/students');
        const students = await response.json();

        const studentList = document.getElementById('student-list');
        studentList.innerHTML = ''; // Clear previous content

        if (students.length === 0) {
            studentList.innerHTML = '<p>No students found.</p>';
            return;
        }

        students.forEach(student => {
            const div = document.createElement('div');
            div.classList.add('student-card');
            div.innerHTML = `
                <strong>Name:</strong> ${student.firstName} ${student.lastName} <br>
                <strong>Marks:</strong> ${student.marks} <br>
                <strong>Phone:</strong> ${student.phoneNumber} <br>
                <strong>CNIC:</strong> ${student.cnic} <br>
                <strong>City:</strong> ${student.city} <br>
                <strong>Country:</strong> ${student.country} <br>
                <strong>Scholarship:</strong> ${student.scholarship ? 'Yes' : 'No'}
            `;
            studentList.appendChild(div);
        });
    } catch (error) {
        document.getElementById('student-list').innerHTML = '<p>Error fetching data.</p>';
        console.error('Error:', error);
    }
}

// Fetch students on page load
fetchStudents();
