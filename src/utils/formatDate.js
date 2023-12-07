// const months = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];
export function formatDate(date) {
  console.log("date", date);
  let dateString = ""+date;
  const split = dateString.split(" ");
  const time = split[4].split(":");
  const month = split[1];
  console.log("month",month)
  const hours = +time[0] % 12;
  const minutes = time[1];
  console.log("date",split[2])

  const formattedDate = `${month} ${split[2]}, ${hours}:${minutes} ${
    date.getHours() > 12 ? "PM" : "AM"
  }`;
  return formattedDate;
}
