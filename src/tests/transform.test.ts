// In your test files, Jest puts each of the methods and objects into the global environment. You don't have to require or import anything to use them.
import { toTOFTS, toEnglish } from '../translate';

var randomText= ""

beforeEach(() => {
  randomText = randomizeText();
});

test('The random (English) text should not be the same as the translated (TOFTS) text', () => {
  expect(randomText).not.toBe(toTOFTS(randomText));
});

test('The translated English text should not be the same as the translated TOFTS text', () => {
  expect(toEnglish(randomText)).not.toBe(toTOFTS(randomText));
})

test('The random (English) text translated to TOFTS should be the same when translated back to English again', () => {
  let toftsText = toTOFTS(randomText)
  let englishText = toEnglish(toftsText)
  expect(randomText).toBe(englishText);
});

function randomizeText() {
  let result = '';
  let length = Math.floor(Math.random() * 1000);
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
