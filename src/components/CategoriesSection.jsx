import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import GamingImage from "../assets/gaming.png";
import WorkstationImage from "../assets/workstation.png";
import BudgetImage from "../assets/budget.jpg";
import '@fontsource/libre-baskerville';
import '@fontsource/manrope';


const CategoryCard = styled(Box)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.1)",
  borderRadius: "16px",
  overflow: "hidden",
  backdropFilter: "blur(12px)",
  boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.3)",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #FFD700, #FF8C00)",
  color: "#000",
  fontWeight: "bold",
  padding: "12px 24px",
  borderRadius: "50px",
  fontSize: "1rem",
  textTransform: "none",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "linear-gradient(45deg, #FF8C00, #FFD700)",
    transform: "scale(1.05)",
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.4)",
  },
}));

const CategoriesSection = () => {
  const categories = [
    {
      title: "Gaming PCs",
      description: "High-performance systems designed for gaming enthusiasts.",
      link: "/gaming",
      image: GamingImage,
    },
    {
      title: "Workstations",
      description: "Powerful machines for productivity and content creation.",
      link: "/workstation",
      image: WorkstationImage,
    },
    {
      title: "Budget PCs",
      description: "Affordable yet powerful PCs for everyday use.",
      link: "/budget",
      image: BudgetImage,
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "black", 
        color: "#fff",
        py: 12,
        px: 4,
        textAlign: "center",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Libre Baskerville', serif", 
          color: "#FFD700",
          mb: 6,
          fontWeight: "700",
          textShadow: "0px 4px 12px rgba(255, 215, 0, 0.5)",
        }}
      >
        Explore Our PC Categories
      </Typography>

      <Grid container spacing={6} justifyContent="center">
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <CategoryCard>
                <Box
                  sx={{
                    position: "relative",
                    height: "250px",
                    overflow: "hidden",
                    borderRadius: "16px",
                  }}
                >
                  <motion.img
                    src={category.image}
                    alt={category.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                    whileHover={{ scale: 1.1 }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.7))",
                      zIndex: 1,
                    }}
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      position: "absolute",
                      bottom: "20px",
                      left: "20px",
                      zIndex: 2,
                      color: "#FFD700",
                      fontWeight: "700",
                      textShadow: "0px 4px 8px rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    {category.title}
                  </Typography>
                </Box>
                <Box sx={{ padding: "20px", textAlign: "center" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "'Manrope', sans-serif", 
                      color: "#ccc",
                      lineHeight: 1.6,
                      mb: 3,
                    }}
                  >
                    {category.description}
                  </Typography>
                  <StyledButton
                    onClick={() => (window.location.href = category.link)}
                  >
                    Learn More
                  </StyledButton>
                </Box>
              </CategoryCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoriesSection;
