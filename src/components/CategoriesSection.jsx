import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GamingImage from "../assets/gaming.png";
import WorkstationImage from "../assets/workstation.png";
import BudgetImage from "../assets/budget.jpg";
import VideoEditingImage from "../assets/video_editing.png";
import ArchitectureImage from "../assets/architecture.png";
import AIMLImage from "../assets/ai_ml.webp";
import "@fontsource/libre-baskerville";
import "@fontsource/manrope";

const CategoryCard = styled(motion.div)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.05)",
  borderRadius: "16px",
  overflow: "hidden",
  backdropFilter: "blur(12px)",
  boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)",
  cursor: "pointer",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 12px 30px rgba(255, 215, 0, 0.4)",
  },
  "&:focus-within": {
    outline: "2px solid #FFD700",
  },
}));

const CategoriesSection = () => {
  const categories = [
    {
      title: "Gaming PCs",
      description: "High-performance systems designed for gaming enthusiasts.",
      link: "/prebuilt",
      image: GamingImage,
    },
    {
      title: "Workstations",
      description: "Powerful machines for productivity and content creation.",
      link: "/prebuilt",
      image: WorkstationImage,
    },
    {
      title: "Budget PCs",
      description: "Affordable yet powerful PCs for everyday use.",
      link: "/prebuilt",
      image: BudgetImage,
    },
    {
      title: "Video Editing",
      description: "Specialized systems for smooth video rendering and editing.",
      link: "/prebuilt",
      image: VideoEditingImage,
    },
    {
      title: "Architecture",
      description: "High-performance PCs for architecture and 3D modeling.",
      link: "/prebuilt",
      image: ArchitectureImage,
    },
    {
      title: "AI / ML",
      description: "Advanced systems optimized for AI and machine learning tasks.",
      link: "/prebuilt",
      image: AIMLImage,
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "#fff",
        py: 10,
        px: 4,
        textAlign: "center",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Libre Baskerville', serif",
          color: "#FFD700",
          mb: 8,
          fontWeight: "700",
          textShadow: "0px 4px 12px rgba(255, 215, 0, 0.5)",
        }}
      >
        We Provide 100% Sensible PC Builds
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: "'Manrope', sans-serif",
          color: "#ccc",
          mb: 6,
          lineHeight: 1.8,
        }}
      >
        Discover top-notch PC solutions tailored for Gaming, VFX, AI, Architects, 
        and Productivity. Explore our categories to find your perfect match.
      </Typography>

      {/* Category Cards */}
      <Grid container spacing={6} justifyContent="center">
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Link
              to={category.link}
              style={{ textDecoration: "none" }}
              aria-label={`Navigate to ${category.title}`}
            >
              <CategoryCard
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {/* Image Section */}
                <Box
                  sx={{
                    position: "relative",
                    height: "250px",
                    overflow: "hidden",
                    borderRadius: "16px 16px 0 0",
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
                </Box>

                {/* Content Section */}
                <Box
                  sx={{
                    padding: "20px",
                    textAlign: "center",
                    background: "rgba(0, 0, 0, 0.8)",
                    borderRadius: "0 0 16px 16px",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "'Manrope', sans-serif",
                      color: "#FFD700",
                      fontWeight: "700",
                      mb: 1,
                    }}
                  >
                    {category.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "'Manrope', sans-serif",
                      color: "#ccc",
                      lineHeight: 1.6,
                    }}
                  >
                    {category.description}
                  </Typography>
                </Box>
              </CategoryCard>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoriesSection;
