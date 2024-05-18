const Flight = require("./flightModel.js/index.js");
const FlightDetail = require("./FlightDetail.js");

class FlightManager {
    calculatePrice(
        source,
        destination,
        numberOfAdults,
        numberOfChildren,
        dateOfTravel
    ) {
        const flightDetail = new FlightDetail();
        let basePrice = flightDetail.getBasePrice(
            source,
            destination,
            dateOfTravel
        );
        if (typeof basePrice == "number") {
            let totalPrice = 0;

            const totalPassengers = numberOfAdults + numberOfChildren;
            totalPrice = totalPassengers * basePrice;

            let price = basePrice; // Set the calculated price
            return totalPrice;
        } else if (typeof basePrice == "string") {
            return basePrice;
        }
    }
}
module.exports = FlightManager;
