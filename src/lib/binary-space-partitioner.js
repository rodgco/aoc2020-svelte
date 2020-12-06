export default function binarySpacePartioner(text = "") {
  const rowMap = text.substr(0, 7);
  const colMap = text.substr(7, 3);

  let rowAcc = 0;
  rowMap.split("").forEach((c, index) => {
    rowAcc += c === "B" ? 2 ** (6 - index) : 0;
  });

  let colAcc = 0;
  colMap.split("").forEach((c, index) => {
    colAcc += c === "R" ? 2 ** (2 - index) : 0;
  });

  return [rowAcc, colAcc];
}

export function calcSeatId(row, col) {
  return row * 8 + col;
}
