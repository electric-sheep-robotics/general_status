export interface RosTopicStats {
  name: string;
  state: string | number;
}

export interface RosDebug {
  debug_stats: RosTopicStats[];
}

export interface RosDebugState {
  canFollow: string | undefined;
  headingFromNorth: string | undefined;
  pathName: string | undefined;
  completionFraction: string | undefined;
  fixStatus: string | undefined;
  latitude: string | undefined;
  longitude: string | undefined;
}
