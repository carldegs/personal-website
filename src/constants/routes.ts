export enum HomeSections {
  work = 'work',
  projects = 'projects',
  blog = 'blog',
  contact = 'contact',
}

export const HOME_ROUTES = [
  {
    name: 'HEY!',
    isDark: true,
    hash: '',
  },
  {
    name: 'WORK',
    hash: HomeSections.work,
  },
  {
    name: 'PROJECTS',
    hash: HomeSections.projects,
  },
  {
    name: 'BLOG',
    hash: HomeSections.blog,
  },
  {
    name: 'CONTACT',
    hash: HomeSections.contact,
  },
];
