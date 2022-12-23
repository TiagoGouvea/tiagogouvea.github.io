const dataSet = {
  name: 'Tiago Gouvea',
  description: 'CEO & Sr Software Developer at App Masters',
  sections: [
    {
      links: [
        {
          type: 'img',
          url: 'https://tiagogouvea.github.io/img/global.png',
        },
      ],
    },
    {
      title: 'App Masters',
      description:
        'Software development team dedicated to make projects that grow and last.',
      links: [
        {
          label: 'Visit our website',
          url: 'https://www.appmasters.io/en',
          icon: '<i class="fa fa-globe text-secondary"></i>',
        },
        {
          label: 'Schedule a meeting',
          url: 'https://calendly.com/tiago-gouvea/app-masters-meeting',
          icon: '<i class="far fa-calendar text-secondary"></i>',
        },
        {
          label: 'Connect by LinkedIn',
          icon: '<i class="fab fa-linkedin text-secondary "></i>',
          url: 'https://www.linkedin.com/company/appmasters.io',
        },
      ],
    },
    {
      title: 'Professional + Personal',
      description: 'A description',
      links: [
        {
          label: 'Connect by LinkedIn',
          url: 'https://www.linkedin.com/in/tiagogouvea/',
          icon: '<i class="fab fa-linkedin text-secondary "></i>',
        },
        {
          label: 'Follow me on GitHub',
          url: 'https://github.com/tiagoGouvea/',
          icon: '<i class="fab fa-github text-secondary "></i>',
        },
        {
          label: 'Follow me on Spotify',
          url: 'https://open.spotify.com/user/12144433211?si=75b2bc0584294c63',
          icon: '<i class="fab fa-spotify text-secondary "></i>',
        },
      ],
    },
    {
      links: [
        {
          type: 'img',
          url: 'https://tiagogouvea.github.io/img/brazil.png',
        },
      ],
    },
    {
      title: 'Algo mais',
      links: [
        {
          label: 'Blog Pessoal',
          url: 'https://tiagogouvea.com.br/',
          icon: '<i class="fab fa-linkedin text-secondary"></i>',
        },
        {
          label: 'Caminhar e conversar',
          url: 'https://calendly.com/tiago-gouvea/caminhar-e-conversar',
          icon: '<i class="fab fa-person-walking text-secondary"></i>',
        },
        {
          label: 'Hackathon do Moinho - Janeiro 2023',
          url: 'https://hackathon.nossomoinho.com/',
          icon: '<i class="fa fa-robot text-secondary"></i>',
        },
        {
          label: 'Google Developers Group Juiz de Fora',
          url: 'https://gdgjf.github.io/',
          icon: '<i class="fa fa-code text-secondary"></i>',
        },
        {
          label: 'Canal no YouTube',
          url: 'https://www.youtube.com/c/TiagoGouveaProgramador',
          icon: '<i class="fab fa-youtube text-secondary"></i>',
        },
      ],
    },
  ],
  //
  // socials: [
  //   {
  //     icon: '<i class="fab fa-twitter text-secondary"></i>',
  //     url: 'http://example.com',
  //   },
  //   {
  //     icon: '<i class="fab fa-linkedin text-secondary"></i>',
  //     url: 'http://example.com',
  //   },
  // ],
};

const nameElement = document.querySelector('#name');
const descriptionElement = document.querySelector('#description');

const linksElement = document.querySelector('#links');
// const socialElement = document.querySelector('#social');

// Path: render.js
const render = (dataSet) => {
  nameElement.innerHTML = dataSet.name;
  descriptionElement.innerHTML = dataSet.description;

  linksElement.innerHTML = dataSet.sections
    .map((section) => {
      return `
      <div class="mb-4">
        <h4 class="text-secondary">${section.title ? section.title : ''}</h4>
        <div class="d-flex flex-column align-items-center">
        ${section.links
          .map((link) => {
            if (link.type === 'youtube')
              return `
              <div class="embed-responsive embed-responsive-16by9 mb-2">
                <iframe class="embed-responsive-item" src="${link.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>`;
            if (link.type === 'img')
              return `
                <img src="${link.url}" class="img-fluid w-100 mb-2" alt="img"/>
              `;
            return `<a
          ${
            link.url
              ? `rel='nofollow noopener' target='_blank' href=${link.url}`
              : ''
          }
         
          class="btn btn-outline-info btn-lg btn-block ${
            link.url ? '' : 'disabled'
          }"
          style="white-space: normal;"
          >
            <div class="position-absolute">
            ${link.icon ? link.icon : ''}
            </div>
            <p class="m-0 ml-5 ml-sm-0">${link.label}</p>
          </a>
        `;
          })
          .join('')}
      </div>
    </div>
    `;
    })
    .join('');

  // socialElement.innerHTML = dataSet.socials
  //   .map((social) => {
  //     return `<li class="list-inline-item">
  //     <a 
  //     rel="nofollow noopener"
  //     target="_blank" 
  //     href="${social.url}">
  //       ${social.icon}
  //     </a>
  //     </li>`;
  //   })
  //   .join('');
  // socialElement.innerHTML = dataSet.socials
  //   .map((social) => {
  //     return `<li class="list-inline-item">
  //     <a
  //     rel="nofollow noopener"
  //     target="_blank"
  //     href="${social.url}">
  //       ${social.icon}
  //     </a>
  //     </li>`;
  //   })
  //   .join('');
  // socialElement.innerHTML = dataSet.socials
  //   .map((social) => {
  //     return `<li class="list-inline-item">
  //     <a
  //     rel="nofollow noopener"
  //     target="_blank"
  //     href="${social.url}">
  //       ${social.icon}
  //     </a>
  //     </li>`;
  //   })
  //   .join('');
};

// Path: index.js
render(dataSet);
