import TextsEN from '@constants/langs/en.json';

export function getText(key: string): string {
  return (TextsEN as { [key: string]: string })[key] ?? key;
}
