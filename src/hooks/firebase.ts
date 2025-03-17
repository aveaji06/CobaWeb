import { useEffect, useState } from "react";
import { database } from "../config/config";
import { ref, query, orderByKey, onValue, off } from "firebase/database";

interface AmoniaData {
  tanggal: string;
  nilai: number;
}

const useFirebasedata = (): AmoniaData | null => {
  const [latestAmonia, setLatestAmonia] = useState<AmoniaData | null>(null);

  useEffect(() => {
    const amoniaRef = query(ref(database, "sensor/sensor1"), orderByKey());

    const unsubscribe = onValue(amoniaRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = Object.entries(snapshot.val()).map(([tanggal, nilai]) => ({
          tanggal,
          nilai: nilai as number,
        }));
        setLatestAmonia(data.reverse()[0]); // Ambil data terbaru
      }
    });

    return () => off(amoniaRef); // Cleanup listener saat unmount
  }, []);

  return latestAmonia;
};

export default useFirebasedata;
