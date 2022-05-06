import { FC, useState, useEffect } from "react";
import { ModuleData, App, Device } from "@formant/data-sdk";
import { TableComponent } from "../TableComponent/index";

interface ITableProps {
  device: Device | undefined;
}

export const Table: FC<ITableProps> = ({ device }) => {
  const [canFollow, setCanFollow] = useState();
  const [headingFromNorth, setHeadingFromNorth] = useState();
  const [pathName, setPathName] = useState();
  const [crosstrackError, setCrosstrackError] = useState();
  const [completionFraction, setCompletionFraction] = useState();
  const [fixStatus, setFixStatus] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [clearDataInSeconds] = useState(10);

  useEffect(() => {
    App.addModuleDataListener(receiveModuleData);
  }, [device]);

  const shouldClearData = (
    lastUpdate: number,
    scruttingTime: number,
    seconds: number
  ) => {
    return lastUpdate + seconds * 1000 < scruttingTime;
  };

  const receiveModuleData = async (newValue: ModuleData) => {
    const streams = newValue.streams;
    if (Object.keys(streams).length === 0) {
      throw new Error("No streams.");
    }
    Object.keys(streams).forEach((stream) => {
      const latestState = getLatestData(streams, stream);
      if (latestState.length === 2 && latestState[1] !== undefined) {
        if (
          streams[stream].data[0].name === "can.follow" &&
          (latestState[1] as any) !== undefined
        ) {
          if (
            shouldClearData(latestState[0], newValue.time, clearDataInSeconds)
          ) {
            setCanFollow(undefined);
            return;
          }
          setCanFollow(latestState[1] as any);
        }
        if (
          streams[stream].data[0].name === "north.heading" &&
          (latestState[1] as any) !== undefined
        ) {
          if (
            shouldClearData(latestState[0], newValue.time, clearDataInSeconds)
          ) {
            setHeadingFromNorth(undefined);
            return;
          }
          setHeadingFromNorth(latestState[1] as any);
        }
        if (
          streams[stream].data[0].name === "path.name" &&
          (latestState[1] as any) !== undefined
        ) {
          if (
            shouldClearData(latestState[0], newValue.time, clearDataInSeconds)
          ) {
            setPathName(undefined);
            return;
          }
          setPathName(latestState[1] as any);
        }
        if (
          streams[stream].data[0].name === "crosstrack.err" &&
          (latestState[1] as any) !== undefined
        ) {
          if (
            shouldClearData(latestState[0], newValue.time, clearDataInSeconds)
          ) {
            setCrosstrackError(undefined);
            return;
          }
          setCrosstrackError(latestState[1] as any);
        }
        if (
          streams[stream].data[0].name === "completion.fraction" &&
          (latestState[1] as any) !== undefined
        ) {
          if (
            shouldClearData(latestState[0], newValue.time, clearDataInSeconds)
          ) {
            setCompletionFraction(undefined);
            return;
          }
          setCompletionFraction(latestState[1] as any);
        }
        if (
          streams[stream].data[0].name === "gpsfix.state" &&
          (latestState[1] as any) !== undefined
        ) {
          if (
            shouldClearData(latestState[0], newValue.time, clearDataInSeconds)
          ) {
            setFixStatus(undefined);
            return;
          }
          setFixStatus(latestState[1] as any);
        }
        if (
          streams[stream].data[0].name === "latitude.rad" &&
          (latestState[1] as any) !== undefined
        ) {
          if (
            shouldClearData(latestState[0], newValue.time, clearDataInSeconds)
          ) {
            setLatitude(undefined);
            return;
          }
          console.log(latestState[1])
          setLatitude(latestState[1] as any);
        }
        if (
          streams[stream].data[0].name === "longitude.rad" &&
          (latestState[1] as any) !== undefined
        ) {
          if (
            shouldClearData(latestState[0], newValue.time, clearDataInSeconds)
          ) {
            setLongitude(undefined);
            return;
          }
          setLongitude(latestState[1] as any);
        }
      }
    });
  };

  return (
    <TableComponent
      tableHeaders={["Item", "Status"]}
      topicStats={{
        canFollow,
        headingFromNorth,
        pathName,
        crosstrackError,
        completionFraction,
        fixStatus,
        latitude,
        longitude,
      }}
    />
  );
};

const getLatestData = (moduleData: any, stream: string): any | undefined => {
  if (moduleData[stream] === undefined) {
    return "No stream.";
  }
  if (moduleData[stream].loading) {
    return undefined;
  }
  if (moduleData[stream].tooMuchData) {
    return "Too much data.";
  }

  if (moduleData[stream].data.length === 0) {
    return "No data.";
  }
  const latestPoint = moduleData[stream].data[0].points.at(-1);
  if (!latestPoint) {
    return "No datapoints.";
  }
  return latestPoint;
};
