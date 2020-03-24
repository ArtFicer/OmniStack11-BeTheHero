const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//Principais

//login
routes.post('/sessions', SessionController.create)

//ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.get('/profile',ProfileController.index)

//incidents
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);



//Algumas de exemplo:
routes.get('/', (request, response) => {
    return response.json({
        evento: "Semana OmniStack 11.0",
        aluno: 'Pedro (ArtFicer) Ventura '
    });
})

//Pegando valores da query
routes.get('/users', (request, response) => {
    const parametros = request.query;
    return response.json(parametros);
})

//Pegando valores de Route Params
routes.get('/users/:id', (request, response) => {
    const params = request.params.id;
    return response.json({
        "User ID": params
    });
})

//Pegando valores do Request Body
routes.post('/users', (request, response) => {
    const body = request.body;
    return response.json(body);
})



module.exports = routes;