import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Select,
  MenuItem,
  Slider,
  Stack,
  Modal,
} from "@mui/material";
import computer2 from "../assets/computer2.webp";
import computer3 from "../assets/computer3.webp";
import computer4 from "../assets/computer4.webp";
import computer5 from "../assets/computer5.webp";

const pcs = [
  {
    title: "Gaming Beast",
    image: computer2,
    specs: "Intel i9, NVIDIA RTX 4090, 32GB RAM, 1TB SSD",
    category: "gaming",
    brand: "intel",
    price: 249999,
    details: "This is the ultimate gaming PC for enthusiasts.",
  },
  {
    title: "Budget Build",
    image: computer3,
    specs: "Intel i5, GTX 1650, 16GB RAM, 512GB SSD",
    category: "budget",
    brand: "intel",
    price: 54999,
    details: "Perfect for entry-level gamers and students.",
  },
  {
    title: "Workstation Pro",
    image: computer4,
    specs: "AMD Ryzen 9, RTX 3080, 64GB RAM, 2TB SSD",
    category: "productivity",
    brand: "amd",
    price: 299999,
    details: "Designed for creators and professionals.",
  },
  {
    title: "Streaming King",
    image: computer5,
    specs: "AMD Ryzen 7, RTX 3070, 32GB RAM, 1TB SSD",
    category: "gaming",
    brand: "amd",
    price: 179999,
    details: "Ideal for streamers and multitaskers.",
  },
];

const FilterAndPCSection = () => {
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [priceRange, setPriceRange] = useState([30000, 300000]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedPC, setSelectedPC] = useState(null);

  const handleOpenModal = (pc) => {
    setSelectedPC(pc);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedPC(null);
  };

  const filteredPCs = pcs.filter(
    (pc) =>
      (category === "" || pc.category === category) &&
      (brand === "" || pc.brand === brand) &&
      pc.price >= priceRange[0] &&
      pc.price <= priceRange[1]
  );

  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      {/* Filter Section */}
      <Box
        sx={{
          padding: "20px",
          borderBottom: "2px solid #FFD700",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#FFD700",
            fontWeight: "bold",
            textAlign: "center",
            mb: 3,
          }}
        >
          Find Your Perfect Pre-Built PC
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          alignItems="center"
          justifyContent="center"
        >
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            displayEmpty
            sx={{
              minWidth: 200,
              color: "#FFD700",
              backgroundColor: "#1a1a1a",
              border: "1px solid #FFD700",
              "& .MuiSvgIcon-root": { color: "#FFD700" },
            }}
          >
            <MenuItem value="">All Categories</MenuItem>
            <MenuItem value="gaming">Gaming</MenuItem>
            <MenuItem value="productivity">Productivity</MenuItem>
            <MenuItem value="budget">Budget</MenuItem>
          </Select>
          <Select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            displayEmpty
            sx={{
              minWidth: 200,
              color: "#FFD700",
              backgroundColor: "#1a1a1a",
              border: "1px solid #FFD700",
              "& .MuiSvgIcon-root": { color: "#FFD700" },
            }}
          >
            <MenuItem value="">All Brands</MenuItem>
            <MenuItem value="intel">Intel</MenuItem>
            <MenuItem value="amd">AMD</MenuItem>
          </Select>
          <Box sx={{ minWidth: 300 }}>
            <Typography sx={{ color: "#FFD700", mb: 1 }}>
              Price Range (₹)
            </Typography>
            <Slider
              min={30000}
              max={300000}
              step={1000}
              value={priceRange}
              onChange={(e, newValue) => setPriceRange(newValue)}
              valueLabelDisplay="auto"
              sx={{
                color: "#FFD700",
                "& .MuiSlider-thumb": {
                  backgroundColor: "#FFD700",
                  border: "2px solid #fff",
                },
              }}
            />
          </Box>
        </Stack>
      </Box>

      {/* PC Cards Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {filteredPCs.length > 0 ? (
          filteredPCs.map((pc, index) => (
            <Card
              key={index}
              sx={{
                backgroundColor: "#1a1a1a",
                color: "#fff",
                maxWidth: 300,
                margin: "auto",
                height: 400,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0px 4px 8px rgba(255, 215, 0, 0.6)",
                border: "1px solid #FFD700",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={pc.image}
                alt={pc.title}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "#FFD700", fontWeight: "bold" }}
                >
                  {pc.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: "#fff" }}>
                  {pc.specs}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#FFD700",
                    fontWeight: "bold",
                    mb: 2,
                  }}
                >
                  ₹{pc.price.toLocaleString()}
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => handleOpenModal(pc)}
                  sx={{
                    backgroundColor: "#FFD700",
                    color: "#000",
                    fontWeight: "bold",
                    "&:hover": { backgroundColor: "#FFC300" },
                  }}
                >
                  View More Details
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              gridColumn: "1/-1",
              padding: "20px",
              color: "#FFD700",
            }}
          >
            No PCs match the selected filters.
          </Typography>
        )}
      </Box>

      {/* Modal for More Details */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#1a1a1a",
            color: "#fff",
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "500px",
            boxShadow: "0px 4px 10px rgba(255, 215, 0, 0.8)",
          }}
        >
          {selectedPC && (
            <>
              <Typography
                variant="h5"
                sx={{ color: "#FFD700", fontWeight: "bold", mb: 2 }}
              >
                {selectedPC.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {selectedPC.details}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Specs: {selectedPC.specs}
              </Typography>
              <Typography variant="h6" sx={{ color: "#FFD700", mb: 2 }}>
                Price: ₹{selectedPC.price.toLocaleString()}
              </Typography>
              <Button
                onClick={handleCloseModal}
                variant="contained"
                sx={{
                  backgroundColor: "#FFD700",
                  color: "#000",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#FFC300" },
                }}
              >
                Close
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default FilterAndPCSection;
