import { FontData, FontVariant } from '../interfaces/fontData';
import { ParsedFont } from '../interfaces/parsedFont';

export let getVariants = (parsedFonts: ParsedFont[], fonts: FontData[]) => {
  let selectedVariants: FontVariant[] = [];
  let parsedFontsMap = new Map();

  for (let parsedFont of parsedFonts) {
    parsedFontsMap.set(parsedFont.id, parsedFont);
  }

  for (let font of fonts) {
    let parsedFont: ParsedFont;

    if (parsedFontsMap.has(font.id)) parsedFont = parsedFontsMap.get(font.id);
    if (parsedFontsMap.has(font.family)) parsedFont = parsedFontsMap.get(font.family);

    if (!parsedFont) continue;

    for (let variant of font.variants) {
      if (parsedFont.selectedVariants.includes(`${variant.fontStyle}-${variant.fontWeight}`)) {
        selectedVariants.push(variant);
      }
    }
  }

  return selectedVariants;
};
