import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LOGOMARK_WHITE from "../assets/LOGOMARK_WHITE.png"; // Replace with your logo path

const Navbar = () => {
  const sections = ["Home", "Build Your PC", "Pre-Built PCs", "About Us", "Contact Us"];
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      let currentSection = "Home";

      sections.forEach((section) => {
        const element = document.getElementById(section.replace(/\s+/g, "").toLowerCase());
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id.replace(/\s+/g, "").toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={4}
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(10px)",
        borderBottom: "2px solid rgba(255, 215, 0, 0.7)",
        top: "1rem",
        left: "50%",
        transform: "translateX(-50%)",
        borderRadius: "16px",
        padding: "0.5rem 1rem",
        width: {
          xs: "90%",
          sm: "80%",
          md: "70%",
        },
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Toolbar>
        {/* Logo and Title */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            flexGrow: 1,
          }}
        >
          <Box
            component="img"
            src={LOGOMARK_WHITE}
            alt="Logo"
            sx={{
              height: "40px",
              width: "auto",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontFamily: "'Libre Baskerville', serif",
              color: "#FFD700",
              textShadow: "0px 4px 6px rgba(255, 215, 0, 0.6)",
              fontSize: "1.5rem",
            }}
          >
            The Computer Community
          </Typography>
        </Box>

        {/* Navigation Buttons */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
          {sections.map((section) => (
            <Button
              key={section}
              onClick={() => handleScrollToSection(section)}
              sx={{
                textTransform: "capitalize",
                fontWeight: "bold",
                fontFamily: "'Manrope', sans-serif",
                color: activeSection === section ? "#FFD700" : "#FFFFFF",
                borderBottom: activeSection === section ? "2px solid #FFD700" : "none",
                textShadow:
                  activeSection === section ? "0px 4px 6px rgba(255, 215, 0, 0.6)" : "none",
                "&:hover": {
                  color: "#FFD700",
                  textShadow: "0px 4px 6px rgba(255, 215, 0, 0.8)",
                },
              }}
            >
              {section}
            </Button>
          ))}
        </Box>

        {/* Hamburger Menu Icon for Small Screens */}
        <IconButton
          edge="end"
          color="inherit"
          sx={{
            display: { xs: "block", sm: "none" },
            color: "#FFFFFF",
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
