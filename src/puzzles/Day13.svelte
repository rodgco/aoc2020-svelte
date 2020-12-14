<script>
  import Performance from "../components/Performance.svelte";

  let input = `939
7,13,x,x,59,x,31,19`;

  let result1;
  let result2;
  let t0, t1, t2, t3;

  function handleSubmit() {
    if (input) {
      t0 = performance.now(); //setup
      const [earliest, buses] = input.split("\n").map((l, i) => {
        if (i === 0) return Number(l);
        return l.split(",").map(Number);
      });

      t1 = performance.now(); //puzzle #1
      const closest = findClosestBus(buses, earliest);
      result1 = closest.difference * closest.bus;

      t2 = performance.now(); //puzzle #2
      result2 = runContest(buses);

      t3 = performance.now(); //end of game
    }
  }

  function findClosestBus(buses, earliest) {
    const differences = buses.map((bus) => getBusTime(bus, earliest));
    const closest = differences.reduce(
      (acc, time, index) => {
        if (acc.difference === 0 || time < acc.difference)
          return { difference: time, bus: buses[index] };
        return acc;
      },
      { difference: 0, bus: 0 }
    );
    return closest;
  }

  function getBusTime(bus, earliest) {
    let time = 0;
    for (time = 0; time <= earliest; time += bus) {}
    return time - earliest;
  }

  function runContest(buses, initial = 600_691_000_000_000) {
    // build list of buses to track, ignoring everything else (NaN)
    //
    const list = buses.reduce((acc, bus, index) => {
      if (!!bus) acc.push({ bus, offset: index });
      return acc;
    }, []);
    console.log(list);

    // find bus with the highest pace and it's offset to t0
    const [bus, offset] = list.reduce(
      (acc, item) => {
        if (acc[0] === 0 || acc[0] < item.bus) {
          acc[0] = item.bus;
          acc[1] = item.offset;
        }
        return acc;
      },
      [0, 0]
    );
    console.log(bus, offset);

    let check = false;
    let t0 = 0;
    // progress bus with highest pace and check other buses position in relation to it
    for (let i = Math.round(initial / bus); !check; i++) {
      // th of the highest pace bus after i turns.
      let th = i * bus;
      if (i % 1_000_000_000 === 0) console.log("Processing: ", th);

      // check all other buses
      [check, t0] = busWorker(list, th, offset);
    }
    list.forEach((item) => {
      console.log(
        "Bus:",
        item.bus,
        "Offset:",
        item.offset,
        "Result:",
        t0 + item.offset
      );
    });
    return t0;
  }

  function busWorker(list, th, offset) {
    let t0 = 0;
    const check = list.reduce((acc, item) => {
      // expected t of this bus in reference of the highest bus.
      let tc = th + item.offset - offset;

      // save it for bus 0 (TODO: first offset could not be 0!!!)
      if (item.offset === 0) t0 = tc;

      // if this is a Integer division, means it is an sequence of this bus AP.
      return acc && Number.isInteger(tc / item.bus);
    }, true);
    return [check, t0];
  }
</script>

<article>
  <h2>--- Day 13: Shuttle Search---</h2>
  <p>
    Again, first part was a piece of cake. Second part was more complicated,
    very slow in the browser. Opportunity to learn about Web Workers and how to
    run multiple threads simultaneously.
  </p>
  <p>
    Had to hurry to Wolfram Alpha to find the solution, mine was over
    600_000_000_000_000, and validated my algorithm starting somewhere near that
    range. To use that approach build a system like:
    <code>x = 7a, x = 13b -1, x = 59c -4, x = 31d - 6, x = 19f - 7</code>
    and found x for n=0.
  </p>

  <h2>Your input...</h2>
  <textarea wrap="off" cols="30" rows="5" bind:value={input} />
  <button on:click={handleSubmit}>Enviar</button>

  <h2>--- Part One ---</h2>
  <p>
    <em>What is the ID of the earliest bus you can take to the airport
      multiplied by the number of minutes you'll need to wait for that bus?</em>
  </p>
  <p>Your puzzle answer should be <code>{result1}</code>.</p>

  <h2>--- Part Two ---</h2>
  <p>
    <em>What is the earliest timestamp such that all of the listed bus IDs
      depart at offsets matching their positions in the list?</em>
  </p>
  <p>Your puzzle answer should be <code>{result2}</code>.</p>

  <Performance {t0} {t1} {t2} {t3} />
</article>
