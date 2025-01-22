import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

const InstagramFeed = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    script.onerror = () => setScriptLoaded(false);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "500px",
        backgroundColor: "#101010",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "12px",
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.5)",
        overflow: "hidden",
      }}
    >
      {scriptLoaded ? (
        <div
          className="elfsight-app-1e04dfc5-9688-4ad5-8d71-646d580eb86c"
          data-elfsight-app-lazy
          style={{ width: "100%", height: "100%" }}
        ></div>
      ) : (
        <Box textAlign="center">
          <Typography
            variant="h6"
            sx={{
              color: "#FFD700",
              marginBottom: "16px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Instagram Feed Unavailable
          </Typography>
          <Typography variant="body2" sx={{ color: "#fff", opacity: 0.8 }}>
            Please check your internet connection or try again later.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default InstagramFeed;
