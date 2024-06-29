document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const loginSubmitBtn = document.getElementById('loginSubmitBtn');

    loginBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        loginModal.classList.remove('hidden');
    });

    closeModalBtn.addEventListener('click', function () {
        loginModal.classList.add('hidden');
    });

    loginSubmitBtn.addEventListener('click', function () {
        // Handle login logic here
        alert('Login submitted!');
        loginModal.classList.add('hidden');
    });

})