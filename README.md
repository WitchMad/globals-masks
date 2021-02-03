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

##### Available masks

| Name | Entry value | Return example |
| ---- | ----------- | -------------- |
| maskNumber | 123abc456 | 123456 |
| maskAccountBank | 000000 | 00000-0 |
| maskZipCode | 00000000 | 00000-000 |
| maskCurrency | 100000 | 1.000,00 |
| maskCnpj | 00000000000000 | 00.000.000/0000-00 |
| maskCpf | 00000000000 | 000.000.000-00 |
| maskDate | 00000000 | 00/00/0000 |
| maskPhone | 00000000000 | (00) 0 0000-0000 |
| maskCreditCard | 0000000000000000 | 0000 0000 0000 0000 |