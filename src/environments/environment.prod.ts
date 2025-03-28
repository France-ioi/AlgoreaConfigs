import { Environment, PartialDeep } from 'src/app/utils/config';;

export const environment: Environment = {
  production: true,
  apiUrl: '/api',
  oauthServerUrl: 'https://login.france-ioi.org',
  oauthClientId: '56',
  searchApiUrl: 'https://74w4cx6w62uon4dtqinf6quqeu0qvunw.lambda-url.eu-west-3.on.aws',
  forumServerUrl: 'wss://0j8i1y8ca2.execute-api.eu-west-3.amazonaws.com/fioi',

  sentryDsn: 'https://6295834d69104f54b55cc0ebe4ada310@o1167067.ingest.sentry.io/6257761',

  defaultActivityId: '1',
  defaultSkillId : '2',

  allUsersGroupId: '3',

  languages: [
    { tag: 'fr', path: '/fr/' },
    { tag: 'en', path: '/en/' },
  ],
  defaultTitle: 'Algorea Platform',
  languageSpecificTitles: { fr: 'Plateforme Algoréa' },

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

