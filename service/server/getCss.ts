import { FontVariant } from '../interfaces/fontData';

export let getCss = (host: string, variants: FontVariant[], display?: string) => {
  return variants
    .map(variant => {
      return `/* ${variant.fontFamily} - ${variant.fontStyle} - ${variant.fontWeight} */
@font-face {
  font-family: ${variant.fontFamily};
  font-style: ${variant.fontStyle};
  font-weight: ${variant.fontWeight};
  font-display: ${display || 'swap'};
  src: ${
    Array.isArray(variant.local)
      ? variant.local.map(l => `local('${l}')`).join(', ')
      : "local('')"
  },
        url('https://${host}${variant.woff2}') format('woff2'),
        url('https://${host}${variant.woff}') format('woff');
}
`;
    })
    .join('\n');
};
