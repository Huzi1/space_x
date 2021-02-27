import { Router } from "express";
import {
    getLocations,
    addLocation,
    addSpaceship,
    updateSpaceshipStatus,
    removeSpaceship,
    removeLocation,
    updateTravel,
    getSpaceships
} from "./controllers";
import cors from 'cors';
import { Request, Response } from "express";
// jgjygjy
const router = Router();

//options for cors midddleware
const options: cors.CorsOptions = {
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
        'Access-Control-Allow-Origin',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: 'http://localhost:3000',
    preflightContinue: false,
};
//use cors middleware
router.use(cors(options));
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

router.get('/api/getSpaceships', getSpaceships);

router.post('/api/addlocation', addLocation);

router.post('/api/addspaceship', addSpaceship);

router.put('/api/updatestatus', updateSpaceshipStatus);

router.delete('/api/deletespaceship', removeSpaceship);

router.delete('/api/deletelocation', removeLocation);
export default router;