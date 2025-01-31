document.getElementById('timestamp').value = new Date().toISOString();

const benefits = [
    'Networking opportunities',
    'Access to exclusive resources',
    'Professional development',
    'Community support',
    'Discounts on events and services',
];

document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', function () {
        const modalId = this.querySelector('a').getAttribute('href').substring(1);
        const modal = document.createElement('dialog');
        const benefitsList = document.createElement('ul');
        modal.id = modalId;
        modal.className = 'modal';
        modal.innerHTML = `
    <div class="modal-content">
    <span class="close">&times;</span>
    <h3>${this.querySelector('h3').innerText}</h3>
    <p>${this.querySelector('p').innerText}</p>
    <h4>Benefits</h4>
    </div>
  `;
        benefits.forEach((benefit) => {
            const li = document.createElement('li');
            li.textContent = benefit;
            benefitsList.appendChild(li);
        });
        modal.querySelector('.modal-content').appendChild(benefitsList);
        document.body.appendChild(modal);
        modal.showModal();

        modal.querySelector('.close').onclick = function () {
            modal.close();
            document.body.removeChild(modal);
        };

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.close();
                document.body.removeChild(modal);
            }
        };
    });
});

// document.querySelector('.modal-content').appendChild(benefitsList);
