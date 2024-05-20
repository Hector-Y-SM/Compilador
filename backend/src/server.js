import express from "express";
import bodyParser from "body-parser";
import fs from 'fs';
import { exec } from 'child_process';
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/jasmin', (req, res) => {
    const codigoJasmin = req.body.codigoJasmin;
    fs.writeFileSync('Jasmin.j', codigoJasmin, 'utf8');

    exec('java -jar jasmin.jar Jasmin.j', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error al compilar Jasmin: ${stderr}`);
            return res.status(500).send(`Error al compilar Jasmin: ${stderr}`);
        }

        exec('java Jasmin', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error al ejecutar .class: ${stderr}`);
                return res.status(500).send(`Error al ejecutar .class: ${stderr}`);
            }

            res.send(stdout);
        });
    });
});

    //fs.unlinkSync('Jasmin.j');
    //fs.unlinkSync('Jasmin.class');
app.listen(8080, () => {
    console.log(`servidor 8080`);
});