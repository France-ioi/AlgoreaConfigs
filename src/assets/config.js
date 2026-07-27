window.appConfig = {
  apiUrl: '/api',
  oauthServerUrl: 'https://login-learn.thymio.org',
  oauthClientId: '25',
//  searchApiUrl: '',
//  forumServerUrl: 'wss://cyduaoy46h.execute-api.eu-west-3.amazonaws.com/thy',

  slsWsUrl: 'wss://7i695vtyx8.execute-api.eu-west-3.amazonaws.com/thy-prod',
  slsApiUrl: '/sls',

  sentryDsn: 'https://6295834d69104f54b55cc0ebe4ada310@o1167067.ingest.sentry.io/6257761',

  defaultActivityId: '1',

  allUsersGroupId: '3',

  languages: [
    { tag: 'en', path: '/en/' },
    { tag: 'fr', path: '/fr/' },
    { tag: 'de', path: '/de/' },
    { tag: 'it', path: '/it/' },
  ],
  defaultTitle: 'Thymio Learn',
  languageSpecificTitles: {},
  leftHeaderLogoUrl: 'https://static5.algorea.org/frontend/assets/thy-prod/images/logo-v3.png',

  allowForcedToken: true,
  authType: 'cookies',

  itemPlatformId: 'algorea_backend',

  featureFlags: {
    hideTaskTabs: [ 'alg-chapter-progress' ],
  },

  leftMenuTabs: [
    { type: 'activities', showTo: 'all', content: { id: '1', path: [] }, caption: { default: 'Home' }, icon: 'ph ph-house' },
    { type: 'activities', showTo: 'all', content: { id: '331016547396745102', path: [] }, caption: { default: 'Coding' }, icon: 'ph ph-code' },
    { type: 'activities', showTo: 'all', content: { id: '8574402720651125412', path: [] }, caption: { default: 'Learning Library' }, icon: 'ph ph-book-open-text' },
    { type: 'activities', showTo: 'all', content: { id: '857998269736543997', path: [] }, caption: { default: 'Support' }, icon: 'ph ph-question' },
    { type: 'groups', showTo: [ '5474504249508524668', '5731266669701761019' ] },
    { type: 'search', showTo: 'all' },
  ],

  redirects: { /* paths to be matched must not have a trailing slash */
    'home': { id: '1', path: [] },
    'coding': { id: '331016547396745102', path: [] },
    'learning': { id: '8574402720651125412', path: [] },
    'support': { id: '857998269736543997', path: [] },
  },

  hideLeftMenuTreeOnItemIds: [ '1' ],

};