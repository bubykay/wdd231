const section = document.querySelector('section');

function getUrlParams() {
    const params = {};
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    urlParams.forEach((value, key) => {
        params[key] = value;
    });

    return params;
}

const params = getUrlParams();
console.log(params);

function formatKey(key) {
    return key
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function displayParamsAsTable(params) {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    Object.keys(params).forEach((key) => {
        const row = document.createElement('tr');
        const keyCell = document.createElement('td');
        const valueCell = document.createElement('td');

        keyCell.textContent = formatKey(key);
        valueCell.textContent = params[key];

        row.appendChild(keyCell);
        row.appendChild(valueCell);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    section.appendChild(table);
}

displayParamsAsTable(params);
