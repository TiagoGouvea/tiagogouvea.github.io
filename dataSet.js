const dataSet = {
  name: '@TiagoGouvea',
  description: 'A description',
  sections: [
    {
      title: 'App Masters',
      description: 'Software development teams dedicated to make projects that grow and last.',
      links: [
        {
          label: 'Our Website',
          url: 'https://www.appmasters.io/en',
          icon: '<i class="fab fa-twitter text-secondary "></i>',
        },
        {
          label: 'Schedule a meeting',
          url: 'https://calendly.com/tiago-gouvea/app-masters-meeting',
          icon: '',
        },
        {
          type: 'youtube',
          url: 'https://www.youtube.com/embed/tgbNymZ7vqY',
        },
      ],
    },
    {
      title: 'Personal',
      description: 'A description',
      links: [
        {
          label: 'Spotify profile',
          url: 'https://open.spotify.com/user/12144433211?si=75b2bc0584294c63',
          icon: '<i class="fab fa-spotify text-secondary "></i>',
        },
        {
          label: 'Spotify profile',
          url: 'https://open.spotify.com/user/12144433211?si=75b2bc0584294c63',
          icon: '<i class="fab fa-spotify text-secondary "></i>',
        },
        {
          type: 'img',
          url: 'https://picsum.photos/1280/720',
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
      <div class="mb-4">
        <h3 class="text-secondary">${section.title}</h3>
        <div class="d-flex flex-column align-items-center">
        ${section.links
          .map((link) => {
            if (link.type === 'youtube')
              return `
              <div class="embed-responsive embed-responsive-16by9 my-2">
                <iframe class="embed-responsive-item" src="${link.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>`;
            if (link.type === 'img')
              return `
                <img src="${link.url}" class="img-fluid w-100 my-2" alt="img"/>
              `;
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