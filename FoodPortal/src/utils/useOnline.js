import { useEffect, useState } from "react";

const useOnline = () => {
  const [status, setStatus] = useState(true)

  useEffect(() => {
    const handleOnline = () => {
      console.log("online");
      setStatus(true)
    };
    const handleOffline = () => {
      console.log("online");
      setStatus(false)
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    ()=>{
      window.removeEventListener("online", handleOnline);
    window.removeEventListener("offline", handleOffline);
    }
  }, []);

  return status
};

export default useOnline;