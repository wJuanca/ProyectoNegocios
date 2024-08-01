document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const serviceID = 'service_7dtr3as';  // Reemplaza TU_SERVICE_ID con tu Service ID de EmailJS
        const templateID = 'cris';  // Reemplaza TU_TEMPLATE_ID con tu Template ID de EmailJS

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                alert('Correo enviado con éxito!');
                form.reset();
            }, (err) => {
                alert(JSON.stringify(err));
            });
    });
});
