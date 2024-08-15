document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    const changeBackgroundBtn = document.getElementById('changeBackgroundBtn');
    let darkMode = false;

    // Añadir eventos a los botones de desplegables
    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.dropdown-btn');
        button.addEventListener('click', () => {
            dropdown.classList.toggle('active');
        });
    });

    // Cambiar color de fondo
    changeBackgroundBtn.addEventListener('click', () => {
        darkMode = !darkMode;
        document.body.classList.toggle('dark-mode', darkMode);
    });
});
