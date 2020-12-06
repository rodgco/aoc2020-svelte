<script>
  import { link } from "svelte-spa-router";
</script>

<style>
  .calendar .calendar-color-r {
    color: #ff0000;
  }
  .calendar .calendar-color-b {
    color: #333399;
  }
  .calendar .calendar-color-l {
    color: #ccccff;
  }
  .calendar .calendar-color-w {
    color: #ffffff;
  }
  .calendar .calendar-color-a {
    color: #cccccc;
  }
</style>

<main>
  <pre class="calendar"><a
      aria-label="Day 1, two stars"
      href="/2020/day/1"
      use:link
      class="calendar-day1 calendar-verycomplete">              .<span
        class="calendar-color-l">.........</span><span
        class="calendar-color-r">|</span><span
        class="calendar-color-l">.........</span>.                <span
        class="calendar-day"> 1</span> <span
        class="calendar-mark-complete">*</span><span
        class="calendar-mark-verycomplete">*</span></a>
  <a
      aria-label="Day 2, two stars"
      href="/2020/day/2"
      use:link
      class="calendar-day2 calendar-verycomplete">           ''' <span
        class="calendar-color-w">.'</span>  <span
        class="calendar-color-w">-</span>  <span
        class="calendar-color-w">-</span>  <span
        class="calendar-color-a">\</span><span
        class="calendar-color-w">-</span> <span
        class="calendar-color-w">.''</span>~ ~ '''             <span
        class="calendar-day"> 2</span> <span
        class="calendar-mark-complete">*</span><span
        class="calendar-mark-verycomplete">*</span></a>
  <a
      aria-label="Day 3, two stars"
      href="/2020/day/3"
      use:link
      class="calendar-day3 calendar-verycomplete">          ~  ~ <span
        class="calendar-color-w">'.'.</span> <span
        class="calendar-color-w">-</span>   <span
        class="calendar-color-w">-</span> <span
        class="calendar-color-a">\</span> <span
        class="calendar-color-w">-'':</span>  ~ ~              <span
        class="calendar-day"> 3</span> <span
        class="calendar-mark-complete">*</span><span
        class="calendar-mark-verycomplete">*</span></a>
  <a
      aria-label="Day 4, two stars"
      href="/2020/day/4"
      use:link
      class="calendar-day4 calendar-verycomplete">        ~   ~ ~  <span
        class="calendar-color-b">~</span> <span
        class="calendar-color-w">''..'''</span><span
        class="calendar-color-a">_[]</span><span
        class="calendar-color-w">.'</span>  ~                 <span
        class="calendar-day"> 4</span> <span
        class="calendar-mark-complete">*</span><span
        class="calendar-mark-verycomplete">*</span></a>
  <a
      aria-label="Day 5, two stars"
      href="/2020/day/5"
      use:link
      class="calendar-day5 calendar-verycomplete">           . ~  ~  <span
        class="calendar-color-b">~</span> <span
        class="calendar-color-a">____/</span> <span
        class="calendar-color-w">''</span>  <span
        class="calendar-color-b">~</span>  ~                <span
        class="calendar-day"> 5</span> <span
        class="calendar-mark-complete">*</span><span
        class="calendar-mark-verycomplete">*</span></a>
  <span
      aria-hidden="true"
      class="calendar-day6">         '    .  <span
        class="calendar-color-a">___/</span> ~   ~  ~  ~                  <span
        class="calendar-day"> 6</span></span>
  <span
      aria-hidden="true"
      class="">            :   .                                </span>
  <span
      aria-hidden="true"
      class="">              .                                  </span>
  <span
      aria-hidden="true"
      class="" />
  <span aria-hidden="true" class="" />
  <span
      aria-hidden="true"
      class="" />
  <span aria-hidden="true" class="" />
  <span
      aria-hidden="true"
      class="" />
  <span aria-hidden="true" class="" />
  <span
      aria-hidden="true"
      class="" />
  <span aria-hidden="true" class="" />
  <span
      aria-hidden="true"
      class="" />
  <span aria-hidden="true" class="" />
  <span
      aria-hidden="true"
      class="" />
  <span aria-hidden="true" class="" />
  <span
      aria-hidden="true"
      class="" />
  <span aria-hidden="true" class="" />
  <span
      aria-hidden="true"
      class="" />
  <span aria-hidden="true" class="" />
  <span
      aria-hidden="true"
      class="" />
  </pre>
</main>
