/* Jobs list */
const jobsList = document.getElementById('jobs-list');

/* Apply buttons event listener */
jobsList.addEventListener('click', (event) => {
    console.log(event.target)
    if (event.target.tagName === "BUTTON") {
        const button = event.target;
        button.style.backgroundColor = '#4CAF50';
        button.style.color = 'white';
        button.textContent = '¡Aplicado!';
    }
})

/* Job input - search */
const jobInput = document.getElementById('job-input');

jobInput.addEventListener('input', (event) => {
    cleanSelects();
    const jobItems = document.querySelectorAll('.job-item');
    jobItems.forEach(job => {
        const title = job.dataset.title;
        const input = event.target.value;
        const isShown = title.toLowerCase().includes(input.toLowerCase());
        job.classList.toggle('isHidden', !isShown);
    })
})

/* Tech select - fetch technologies */
const techSelect = document.getElementById('tech-select');

fetch('/data/technologies.json')
.then(response => response.json())
.then(technologies => {
    const option = document.createElement('option');
        option.value = "0";
        option.textContent = "Todas las tecnologías";
        techSelect.appendChild(option)
    technologies.forEach(tech => {
        const option = document.createElement('option');
        option.value = tech.value;
        option.textContent = tech.name;
        techSelect.appendChild(option)
    })
})

techSelect.addEventListener('change', (event) => {
    const jobItems = document.querySelectorAll('.job-item');
    locationSelect.value = '0';
    const selectedTech = event.target.value;
    jobItems.forEach(job => {
        const isShown = job.dataset.tech.includes(selectedTech.toLowerCase()) || selectedTech === "0";
        job.classList.toggle('isHidden', !isShown);
    })
});

/* Location select - fetch locations*/
const locationSelect = document.getElementById('location-select');

fetch('/data/locations.json')
.then(response => response.json())
.then(locations => {
    const option = document.createElement('option');
        option.value = "0";
        option.textContent = "Todas las ubicaciones";
        locationSelect.appendChild(option)
    locations.forEach(location => {
        const option = document.createElement('option');
        option.value = location.value;
        option.textContent = location.name;
        locationSelect.appendChild(option)
    })
})

locationSelect.addEventListener('change', (event) => {
    const jobItems = document.querySelectorAll('.job-item');
    techSelect.value = '0';
    const selectedLocation = event.target.value;
    jobItems.forEach(job => {
        const isShown = job.dataset.location === selectedLocation || selectedLocation === "0";
        job.classList.toggle('isHidden', !isShown);
    })
});

function cleanSelects() {
    techSelect.value = '0';
    locationSelect.value = '0';
}

/* Fetch jobs data */
fetch('/data/jobs.json')
.then(response => response.json())
.then(jobs => {
    jobs.forEach(job => {
        const li = document.createElement('li');
        li.classList.add('job-item');
        li.dataset.title = job.title;
        li.dataset.tech = job.data.tech;
        li.dataset.location = job.data.location;
        li.innerHTML = 
        `
            <a href="/pages/job-details/job-details.html">
                <article class="job-card">
                    <h3>${job.title}</h3>
                    <small>${job.company} | ${job.location}</small>
                    <p>${job.description}</p>
                </article>
            </a>
            <button class="primary-button" role="button">Aplicar</button>
        `;
        jobsList.appendChild(li);
    })
})