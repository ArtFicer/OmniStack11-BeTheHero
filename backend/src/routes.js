const { celebrate, Segments, Joi } = require("celebrate");
const express = require("express");
const routes = express.Router();
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

//Principais

//login
routes.post("/sessions", SessionController.create);

//ongs
routes.get("/ongs", OngController.index);
routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.string()
        .required()
        .min(10)
        .max(11),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2)
    })
  }),
  OngController.create
);
routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  ProfileController.index
);

//incidents
routes.get(
  "/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object()
      .keys({
        page: Joi.number()
      })
      .unknown()
  }),
  IncidentController.index
);

routes.post(
  "/incidents",
  celebrate({
    [Segments.BODY]: Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      value: Joi.number().required()
    }).unknown(),
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  IncidentController.create
);

routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  }),
  IncidentController.delete
);


routes.get("/", (request, response) => {
  return response.json({
    evento: "Semana OmniStack 11.0",
    aluno: "Pedro (ArtFicer) Ventura "
  });
});

module.exports = routes;
