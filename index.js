function submitForm() {
  console.log("submit");

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var x = document.getElementById("dateinput");
  var date = x.value;
  var datearray = date.split("-");
  var year = datearray[0];
  var month = datearray[1];
  var day = datearray[2];

 // var monthname = monthNames[parseInt(month) - 1].substring(0, 3).toUpperCase();
  //var reportID = day + "" + monthname + "" + year;
  fetchReport();
}

const fetchReport = () => {
  axios
    .get("https://fortunapix.atlassian.net/issues/?jql=project%20%3D%20OLBUG%20AND%20status%20%3D%20QA")
    .then((response) => {
      console.log(response);
      window.open(
         "https://fortunapix.atlassian.net/issues/?jql=project%20%3D%20OLBUG%20AND%20status%20%3D%20QA"
      );
    })
    .catch((error) => {
      console.log(error);
      alert("Report not found");
    });
};
