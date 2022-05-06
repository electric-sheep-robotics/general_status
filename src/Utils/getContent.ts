import { RosDebugState } from "../types/RosTopicStats";

export const getContent = (
  _: string,
  topicStats: RosDebugState
): (string | number)[] => {

  if (_ === "Can follow" && topicStats?.canFollow === undefined)
    return ["-", "unknown"];
  if (_ === "Can follow" && topicStats?.canFollow !== undefined)
    return [topicStats?.canFollow, "good"];
  if (_ === "Heading from North" && topicStats?.headingFromNorth === undefined)
    return ["-", "unknown"];
  if (_ === "Heading from North" && topicStats?.headingFromNorth !== undefined)
    return [topicStats?.headingFromNorth, "good"];
  if (_ === "Path Name" && topicStats?.pathName === undefined)
    return ["-", "unknown"];
  if (_ === "Path Name" && topicStats?.pathName !== undefined)
    return [topicStats?.pathName, "good"];
  if (_ === "Crosstrack error" && topicStats?.crosstrackError === undefined)
    return ["-", "unknown"];
  if (_ === "Crosstrack error" && topicStats?.crosstrackError !== undefined)
    return [topicStats?.crosstrackError, "good"];
  if (_ === "Completion fraction" && topicStats?.completionFraction === undefined)
    return ["-", "unknown"];
  if (_ === "Completion fraction" && topicStats?.completionFraction !== undefined)
    return [topicStats?.completionFraction, "good"];
  if (_ === "Fix Status" && topicStats?.fixStatus === undefined)
    return ["-", "unknown"];
  if (_ === "Fix Status" && topicStats?.fixStatus !== undefined)
    return [topicStats?.fixStatus, "good"];
  if (_ === "Latitude" && topicStats?.latitude === undefined)
    return ["-", "unknown"];
  if (_ === "Latitude" && topicStats?.latitude !== undefined)
    return [topicStats?.latitude, "good"];
  if (_ === "Longitude" && topicStats?.longitude === undefined)
    return ["-", "unknown"];
  if (_ === "Longitude" && topicStats?.longitude !== undefined)
    return [topicStats?.longitude, "good"];
  return ["-", "unknown"];
};
