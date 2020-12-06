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

    input.split("\n\n").forEach((p) => {
      let passport = new Passport();

      p.split(/[\s\n]+/).forEach((r) => {
        let key, value;
        [key, value] = r.split(":");
        passport.field(key, value);
      });

      if (passport.isValid1()) result1 += 1;
      if (passport.isValid2()) result2 += 1;
    });
  }
</script>

<article>
  <h2>--- Day 4: Passport Processing ---</h2>
  <p>
    I really appreciated how I expressed the rules in an object, and how easy it
    was to use reduce to validate all of them. Because of CID being optional I
    used a separate list of fields for validation, but could have used
    Object.keys() to traverse the list.
  </p>

  <h2>Your input...</h2>
  <textarea wrap="off" cols="30" rows="5" bind:value={input} />

  <h2>--- Part One ---</h2>
  <p>
    Count the number of
    <em>valid</em>
    passports - those that have all required fields. Treat
    <code>cid</code>
    as optional.
    <em>In your batch file, how many passports are valid?</em>
  </p>
  <p>Your puzzle answer gotta be <code>{result1}</code>.</p>

  <h2>--- Part Two ---</h2>
  <p>
    Count the number of
    <em>valid</em>
    passports - those that have all required fields
    <em>and valid values</em>. Continue to treat
    <code>cid</code>
    as optional.
    <em>In your batch file, how many passports are valid?</em>
  </p>
  <p>Your puzzle answer gotta be <code>{result2}</code>.</p>
</article>
