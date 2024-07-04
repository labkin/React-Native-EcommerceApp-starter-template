
import express from 'express';
import App from './services/ExpressApp';
import DbCon from './services/Database';
import { PORT } from './config';

const StartServer = async () =>{

    const app = express();

    await DbCon();
    await App(app);

    app.listen(PORT, () =>{
        console.log(`new conn received from port ${PORT}`);
    })
}

StartServer();