import { Stack, Typography, Paper, Container } from "@mui/material"
import { Outlet } from "react-router-dom"

export default function Root() {
  return (
    <>
      <Stack direction="row" spacing={2} component={Paper} p={1}>
        <Typography>
          CT Helper
        </Typography>
      </Stack>
      <Container sx={{pt: 2}}>
        <Outlet/>
      </Container>
    </>
  )
}
