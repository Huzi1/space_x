import express from 'express';
import routes from "./routes";
import bodyParser, { json } from 'body-parser';
import path from 'path';

const app = express();
const port = process.env.PORT || 5000;
let env = process.env["NODE_ENV"];


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes)


// Rest api here 
app.get('/api/hello', (req: any, res: { send: (arg0: { express: string; }) => void; }) => {
    res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req: { body: { post: any; }; }, res: { send: (arg0: string) => void; }) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what we sent me: ${req.body.post}`,
    );
});




if (process.env.NODE_ENV === 'production') {

    
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}


app.listen(port, () => console.log(`Server Listening on port ${port}`));