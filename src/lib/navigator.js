export class Navigator {
  constructor() {
    this.direction = "E";
    this.initial = { lat: 0, lon: 0 };
    this.current = { lat: 0, lon: 0 };
  }

  move(movement = "") {
    const move = movement[0];
    let value = Number(movement.substr(1));
    switch (move) {
      case "S":
        value *= -1;
      case "N":
        this.current.lat += value;
        break;
      case "W":
        value *= -1;
      case "E":
        this.current.lon += value;
        break;
      case "L":
        value *= -1;
      case "R":
        this.turn(value);
        break;
      case "F":
        this.move("" + this.direction + value);
        break;
      default:
        break;
    }
  }

  turn(degrees) {
    const directions = ["N", "E", "S", "W"];
    let value = degrees / 90;
    let current = directions.indexOf(this.direction);

    this.direction = directions[(current + 4 + value) % 4];
  }

  distance() {
    return (
      Math.abs(this.initial.lat - this.current.lat) +
      Math.abs(this.initial.lon - this.current.lon)
    );
  }
}

export class WaypointNavigator extends Navigator {
  constructor({ lat, lon }) {
    super();
    this.waypoint = { lat, lon };
  }

  move(movement = "") {
    console.log(movement, this.waypoint, this.current);
    const move = movement[0];
    let value = Number(movement.substr(1));
    switch (move) {
      case "S":
        value *= -1;
      case "N":
        this.waypoint.lat += value;
        break;
      case "W":
        value *= -1;
      case "E":
        this.waypoint.lon += value;
        break;
      case "L":
        value *= -1;
      case "R":
        this.turn(value);
        break;
      case "F":
        this.current.lat += this.waypoint.lat * value;
        this.current.lon += this.waypoint.lon * value;
        break;
      default:
        break;
    }
    console.log("-->", movement, this.waypoint, this.current);
  }

  turn(degree) {
    const value = Math.abs(degree);
    const direction = degree / Math.abs(degree);

    for (let i = 0; i < value; i += 90) {
      const currentWaipointLat = this.waypoint.lat;
      const currentWaipointLon = this.waypoint.lon;
      this.waypoint.lon = currentWaipointLat * (direction < 1 ? -1 : 1);
      this.waypoint.lat = currentWaipointLon * (direction < 1 ? 1 : -1);
    }
  }

  quadrant({ lat, lon }) {
    return lat * lon > 0 ? (lat > 0 ? 0 : 2) : lat > 0 ? 3 : 1;
  }
}
