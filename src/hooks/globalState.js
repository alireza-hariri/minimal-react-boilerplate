
import create from 'zustand'

const useGlobalState = create((set) => ({
    showModal: false ,
    setShowModal: (x) => set((state) => ({...state, showDayModal: x })),
    // add other states !
}))



const withGlobalState = (Component) => {
    return (props) => {
      const globalState = useGlobalState();
      return <Component globalState={globalState} {...props} />;
    };
};


export {
  useGlobalState,
  withGlobalState
}

