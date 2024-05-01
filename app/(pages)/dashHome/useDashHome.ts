import axios from "axios";
import { useEffect, useState } from "react";

export default function useDashHome() {
  const [data, setData] = useState<any>("");

  const res = async () => {
    try {
      const res = await axios.get("/api/scheduleevent");
      setData(res.data);
      //   console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    res();
    // console.log("res", res);
  }, []);
  return {
    data,
    setData,
    res,
  };
}
