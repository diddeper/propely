import express from "express"
import {
  aqisController,
  areaController,
  componentsController,
  meantypesController,
  stationsController,
  timeseriesController,
} from "./controllers"
import { initDB } from "./database"
;(async () => {
  const app = express()
  const port = "8080"
  app.get("/aqis", aqisController)
  app.get("/areas", areaController)
  app.get("/components", componentsController)
  app.get("/meantypes", meantypesController)
  app.get("/stations", stationsController)
  app.get("/timeseries", timeseriesController)
  await initDB()
  app.listen(port)
})()
