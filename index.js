function convertNumber(numbers) {
  const toString = numbers.toString();
  const bangla = {
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
    0: "০",
  };

  //   English to bangla
  let toBangla = "";
  for (let i = 0; i < toString.length; i++) {
    const element = toString[i];
    toBangla += bangla[element];
  }
  return toBangla;
}

module.export = convertNumber;
