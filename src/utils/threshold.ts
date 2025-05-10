// src/utils/threshold.ts

import { useEffect } from "react";
import sendTelegramMessage from "./sendTelegramMessage";

// Variabel untuk mencegah pengiriman berulang
let hasSentAlert = false;

interface SuhuKandang {
  nilai: number;
}

const useThresholdCheck = (latestSuhuKandang: SuhuKandang | null) => {
  useEffect(() => {
    if (latestSuhuKandang) {
      const suhu = latestSuhuKandang.nilai;

      if (suhu > 50 && !hasSentAlert) {
        sendTelegramMessage(`Peringatan! Suhu kandang tinggi: ${suhu}°C`);
        hasSentAlert = true;
      } else if (suhu <= 50 && hasSentAlert) {
        hasSentAlert = false;
        console.log("🌡️ Suhu normal kembali, alert direset.");
      }
    }
  }, [latestSuhuKandang]);
};

export default useThresholdCheck;
