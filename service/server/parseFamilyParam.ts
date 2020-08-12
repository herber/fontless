import { NextApiResponse } from 'next';
import { invalidFamilyParameterError } from './errors/invalidFamilyParameter';
import { ParsedFont } from '../interfaces/parsedFont';

export let parseFamilyParam = (family: string[], res: NextApiResponse) => {
  let parsedFonts: ParsedFont[] = [];

  for (let fam of family) {
    let colonParts = fam.split(':');
    let selectedVariants: string[] = [];
    let fontName = colonParts[0];

    if (colonParts.length == 2) {
      let optParts = colonParts[1].split('@');
      if (optParts.length != 2) {
        return res
          .status(406)
          .send(invalidFamilyParameterError(fontName, 'opts_params_length'));
      }

      let optsNames = optParts[0].split(',');
      let optsValues = optParts[1].split(';');
      if (optsNames.length > 2) {
        return res
          .status(406)
          .send(invalidFamilyParameterError(fontName, 'too_many_option_names'));
      }

      for (let value of optsValues) {
        let subValues = value.split(',');

        if (subValues.length != optsNames.length) {
          return res
            .status(406)
            .send(invalidFamilyParameterError(fontName, 'option_values_not_matching_names'));
        }

        if (optsNames.length == 1 && optsNames[0] == 'wght') {
          selectedVariants.push(`normal-${subValues[0]}`);
        } else if (optsNames.length == 1 && optsNames[0] == 'wght') {
          selectedVariants.push(`${subValues[0]}-400`);
        } else if (optsNames.length == 2) {
          let width = '400';
          let italic = false;

          if (optsNames[0] == 'wght') {
            width = subValues[0];
          } else if (optsNames[1] == 'wght') {
            width = subValues[1];
          }

          if (optsNames[0] == 'ital') {
            italic = subValues[0] == '1';
          } else if (optsNames[1] == 'ital') {
            italic = subValues[1] == '1';
          }

          selectedVariants.push(`${italic ? 'italic' : 'normal'}-${width}`);
        }
      }
    }

    let parsedFont = {
      id: colonParts[0],
      selectedVariants
    };

    parsedFonts.push(parsedFont);
  }

  return parsedFonts;
};
