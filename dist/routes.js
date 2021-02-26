"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("./controllers");
// jgjygjy
const router = express_1.Router();
let mybj;
router.post('/api/spaceship', (req, res) => {
    console.log(req.body);
    let myObj = req.body;
    //console.log(myObj.location.city)
    res.send(`I received your POST request. This is what we sent me: ${req.body.id}`);
});
router.put('/api/travel', controllers_1.updateTravel);
router.get('/api/locations', controllers_1.getLocations);
router.post('/api/addlocation', controllers_1.addLocation);
router.post('/api/addspaceship', controllers_1.addSpaceship);
router.put('/api/updatestatus', controllers_1.updateSpaceshipStatus);
router.delete('/api/deletespaceship', controllers_1.removeSpaceship);
router.delete('/api/deletelocation', controllers_1.removeLocation);
exports.default = router;
//# sourceMappingURL=routes.js.map