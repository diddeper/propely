export interface AQIResponse {
  component: string
  unit: string
  aqis: {
    index: number
    fromValue: number
    toValue: number
    color: string
    text: string
    shortDescription: string
    description: string
    advice: string
  }[]
}

export interface AreaResponse {
  area: string
  description: string | null
  municipality: string
  zone: string
}

export interface ComponentResponse {
  component: string
  topic: string
}

export interface MeantypeResponse {
  id: number
  label: string
}

export interface StationResponse {
  id: number
  zone: string
  municipality: string
  area: string
  station: string
  type: string
  eoi: string | null
  latitude: number
  longitude: number
  owner: string | null
  status: string | null
  description: string | null
  firstMeasurment: string
  lastMeasurment: string
  components: string
  isVisible: boolean
}

export interface TimeserieResponse {
  id: number
  height: number
  zone: string
  municipality: string
  area: string
  station: string
  type: string
  eoi: string
  component: string
  latitude: number
  longitude: number
  unit: string
  eea: boolean
  timestep: number
  timestepAsText: string
  isVisible: boolean
  fromTime: string
  toTime: string
  topic: string
}
