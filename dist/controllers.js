"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
exports.getLocations = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const response = yield db_1.pool.query(`SELECT * FROM locations;`);
        return res.status(200).json(response.rows);
    }
    catch (err) {
        return res.status(500).json({ error: err });
    }
});
exports.addLocation = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { id, cityName, planet, capacity, docked_ships } = req.body;
    try {
        const response = yield db_1.pool.query('INSERT INTO LOCATIONS VALUES($1,$2,$3,$4, $5)', [
            id,
            cityName,
            planet,
            capacity,
            docked_ships,
        ]);
        return res.json('Location added successfully');
    }
    catch (err) {
        return res.status(500).json({ error: err });
    }
});
exports.removeLocation = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const response = yield db_1.pool.query('DELETE FROM Locations WHERE ID=($1)', [
            id
        ]);
        return res.json('Location removed successfully');
    }
    catch (err) {
        return res.status(500).json({ error: err });
    }
});
// spaceshipId, sourceID, destinationID, newCity, newPlanet
exports.updateTravel = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { spaceshipId, newCity, newPlanet, sourceID, destinationID } = req.body;
    try {
        yield db_1.pool.query('UPDATE LOCATIONS SET DOCKED_SHIPS=DOCKED_SHIPS-1 WHERE ID=($1)', [
            sourceID
        ]);
        yield db_1.pool.query('UPDATE LOCATIONS SET DOCKED_SHIPS=DOCKED_SHIPS+1 WHERE ID=($1)', [
            destinationID
        ]);
        yield db_1.pool.query('UPDATE SPACESHIPS SET city=($2), planet=($3) WHERE ID=($1)', [
            spaceshipId,
            newCity,
            newPlanet
        ]);
        return res.json('Travelling stats updated successfully');
    }
    catch (err) {
        return res.status(500).json({ error: err });
    }
});
exports.getSpaceships = (req, res) => __awaiter(this, void 0, void 0, function* () {
    // console.log("REQ in api", req);
    try {
        const response = yield db_1.pool.query("SELECT * FROM spaceships;");
        // console.log("REQ in api", response.rows);
        return res.status(200).json(response.rows);
    }
    catch (err) {
        return res.status(500).json({ error: err });
    }
});
exports.addSpaceship = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { id, name, modal, city, planet, maxseat, status } = req.body;
    console.log("IN ADD spaceships", req.body);
    try {
        const response = yield db_1.pool.query('INSERT INTO Spaceships VALUES($1,$2,$3,$4, $5, $6, $7)', [
            id,
            name,
            modal,
            city,
            planet,
            maxseat,
            status,
        ]);
        return res.json('Spaceship added successfully');
    }
    catch (err) {
        return res.status(500).json({ error: err });
    }
});
exports.updateSpaceshipStatus = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { id, status } = req.body;
    try {
        const response = yield db_1.pool.query('UPDATE SPACESHIPS SET STATUS=($2) WHERE ID=($1)', [
            id,
            status
        ]);
        return res.json(`Spaceship status updated to ${status} successfully`);
    }
    catch (err) {
        return res.status(500).json({ error: err });
    }
});
exports.removeSpaceship = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { id } = req.body;
    console.log("in delete api req.body", req.body);
    try {
        const response = yield db_1.pool.query('DELETE FROM SPACESHIPS WHERE ID=($1)', [
            id
        ]);
        return res.json('Spaceship removed successfully');
    }
    catch (err) {
        return res.status(500).json({ error: err });
    }
});
exports.addCustomers = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { user_id, email, name, capacity, docked_ships } = req.body;
    try {
        const response = yield db_1.pool.query('INSERT INTO LOCATIONS VALUES($1,$2,$3,$4, $5)', [
            capacity,
            docked_ships,
        ]);
        return res.json('Location added successfully');
    }
    catch (err) {
        return res.status(500).json({ error: err });
    }
});
// INSERT INTO locations
// VALUES (1234, 'london', 'earth', 10);
//# sourceMappingURL=controllers.js.map