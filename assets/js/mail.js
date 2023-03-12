const btn = document.getElementById('button');

document.getElementById('Form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_0qid91p';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar';
                swal("Mensaje enviado!", "Pronto te contactaremos!", "success");
            }, (err) => {
                btn.value = 'Enviar';
                swal(JSON.stringify(err), "Contactanos para arreglar el formulario", "error");
                alert(JSON.stringify(err));
            });
    });
