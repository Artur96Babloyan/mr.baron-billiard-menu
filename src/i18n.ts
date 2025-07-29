import {getRequestConfig} from 'next-intl/server';
import {defaultLocale} from './i18n/config';

export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`./i18n/locales/${locale || defaultLocale}.json`)).default,
  locale: locale || defaultLocale
})); 