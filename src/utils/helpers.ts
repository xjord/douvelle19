import { parseISO, isToday, isTomorrow } from "date-fns";
import { ShortMonths, ShortDays } from "../models/index";

export const getDateString = (date: string, showFullDate?: boolean) => {
  const parsedDate = parseISO(date);
  if (!showFullDate) {
    if (isToday(parsedDate)) return "Today";
    if (isTomorrow(parsedDate)) return "Tomorrow";
  }

  return `${ShortDays[parsedDate.getDay()]} ${parsedDate.getDate()} ${
    ShortMonths[parsedDate.getMonth()]
  }`;
};

export const openLink = (link: string) => window.open(link, "_self");
