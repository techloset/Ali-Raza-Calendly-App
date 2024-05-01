import { useEffect, useState } from "react";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
export default function useEvnetBooking() {
  const [value, onChange] = useState<Value>(new Date());
  const [timezone, setTimezone] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  const handleDateChange = (value: any) => {
    setSelectedDate(value);
  };

  const handleChange = (event: any) => {
    setTimezone(event.target.value);
  };

  const formatDate = (date: any) => {
    const options = { weekday: "long", month: "long", day: "2-digit" };
    return date.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    if (timezone) {
      const interval = setInterval(() => {
        const time = new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
          timeZone: timezone,
        });
        setCurrentTime(time);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [timezone]);

  // Array of timezone data with country and timezone information
  const timezones = [
    { country: "United States", timezone: "America/New_York" },
    { country: "United Kingdom", timezone: "Europe/London" },
    { country: "Japan", timezone: "Asia/Tokyo" },
    { country: "India", timezone: "Asia/Kolkata" },
    { country: "China", timezone: "Asia/Shanghai" },
    { country: "South Korea", timezone: "Asia/Seoul" },
    { country: "Pakistan", timezone: "Asia/Karachi" },
    { country: "Indonesia", timezone: "Asia/Jakarta" },
    { country: "Bangladesh", timezone: "Asia/Dhaka" },
    { country: "Philippines", timezone: "Asia/Manila" },
    { country: "Vietnam", timezone: "Asia/Ho_Chi_Minh" },
    { country: "Thailand", timezone: "Asia/Bangkok" },
    { country: "Taiwan", timezone: "Asia/Taipei" },
    { country: "Saudi Arabia", timezone: "Asia/Riyadh" },
    { country: "Singapore", timezone: "Asia/Singapore" },
    { country: "Malaysia", timezone: "Asia/Kuala_Lumpur" },
    { country: "Turkey", timezone: "Europe/Istanbul" },
    { country: "Russia", timezone: "Europe/Moscow" },
    { country: "Iran", timezone: "Asia/Tehran" },
    { country: "UAE", timezone: "Asia/Dubai" },
  ];
  const timeSlots: { start: string; end: string }[] = [
    { start: "00:30", end: "01:00" },
    { start: "01:00", end: "01:30" },
    { start: "01:30", end: "02:00" },
    { start: "02:00", end: "02:30" },
    { start: "02:30", end: "03:00" },
    { start: "03:00", end: "03:30" },
    { start: "03:30", end: "04:00" },
  ];
  const [isVisible, setIsVisible] = useState<boolean[]>(
    Array(timeSlots.length).fill(true)
  );

  const handleToggle = (index: number) => {
    setIsVisible((prev) =>
      prev.map((value: any, i: number) => (i === index ? !value : true))
    );
  };

  const senddata = {
    selectedTime: selectedTime,
    timezone: timezone,
    formatDate: formatDate(selectedDate),
  };
  console.log("senddata=>", senddata);
  return {
    value,
    onChange,
    timezone,
    timezones,
    timeSlots,
    isVisible,
    handleToggle,
    handleDateChange,
    handleChange,
    selectedDate,
    selectedTime,
    setSelectedTime,
    setSelectedDate,
    isHidden,
    setIsHidden,
    formatDate,
    setCurrentTime,
    senddata,
  };
}
