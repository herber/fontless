import { createStore } from 'specks';
import { FontData, FontVariant } from '../interfaces/fontData';

export let { useStore: useFontStore } = createStore(({ get, set }) => ({
  registeredFonts: [],
  loadedFonts: [],
  selectedFonts: {},
  loadFont: (font: FontData) => {
    let registeredFonts = get().registeredFonts;
    if (registeredFonts.includes(font.id)) return;

    set({ registeredFonts: [...registeredFonts, font.id] });

    let linkEl = document.createElement('link');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.setAttribute(
      'href',
      `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
        font.family
      )}&display=swap`
    );

    linkEl.addEventListener('load', () => {
      let loadedFonts = get().loadedFonts;
      set({ loadedFonts: [...loadedFonts, font.id] });
    });

    document.head.appendChild(linkEl);
  },
  selectFont: (font: FontData, variant: FontVariant) => {
    let selectedFonts = get().selectedFonts;

    if (selectedFonts[font.id]) {
      let variantsIds = [...selectedFonts[font.id].variantsIds];
      let variants = [...selectedFonts[font.id].variants];

      if (variantsIds.includes(variant.id)) {
        variantsIds = variantsIds.filter(v => v != variant.id);
        variants = variants.filter(v => v.id != variant.id);
      } else {
        variantsIds.push(variant.id);
        variants.push(variant);
      }

      set({
        selectedFonts: {
          ...selectedFonts,
          [font.id]: {
            ...selectedFonts[font.id],
            variants,
            variantsIds
          }
        }
      });
    } else {
      set({
        selectedFonts: {
          ...selectedFonts,
          [font.id]: {
            id: font.id,
            family: font.family,
            variants: [variant],
            variantsIds: [variant.id]
          }
        }
      });
    }
  }
}));
