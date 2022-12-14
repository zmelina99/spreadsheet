// import React, { createContext, useReducer } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import { reducer } from './RecordingGuidesProvider.reducer';
// import {
//   Store, ContextValues, Props, StorageActions,
// } from './recordingGuidesProvider.interfaces';

// type Reducer<S, A> = (state: S, action: A) => S;

// const storeInit: Store = {
//   id: uuidv4(),
//   recordingGuideName: '',
//   videoDetails: {
//     companyName: {
//       answer: '',
//       question: 'Company Name',
//     },
//     videoGuest: {
//       answer: '',
//       question: 'Video Guest',
//     },

//     companyInformation: {
//       answer: '',
//       question: 'What does this company do?',
//     },

//     videoSubject: {
//       answer: '',
//       question: 'What will this video be about?',
//     },
//     targetAudience: {
//       answer: '',
//       question: 'Who is the audience for this video?',
//     },
//   },
//   questions: {},
//   guestDetails: {
//     name: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     studioInABox: false,
//   },
// };

// export const RecordingGuidesContext = createContext<ContextValues>({
//   store: storeInit,
//   setStore: () => {},
// });

// const StoreProvider: React.FC<Props> = ({ children }) => {
//   const [store, dispatch] = useReducer<Reducer<Store, StorageActions>>(reducer as any, storeInit);
//   return (
//     // eslint-disable-next-line react/jsx-no-constructed-context-values
//     <RecordingGuidesContext.Provider value={{ store, setStore: dispatch }}>
//       {children}
//     </RecordingGuidesContext.Provider>
//   );
// };

// export default StoreProvider;

export {}