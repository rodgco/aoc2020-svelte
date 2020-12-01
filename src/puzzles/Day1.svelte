<script>
  import data from "../input/day1.js";

  let threeSomeFirst, threeSomeSecond, threeSomeThird;
  [threeSomeFirst, threeSomeSecond, threeSomeThird] = data.findThreeThatSumTo(
    2020
  );

  let twoSomeFirst, twoSomeSecond;
  [twoSomeFirst, twoSomeSecond] = data.findTwoThatSumTo(2020);
</script>

<h2>Day1</h2>
<h3>First Puzzle</h3>
<p>
  First number is
  {twoSomeFirst}, second number is
  {twoSomeSecond}. They times
  {twoSomeFirst * twoSomeSecond}
</p>

<h3>Second Puzzle</h3>
<p>
  First number is
  {threeSomeFirst}, second number is
  {threeSomeSecond}, third is
  {threeSomeThird}. They times
  {threeSomeFirst * threeSomeSecond * threeSomeThird}
</p>
