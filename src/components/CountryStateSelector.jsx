import React, { useState } from 'react';
import { Container, List, ListItemButton ,ListItem, ListItemText, Typography } from '@mui/material';

const countryData = {
  India: ['Gujarat', 'Goa', 'Madhya Pradesh', 'Maharashtra', 'Rajasthan'],
  Australia: ['New South Wales', 'Victoria', 'Queensland'],
  'United States': ['California', 'Texas', 'Florida'],
  Canada: ['Ontario', 'Quebec', 'British Columbia'],
  Germany: ['Bavaria', 'Berlin', 'Hamburg']
};

const CountryStateSelector = () => {
  const [selectedCountry, setSelectedCountry] = useState('India');

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <Container>
      <List component="nav">
        {Object.keys(countryData).map((country) => (
          <ListItemButton 
            button
            key={country}
            selected={selectedCountry === country}
            onClick={() => handleCountryClick(country)}
          >
            <ListItemText primary={country} />
          </ListItemButton >
        ))}
      </List>
      <Typography variant="h6" component="div" style={{ marginTop: '20px' }}>
        States in {selectedCountry}
      </Typography>
      <List>
        {countryData[selectedCountry].map((state, index) => (
          <ListItem  key={index}>
            <ListItemText primary={state} />
          </ListItem >
        ))}
      </List>
    </Container>
  );
};

export default CountryStateSelector;
