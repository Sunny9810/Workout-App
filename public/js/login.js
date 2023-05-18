// const loginFormHandler = async (event) => {
//   event.preventDefault();

//   const email = document.querySelector("#email-login").value.trim();
//   const password = document.querySelector("#password-login").value.trim();
//   console.log(email, password);
//   if (email && password) {
//     const response = await fetch("/api/users/login", {
//       method: "GET",
//       // body: JSON.stringify({ email, password }),
//       // headers: { "Content-Type": "application/json" },
//     });
//     console.log(response);
//     if (response.ok) {
//       document.location.replace("/workoutpage");
//     } else {
//       alert("Failed to log in");
//     }
//   }
//   console.log("login form");
// };
// console.log("hello");
// document
//   .querySelector(".login-form")
//   .addEventListener("submit", loginFormHandler);

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
        document.location.replace("/workout");
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
