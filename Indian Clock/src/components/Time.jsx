import { useEffect, useState } from "react";

let Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <p>
      The current time is :{" "}
      <span>
        {time.getDate()} - {time.getMonth() + 1} - {time.getFullYear()} &nbsp;{" "}
        {time.toLocaleTimeString()}
      </span>
    </p>
  );
};

export default Time;
