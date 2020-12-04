<script>
  import Passport from "../lib/passport";

  let input = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in`;

  let result1, result2;

  $: {
    result1 = 0;
    result2 = 0;
    let passport = new Passport();

    input.split("\n").forEach((p) => {
      if (p === "") {
        if (passport.isValid1()) result1 += 1;
        if (passport.isValid2()) result2 += 1;
        passport = new Passport();
      } else {
        p.split(" ").forEach((r) => {
          let key, value;
          [key, value] = r.split(":");
          passport.field(key, value);
        });
      }
    });
    if (passport.isValid1()) result1 += 1;
    if (passport.isValid2()) result2 += 1;
  }
</script>

<h1>Day 4</h1>
<textarea bind:value={input} />
<h2>Puzzle 1</h2>
<p>Valid passports: {result1}</p>

<h2>Puzzle 2</h2>
<p>Valid passports: {result2}</p>
