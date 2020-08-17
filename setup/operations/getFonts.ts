import { Font } from '../interfaces/font';

export let getFonts = async (): Promise<Font[]> => {
  let res = await fetch('/api/fonts');
  let data = await res.json();

  return data.fonts;
};
