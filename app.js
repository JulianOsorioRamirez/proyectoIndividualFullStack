
    const express = require('express');
    const bodyParser = require('body-parser');
    const app = express();
    const PORT = process.env.PORT || 5000;
    
    app.use(express.json());
    require("./database/mongo")
    require("./database/sqlDataBase")
    const router = require("./routes/routes")
    app.use(express.static(__dirname + "/views/css"));
    app.use(express.urlencoded({extended: true}));
    
    
    // app.use(isAdmin);

    // Endpoint al cual solo deben ingresar usuarios administradores.
    // app.get('/dashboard', urlencodedParser, (req, res) => {
    //     console.log(req.body);
    //     res.send('You are an admin');
    // });
    
    app.use("/", router);

    app.listen(PORT, ()=>{
        console.log(`Se inicia el server en : http://localhost:${PORT}`);
    })