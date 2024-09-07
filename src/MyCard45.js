import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import KitchenIcon from "@mui/icons-material/Kitchen";
import StorageIcon from "@mui/icons-material/Storage";
import BedIcon from "@mui/icons-material/Bed";
import WeekendIcon from "@mui/icons-material/Weekend";
import TvIcon from "@mui/icons-material/Tv";

const cardData = [
  { name: "Modular Kitchen", icon: <KitchenIcon /> },
  { name: "Storage and Wardrobe", icon: <StorageIcon /> },
  { name: "Bed", icon: <BedIcon /> },
  { name: "Sofa", icon: <WeekendIcon /> },
  { name: "TV Unit", icon: <TvIcon /> },
];

const MyCard45 = () => {
  return (
    <Grid container spacing={2}>
      {Array.from({ length: 3 }).map((_, rowIndex) =>
        cardData.map((card, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={2.4}
            key={rowIndex * cardData.length + index}
          >
            <Card>
              <CardContent style={{ textAlign: "center" }}>
                {card.icon}
                <Typography variant="h6">{card.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default MyCard45;
