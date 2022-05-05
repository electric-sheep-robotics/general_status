export interface ModuleConfig {
  debugItems: MonitoringSection[];
}

export interface MonitoringSection {
  stream: streamNames;
  type: string;
  name: string;
  state: string | number;
}

export type streamNames =
  | "can.follow"
  | "north.heading"
  | "path.name"
  | "completion.fraction"
  | "gpsfix.state"
  | "latitude.rad"
  | "longitude.rad"
  ;
