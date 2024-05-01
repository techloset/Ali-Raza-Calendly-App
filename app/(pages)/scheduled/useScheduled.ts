import { useSearchParams } from "next/navigation";

export default function useScheduled() {
  const params = useSearchParams();
  const selectedTime = params.get("selectedTime");
  const timezone = params.get("timezone");
  const formatDate = params.get("formatDate");
  return {
    selectedTime,
    timezone,
    formatDate,
  };
}
