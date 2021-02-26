import { Request, Response } from "express";
import { pool } from "./db";
import { QueryResult } from "pg";

export const getLocations = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query(
      `SELECT * FROM locations;`
    );
    return res.status(200).json(response.rows);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

export const addLocation = async (req: Request, res: Response) => {
  const { id, cityName, planet, capacity, docked_ships } = req.body;
  try {
    const response = await pool.query('INSERT INTO LOCATIONS VALUES($1,$2,$3,$4, $5)', [
      id,
      cityName,
      planet,
      capacity,
      docked_ships,

    ]);
    return res.json('Location added successfully');
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

export const removeLocation = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const response = await pool.query('DELETE FROM Locations WHERE ID=($1)', [
      id
    ]);
    return res.json('Location removed successfully');
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};
// spaceshipId, sourceID, destinationID, newCity, newPlanet
export const updateTravel = async (req: Request, res: Response) => {
  const { spaceshipId, newCity, newPlanet, sourceID, destinationID } = req.body;
  try {
    await pool.query('UPDATE LOCATIONS SET DOCKED_SHIPS=DOCKED_SHIPS-1 WHERE ID=($1)', [
      sourceID
    ]);
    await pool.query('UPDATE LOCATIONS SET DOCKED_SHIPS=DOCKED_SHIPS+1 WHERE ID=($1)', [
      destinationID
    ]);
    await pool.query('UPDATE SPACESHIPS SET city=($2), planet=($3) WHERE ID=($1)', [
      spaceshipId,
      newCity,
      newPlanet
    ]);
    return res.json('Travelling stats updated successfully');
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

export const addSpaceship = async (req: Request, res: Response) => {
  const { id, name, modal, city, planet, maxseat, status } = req.body;
  try {
    const response = await pool.query('INSERT INTO Spaceships VALUES($1,$2,$3,$4, $5, $6, $7)', [
      id,
      name,
      modal,
      city,
      planet,
      maxseat,
      status,


    ]);
    return res.json('Spaceship added successfully');
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

export const updateSpaceshipStatus = async (req: Request, res: Response) => {
  const { id, status } = req.body;
  try {
    const response = await pool.query('UPDATE SPACESHIPS SET STATUS=($2) WHERE ID=($1)', [
      id,
      status
    ]);
    return res.json(`Spaceship status updated to ${status} successfully`);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

// export const updateSpaceshipLocation = async (req: Request, res: Response) => {
//   const { spaceshipId, newCity, newPlanet } = req.body;
//   try {
//     const response = await pool.query('UPDATE SPACESHIPS SET city=($2), planet=($3) WHERE ID=($1)', [
//       spaceshipId,
//       newCity,
//       newPlanet
//     ]);
//     return res.json(`Spaceship location update ${newPlanet} successfully`);
//   } catch (err) {
//     return res.status(500).json({ error: err });
//   }
// };


export const removeSpaceship = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const response = await pool.query('DELETE FROM SPACESHIPS WHERE ID=($1)', [
      id
    ]);
    return res.json('Spaceship removed successfully');
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};
// INSERT INTO locations
// VALUES (1234, 'london', 'earth', 10);