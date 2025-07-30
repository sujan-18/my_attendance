// Windows load

window.onload=()=>{
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
  document.getElementById("dayOfWeek").innerText = days[today.getDay()];
  console.log(  document.getElementById("dayOfWeek").innerText)
}

// check if input is empty
function markAttendance(){
  const name = document.getElementById("nameInput").value.trim();
  const date = document.getElementById("dateInput").value;
  if(!name && date){
    alert("Name required!!");
    return;
  }
  else if(name && !date){
    alert("Date required!!");
    return;
  }
  else if(!name || !date){
    alert("Insert value first!!");
    return;
  }

  const key = "attendance";
  const saved_data = JSON.parse(localStorage.getItem(key)) || {};

  if(!saved_data[name]) saved_data[name]=[];

  if (saved_data[name].includes(date)){
    alert("Your attendance for this date is alreday done!!");
    return;
    }
    saved_data[name].push(date);
    localStorage.setItem(key, JSON.stringify(saved_data));
   
    // flip the page
    document.getElementById("card").classList.add("flipped");
    
}


// view attendance summary
 function viewAttendance() {
      const name = document.getElementById("searchName").value.trim();
      const savedData = JSON.parse(localStorage.getItem("attendance")) || {};
      const result = document.getElementById("summaryResult");

      if (!name || !savedData[name]) {
        result.innerHTML = "No attendance record found.";
        return;
      }

      result.innerHTML = `
        <p><strong>${name}</strong> has ${savedData[name].length} days of attendance.</p>
        <ul>${savedData[name].map(date => `<li>${date}</li>`).join('')}</ul>
      `;
      
}
