import {getRequestConfig} from 'next-intl/server';
import {defaultLocale} from './config';

export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`./locales/${locale || defaultLocale}.json`)).default,
  locale: locale || defaultLocale,
  timeZone: 'UTC'
}));
