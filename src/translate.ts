import {
  letterMappingToEnglish,
  letterMappingToTOFTS,
} from './models/letterMapping';

const alphabetRegex = new RegExp(
  /[aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ]/g
);

export function toEnglish(toftsText: string): string {
  let englishText: string = toftsText.replace(
    alphabetRegex,
    (letter) => letterMappingToEnglish[letter]
  );
  return englishText;
}

export function toTOFTS(englishText: string): string {
  let TOFTSText: string = englishText.replace(
    alphabetRegex,
    (letter) => letterMappingToTOFTS[letter]
  );
  return TOFTSText;
}
