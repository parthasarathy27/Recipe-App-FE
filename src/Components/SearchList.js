import React from "react";
import { Box, Grid, Chip, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchRecipe, setSearchItem } from "../Redux/RecipeActions";
import { useNavigate } from "react-router-dom";

const SearchList = () => {
  const searchList = [
    "carrot", "broccoli", "asparagus", "cauliflower", "corn", "cucumber",
    "green pepper", "lettuce", "mushrooms", "onion", "potato", "pumpkin",
    // Add more items...
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (value) => {
    dispatch(setSearchItem(value));
    dispatch(fetchRecipe(value));
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}>
      <Typography align="center" color="textSecondary" variant="h3" mb={4}>
        Available search queries
      </Typography>
      <Grid container align="center" spacing={2}>
        {searchList.map((value, index) => (
          <Grid item xs={4} sm={3} md={2} lg={1.5} xl={1} key={`${value}-${index}`}>
            <Chip
              label={value}
              onClick={() => handleClick(value)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SearchList;
