import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255, 215, 0, 0.8)",
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
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            fontFamily: "'Roboto', sans-serif",
            color: "#FFD700",
          }}
        >
          The Computer Community
        </Typography>

        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
          {sections.map((section) => (
            <Button
              key={section}
              onClick={() => handleScrollToSection(section)}
              sx={{
                textTransform: "capitalize",
                fontWeight: "bold",
                color:
                  activeSection === section ? "#FFD700" : "#FFFFFF",
                borderBottom:
                  activeSection === section ? "2px solid #FFD700" : "none",
              }}
            >
              {section}
            </Button>
          ))}
        </Box>

        <IconButton
          edge="end"
          color="inherit"
          sx={{ display: { xs: "block", sm: "none" }, color: "#FFFFFF" }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
