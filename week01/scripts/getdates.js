







// Insert current year
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

// Insert last modified date
const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = lastModified;
