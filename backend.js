function TimeStorer() {
  // Get the current time and date
  const clickTime = new Date().toLocaleTimeString();
  const clickDate = new Date().toLocaleDateString();
  const userNo = "12345"; // You may replace this with a real user ID if available

  fetch("https://demo-60033654034.development.catalystserverless.in/server/demoBackend/execute/api/click", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({  // Serialize the body as JSON
      userNo: userNo,       // Add userNo to the request body
      clickTime: clickTime,
      clickDate: clickDate
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    console.log("Time stored:", data.clickTime);
  })
  .catch(error => {
    console.error("Unable to connect to the database:", error);
  });
}
