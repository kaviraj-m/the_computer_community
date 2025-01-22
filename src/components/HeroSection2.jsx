import React from "react";
import { Box, Typography, Button, Stack, Divider } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import backgroundImage from "../assets/background2.jpg";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        textAlign: "center",
        padding: { xs: "80px 20px", md: "120px 40px" },
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* Overlay for Better Text Contrast */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.65)", // Dark overlay
          zIndex: 1,
        }}
      />

      {/* Content Section */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: "800px",
          textAlign: "center",
        }}
      >
        {/* Title */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 3,
            textShadow: "0px 4px 8px rgba(0, 0, 0, 0.8)",
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            lineHeight: 1.2,
          }}
        >
          Discover the Best Pre-Built PCs for Your Needs
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="h5"
          sx={{
            mb: 4,
            textShadow: "0px 3px 6px rgba(0, 0, 0, 0.6)",
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            fontWeight: 400,
            lineHeight: 1.6,
          }}
        >
          Gaming, Workstation, and Everyday PCs, crafted to perfection with top-tier components.
        </Typography>

        {/* Call-to-Actions */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ mb: 4 }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#FFD700",
              color: "#101010",
              fontWeight: "bold",
              textTransform: "capitalize",
              px: 5,
              py: 1.5,
              fontFamily: "'Manrope', sans-serif",
              boxShadow: "0px 6px 12px rgba(255, 215, 0, 0.6)",
              "&:hover": {
                backgroundColor: "#FFC300",
                boxShadow: "0px 8px 16px rgba(255, 215, 0, 0.8)",
              },
            }}
            endIcon={<ArrowForwardIcon />}
          >
            Explore Pre-Built PCs
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              color: "#FFD700",
              borderColor: "#FFD700",
              fontWeight: "bold",
              textTransform: "capitalize",
              px: 5,
              py: 1.5,
              fontFamily: "'Manrope', sans-serif",
              boxShadow: "0px 4px 8px rgba(255, 215, 0, 0.4)",
              "&:hover": {
                backgroundColor: "rgba(255, 215, 0, 0.2)",
                boxShadow: "0px 6px 12px rgba(255, 215, 0, 0.6)",
              },
            }}
          >
            Learn More
          </Button>
        </Stack>

        {/* Highlight Features */}
        <Divider
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            mb: 4,
            width: "70%",
            margin: "0 auto",
          }}
        />
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.1rem",
            textShadow: "0px 2px 4px rgba(0, 0, 0, 0.6)",
            lineHeight: 1.8,
          }}
        >
          Trusted by professionals and gamers worldwide. Each PC is stress-tested for performance and reliability, ensuring seamless performance for all your needs.
        </Typography>
      </Box>

      {/* Decorative Gradient */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100px",
          background: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.9))",
        }}
      />
    </Box>
  );
};

export default HeroSection;
