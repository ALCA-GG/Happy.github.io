document.addEventListener('DOMContentLoaded', function() {
    var fechaInput = document.getElementById('fecha');

    fechaInput.addEventListener('change', function() {
        var fechaSeleccionada = fechaInput.value;
        if (fechaSeleccionada === '2002-07-10') {
            redirigirAPagina();
        }
    });

    function redirigirAPagina() {
        // Aquí puedes establecer la URL a la que deseas redirigir
        var nuevaPagina = 'mainMenu.html';

        // Redirigir a la nueva página
        window.location.href = nuevaPagina;
    }
});
