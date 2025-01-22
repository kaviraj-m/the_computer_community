import React from "react"; 
import { Box, Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";
import VerifiedIcon from "@mui/icons-material/Verified";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import BuildIcon from "@mui/icons-material/Build";
import StarIcon from "@mui/icons-material/Star";
import SecurityIcon from "@mui/icons-material/Security";
import InsightsIcon from "@mui/icons-material/Insights";
import backgroundImage from "../assets/background_image.jpg";

const features = [
  {
    title: "Price Match Guarantee",
    description: "Get the best value for your investment with our price match promise. We will match any competitor's price for the same product, ensuring you get the best deal.",
    icon: <VerifiedIcon sx={{ fontSize: 60, color: "#4CAF50" }} />,
  },
  {
    title: "Aftersales Support",
    description: "Dedicated service helpline for all your queries and support needs. Our expert team is available around the clock to assist you with any issues.",
    icon: <SupportAgentIcon sx={{ fontSize: 60, color: "#FFC107" }} />,
  },
  {
    title: "Customized Solutions",
    description: "Tailored PCs for Gaming, VFX, AI, Architecture, and Productivity. We offer personalized builds based on your specific use case, ensuring top-tier performance.",
    icon: <BuildIcon sx={{ fontSize: 60, color: "#03A9F4" }} />,
  },
  {
    title: "Hardcore Specialization",
    description: "1500+ PC builds showcasing our deep expertise. We have created over 1500 unique builds, catering to every requirement from gaming to professional tasks.",
    icon: <StarIcon sx={{ fontSize: 60, color: "#FF5722" }} />,
  },
  {
    title: "Warranty & Support",
    description: "Enjoy peace of mind with our extended warranty and 24/7 customer service. Our warranty covers hardware issues, and our customer support team is always ready to help.",
    icon: <SecurityIcon sx={{ fontSize: 60, color: "#8E24AA" }} />,
  },
  {
    title: "Performance Benchmark Reports",
    description: "Receive a detailed performance report for your build, ensuring top-notch delivery. We test each build to ensure it meets the highest standards of performance and stability.",
    icon: <InsightsIcon sx={{ fontSize: 60, color: "#E91E63" }} />,
  },
];


const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  borderRadius: "16px",
  backgroundColor: "rgba(255, 255, 255, 0.2)", 
  color: "#FFF",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease",
  "&:hover": {
    transform: "translateY(-12px)",
    boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.4)",
    opacity: 1, 
  },
}));

const FeaturesSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        py: 8,
        px: 4,
        background: `url(${backgroundImage}) no-repeat center/cover`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(12px)",
        color: "#FFF",
      }}
    >
      
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", 
          zIndex: 1,
        }}
      ></Box>

      
      <Box sx={{ position: "relative", zIndex: 2, maxWidth: "1200px", margin: "0 auto" }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#FFD700",
            mb: 6,
            textShadow: "0px 0px 6px rgba(255, 215, 0, 0.4)", 
            fontFamily: "'Libre Baskerville', serif",
          }}
        >
          Why Choose The Computer Community?
        </Typography>

        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <FeatureCard>
                <Box
                  sx={{
                    marginBottom: 3,
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "rotate(360deg)", 
                    },
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    mt: 2,
                    fontWeight: "bold",
                    color: "#FFD700",
                    textShadow: "0px 0px 4px rgba(255, 215, 0, 0.4)", 
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    color: "#CCC",
                    fontFamily: "'Manrope', sans-serif",
                    lineHeight: 1.5,
                    textAlign: "center", 
                  }}
                >
                  {feature.description}
                </Typography>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FeaturesSection;
