// DIGITAL CLOCK PROGRAM

function updateTime (){
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const meridian = hours>12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridian}`;
    document.getElementById("clock").textContent = timeString;
}


updateTime();
setInterval(updateTime, 1000);
