import { ModuleConfig } from "../types/ModuleConfig";

export const moduleConfig: ModuleConfig = {
  debugItems: [
    {
      stream: "can.follow",
      type: "string",
      name: "Can follow",
      state: "-", 
    },
    {
      stream: "north.heading",
      type: "string",
      name: "Heading from North",
      state: "-", 
    },
    {
      stream: "path.name",
      type: "string",
      name: "Path Name",
      state: "-", 
    },
    {
      stream: "completion.fraction",
      type: "string",
      name: "Completion fraction",
      state: "-", 
    },
    {
      stream: "gpsfix.state",
      type: "string",
      name: "Fix Status",
      state: "-", 
    },
    {
      stream: "latitude.rad",
      type: "string",
      name: "Latitude",
      state: "-", 
    },
    {
      stream: "longitude.rad",
      type: "string",
      name: "Longitude",
      state: "-", 
    },
  ],
};
