import { Router } from "express";
import {
    getLocations,
    addLocation,
    addSpaceship,
    updateSpaceshipStatus,
    removeSpaceship,
    removeLocation,
    updateTravel,
} from "./controllers";
import { Request, Response } from "express";
// jgjygjy
const router = Router();


interface Spaceship {
    id: number,
    name: string,
    modal: string,
    location: { city: string, planet: string },
    maxSeat: number,
    status: string
}
let mybj: Spaceship;
router.post('/api/spaceship', (req: { body: Spaceship }, res: { send: (arg0: string) => void; }) => {
    console.log(req.body);
    let myObj: Spaceship = req.body;
    //console.log(myObj.location.city)
    res.send(
        `I received your POST request. This is what we sent me: ${req.body.id}`,
    );
});

router.put('/api/travel', updateTravel);
router.get('/api/locations', getLocations);

router.post('/api/addlocation', addLocation);

router.post('/api/addspaceship', addSpaceship);

router.put('/api/updatestatus', updateSpaceshipStatus);

router.delete('/api/deletespaceship', removeSpaceship);

router.delete('/api/deletelocation', removeLocation);
export default router;