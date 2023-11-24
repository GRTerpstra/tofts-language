# tofts-language

The language translater for TOFTS.

&nbsp;

## Install
```bash
npm install toftslanguage
```
&nbsp;

## Import
Using ESM:
```javascript
import { toEnglish, toTOFTS } from 'toftslanguage';
```
Using CommonJS:
```javascript
const { toTOFTS } = require('toftslanguagetemp');
```
&nbsp;

## Usage

translate English to the TOFTS language:
```javascript
toTOFTS('This is a text I want to translate to TOFTS')
```
translate the TOFTS language to English:
```javascript
toEnglish('Zlyi yi e zaxz Y vebz zc zgebikeza zc ZCQZI')
```
&nbsp;

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
&nbsp;

## License
[ISC](https://opensource.org/license/isc-license-txt/)