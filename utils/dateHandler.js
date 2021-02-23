const date = new Date().toLocaleString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
});
export const customDate = date.split(', ')
console.log("##__DATE___","++++++customDate", customDate[1], customDate[2])
