function showService(service) {
    event.preventDefault(); 
    document.querySelectorAll('.service-info').forEach(function (section) {
        section.classList.add('d-none');
    });
    document.querySelectorAll('.service-link').forEach(function (link) {
        link.classList.remove('active');
    });
    document.getElementById(service).classList.remove('d-none');
    document.getElementById(service + '-link').classList.add('active');
}

function validateEmail() {
    const emailInput = document.getElementById("email");
    const errorMsg = document.getElementById("error-msg");
    const emailPattern = /@/;

    if (!emailPattern.test(emailInput.value)) {
        errorMsg.style.display = "block";
    } else {
        errorMsg.style.display = "none";
        alert("Email is valid!");
    }
}
const users = [];

function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  const user = users.find(user => user.email === email && user.password === password);
  
  if (user) {
    alert(`Welcome back, ${user.name}!`);
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('logoutItem').style.display = 'block'; // Show logout button
    document.getElementById('navbarNav').style.display = 'block'; // Show navigation bar
    document.getElementById('content').style.display = 'block'; // Show main content
  } else {
    alert('Invalid email or password. Please try again.');
  }
  return false; // Prevent default form submission
}

function handleRegistration(event) {
  event.preventDefault();

  const name = document.getElementById('registerName').value.trim();
  const email = document.getElementById('registerEmail').value.trim();
  const password = document.getElementById('registerPassword').value;

  // Check if the user is already registered
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    alert('This email is already registered. Please log in.');
    return false; // Prevent default form submission
  }

  // Add the new user to the users array
  users.push({ name, email, password });
  alert('Registration successful! You can now log in.');

  document.getElementById('registrationForm').style.display = 'none'; // Hide registration form
  document.getElementById('navbarNav').style.display = 'block'; // Show navigation bar
  document.getElementById('content').style.display = 'block'; // Show main content

  return false; // Prevent default form submission
}

function handleLogout() {
  alert('You have logged out successfully.');
  document.getElementById('logoutItem').style.display = 'none'; // Hide logout button
  document.getElementById('navbarNav').style.display = 'none'; // Hide navigation bar
  document.getElementById('content').style.display = 'none'; // Hide main content
}

