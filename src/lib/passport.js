const rules = {
  byr: (v) => {
    let n = Number(v);
    return !!n && n >= 1920 && n <= 2002;
  },
  iyr: (v) => {
    let n = Number(v);
    return !!n && n >= 2010 && n <= 2020;
  },
  eyr: (v) => {
    let n = Number(v);
    return !!n && n >= 2020 && n <= 2030;
  },
  hgt: (v) => {
    if (!/^[0-9]+(cm|in)$/.test(v)) return false;
    let uom = v.slice(-2);
    let n = Number(v.match(/^[0-9]+/)[0]);
    switch (uom) {
      case "cm":
        return n >= 150 && n <= 193;
      case "in":
        return n >= 59 && n <= 76;
    }
  },
  hcl: (v) => /^\#([0-9|a-f]){6}$/.test(v),
  ecl: (v) => /^(amb|blu|brn|gry|grn|hzl|oth)$/.test(v),
  pid: (v) => /^[0-9]{9}$/.test(v),
  cid: (v) => true,
};

const fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

export default class Passport {
  constructor() {
    this._data = {};
  }

  field(key, value) {
    this._data[key] = value;
  }

  isValid1() {
    return fields.reduce((acc, val) => acc && this._data[val], true);
  }

  isValid2() {
    return fields.reduce(
      (acc, val) => acc && rules[val](this._data[val]),
      true
    );
  }
}
