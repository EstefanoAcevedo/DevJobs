/* Apply buttons */
const jobsList = document.getElementById('jobs-list');

jobsList.addEventListener('click', (event) => {
    if (event.target.tagName === "BUTTON") {
        const button = event.target;
        button.style.backgroundColor = '#4CAF50';
        button.style.color = 'white';
        button.textContent = '¡Aplicado!';
    }
})

/* Job items */
const jobItems = document.querySelectorAll('.job-item');

/* Tech select */
const techSelect = document.getElementById('tech-select');

techSelect.addEventListener('change', (event) => {
    locationSelect.value = '0';
    const selectedTech = event.target.value;
    jobItems.forEach(job => {
        const isShown = job.dataset.tech === selectedTech || selectedTech === "0";
        job.classList.toggle('isHidden', !isShown);
    })
});

/* Location select */
const locationSelect = document.getElementById('location-select');

locationSelect.addEventListener('change', (event) => {
    techSelect.value = '0';
    const selectedLocation = event.target.value;
    jobItems.forEach(job => {
        const isShown = job.dataset.location === selectedLocation || selectedLocation === "0";
        job.classList.toggle('isHidden', !isShown);
    })
});