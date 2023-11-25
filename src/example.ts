import { toEnglish, toTOFTS } from './translate';

const exampleEnglishText = 'This is a text I want to translate to TOFTS';
const toftsText = toTOFTS(exampleEnglishText);
const translatedEnglishText = toEnglish(toftsText);
console.log(`Original text:\n${exampleEnglishText}\n`);
console.log(`Translated to the TOFTS language:\n${toftsText}\n`);
console.log(`Translated the TOFTS language back to the original text:\n${translatedEnglishText}\n`);
