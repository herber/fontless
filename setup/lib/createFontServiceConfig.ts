import { Font } from '../interfaces/font';

export let createFontServiceConfig = (
  allFonts: Font[],
  selectedFonts: string[],
  name?: string
) => {
  let fonts = {};

  for (let font of allFonts) {
    if (selectedFonts.length === 0 || selectedFonts.includes(font.id)) {
      fonts[font.id] = font;
    }
  }

  return {
    version: 'v1',
    name: name && name.trim().length > 0 ? name.trim() : 'Fontless',
    type: 'varld-fontless-config',
    fonts
  };
};
