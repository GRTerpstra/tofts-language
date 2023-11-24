import { toTOFTS, toEnglish } from '../translate';

describe('Translation tests', () => {
  var randomText: string;

  beforeEach(() => {
    randomText = randomizeText();
  });

  test('Random (English) text should not be the same as the translated TOFTS language text', () => {
    expect(randomText).not.toBe(toTOFTS(randomText));
  });

  test('Translated English text should not be the same as the translated TOFTS language text', () => {
    expect(toEnglish(randomText)).not.toBe(toTOFTS(randomText));
  });

  test('Random (English) text translated to the TOFTS language should be the same when translated back to English', () => {
    let toftsText = toTOFTS(randomText);
    let englishText = toEnglish(toftsText);
    expect(randomText).toBe(englishText);
  });
});

function randomizeText() {
  let result = '';
  let length = Math.floor(Math.random() * 900 + 100);
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ          0123456789~!@#$%^&*()_+``\'\'\"\"';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}