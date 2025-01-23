import {format } from "date-fns";

export const formatDate = (dateInput, showTime = false) => {
  try {
    const dateObject = new Date(dateInput); 
    if (isNaN(dateObject)) throw new Error("Invalid date format");
    
    const dateFormat = showTime ? "dd/MM/yyyy hh:mm a" : "dd/MM/yyyy";
    return format(dateObject, dateFormat); 
  } catch (error) {
    return "Invalid Date";
  }
};
