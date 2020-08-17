import { Font } from '../../interfaces/font';

export let fontsPresenter = (fonts: any[]): Font[] => {
  return fonts.map(f => {
    let previewVariant = f.defVariant;

    if (!previewVariant) {
      let i = Math.floor(f.variants.length / 5);
      previewVariant = f.variants[i];
    }

    if (previewVariant == 'regular') {
      previewVariant = '400';
    }

    return {
      category: f.category,
      id: f.id,
      name: f.family,
      previewVariant
    };
  });
};
