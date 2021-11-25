import TextsEN from '@constants/langs/en.json';
import TextsES from '@constants/langs/es.json';

type AvailableLanguages = 'es' | 'en';

export function getText(key: string): string {
  let lang: AvailableLanguages = 'en';
  if (typeof navigator === 'object') {
    if (/^es\b/.test(navigator.language)) {
      lang = 'es';
    }
  }

  return ((lang === 'es' ? TextsES : TextsEN) as { [key: string]: string })[key] ?? key;
}
