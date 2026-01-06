const applyButton = document.getElementById('apply-button');

applyButton.addEventListener('click', () => {
    applyButton.style.backgroundColor = '#4CAF50';
    applyButton.style.color = 'white';
    applyButton.textContent = '¡Aplicado!';
});