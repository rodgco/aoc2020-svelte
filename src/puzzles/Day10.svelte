<script>
  import Performance from "../components/Performance.svelte";

  let input = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`;

  let result1;
  let result2;
  let t0, t1, t2, t3;

  $: {
    if (input) {
      t0 = performance.now(); //setup
      let list = input
        .split("\n")
        .map(Number)
        .sort((a, b) => a - b);
      list = [0, ...list, Number(list.slice(-1)) + 3];
      console.log(list);
      t1 = performance.now(); //puzzle #1
      result1 =
        list.reduce((a, v, i, l) => a + (l[i + 1] - v === 1 ? 1 : 0), 0) *
        list.reduce((a, v, i, l) => a + (l[i + 1] - v === 3 ? 1 : 0), 0);
      t2 = performance.now(); //puzzle #2
      result2 = rearrange(list);
      t3 = performance.now(); //end of game
    }
  }

  function rearrange(list) {
    let result = 1;
    let i = 0;
    let z = list.length - 1;
    const combs = [0, 1, 1, 2, 4, 7];
    while (i < list.length - 2) {
      let n = 1;
      while (i + n < list.length - 1 && list[i + n] - list[i + n - 1] == 1) n++;
      result *= combs[n];
      i += n;
    }

    return result;
  }
</script>

<article>
  <h2>--- Day 10: Adapter Array ---</h2>
  <p>
    Firs puzzle was easy, second one got me in trouble, up to the point that I
    took a look at someone else solution. Found this amazing solution from
    <a
      href="https://github.com/kodsnack/advent_of_code_2020/blob/main/jofafrazze-csharp/day10/Day10.cs">jofafraze</a>
    in C# that I adapted to javascript.
  </p>
  <p>
    And that's routine for developers: when in trouble
    <em>Copy with Pride</em>.
  </p>

  <h2>Your input...</h2>
  <textarea wrap="off" cols="30" rows="5" bind:value={input} />

  <h2>--- Part One ---</h2>
  <p>
    Find a chain that uses all of your adapters to connect the charging outlet
    to your device's built-in adapter and count the joltage differences between
    the charging outlet, the adapters, and your device.
    <em>What is the number of 1-jolt differences multiplied by the number of
      3-jolt differences?</em>
  </p>
  <p>Your puzzle answer should be <code>{result1}</code>.</p>

  <h2>--- Part Two ---</h2>
  <p>
    <em>What is the total number of distinct ways you can arrange the adapters
      to connect the charging outlet to your device?</em>
  </p>
  <p>Your puzzle answer should be <code>{result2}</code>.</p>

  <Performance {t0} {t1} {t2} {t3} />
</article>
