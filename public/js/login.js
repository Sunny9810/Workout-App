const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (name && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("Successfully Signed Up! Please proceed to Log in");
    } else {
      alert("Failed to sign up.");
    }
  }
};

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  console.log(email, password);

  if (email && password) {
    try {
      const response = await fetch("/api/users/login", {
        method: "POST", // Use the POST method instead of GET for sending sensitive data like passwords
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        // Redirect to the desired page after successful login
        document.location.replace("optionpg");
      } else {
        // Display an error message if login fails
        alert("Failed to log in");
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred during login. Please try again."); // Handle any network or server errors
    }
  } else {
    alert("Please enter both email and password."); // Handle empty email or password fields
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
