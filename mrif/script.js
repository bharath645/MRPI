// Sample patient data
const patients = [
    { name: 'John Doe', age: 45, gender: 'Male', condition: 'Diabetes' },
    { name: 'Jane Smith', age: 30, gender: 'Female', condition: 'Hypertension' },
    { name: 'Alice Brown', age: 60, gender: 'Female', condition: 'Asthma' }
];

// Function to show the sign-up form
function showSignUp() {
    document.getElementById('signUpForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
}

// Function to show the sign-in form
function showSignIn() {
    document.getElementById('signUpForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

// Handle sign-in form submission
document.getElementById('signInForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    // Normally, here you would check the credentials with a backend service

    // For simplicity, just simulate login
    alert('Signed In successfully!');
    document.getElementById('loginForm').style.display = 'none';
    displayPatientDetails();
});

// Handle sign-up form submission
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    // Normally, save the user to a database

    // For simplicity, just simulate sign-up
    alert('Signed Up successfully!');
    showSignIn();
});

// Display patient details
function displayPatientDetails() {
    const patientTableBody = document.getElementById('patientTableBody');
    patients.forEach(patient => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${patient.name}</td>
            <td>${patient.age}</td>
            <td>${patient.gender}</td>
            <td>${patient.condition}</td>
        `;
        patientTableBody.appendChild(row);
    });
    document.getElementById('patientDetails').style.display = 'block';
}

// Log out function
function logOut() {
    alert('Logged out!');
    document.getElementById('patientDetails').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

// Export to Excel function
function exportToExcel() {
    let table = document.querySelector('table');
    let rows = Array.from(table.rows);
    let csvContent = '';

    rows.forEach((row, index) => {
        let cols = Array.from(row.cells);
        let rowContent = cols.map(cell => cell.textContent).join(',');
        csvContent += rowContent + '\n';
    });

    let blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    let link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'patient_details.csv';
    link.click();
}
