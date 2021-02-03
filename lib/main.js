const maskNumber = (value) => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/\D/g, '');

  return onlyNums;
};

const maskAccountBank = (value) => {
  if (!value) {
    return value;
  }
  const onlyNums = value.replace(/\D/g, '');

  if (onlyNums.length === 1) {
    return onlyNums;
  }

  return `${onlyNums.slice(0, onlyNums.length - 1)}-${onlyNums.slice(
    onlyNums.length - 1,
    onlyNums.length
  )}`;
};

const maskZipCode = (value) => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 5) {
    return onlyNums;
  }
  return `${onlyNums.slice(0, 5)}-${onlyNums.slice(5, 8)}`;
};

const maskCurrency = (value) => {
  const stringOfNumber = String(value).replace(/[^\d]/g, '');
  if (stringOfNumber === "0") {
    return '';
  }
  if (stringOfNumber.length === 2) {
    return `0,${stringOfNumber[0] || 0}${stringOfNumber[1] || 0}`;
  }
  if (stringOfNumber.length === 1) {
    return `0,0${stringOfNumber[0] || 0}`;
  }
  const cents =
    stringOfNumber[stringOfNumber.length - 2] +
    stringOfNumber[stringOfNumber.length - 1];
  const reals = stringOfNumber.slice(0, stringOfNumber.length - 2);
  let pointValue = '';

  const arrayNumber = reals.split('');
  arrayNumber.reverse();
  arrayNumber.forEach((v, index) => {
    if ((index + 1) % 3 === 0) {
      if (index === arrayNumber.length - 1) {
        pointValue = v + pointValue;
      } else {
        pointValue = `.${v}${pointValue}`;
      }
    } else {
      pointValue = v + pointValue;
    }
  });
  return `${pointValue},${cents}`;
};

const maskCnpj = (value) => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 2) {
    return onlyNums;
  }
  if (onlyNums.length <= 5) {
    return `${onlyNums.slice(0, 2)}.${onlyNums.slice(2, 5)}`;
  }
  if (onlyNums.length <= 8) {
    return `${onlyNums.slice(0, 2)}.${onlyNums.slice(2, 5)}.${onlyNums.slice(
      5,
      8
    )}`;
  }
  if (onlyNums.length <= 12) {
    return `${onlyNums.slice(0, 2)}.${onlyNums.slice(2, 5)}.${onlyNums.slice(
      5,
      8
    )}/${onlyNums.slice(8, 12)}`;
  }
  return `${onlyNums.slice(0, 2)}.${onlyNums.slice(2, 5)}.${onlyNums.slice(
    5,
    8
  )}/${onlyNums.slice(8, 12)}-${onlyNums.slice(12, 14)}`;
};

const maskCpf = (value) => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 3) {
    return onlyNums;
  }
  if (onlyNums.length <= 6) {
    return `${onlyNums.slice(0, 3)}.${onlyNums.slice(3, 6)}`;
  }
  if (onlyNums.length <= 9) {
    return `${onlyNums.slice(0, 3)}.${onlyNums.slice(3, 6)}.${onlyNums.slice(
      6,
      9
    )}`;
  }
  return `${onlyNums.slice(0, 3)}.${onlyNums.slice(3, 6)}.${onlyNums.slice(
    6,
    9
  )}-${onlyNums.slice(9, 11)}`;
};

const maskDate = (value) => {
  if (!value) {
    return value;
  }

  const formated = value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})\d+?$/, '$1');

  return formated;
};

const maskPhone = (value) => {
  if (!value) {
    return value;
  }
  let onlyNums = value.replace(/\D/g, '');

  if (onlyNums.length === 0) {
    onlyNums = ``;
  } else if (onlyNums.length === 1) {
    onlyNums = `(${onlyNums.slice(0, 1)}`;
  } else if (onlyNums.length === 2) {
    onlyNums = `(${onlyNums.slice(0, 2)}`;
  } else if (onlyNums.length < 7) {
    onlyNums = `(${onlyNums.slice(0, 2)}) ${onlyNums.slice(2, 7)}`;
  } else if (onlyNums.length < 11) {
    onlyNums = `(${onlyNums.slice(0, 2)}) ${onlyNums.slice(
      2,
      6
    )}-${onlyNums.slice(6, 11)}`;
  } else {
    onlyNums = `(${onlyNums.slice(0, 2)}) ${onlyNums.slice(
      2,
      7
    )}-${onlyNums.slice(7, 11)}`;
  }

  return onlyNums;
};

function maskCreditCard(value) {
  const onlyNums = value.replace(/\D/g, '')
  .replace(/(\d{4})(\d)/, '$1 $2')
  .replace(/(\d{4})(\d)/, '$1 $2')
  .replace(/(\d{4})(\d)/, '$1 $2')
  .replace(/(\d{4})\d+?$/, '$1');

  return onlyNums;
}

module.exports = {
  maskCurrency,
  maskAccountBank,
  maskNumber,
  maskZipCode,
  maskCnpj,
  maskCpf,
  maskDate,
  maskPhone,
  maskCreditCard,
}