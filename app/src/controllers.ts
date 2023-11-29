import { Request, Response } from "express"
import {
  AQIDataModel,
  AreaDataModel,
  ComponentDataModel,
  MeantypeDataModel,
  StationDataModel,
  TimeserieDataModel,
} from "./database/models"
import { fetchData } from "./lib"
import {
  AQIResponse,
  AreaResponse,
  ComponentResponse,
  MeantypeResponse,
  StationResponse,
  TimeserieResponse,
} from "./types"

const BASE_URL = "https://api.nilu.no/lookup"

export const aqisController = async (
  _req: Request,
  res: Response<AQIResponse[]>
) => {
  try {
    const url = `${BASE_URL}/aqis`
    const aqis = await fetchData<AQIResponse[]>(url)
    await AQIDataModel.insertMany(aqis)
    return res.status(200).json(aqis)
  } catch (error) {
    return res.status(500).json([])
  }
}

export const areaController = async (
  _req: Request,
  res: Response<AreaResponse[]>
) => {
  try {
    const url = `${BASE_URL}/areas`
    const areas = await fetchData<AreaResponse[]>(url)
    await AreaDataModel.insertMany(areas)
    return res.status(200).json(areas)
  } catch (error) {
    return res.status(500).json([])
  }
}

export const componentsController = async (
  _req: Request,
  res: Response<ComponentResponse[]>
) => {
  try {
    const url = `${BASE_URL}/components`
    const components = await fetchData<ComponentResponse[]>(url)
    await ComponentDataModel.insertMany(components)
    return res.status(200).json(components)
  } catch (error) {
    return res.status(500).json([])
  }
}

export const meantypesController = async (
  _req: Request,
  res: Response<MeantypeResponse[]>
) => {
  try {
    const url = `${BASE_URL}/meantypes`
    const meantypes = await fetchData<MeantypeResponse[]>(url)
    await MeantypeDataModel.insertMany(meantypes)
    return res.status(200).json(meantypes)
  } catch (error) {
    return res.status(500).json([])
  }
}

export const stationsController = async (
  _req: Request,
  res: Response<StationResponse[]>
) => {
  try {
    const url = `${BASE_URL}/stations`
    const stations = await fetchData<StationResponse[]>(url)
    await StationDataModel.insertMany(stations)
    return res.status(200).json(stations)
  } catch (error) {
    return res.status(500).json([])
  }
}

export const timeseriesController = async (
  _req: Request,
  res: Response<TimeserieResponse[]>
) => {
  try {
    const url = `${BASE_URL}/timeseries`
    const timeseries = await fetchData<TimeserieResponse[]>(url)
    await TimeserieDataModel.insertMany(timeseries)
    return res.status(200).json(timeseries)
  } catch (error) {
    return res.status(500).json([])
  }
}
