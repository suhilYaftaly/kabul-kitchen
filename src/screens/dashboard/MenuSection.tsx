import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { MenuItem } from "menu/menu";

type Props = {
  menu: MenuItem[];
  title: string;
};
export default function MenuSection({ menu, title }: Props) {
  return (
    <Stack sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: "800" }}>
        {title}
      </Typography>
      <Stack sx={{ gap: 2 }}>
        {menu.map((item) => (
          <Card
            key={item.name}
            variant="outlined"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            {item.imgUrl && (
              <CardMedia
                component="img"
                image={item.imgUrl || "https://via.placeholder.com/150"}
                alt={item.name}
                sx={{ width: 150, height: 150 }}
              />
            )}
            <CardContent>
              <Typography variant="h5">{item.name}</Typography>
              <Typography
                variant="body2"
                color="secondary"
                sx={{ fontWeight: "600" }}
              >
                ${item.price}
              </Typography>
              {item.description && (
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mt: 2 }}
                >
                  {item.description}
                </Typography>
              )}
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
}
