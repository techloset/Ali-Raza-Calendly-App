import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function useAvailibility() {
  const [startingHour, setStartingHour] = useState<number>();
  const [endingHour, setEndingHour] = useState<number>();
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleDayChange = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(
        selectedDays.filter((selectedDay) => selectedDay !== day)
      );
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 60) {
        let hourString = hour.toString().padStart(2, "0");
        let minuteString = minute.toString().padStart(2, "0");
        let time = `${hourString}:${minuteString}`;
        if (hour > 11) {
          time += " PM";
        } else {
          time += " AM";
        }
        slots.push(time);
      }
    }
    return slots;
  };

  const handleStartTimeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setStartingHour(parseInt(event.target.value));
  };

  const handleEndTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEndingHour(parseInt(event.target.value));
  };

  const handleSubmit = async () => {
    if (!startingHour || !endingHour || selectedDays.length === 0) {
      return toast.error("Please fill all required fields");
    }
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3000/api/availibility", {
        startingHour,
        endingHour,
        selectedDays,
      });
      console.log(res.data);

      toast.success("Availability Added Successfully");
    } catch (error) {
      toast.error("Error saving availability");
    } finally {
      setLoading(false);
    }
  };

  return {
    startingHour,
    setStartingHour,
    endingHour,
    setEndingHour,
    setSelectedDays,
    selectedDays,
    days,
    handleDayChange,
    generateTimeSlots,
    handleStartTimeChange,
    handleEndTimeChange,
    handleSubmit,
    loading,
  };
}
