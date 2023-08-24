import { create } from 'zustand';

const useScreenSizeStore = create((set) => ({
  screenSize: getCurrentDimension(),

  updateScreenSize: () => {
    set({ screenSize: getCurrentDimension() });
  },
}));

// Define the getCurrentDimension function
function getCurrentDimension() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export default useScreenSizeStore;
