import { Button, Grid2, Stack, Typography, useTheme } from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

import girlImage from "@images/girl.png";
import { businessLocation } from "@constants/constants";

export default function Intro() {
  const theme = useTheme();
  const pColor = theme.palette.primary.main;

  const onLocationClick = () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
      businessLocation.address
    )}`;

    window.open(googleMapsUrl, "_blank");
  };

  return (
    <Grid2 container sx={{ alignItems: "center" }}>
      <Grid2 size={{ xs: 12, sm: 6 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: "900" }}>
          Dive into Delights Of Delectable{" "}
          <span style={{ color: pColor }}>Food</span>
        </Typography>
        <Typography variant="caption">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </Typography>
        <Stack sx={{ mt: 1 }}>
          <Button
            color="info"
            startIcon={<PlaceOutlinedIcon />}
            sx={{ alignSelf: "flex-start" }}
            onClick={onLocationClick}
          >
            {businessLocation.address}
          </Button>
        </Stack>
      </Grid2>
      <Grid2
        size={{ xs: 12, sm: 6 }}
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-end" },
        }}
      >
        <img
          src={girlImage}
          alt="girl smelling food"
          style={{ width: "300px" }}
        />
      </Grid2>
    </Grid2>
  );
}
