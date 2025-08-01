// Links:
// Fala com minha assistente
// Desenvolvimento
// App Masters
// EN:
// Schedule meeting
// linkedin - github - instagram - youtube (ícones apenas em uma linha)

// TODO:  1 -incluir links:
// Agendar diagnóstico focado em IA - https://www.appmasters.io/pt/desenvolvimento-sistemas-inteligencia-artificial
// Webinar: Como adotar IA no seu negócio - https://www.appmasters.io/pt/como-adotar-ia-no-negocio
// Palestra Agentes de IA - https://www.youtube.com/c/TiagoGouveaProgramador

// TODO: 2 - dataSet.description "CEO & Sr Softwar..." ter en/pt, como?

// App Masters
// Site
// Links sociais (instagram, linkedin)
// Agento
// Site
// Links sociais (instagram, linkedin)

// TODO: 3
// Ajustar icone para algo mais relevante em:
// "falar com ...", agendar ...

const dataSet = {
  name: "Tiago Gouvêa",
  description: {
    pt: "CEO & Desenvolvedor Sênior na App Masters",
    en: "CEO & Sr Software Developer at App Masters",
  },
  sections: [
    // {
    //   links: [
    //     {
    //       type: "img",
    //       url: "https://tiagogouvea.github.io/img/global.png",
    //     },
    //   ],
    // },
    {
      title: "Agento",
      description:
        "Software development team dedicated to make projects that grow and last.",
      languages: ["pt"], // só exibe para usuários em português
      links: [
        {
          label: "Conhecer o Agento",
          url: "https://www.agento.com.br",
          icon: '<i class="fa fa-globe text-secondary"></i>',
          languages: ["pt"],
        },
        {
          label: "Agendar diagnóstico focado em IA",
          url: "https://www.appmasters.io/pt/desenvolvimento-sistemas-inteligencia-artificial",
          icon: '<i class="fa fa-brain text-secondary"></i>',
          languages: ["pt"],
        },
        {
          label: "Falar com a assistente",
          url: "https://api.whatsapp.com/send?phone=5532999883755",
          icon: '<i class="far fa-calendar text-secondary"></i>',
          languages: ["pt"],
        },
      ],
    },
    {
      title: "Aprender mais",
      description:
        "Software development team dedicated to make projects that grow and last.",
      links: [
        {
          label: "Webinar: Como adotar IA no seu negócio",
          url: "https://www.appmasters.io/pt/como-adotar-ia-no-negocio",
          icon: '<i class="fa fa-video text-secondary"></i>',
          languages: ["pt"],
        },
        {
          label: "Palestra Agentes de IA",
          url: "https://docs.google.com/presentation/d/11dS5dW1x0GJvzMf7AwMdKlS03AD6dyMjkki3cCTG61Q/edit?usp=sharing",
          icon: '<i class="fab fa-youtube text-secondary"></i>',
          languages: ["pt"],
        },
      ],
    },
    {
      title: "App Masters",
      description:
        "Software development team dedicated to make projects that grow and last.",
      links: [
        {
          label: "Conhecer a empresa",
          url: "https://www.appmasters.io/pt",
          icon: '<i class="fa fa-globe text-secondary"></i>',
          languages: ["pt"],
        },
        {
          label: "Projetos com IA",
          url: "https://www.appmasters.io/pt/desenvolvimento-sistemas-inteligencia-artificial",
          icon: '<i class="fa fa-globe text-secondary"></i>',
          languages: ["pt"],
        },
        // {
        //   label: "Visit our website",
        //   url: "https://www.appmasters.io/en",
        //   icon: '<i class="fa fa-globe text-secondary"></i>',
        //   languages: ["en"],
        // },
        // {
        //   label: "Schedule a meeting",
        //   url: "https://calendly.com/tiago-gouvea/app-masters-meeting",
        //   icon: '<i class="far fa-calendar text-secondary"></i>',
        //   languages: ["en"],
        // },
      ],
    },
    // {
    //   links: [
    //     {
    //       type: "img",
    //       url: "https://tiagogouvea.github.io/img/brazil.png",
    //       languages: ["en"],
    //     },
    //   ],
    // },
    {
      title: "Social",
      links: [
        {
          type: "social-icons",
          icons: [
            {
              icon: '<i class="fab fa-linkedin"></i>',
              url: "https://www.linkedin.com/in/tiagogouvea/",
            },
            {
              icon: '<i class="fab fa-github"></i>',
              url: "https://github.com/tiagoGouvea/",
            },
            {
              icon: '<i class="fab fa-instagram"></i>',
              url: "https://instagram.com/tiagogouvea",
            },
            {
              icon: '<i class="fab fa-youtube"></i>',
              url: "https://www.youtube.com/c/TiagoGouveaProgramador",
            },
            {
              icon: '<i class="fab fa-whatsapp"></i>',
              url: "https://api.whatsapp.com/send?phone=5532988735683",
            },
          ],
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

const nameElement = document.querySelector("#name");
const descriptionElement = document.querySelector("#description");
const headerSocialElement = document.querySelector("#headerSocial");

const linksElement = document.querySelector("#links");
// const socialElement = document.querySelector('#social');

// Language detection
const getUserLanguage = () => {
  return "pt"; // Force Portuguese language
};

// Filter content by language
const filterByLanguage = (items, userLanguage) => {
  return items.filter((item) => {
    if (!item.languages) return true; // show if no language specified
    return item.languages.includes(userLanguage);
  });
};

// Path: render.js
const render = (dataSet) => {
  const userLanguage = getUserLanguage();

  nameElement.innerHTML = dataSet.name;
  descriptionElement.innerHTML =
    dataSet.description[userLanguage] || dataSet.description.en;

  const filteredSections = filterByLanguage(dataSet.sections, userLanguage);

  // Extract social icons from all sections and render in header
  const allSocialIcons = [];
  filteredSections.forEach((section) => {
    const filteredLinks = filterByLanguage(section.links, userLanguage);
    const socialIcons = filteredLinks.filter(
      (link) => link.type === "social-icons"
    );
    socialIcons.forEach((socialLink) => {
      allSocialIcons.push(...socialLink.icons);
    });
  });

  // Render social icons in header
  if (headerSocialElement && allSocialIcons.length > 0) {
    headerSocialElement.innerHTML = allSocialIcons
      .map(
        (icon) => `
      <a href="${icon.url}" target="_blank" rel="nofollow noopener" class="mx-1" style="font-size: 1.25rem; color: #17a2b8; line-height: 1;">
        ${icon.icon}
      </a>
    `
      )
      .join("");
  }

  linksElement.innerHTML = filteredSections
    .map((section) => {
      const filteredLinks = filterByLanguage(section.links, userLanguage);

      if (filteredLinks.length === 0) return ""; // skip section if no links

      // Filter out social icons since they're in the header now
      const otherLinks = filteredLinks.filter(
        (link) => link.type !== "social-icons"
      );

      if (otherLinks.length === 0) return ""; // skip section if only social icons

      return `
      <div class="mb-4">
        <h4 class="text-secondary">${section.title ? section.title : ""}</h4>
        <div class="d-flex flex-column align-items-center">
        <div class="row w-100 d-none d-lg-flex">
        ${otherLinks
          .map((link) => {
            if (link.type === "youtube")
              return `
              <div class="col-12 mb-2">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="${link.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>`;
            if (link.type === "img")
              return `
                <div class="col-12 mb-2">
                  <img src="${link.url}" class="img-fluid w-100" alt="img"/>
                </div>
              `;
            if (link.type === "social-icons")
              return `
                <div class="col-12 mb-2">
                  <div class="d-flex justify-content-center">
                    ${link.icons
                      .map(
                        (icon) => `
                      <a href="${icon.url}" target="_blank" rel="nofollow noopener" class="mx-3" style="font-size: 2rem; color: #17a2b8;">
                        ${icon.icon}
                      </a>
                    `
                      )
                      .join("")}
                  </div>
                </div>`;
            return `<div class="col-6 mb-3">
              <a
              ${
                link.url
                  ? `rel='nofollow noopener' target='_blank' href=${link.url}`
                  : ""
              }
              class="btn btn-outline-info btn-lg btn-block ${
                link.url ? "" : "disabled"
              }"
              style="white-space: normal; height: auto; min-height: 60px; max-width: 500px; margin: 0 auto; display: flex; align-items: center; justify-content: center; position: relative;"
              >
                <div style="margin-right: 10px;">
                ${link.icon ? link.icon : ""}
                </div>
                <span>${link.label}</span>
              </a>
            </div>`;
          })
          .join("")}
        </div>
        <div class="d-lg-none w-100">
        ${otherLinks
          .map((link) => {
            if (link.type === "youtube")
              return `
              <div class="embed-responsive embed-responsive-16by9 mb-2">
                <iframe class="embed-responsive-item" src="${link.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>`;
            if (link.type === "img")
              return `
                <img src="${link.url}" class="img-fluid w-100 mb-2" alt="img"/>
              `;
            if (link.type === "social-icons")
              return `
                <div class="d-flex justify-content-center mb-2">
                  ${link.icons
                    .map(
                      (icon) => `
                    <a href="${icon.url}" target="_blank" rel="nofollow noopener" class="mx-3" style="font-size: 2rem; color: #17a2b8;">
                      ${icon.icon}
                    </a>
                  `
                    )
                    .join("")}
                </div>`;
            return `<a
            ${
              link.url
                ? `rel='nofollow noopener' target='_blank' href=${link.url}`
                : ""
            }
            class="btn btn-outline-info btn-lg btn-block ${
              link.url ? "" : "disabled"
            } mb-2"
            style="white-space: normal;"
            >
              <div class="position-absolute">
              ${link.icon ? link.icon : ""}
              </div>
              <p class="m-0 ml-5 ml-sm-0">${link.label}</p>
            </a>
          `;
          })
          .join("")}
        </div>
      </div>
    </div>
    `;
    })
    .join("");

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
