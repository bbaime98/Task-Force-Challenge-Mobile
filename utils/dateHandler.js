const date = new Date().toLocaleString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
});
export const customDate = date.split(', ')
