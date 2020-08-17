import { createStore } from 'specks';
import { Font } from '../interfaces/font';

export let { useStore: useFontStore } = createStore(({ get, set }) => ({
  registeredFonts: [],
  loadedFonts: [],
  selectedFonts: [],
  loadFont: (font: Font) => {
    let registeredFonts = get().registeredFonts;
    if (registeredFonts.includes(font.id)) return;

    set({ registeredFonts: [...registeredFonts, font.id] });

    let linkEl = document.createElement('link');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.setAttribute(
      'href',
      `https://fonts.googleapis.com/css2?family=${encodeURIComponent(font.name)}:wght@${
        font.previewVariant
      }&display=block`
    );

    linkEl.addEventListener('load', () => {
      let loadedFonts = get().loadedFonts;
      set({ loadedFonts: [...loadedFonts, font.id] });
    });

    document.head.appendChild(linkEl);
  },
  selectFont: (font: Font, toggle: boolean = true) => {
    let selectedFonts = get().selectedFonts;

    if (selectedFonts.includes(font.id)) {
      if (!toggle) return;
      set({ selectedFonts: selectedFonts.filter(f => f != font.id) });
    } else {
      set({ selectedFonts: [...selectedFonts, font.id] });
    }
  }
}));
