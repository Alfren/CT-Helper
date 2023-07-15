import { Paper, Typography, Divider } from "@mui/material";

export default function SystemReadings({ totalConsumption, mainBreaker }) {
  return (
    <Paper
      sx={{
        p: 1,
        minWidth: 250,
        position: "sticky",
        top: 55,
        height: "100%",
      }}
    >
      <Typography align="center" variant="h6">
        System Readings
      </Typography>
      <Divider sx={{ my: 0.5 }} />
      <Typography>
        <Typography component="span" color="text.secondary">
          Consumption:
        </Typography>{" "}
        {`${mainBreaker.on ? totalConsumption.consumption : 0} / ${
          mainBreaker.value
        }`}
      </Typography>
      <Typography>
        <Typography component="span" color="text.secondary">
          Production:{" "}
        </Typography>
        {totalConsumption.solar}
      </Typography>
    </Paper>
  );
}
