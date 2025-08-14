const userContainer = document.getElementById('user-container');
const reloadBtn = document.getElementById('reload-btn');
const errorMessage = document.getElementById('error-message');


function fetchUsers() {
  
  userContainer.innerHTML = '';
  errorMessage.textContent = '';

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      return response.json();
    })
    .then(users => {
      users.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('user-card');

        card.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> 
             ${user.address.street}, ${user.address.suite}, 
             ${user.address.city}, ${user.address.zipcode}
          </p>
        `;

        userContainer.appendChild(card);
      });
    })
    .catch(err => {
      console.error('Fetch Error:', err);
      errorMessage.textContent = ' Failed to load user data. Please check your connection.';
    });
}


window.onload = fetchUsers;


reloadBtn.addEventListener('click', fetchUsers);
