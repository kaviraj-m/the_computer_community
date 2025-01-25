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
import pcs from "../data/pcData"; // Import the data file

const FilterAndPCSection = () => {
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [priceRange, setPriceRange] = useState([30000, 300000]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedPC, setSelectedPC] = useState(null);
  const [visibleRows, setVisibleRows] = useState(2); // Show 2 rows initially (8 PCs)

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

  const handleShowMore = () => {
    setVisibleRows((prev) => prev + 2); // Show 2 more rows (8 PCs) when clicked
  };

  const visiblePCs = visibleRows * 4; // Total visible PCs based on rows (4 PCs per row)

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
            <MenuItem value="office">Office</MenuItem>
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
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)", // 1 PC per row on mobile
            sm: "repeat(2, 1fr)", // 2 PCs per row on small screens
            md: "repeat(3, 1fr)", // 3 PCs per row on medium screens
            lg: "repeat(4, 1fr)", // 4 PCs per row on large screens
          },
          gap: "20px",
          padding: "20px",
        }}
      >
        {filteredPCs.length > 0 ? (
          filteredPCs.slice(0, visiblePCs).map((pc, index) => (
            <Card
              key={index}
              sx={{
                backgroundColor: "#1a1a1a",
                color: "#fff",
                height: 400, // Fixed height for all cards
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
                sx={{ objectFit: "contain" }} // Ensure consistent image rendering
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "#FFD700", fontWeight: "bold" }}
                >
                  {pc.title}
                </Typography>
                <Typography variant="body2">{pc.specs}</Typography>
                <Typography variant="h6" sx={{ mt: 1, color: "#FFD700" }}>
                  ₹{pc.price.toLocaleString("en-IN")}
                </Typography>
              </CardContent>
              <Box sx={{ textAlign: "center", mb: 1 }}>
                <Button
                  variant="outlined"
                  sx={{
                    color: "#FFD700",
                    borderColor: "#FFD700",
                    "&:hover": {
                      backgroundColor: "#FFD700",
                      color: "#000",
                    },
                  }}
                  onClick={() => handleOpenModal(pc)}
                >
                  View Details
                </Button>
              </Box>
            </Card>
          ))
        ) : (
          <Typography
            sx={{
              color: "#FFD700",
              fontWeight: "bold",
              textAlign: "center",
              mt: 5,
              gridColumn: "1/-1",
            }}
          >
            No PCs found matching the criteria.
          </Typography>
        )}
      </Box>

      {/* Show More Button */}
      {filteredPCs.length > visiblePCs && (
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Button
            variant="outlined"
            sx={{
              color: "#FFD700",
              borderColor: "#FFD700",
              "&:hover": {
                backgroundColor: "#FFD700",
                color: "#000",
              },
            }}
            onClick={handleShowMore}
          >
            Show More
          </Button>
        </Box>
      )}

      {/* Modal for Details */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#1a1a1a",
            color: "#fff",
            padding: "15px",
            borderRadius: "8px",
            width: "70%",
            maxWidth: "500px",
            textAlign: "center",
            boxShadow: "0px 4px 8px rgba(255, 215, 0, 0.6)",
            border: "2px solid #FFD700",
          }}
        >
          {selectedPC && (
            <>
              <Typography
                variant="h4"
                sx={{ color: "#FFD700", fontWeight: "bold", mb: 2 }}
              >
                {selectedPC.title}
              </Typography>
              <img
                src={selectedPC.image}
                alt={selectedPC.title}
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  margin: "auto",
                  borderRadius: "8px",
                }}
              />
              <Typography variant="h6" sx={{ mt: 2 }}>
                {selectedPC.specs}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                {selectedPC.details}
              </Typography>
              <Typography
                variant="h5"
                sx={{ mt: 2, color: "#FFD700", fontWeight: "bold" }}
              >
                ₹{selectedPC.price.toLocaleString("en-IN")}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FFD700",
                  color: "#000",
                  fontWeight: "bold",
                  mt: 3,
                }}
                onClick={handleCloseModal}
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
