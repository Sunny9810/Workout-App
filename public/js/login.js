const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
console.log(email, password)
  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
console.log(response)
    // if (response.ok) {
    //   document.location.replace('/');
    // } else {
    //   alert('Failed to log in');
    // }
  }
console.log("login form")
};
console.log("hello")
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
