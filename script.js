
document.getElementById('inquiryForm').addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('formMessage').style.display = 'block';
    setTimeout(() => {
        document.getElementById('formMessage').style.display = 'none';
        document.getElementById('inquiryForm').reset();
    }, 3000);
});

function login() {
    // Get entered values (just to show in console)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log("Username:", username);
    console.log("Password:", password);

    // Always log in, regardless of entered values
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
}

function logout() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Bypass login validation for demo
    if (username && password) {
      showPortal();
    } else {
      document.getElementById("loginError").textContent =
        "Invalid login. Please try again.";
    }
  });
  

  // Function to handle Faculty Login
function facultyLogin(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    const username = document.getElementById("facultyUsername").value;
    const password = document.getElementById("facultyPassword").value;
  
    // Allow any input to login (Dummy login setup)
    if (username.trim() !== "" && password.trim() !== "") {
      // Hide login and show faculty portal
      document.getElementById("facultyLogin").classList.add("hidden");
      document.getElementById("facultyPortal").classList.remove("hidden");
      document.getElementById("loginError").innerText = ""; // Clear any error
    } else {
      document.getElementById("loginError").innerText =
        "Please enter a valid username and password!";
    }
  }
  
  // Function to show a section and hide others
  function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => section.classList.add("hidden"));
  
    // Show the selected section
    document.getElementById(sectionId).classList.remove("hidden");
  }
  
  // Dummy upload function (for fun!)
  function uploadFile(fileId) {
    const fileInput = document.getElementById(fileId);
    const statusId = fileId === "courseFile" ? "uploadStatus" : "marksStatus";
  
    if (fileInput.files.length > 0) {
      document.getElementById(statusId).innerText = "File uploaded successfully!";
    } else {
      document.getElementById(statusId).innerText = "Please select a file first.";
    }
  }
  