import { Environment, PartialDeep } from 'src/app/utils/config';;

export const environment: Environment = {
  production: true,
  apiUrl: '/api',
  oauthServerUrl: 'https://login.france-ioi.org',
  oauthClientId: '56',
  searchApiUrl: 'https://74w4cx6w62uon4dtqinf6quqeu0qvunw.lambda-url.eu-west-3.on.aws',
  forumServerUrl: 'wss://0j8i1y8ca2.execute-api.eu-west-3.amazonaws.com/fioi',

  sentryDsn: 'https://6295834d69104f54b55cc0ebe4ada310@o1167067.ingest.sentry.io/6257761',

  defaultActivityId: '4702',
  defaultSkillId : '409159715167354071',

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
    'home': { id: '4702', path: [] },
    'contents/4703': { id: '4702', path: [] },

    'snt': { id: '1067253748629066205', path: ['4702'] },
    'contents/4707-4702-1067253748629066205': { id: '1067253748629066205', path: ['4702'] },

    'snt-localisation': { id: '183305583351435935', path: ['4702','1067253748629066205'] },
    'contents/4707-4702-1067253748629066205-183305583351435935': { id: '183305583351435935', path: ['4702','1067253748629066205'] },

    'snt-donnees': { id: '653650670442840123', path: ['4702','1067253748629066205'] },
    'contents/4707-4702-1067253748629066205-653650670442840123': { id: '653650670442840123', path: ['4702','1067253748629066205'] },

    'snt-photo': { id: '1625996270397195025', path: ['4702','1067253748629066205'] },
    'contents/4707-4702-1067253748629066205-1625996270397195025': { id: '1625996270397195025', path: ['4702','1067253748629066205'] },

    'snt-internet': { id: '1107658684176222875', path: ['4702','1067253748629066205'] },
    'contents/4707-4702-1067253748629066205-1107658684176222875': { id: '1107658684176222875', path: ['4702','1067253748629066205'] },

    'motif-art': { id: '1625159049301502151', path: ['4702'] },
    'contents/4707-4702-1625159049301502151': { id: '1625159049301502151', path: ['4702'] },

    'algorea-serious-game': { id: '1471479157476024035', path: ['4702'] },
    'contents/4707-4702-1471479157476024035': { id: '1471479157476024035', path: ['4702'] },

    'algorea-adventure': { id: '100575556387408660', path: ['4702'] },
    'contents/4707-4702-100575556387408660': { id: '100575556387408660', path: ['4702'] },
  }
};

type Preset = 'telecomParis';
export const presets: Record<Preset, PartialDeep<Environment>> = {
  telecomParis: {
    theme: 'coursera-pt',
    defaultTitle: 'Activities by Telecom Paris and Dartmouth college',
  },
};

export function getPresetNameByOrigin(origin: string): Preset | null {
  switch (origin) {
    case 'https://telecom-paris.france-ioi.org': return 'telecomParis';
    default: return null;
  }
}

