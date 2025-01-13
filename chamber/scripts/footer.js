const date = new Date();
const currentYear = date.getFullYear();

const footer = document.querySelector('footer');
const socialElement = document.createElement('div');
const contactElement = document.createElement('div');
const webInfoElement = document.createElement('div');
contactElement.classList.add('footer-contact');
socialElement.classList.add('socials');

const socials = ['youtube', 'twitter', 'instagram'];

contactElement.classList.add('footer-item');
contactElement.innerHTML = `<p>Ekiti State Chamber of Commerce</p> 10, Governor Office Road <br> Ado-Ekiti, Ekiti Nigeria <br> info@ekcc.com <br> 2347038262217 `;
footer.appendChild(contactElement);

webInfoElement.classList.add('footer-item');
webInfoElement.innerHTML = `WDD231 Class Project <br> Kayode A. Adetayo <br>&copy ${currentYear} Ekiti State Chamber of Commerce <br> Last Modified: ${document.lastModified}  `;

socials.forEach((social) => {
    const picture = document.createElement('picture');
    const img = document.createElement('img');
    img.src = `images/${social}.png`;
    img.alt = social;
    picture.appendChild(img);
    socialElement.appendChild(picture);
});

footer.appendChild(socialElement);
footer.appendChild(webInfoElement);
document.body.appendChild(footer);
