export interface FontVariant {
  id: string;
  local: string[];
  ttf: string;
  fontFamily: string;
  fontStyle: string;
  fontWeight: string;
  svg: string;
  woff: string;
  woff2: string;
  eot: string;
}

export interface FontData {
  id: string;
  family: string;
  category: string;
  variants: FontVariant[];
  subsets: string[];
  lastModified: string;
  subsetMap: {
    cyrillic: boolean;
    'cyrillic-ext': boolean;
    greek: boolean;
    'greek-ext': boolean;
    latin: boolean;
    'latin-ext': boolean;
    vietnamese: boolean;
  };
}
