import { HOME_ROUTES } from '../constants/routes';

export const getHomeSectionData = (url: string) => {
  const newHash = url.replace('/', '').replace('#', '');
  return HOME_ROUTES.find(({ hash }) => (hash as string) === newHash);
};
