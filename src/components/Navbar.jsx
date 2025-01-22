import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import LOGOMARK_WHITE from "../assets/LOGOMARK_WHITE.png"; // Replace with your logo path

const Navbar = () => {
  const sections = [
    { label: "Home", path: "/" },
    { label: "Build Your PC", path: "/build" },
    { label: "Pre-Built PCs", path: "/prebuilt" },
    { label: "About Us", path: "/aboutus" },
    { label: "Contact Us", path: "/contactus" },
  ];
  const [activeSection, setActiveSection] = useState("Home");
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  // Highlight the current route as active
  useEffect(() => {
    const currentPath = window.location.pathname;
    const active = sections.find((section) => section.path === currentPath);
    setActiveSection(active ? active.label : "Home");
  }, [sections]);

  // Handle navigation
  const handleNavigation = (path, label) => {
    navigate(path);
    setActiveSection(label);
    handleMenuClose();
  };

  // Handle menu opening/closing
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
          xs: "90%", // Reduced width for mobile
          sm: "80%",
          md: "70%",
        },
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Toolbar>
        {/* Logo and Title */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexGrow: 1 }}>
          <Box
            component="img"
            src={LOGOMARK_WHITE}
            alt="Logo"
            sx={{ height: "40px", width: "auto" }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontFamily: "'Libre Baskerville', serif",
              color: "#FFD700",
              textShadow: "0px 4px 6px rgba(255, 215, 0, 0.6)",
              fontSize: "1.5rem",
              display: { xs: "none", sm: "block" }, // Hide title on mobile
            }}
          >
            The Computer Community
          </Typography>
        </Box>

        {/* Navigation Buttons for Large Screens */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
          {sections.map((section) => (
            <Button
              key={section.label}
              onClick={() => handleNavigation(section.path, section.label)}
              sx={{
                textTransform: "capitalize",
                fontWeight: "bold",
                fontFamily: "'Manrope', sans-serif",
                color: activeSection === section.label ? "#FFD700" : "#FFFFFF",
                borderBottom: activeSection === section.label ? "2px solid #FFD700" : "none",
                textShadow:
                  activeSection === section.label
                    ? "0px 4px 6px rgba(255, 215, 0, 0.6)"
                    : "none",
                "&:hover": {
                  color: "#FFD700",
                  textShadow: "0px 4px 6px rgba(255, 215, 0, 0.8)",
                },
              }}
            >
              {section.label}
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
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </IconButton>

        {/* Dropdown Menu for Small Screens */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        >
          {sections.map((section) => (
            <MenuItem
              key={section.label}
              onClick={() => handleNavigation(section.path, section.label)}
              sx={{
                textTransform: "capitalize",
                fontWeight: "bold",
                fontFamily: "'Manrope', sans-serif",
                color: activeSection === section.label ? "#FFD700" : "#000000",
              }}
            >
              {section.label}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
