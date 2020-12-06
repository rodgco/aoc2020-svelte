// Pages
import Home from "./pages/Home.svelte";
import Puzzle from "./pages/Puzzle.svelte";

export default {
  "/": Home,
  "/2020/day/:day": Puzzle,

  // "*": ErrorPage,
};
