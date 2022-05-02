import ContactPanel from '../organisms/ContactPanel';
import ProjectsPanel from '../organisms/ProjectsPanel';
import WorkPanel from '../organisms/WorkPanel';

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
    Component: WorkPanel,
  },
  {
    name: 'PROJECTS',
    hash: HomeSections.projects,
    Component: ProjectsPanel,
  },
  // {
  //   name: 'BLOG',
  //   hash: HomeSections.blog,
  // },
  {
    name: 'CONTACT',
    hash: HomeSections.contact,
    Component: ContactPanel,
  },
];
