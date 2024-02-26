"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const weatherController_js_1 = require("../controllers/weatherController.js");
const validators_js_1 = require("../middleware/validators.js");
// We will create a router object
const router = express_1.default.Router();
// We will create a route for the weather data based on the city name
router.get(
  "/:city",
  validators_js_1.validateCityName,
  weatherController_js_1.getWeatherData,
);
//We wiil create a route for the forecast based to a city.
router.get(
  "/:city/forecast",
  validators_js_1.validateCityName,
  weatherController_js_1.getForecastData,
);
// We will export the router
exports.default = router;
