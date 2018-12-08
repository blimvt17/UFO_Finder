// from data.js
var tableData = data;

// YOUR CODE HERE!
// Find a <table> element with id="myTable":
var table = document.getElementById("ufo-table");

function populateData(tableData) {

    var i;
    var tableRowIndex = table.rows.length;
    for (i = 0; i < tableData.length; i++) {
        
        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(tableRowIndex);
        tableRowIndex++;

        var cell0 = row.insertCell(0);
        cell0.innerHTML = tableData[i].datetime;

        var cell1 = row.insertCell(1);
        cell1.innerHTML = tableData[i].city;
    
        var cell2 = row.insertCell(2);
        cell2.innerHTML = tableData[i].state;
    
        var cell3 = row.insertCell(3);
        cell3.innerHTML = tableData[i].country;
    
        var cell4 = row.insertCell(4);
        cell4.innerHTML = tableData[i].shape;
    
        var cell5 = row.insertCell(5);
        cell5.innerHTML = tableData[i].durationMinutes;
    
        var cell6 = row.insertCell(6);
        cell6.innerHTML = tableData[i].comments;
    }
}

function filter() {
    // Declare variables 
    var input, table, tr, td, i, txtValue;

    var dateFilter, cityFilter, stateFilter, countryFilter, shapeFilter;
    dateFilter = document.getElementById("datetime").value.toUpperCase();
    cityFilter = document.getElementById("city").value.toUpperCase();
    stateFilter = document.getElementById("state").value.toUpperCase();
    countryFilter = document.getElementById("country").value.toUpperCase();
    shapeFilter = document.getElementById("shape").value.toUpperCase();

    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      dateTd = tr[i].getElementsByTagName("td")[0];
      cityTd = tr[i].getElementsByTagName("td")[1];
      stateTd = tr[i].getElementsByTagName("td")[2];
      countryTd = tr[i].getElementsByTagName("td")[3];
      shapeTd = tr[i].getElementsByTagName("td")[4];

      if (dateTd) {

        if (compareText(dateTd.textContent || dateTd.innerText, dateFilter)
            && compareText(cityTd.textContent || cityTd.innerText, cityFilter)
            && compareText(stateTd.textContent || stateTd.innerText, stateFilter)
            && compareText(countryTd.textContent || countryTd.innerText, countryFilter)
            && compareText(shapeTd.textContent || shapeTd.innerText, shapeFilter)
            ) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }

      }

    }
  }

  function compareText(text, filter) {
      if (filter === "") {
        return true;
      }

      return text.toUpperCase().indexOf(filter) > -1;
  }

populateData(tableData);
