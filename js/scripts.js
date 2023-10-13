/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// Función para agrandar la imagen
// Función para abrir el modal


document.getElementById('miFormulario').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que el formulario se envíe normalmente

    var nombre = document.getElementById('Nombre').value;
    var correo = document.getElementById('Correo').value;
    var numero = document.getElementById('Numero').value;
    var mensaje = document.getElementById('Mensaje').value;

    var url = "https://script.google.com/macros/s/AKfycby77QY_d6hrNl3cP7CHWRicsQdrIBKTKaS7vpmuvL8PUsnlWp9No9VAiXT7p5TCeewrkA/exec"; // Reemplaza con la URL de la aplicación web de Google Apps Script

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    xhr.send("nombre=" + nombre + "&correo=" + correo + "numero"+ numero + "&mensaje=" + mensaje);

    // Puedes agregar código adicional para manejar la respuesta del servidor
});
