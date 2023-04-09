import React, { memo, Suspense, useCallback, useState } from "react";
import { useRoutes } from "react-router-dom";

import { AppStyle } from "./AppStyle";
import routes from "./router";
import { Snackbar, Alert } from "@mui/material";

const App = memo(() => {
  const [open, setOpen] = useState(false);
  const [timeout, setTimeout] = useState(3000);
  const [message, setMessage] = useState("默认提示");
  const [type, setType] = useState("success");
  React.showMessage = useCallback((message, type, timeout = 3000) => {
    setType(type);
    setTimeout(timeout);
    setMessage(message);
    setOpen(true);
  }, []);
  React.handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <AppStyle>
      <div className="bg-bilibili">
        {/* <video src={require('@/assets/video/bg.mp4')} autoPlay loop muted></video> */}
        <img src={require("@/assets/video/bg.jpg")} alt="" />
      </div>
      <Snackbar
        open={open}
        autoHideDuration={timeout}
        onClose={React.handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={React.handleClose} severity={type}>
          {message}
        </Alert>
      </Snackbar>

      <Suspense fallback="">{useRoutes(routes)}</Suspense>
    </AppStyle>
  );
});

export default App;
