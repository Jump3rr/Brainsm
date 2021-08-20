/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { ILibrary } from "./src/ILibrary";

export type RootStackParamList = {
  Root: undefined;
  TabOne: undefined;
  Nature: undefined;
  TabTwo: undefined;
  Player: any;//{ sound: ILibrary};
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  TabPlayer: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type TabPlayerParamList = {
  TabPlayerScreen: undefined;
};
