const date = new Date()
const currentYear = date.getFullYear()
const yearElement = document.getElementById('currentyear')
yearElement.innerText = currentYear
const lastModifiedElement = document.getElementById('lastModified')
lastModifiedElement.innerHTML = 'Last modified on ' + document.lastModified
