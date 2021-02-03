# Globals Masks

##### Instalation
```bash
npm i globals-masks
or
yarn add globals-masks
```

##### Simple example

```js
import { maskPhone } from 'globals-masks';

const value = "00000000000";

maskPhone(value); // (00) 0 0000-0000
```

##### Use as normalize

```js
import { maskNumber } from 'globals-masks';

const value = "40fdl14399da";

maskNumber(value) // 4014399
```