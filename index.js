let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name) {
      this.name = name;
      this.id = ++driverId;
      store.drivers.push(this);
  }

  trips() {
    // returns all the trips that a driver has taken
    return store.trips.filter(trip => { return trip.driverId === this.id });
  }

  passengers() {
    // returns all of the passengers that a driver has taken on a trip
    return this.trips().map(trip => { return trip.passenger() });
  }
}

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  }

  trips() {
    //returns all of the trips passenger has taken
    return store.trips.filter(trip => { return trip.passengerId === this.id });
  }

  drivers() {
    //returns all of the drivers that has taken a passenger on a trip
    return this.trips().map(trip => { return trip.driver() });
  }
}

class Trip {
  constructor(driver, passenger) {
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = ++tripId;
    store.trips.push(this);
  }

  driver() {
    //returns the driver associated with the trip
    return store.drivers.find(driver => { return driver.id === this.driverId });
  }

  passenger() {
    //returns the passenger associated with the trip
    return store.passengers.find(passenger => { return passenger.id === this.passengerId });
  }
}
