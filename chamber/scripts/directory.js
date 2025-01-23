const infoContainer = document.querySelector('#company-card-container');
const cardTemplate = document.querySelector('.company-card-template');

export default fetcCompanies = async () => {
    const response = await fetch('../chamber/data/company.json');
    const data = await response.json();
    populateCompaniesData(data);
};

const populateCompaniesData = (companies) => {
    companies.forEach((company) => {
        const cloneCardTemplate = document.importNode(cardTemplate.content, true);
        cloneCardTemplate.querySelector('h2').textContent = company.name;
        cloneCardTemplate.querySelector('img').src = 'images/placeholder.png'; // company.icon;
        cloneCardTemplate.querySelector('img').alt = company.name;
        cloneCardTemplate.querySelector(
            '.email'
        ).innerHTML = `<strong>Email: </strong> ${company.email}`;
        cloneCardTemplate.querySelector(
            '.phone'
        ).innerHTML = `<strong>Phone: </strong> ${company.phone}`;
        cloneCardTemplate.querySelector(
            '.url'
        ).innerHTML = `<strong>URL: </strong> ${company.website}`;
        cloneCardTemplate.querySelector('.tag-line').textContent = 'Business Tag line';
        infoContainer.append(cloneCardTemplate);
    });
};

fetcCompanies();
