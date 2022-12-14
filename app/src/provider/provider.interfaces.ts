// import { Dispatch } from 'react';

// type ActionMap<M extends { [index: string]: any }> = {
//   [Key in keyof M]: M[Key] extends undefined
//     ? {
//       type: Key;
//     }
//     : {
//       type: Key;
//       payload: M[Key];
//     };
// };

// export interface IGuestDetails {
//   name: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   studioInABox: boolean;
// }

// export interface IUserQuestion {
//   question: string;
//   answer: string;
// }

// export interface IQuestion {
//   id: string;
//   questions: string;
// }
// export type IQuestions = {
//   [key: string]: Record<string, IQuestion>;
// };

// export interface IRecordingGuide {
//   id: string;
//   recordingGuideName: string;
//   guestDetails: IGuestDetails;
//   videoDetails: Record<string, IUserQuestion>;
//   questions: IQuestions;
// }

// export type Store = IRecordingGuide;

// export enum Types {
//   AddGuest = 'ADD_GUEST',
//   AddRecordingGuideName = 'ADD_RECORDING_GUIDE_NAME',
//   AddVideoDetails = 'ADD_VIDEO_DETAILS',
//   AddQuestion = 'ADD_QUESTION',
//   AddAndEditQuestion = 'ADD_AND_EDIT_QUESTION',
//   EditQuestion = 'EDIT_QUESTION',
//   RemoveQuestion = 'REMOVE_QUESTION',
//   Reset = 'RESET',
// }

// export interface Action {
//   type: string;
//   payload?: StoragePayload;
// }

// export type StoragePayload = {
//   [Types.AddGuest]: {
//     value: string | boolean;
//     attribute: string;
//   };
//   [Types.AddRecordingGuideName]: {
//     value: string;
//   };
//   [Types.RemoveQuestion]: {
//     id: string;
//   };
//   [Types.AddVideoDetails]: { value: string; attribute: string };
//   [Types.AddQuestion]: { id: string; value: string };
//   [Types.EditQuestion]: { id: string; value: string };
//   [Types.AddAndEditQuestion]: { id: string; value: string };
//   [Types.Reset]: {};
// };

// export interface ContextValues {
//   store: Store;
//   setStore: Dispatch<StorageActions>;
// }

// export interface Props {
//   children: React.ReactNode;
// }

// export type StorageActions = ActionMap<StoragePayload>[keyof ActionMap<StoragePayload>];
export {}