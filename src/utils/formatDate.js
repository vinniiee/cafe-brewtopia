const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export function formatDate(date) {
  const month = months[date.getMonth()];
  const hours = date.getHours() % 12;
  const minutes =
    ("" + date.getMinutes()).length > 1
      ? date.getMinutes()
      : "0" + date.getMinutes();
  const formattedDate = `${month} ${date.getDate()}, ${hours}:${minutes} ${
    date.getHours() > 12 ? "PM" : "AM"
  }`;
  return formattedDate;
}
