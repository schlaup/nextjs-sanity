export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d4892f932fe9f0a8639b901',
                  title: 'Sanity Studio',
                  name: 'nextjs-sanity-studio-8o66856q',
                  apiId: '5ceed605-c819-4249-9493-a1b247ced377'
                },
                {
                  buildHookId: '5d4892f9b043050b1e46586e',
                  title: 'Landing pages Website',
                  name: 'nextjs-sanity-web',
                  apiId: 'c019c240-ec6e-4f9b-a619-85163ab82d44'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/schlaup/nextjs-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nextjs-sanity-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
