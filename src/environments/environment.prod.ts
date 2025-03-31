import { Environment, PartialDeep } from 'src/app/utils/config';;

export const environment: Environment = {
  production: true,
  apiUrl: '/api',
  oauthServerUrl: 'https://host2test1.france-ioi.org',
  oauthClientId: '24',
//  searchApiUrl: '',
//  forumServerUrl: '',

  sentryDsn: 'https://6295834d69104f54b55cc0ebe4ada310@o1167067.ingest.sentry.io/6257761',

  defaultActivityId: '1',
  defaultSkillId : '2',

  allUsersGroupId: '3',

  languages: [
    { tag: 'en', path: '/en/' },
  ],
  defaultTitle: 'La Skool',
  languageSpecificTitles: {},

  allowForcedToken: true,
  authType: 'cookies',

  itemPlatformId: 'algorea_backend',

  theme: 'default',
  featureFlags: {
    hideTaskTabs: []
  },

  redirects: { /* paths to be matched must not have a trailing slash */
    'home': { id: '1', path: [] },

  }
};

export const presets: Record<Preset, PartialDeep<Environment>> = {
  dummy: {
    theme: 'dummy',
    defaultTitle: 'dummy',
  },
};export function getPresetNameByOrigin(origin: string): null {
  return null;
}
