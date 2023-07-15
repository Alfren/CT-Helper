import { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { useSnackbar } from "notistack";
import MainBreakerPanel from "../components/MainBreakerPanel";
import SystemReadings from "../components/SystemReadings";

export default function BackfeedBreaker() {
  const { enqueueSnackbar: msg } = useSnackbar();
  const [mainBreaker, setMainBreaker] = useState({ on: true, value: 200 });
  const [breakers, setBreakers] = useState([
    { on: false, value: 20, used: 20 },
    { on: true, value: 20, used: 20 },
    { on: true, value: 20, used: 20 },
    { on: true, value: 20, used: 20 },
    { on: true, value: 20, used: 20 },
    { on: true, value: 20, used: 20 },
    { on: true, value: 20, used: 20 },
    { on: true, value: 20, used: 20 },
    { on: true, value: 40, used: 40 },
    { on: true, value: 40, used: 40 },
    { on: true, value: 20, used: 20, solar: true },
  ]);
  const [totalConsumption, setTotalConsumption] = useState({});

  useEffect(() => {
    let neg = 0,
      pos = 0;
    breakers.forEach(({ value, used, on, solar }) => {
      if (solar && on) pos = Number(pos) + Number(value);
      if (on) neg = Number(neg) + Number(solar ? -used : used);
      if (neg < 0) neg = 0;
    });
    if (neg > 200 && mainBreaker.on) {
      setMainBreaker({ ...mainBreaker, on: false });
      msg("Main breaker overloaded!", {
        variant: "error",
        key: "main-breaker",
      });
    }
    setTotalConsumption({ consumption: neg, solar: pos });
  }, [breakers, mainBreaker, msg]);

  const toggleBreaker = (on, index) => {
    let arr = [...breakers],
      currentBreaker = arr[index];
    arr[index] = { ...currentBreaker, on };
    setBreakers(arr);
  };

  return (
    <Stack direction="row" spacing={4} position="relative">
      <SystemReadings
        totalConsumption={totalConsumption}
        mainBreaker={mainBreaker}
      />
      <MainBreakerPanel
        breakers={breakers}
        toggleBreaker={toggleBreaker}
        mainBreaker={{ val: mainBreaker, set: setMainBreaker }}
      />
    </Stack>
  );
}
