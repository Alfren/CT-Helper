import { Fragment } from "react";
import {
  Paper,
  Stack,
  Switch,
  Typography,
  InputLabel,
  Box,
  LinearProgress,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { WbSunny, Bolt } from "@mui/icons-material";

export default function MainBreakerPanel({
  breakers,
  toggleBreaker,
  mainBreaker,
}) {
  return (
    <Stack
      sx={{
        minWidth: { xs: 200, sm: 350, md: 500 },
        flex: { sx: 1, sm: 1, md: 0 },
      }}
    >
      <Stack direction="row" justifyContent="space-around" mt={3} mb={2}>
        <LinearProgress
          variant={mainBreaker.val.on ? "indeterminate" : null}
          color="red"
          sx={{ height: 20, width: 80, background: "blue", rotate: "90deg" }}
        />
        <LinearProgress
          color="black"
          variant={mainBreaker.val.on ? "indeterminate" : null}
          sx={{ height: 20, width: 80, background: "blue", rotate: "90deg" }}
        />
      </Stack>
      <Paper sx={{ p: 1 }}>
        <Grid container columnSpacing={4}>
          <Grid item xs={12} align="center">
            <Paper elevation={4} sx={{ mx: 1, mb: 1, py: 1 }}>
              <Typography>Main Breaker {mainBreaker.val.value}A</Typography>
              <InputLabel
                htmlFor={`main-breaker`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="caption">OFF</Typography>
                <Switch
                  id="main-breaker"
                  color="error"
                  checked={mainBreaker.val.on}
                  onChange={(e, checked) =>
                    mainBreaker.set({ ...mainBreaker.val, on: checked })
                  }
                />
                <Typography variant="caption">ON</Typography>
              </InputLabel>
            </Paper>
          </Grid>
          {breakers
            .sort(({ solar }) => (solar ? 1 : -1))
            .map((entry, index) => (
              <Fragment key={index}>
                {entry.solar && <Grid item xs={6}></Grid>}
                <Grid item xs={12} sm={12} md={6}>
                  <Stack
                    direction="row"
                    component={Paper}
                    sx={{ position: "relative" }}
                    elevation={5}
                    justifyContent="center"
                    p={1}
                    m={1}
                  >
                    <Stack width="100%">
                      <Typography align="center">{entry.value}A</Typography>
                      <InputLabel
                        htmlFor={`breaker-${index}`}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                          flex: 1,
                        }}
                      >
                        <Typography variant="caption">OFF</Typography>
                        <Switch
                          id={`breaker-${index}`}
                          color={entry.on && entry.solar ? "success" : "error"}
                          checked={entry.on}
                          onChange={(e, checked) =>
                            toggleBreaker(checked, index)
                          }
                        />
                        <Typography variant="caption">ON</Typography>
                      </InputLabel>
                    </Stack>
                    <Box sx={{ position: "absolute", top: 5, right: 5 }}>
                      {entry.solar ? <WbSunny /> : <Bolt />}
                    </Box>
                  </Stack>
                </Grid>
              </Fragment>
            ))}
        </Grid>
      </Paper>
    </Stack>
  );
}
