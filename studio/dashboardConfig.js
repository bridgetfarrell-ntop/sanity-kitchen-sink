export default {
  widgets: [
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
                  buildHookId: '6357f86f9df4037cae6f18b3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-x8iramaz',
                  apiId: '3bf0ac3b-b2e9-42cc-9d53-81b0f15518b5'
                },
                {
                  buildHookId: '6357f86fb003ce021412b61c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-jmbiqx3i',
                  apiId: '99a21337-1757-4a77-b16e-40afb9a22895'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bridgetfarrell-ntop/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-jmbiqx3i.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
