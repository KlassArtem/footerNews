// Инициализация форм
const loginForm = document.querySelector('#login-form');
const registerForm = document.querySelector('#register-form');

// Функция входа
function login(username, password) {
  const users = JSON.parse(localStorage.getItem('users')) || [];

  const user = users.find(user => user.username === username && user.password === password);

  if (!user) {
    alert('Incorrect username or password!');
    return;
  }

  alert(`Welcome, ${username}!`);
}

// Функция регистрации
function register(username, password) {
  const users = JSON.parse(localStorage.getItem('users')) || [];

  const userExists = users.some(user => user.username === username);

  if (userExists) {
    alert('Username is already taken!');
    return;
  }

  users.push({ username, password });

  localStorage.setItem('users', JSON.stringify(users));

  alert(`User ${username} has been registered!`);
}

// Обработчик отправки формы входа
loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const username = loginForm.querySelector('#username').value;
  const password = loginForm.querySelector('#password').value;

  login(username, password);
});

// Обработчик отправки формы регистрации
registerForm.addEventListener('submit', event => {
  event.preventDefault();

  const username = registerForm.querySelector('#new-username').value;
  const password = registerForm.querySelector('#new-password').value;
  const confirmPassword = registerForm.querySelector('#confirm-password').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  register(username, password);
});
