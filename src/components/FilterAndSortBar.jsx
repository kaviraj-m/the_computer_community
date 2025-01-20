import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, Slider } from '@mui/material';

const FilterAndSortBar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#222',
        color: '#fff',
        marginBottom: '20px',
      }}
    >
      <FormControl sx={{ width: '30%' }}>
        <InputLabel sx={{ color: '#FFD700' }}>Category</InputLabel>
        <Select
          sx={{
            backgroundColor: '#333',
            color: 'white',
          }}
          defaultValue=""
        >
          <MenuItem value="Gaming">Gaming</MenuItem>
          <MenuItem value="Workstation">Workstation</MenuItem>
          <MenuItem value="Budget">Budget</MenuItem>
        </Select>
      </FormControl>

      <Slider
        defaultValue={50}
        sx={{ color: '#FFD700', width: '30%' }}
        marks
        valueLabelDisplay="auto"
      />

      <FormControl sx={{ width: '30%' }}>
        <InputLabel sx={{ color: '#FFD700' }}>Sort By</InputLabel>
        <Select
          sx={{
            backgroundColor: '#333',
            color: 'white',
          }}
          defaultValue=""
        >
          <MenuItem value="Price">Price</MenuItem>
          <MenuItem value="Performance">Performance</MenuItem>
          <MenuItem value="Popularity">Popularity</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterAndSortBar;
