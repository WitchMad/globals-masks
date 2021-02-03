export interface MainStatics {
  maskNumber: (value: string) => string;
  maskAccountBank: (value: string) => string;
  maskZipCode: (value: string) => string;
  maskCurrency: (value: string) => string;
  maskCnpj: (value: string) => string;
  maskNumber: (value: string) => string;
  maskCpf: (value: string) => string;
  maskDate: (value: string) => string;
  maskPhone: (value: string) => string;
  maskCreditCard: (value: string) => string;
}

declare const main: MainStatics;

export default main;