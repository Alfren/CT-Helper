import {
  Stack,
  Box,
  Typography,
  Paper,
  Container,
  Button,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

export default function Root() {
  const nav = useNavigate();
  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        component={Paper}
        p={1}
        alignItems="center"
        sx={{ borderRadius: "0 0 16px 16px" }}
      >
        <Typography>CT Helper</Typography>
        <Stack direction="row" justifyContent="center" spacing={2} flex={1}>
          <Button size="small" variant="outlined" onClick={() => nav("/")}>
            Home
          </Button>
          <Button
            size="small"
            variant="outlined"
            onClick={() => nav("/backfeed")}
          >
            Backfeed Breaker
          </Button>
          <Button size="small" variant="outlined" onClick={() => nav("/")}>
            Line Side Tap
          </Button>
        </Stack>
        <Box />
      </Stack>
      <Container sx={{ pt: 2 }}>
        <Outlet />
      </Container>
    </>
  );
}
