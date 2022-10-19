const dataSet = {
  name: '@TiagoGouvea',
  description: 'A description',
  sections: [
    {
      title: 'English',
      description: 'A description',
      links: [
        {
          label: 'Link 1',
          url: 'http://example.com',
          // Ícones do FavIcon
          icon: '<i class="fab fa-twitter text-secondary"></i>',
        },
        {
          label: 'Link 2',
          url: 'http://example.com',
          icon: '',
        },
      ],
    },
    {
      title: 'Portuguese',
      description: 'A description',
      links: [
        {
          label: 'Link 3',
          url: 'http://example.com',
          icon: '',
        },
      ],
    },
  ],

  socials: [
    {
      icon: '<i class="fab fa-twitter text-secondary"></i>',
      url: 'http://example.com',
    },
    {
      icon: '<i class="fab fa-linkedin text-secondary"></i>',
      url: 'http://example.com',
    },
  ],
};

const nameElement = document.querySelector('#name');
const descriptionElement = document.querySelector('#description');

const linksElement = document.querySelector('#links');
const socialElement = document.querySelector('#social');

// Path: render.js
const render = (dataSet) => {
  nameElement.innerHTML = dataSet.name;
  descriptionElement.innerHTML = dataSet.description;

  linksElement.innerHTML = dataSet.sections
    .map((section) => {
      return `
      <div class="flex-column mb-4">
      <h3 class="text-secondary">${section.title}</h3>
      ${section.links
        .map((link) => {
          return `<a
        rel="nofollow noopener"
        target="_blank"
        href="${link.url}"
        class="btn btn-outline-info btn-lg btn-block"
        >${link.label}</a
      >
      `;
        })
        .join('')}
    </div>
    `;
    })
    .join('');

  socialElement.innerHTML = dataSet.socials
    .map((social) => {
      return `<li class="list-inline-item">
      <a 
      rel="nofollow noopener"
      target="_blank" 
      href="${social.url}">
        ${social.icon}
      </a>
      </li>`;
    })
    .join('');
};

// Path: index.js
render(dataSet);
