import React from "react";

//material-ui
import { Box } from "@mui/system";



//components
import Home from "./components/Home/Home";

const App = () => {


  return (
    <div>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          p: 3,
        }}
      >
          <Home />
      </Box>
    </div>
  );
};

export default App;
