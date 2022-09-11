import React from "react";

// set the defaults
const MemeImageContext = React.createContext({
  selectedMemeImageData: [],
  setSelectedMemeImageData: () => []
});

export default MemeImageContext;