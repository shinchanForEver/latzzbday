function TimeStorer() {
  // Get the current time in ISO format
  const clickTime= new Date().toLocaleTimeString();
  const clickDate=new Date().toLocaleDateString();

  fetch("http://localhost:8080/api/click", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({  // Serialize the body as JSON
          clickTime: clickTime,
          clickDate: clickDate
        })
  })
  .then(response => response.json())
  .then(data => {
    console.log("Time stored:", data.clickTime);
  })
  .catch(error => {
    console.log("Unable to connect to the database:", error);
  });
}
