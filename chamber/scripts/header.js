const navItems = [
    {
        name: 'Home',
        href: '#',
    },
    {
        name: 'Directory',
        href: 'directory.html',
    },
    {
        name: 'Join',
        href: 'join.html',
    },
    {
        name: 'Discover',
        href: '#',
    },
];

const body = document.querySelector('body');
const header = document.querySelector('header');
const nav = document.createElement('nav');
let ul = document.createElement('ul');
const brandPicture = document.createElement('picture');
const brandLogo = document.createElement('img');
const brandDetails = document.createElement('div');
const brandElement = document.createElement('div');
const brandName = document.createElement('h1');
const brandParagraph = document.createElement('p');

brandElement.classList.add('brand');

brandLogo.setAttribute('src', 'images/placeholder.png');
brandLogo.setAttribute('width', '50px');
brandLogo.setAttribute('loading', 'lazy');
brandLogo.setAttribute('alt', 'EKSCC');

brandName.textContent = 'Ekiti';
brandParagraph.textContent = 'Chamber of Commerce';
brandDetails.appendChild(brandName);
brandDetails.appendChild(brandParagraph);
brandPicture.appendChild(brandLogo);

brandElement.appendChild(brandPicture);
brandElement.appendChild(brandDetails);

navItems.forEach((navItem) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = navItem.href;
    a.textContent = navItem.name;
    li.appendChild(a);
    ul.appendChild(li);
});

nav.appendChild(ul);

header.appendChild(brandElement);
header.appendChild(nav);

body.insertBefore(header, body.firstChild);
