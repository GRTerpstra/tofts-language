# TOFTSLanguage

The language translater for TOFTS.

## Install
```bash
npm install toftslanguage
```

## Import
Using ESM:
```javascript
import { toEnglish, toTOFTS } from 'toftslanguage';
```
Using CommonJS:
```javascript
const { ToEnglish, toTOFTS } = require('toftslanguage');
```

## Usage

translate English to the TOFTS language:
```javascript
toTOFTS('This is a text I want to translate to TOFTS')
```
translate the TOFTS language to English:
```javascript
toEnglish('Zlyi yi e zaxz Y vebz zc zgebikeza zc ZCQZI')
```

### Development / Publishing
After completing development, before publishing ensure that you run:

```javascript
npm test
npm run build
```
```
Change the version of the library (use SemVer)
```
When you're prepared to publish run:
```javascript
npm login
npm publish
```

## License
[ISC](https://opensource.org/license/isc-license-txt/)