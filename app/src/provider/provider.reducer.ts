// /* eslint-disable no-case-declarations */
// import { Store, StorageActions } from './provider.interfaces';

// export const reducer = (state: Store, action: StorageActions) => {
//   switch (action.type) {
//     case 'ADD_GUEST':
//       return {
//         ...state,
//         guestDetails: {
//           ...state.guestDetails,
//           [action.payload.attribute]: action.payload.value,
//         },
//       };

//     case 'ADD_VIDEO_DETAILS':
//       const selectedQuestion = state.videoDetails[action.payload.attribute];
//       return {
//         ...state,
//         videoDetails: {
//           ...state.videoDetails,
//           [action.payload.attribute]: {
//             ...selectedQuestion,
//             answer: action.payload.value,
//           },
//         },
//       };
//     case 'ADD_RECORDING_GUIDE_NAME':
//       return {
//         ...state,
//         recordingGuideName: action.payload.value,
//       };
//     case 'ADD_AND_EDIT_QUESTION':
//       return {
//         ...state,
//         questions: {
//           ...state.questions,
//           [action.payload.id]: {
//             question: action.payload.value,
//             id: action.payload.id,
//           },
//         },
//       };
//     case 'EDIT_QUESTION':
//       return {
//         ...state,
//         questions: {
//           ...state.questions,
//           [action.payload.id]: {
//             question: action.payload.value,
//           },
//         },
//       };
//     case 'ADD_QUESTION':
//       return {
//         ...state,
//         questions: {
//           ...state.questions,
//           [action.payload.id]: {
//             question: action.payload.value,
//             id: action.payload.id,
//           },
//         },
//       };
//     case 'REMOVE_QUESTION':
//       const questionsObject: any = {
//         ...state.questions,
//       };

//       delete questionsObject[action.payload.id];
//       return {
//         ...state,
//         questions: questionsObject,
//       };
//     default:
//       return state;
//   }
// };

export {}