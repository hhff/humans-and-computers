export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '60bf8c47d1dff040833d08f2',
                  title: 'Sanity Studio',
                  name: 'humans-and-computers-studio',
                  apiId: 'f49a748f-f4ab-4c86-894c-8874b78fc8ee'
                },
                {
                  buildHookId: '60bf8c464b75e4417ef9dc6c',
                  title: 'Blog Website',
                  name: 'humans-and-computers',
                  apiId: '0e3e7934-6980-4ea3-8f2d-02950f734a9c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hhff/humans-and-computers',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://humans-and-computers.netlify.app', category: 'apps'}
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
