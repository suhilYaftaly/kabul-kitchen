import {
  Button,
  Stack,
  SxProps,
  Theme,
  Typography,
  alpha,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import { isMobileDevice } from "@helpers/functions/reusableFuncs";
import { businessPhoneNumber } from "@constants/constants";

export default function Header() {
  const trigger = useScrollTrigger({ threshold: 110 });
  const theme = useTheme();
  const bgColor = alpha(theme.palette.background.default, 0.9);

  const onCallClick = () => {
    if (isMobileDevice())
      window.open(`tel:${businessPhoneNumber.internationalFormat}`);
  };

  return (
    <Stack direction={"row"} sx={containerSX(trigger, bgColor)}>
      <Stack
        direction="row"
        sx={{ alignItems: "center", fontWeight: "900", gap: 0.2 }}
      >
        <ChipTxt>Kabul</ChipTxt>
        <Typography variant="h6" sx={{ fontWeight: "900" }}>
          Kitchen
        </Typography>
      </Stack>
      <Button
        variant="contained"
        size="small"
        startIcon={<CallIcon />}
        onClick={onCallClick}
      >
        {businessPhoneNumber.displayFormat}
      </Button>
    </Stack>
  );
}

const ChipTxt = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const pColor = theme.palette.primary.main;

  return (
    <Typography
      variant="h6"
      sx={{
        backgroundColor: pColor,
        color: "white",
        borderRadius: 2,
        paddingX: 0.5,
        fontWeight: "900",
      }}
    >
      {children}
    </Typography>
  );
};

const containerSX = (trigger: boolean, backgroundColor: string) =>
  ({
    position: "sticky",
    top: 0,
    zIndex: 1,
    transition: "opacity 0.2s ease-in-out",
    opacity: trigger ? 0 : 1,
    pointerEvents: trigger ? "none" : "auto",
    alignItems: "center",
    justifyContent: "space-between",
    p: 2,
    backgroundColor,
    borderRadius: 15,
  } as SxProps<Theme>);
