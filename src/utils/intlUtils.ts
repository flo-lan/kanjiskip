// "import type" ensures en messages aren't bundled by default
import * as sourceOfTruth from '../messages/en.json'

// Note: in order to use "import type" you'll need Babel >= 7.9.0 and/or TypeScript >= 3.8.
// Otherwise, you can use a normal import and accept to always bundle one language + the user required one

export type LocaleMessages = typeof sourceOfTruth

export type SupportedLocales = 'en' | 'de'
export const locales = { en: 'English', de: 'Deutsch' }

// return type on this signature enforces that all languages have the same translations defined
export function importMessages(
  locale: SupportedLocales
): Promise<LocaleMessages> {
  switch (locale) {
    case 'en':
      return import('../messages/en.json')
    case 'de':
      return import('../messages/de.json')
    default:
      console.error(`Locale ${locale} not found`)
      return import('../messages/en.json')
  }
}

export function getLocaleFromBrowser(): string | null {
  return navigator?.language.split(/-|_/)[0]
}
