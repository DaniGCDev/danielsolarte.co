import TextsEN from '@constants/langs/en.json';

export function getText(key: string): string {
  return TextsEN[key] ?? key;
}
