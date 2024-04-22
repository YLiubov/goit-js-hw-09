
const form = document.querySelector('.feedback-form');

window.addEventListener('load', () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const { email, message } = JSON.parse(savedData);
        form.email.value = email;
        form.message.value = message;
    }
});

form.addEventListener('input', () => {
    const formData = {
        email: form.email.value.trim(),
        message: form.message.value.trim()
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
    event.preventDefault();

    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (email && message) {
        console.log({ email, message });
        localStorage.removeItem('feedback-form-state');
        form.reset();
    } else {
        alert('Please fill in both email and message fields.');
    }
});



