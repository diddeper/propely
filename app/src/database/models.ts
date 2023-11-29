import { model, Schema } from "mongoose"

const AQISchema = new Schema({
  component: String,
  unit: String,
  aqis: [
    {
      index: Number,
      fromValue: Number,
      toValue: Number,
      color: String,
      text: String,
      shortDescription: String,
      description: String,
      advice: String,
    },
  ],
})

export const AQIDataModel = model("AQI", AQISchema)

const AreaSchema = new Schema({
  area: String,
  description: String,
  municipality: String,
  zone: String,
})

export const AreaDataModel = model("Area", AreaSchema)

const ComponentSchema = new Schema({
  component: String,
  topic: String,
})

export const ComponentDataModel = model("Component", ComponentSchema)

const MeantypeSchema = new Schema({
  id: Number,
  label: String,
})

export const MeantypeDataModel = model("Meantype", MeantypeSchema)

const StationSchema = new Schema({
  id: Number,
  zone: String,
  municipality: String,
  area: String,
  station: String,
  type: String,
  eoi: String,
  latitude: Number,
  longitude: Number,
  owner: String,
  status: String,
  description: String,
  firstMeasurment: String,
  lastMeasurment: String,
  components: String,
  isVisible: Boolean,
})

export const StationDataModel = model("Station", StationSchema)

const TimeserieSchema = new Schema({
  id: Number,
  height: Number,
  zone: String,
  municipality: String,
  area: String,
  station: String,
  type: String,
  eoi: String,
  component: String,
  latitude: Number,
  longitude: Number,
  unit: String,
  eea: Boolean,
  timestep: Number,
  timestepAsText: String,
  isVisible: Boolean,
  fromTime: String,
  toTime: String,
  topic: String,
})

export const TimeserieDataModel = model("Timeserie", TimeserieSchema)
