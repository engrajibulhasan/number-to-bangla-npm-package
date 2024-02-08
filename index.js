function toBangla() {
  const banglaMap = {
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

  return {
    //   English to bangla
    fromEng: (numbers) => {
      let toString = numbers.toString();
      let toBangla = "";
      for (let i = 0; i < toString.length; i++) {
        const element = toString[i];
        toBangla += banglaMap[element];
      }
      return toBangla;
    },
  };
}
const bn = toBangla();
module.exports = bn;
