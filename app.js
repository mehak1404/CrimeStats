
const Arr =([
  {"State":"ANDHRA PRADESH","District":"ADILABAD","Year":"2001","CrimeType":"Murder","Numbers":"101","ID":"1"},
  {"State":"ANDHRA PRADESH","District":"ADILABAD","Year":"2001","CrimeType":"Rape","Numbers":"50","ID":"1"},
  {"State":"ANDHRA PRADESH","District":"ADILABAD","Year":"2001","CrimeType":"Kidnapping","Numbers":"46","ID":"1"},
  {"State":"ANDHRA PRADESH","District":"ADILABAD","Year":"2001","CrimeType":"Burglary","Numbers":"198","ID":"1"},
  {"State":"ANDHRA PRADESH","District":"ADILABAD","Year":"2001","CrimeType":"Theft","Numbers":"199","ID":"1"},
  {"State":"ANDHRA PRADESH","District":"ANANTAPUR","Year":"2001","CrimeType":"Murder","Numbers":"101","ID":"2"},
  {"State":"ANDHRA PRADESH","District":"ANANTAPUR","Year":"2001","CrimeType":"Rape","Numbers":"27","ID":"2"},
  {"State":"ANDHRA PRADESH","District":"ANANTAPUR","Year":"2001","CrimeType":"Kidnapping","Numbers":"53","ID":"2"},
  {"State":"ANDHRA PRADESH","District":"ANANTAPUR","Year":"2001","CrimeType":"Burglary","Numbers":"191","ID":"2"},
  {"State":"ANDHRA PRADESH","District":"ANANTAPUR","Year":"2001","CrimeType":"Theft","Numbers":"356","ID":"2"},
  {"State":"ANDHRA PRADESH","District":"CHITTOOR","Year":"2001","CrimeType":"Murder","Numbers":"101","ID":"3"},
  {"State":"ANDHRA PRADESH","District":"CHITTOOR","Year":"2001","CrimeType":"Rape","Numbers":"27","ID":"3"},
  {"State":"ANDHRA PRADESH","District":"CHITTOOR","Year":"2001","CrimeType":"Kidnapping","Numbers":"59","ID":"3"},
  {"State":"ANDHRA PRADESH","District":"CHITTOOR","Year":"2001","CrimeType":"Burglary","Numbers":"237","ID":"3"},
  {"State":"ANDHRA PRADESH","District":"CHITTOOR","Year":"2001","CrimeType":"Theft","Numbers":"723","ID":"3"},
  {"State":"ANDHRA PRADESH","District":"CUDDAPAH","Year":"2001","CrimeType":"Murder","Numbers":"80","ID":"4"},
  {"State":"ANDHRA PRADESH","District":"CUDDAPAH","Year":"2001","CrimeType":"Rape","Numbers":"20","ID":"4"},
  {"State":"ANDHRA PRADESH","District":"CUDDAPAH","Year":"2001","CrimeType":"Kidnapping","Numbers":"25","ID":"4"},
  {"State":"ANDHRA PRADESH","District":"CUDDAPAH","Year":"2001","CrimeType":"Burglary","Numbers":"98","ID":"4"},
  {"State":"ANDHRA PRADESH","District":"CUDDAPAH","Year":"2001","CrimeType":"Theft","Numbers":"173","ID":"4"},
  {"State":"ANDHRA PRADESH","District":"EAST GODAVARI","Year":"2001","CrimeType":"Murder","Numbers":"82","ID":"5"},
  {"State":"ANDHRA PRADESH","District":"EAST GODAVARI","Year":"2001","CrimeType":"Rape","Numbers":"23","ID":"5"},
  {"State":"ANDHRA PRADESH","District":"EAST GODAVARI","Year":"2001","CrimeType":"Kidnapping","Numbers":"49","ID":"5"},
  {"State":"ANDHRA PRADESH","District":"EAST GODAVARI","Year":"2001","CrimeType":"Burglary","Numbers":"437","ID":"5"},
  {"State":"ANDHRA PRADESH","District":"EAST GODAVARI","Year":"2001","CrimeType":"Theft","Numbers":"1021","ID":"5"},
  {"State":"ANDHRA PRADESH","District":"GUNTAKAL RLY.","Year":"2001","CrimeType":"Murder","Numbers":"3","ID":"6"},
  {"State":"ANDHRA PRADESH","District":"GUNTAKAL RLY.","Year":"2001","CrimeType":"Rape","Numbers":"0","ID":"6"},
  {"State":"ANDHRA PRADESH","District":"GUNTAKAL RLY.","Year":"2001","CrimeType":"Kidnapping","Numbers":"0","ID":"6"},
  {"State":"ANDHRA PRADESH","District":"GUNTAKAL RLY.","Year":"2001","CrimeType":"Burglary","Numbers":"0","ID":"6"},
  {"State":"ANDHRA PRADESH","District":"GUNTAKAL RLY.","Year":"2001","CrimeType":"Theft","Numbers":"167","ID":"7"},
  {"State":"ANDHRA PRADESH","District":"GUNTUR","Year":"2001","CrimeType":"Murder","Numbers":"182","ID":"7"},
  {"State":"ANDHRA PRADESH","District":"GUNTUR","Year":"2001","CrimeType":"Rape","Numbers":"54","ID":"7"},
  {"State":"ANDHRA PRADESH","District":"GUNTUR","Year":"2001","CrimeType":"Kidnapping","Numbers":"82","ID":"7"},
  {"State":"ANDHRA PRADESH","District":"GUNTUR","Year":"2001","CrimeType":"Burglary","Numbers":"1338","ID":"7"},
  {"State":"ANDHRA PRADESH","District":"GUNTUR","Year":"2001","CrimeType":"Theft","Numbers":"1122","ID":"7"},
  {"State":"ANDHRA PRADESH","District":"HYDERABAD CITY","Year":"2001","CrimeType":"Murder","Numbers":"101","ID":"8"},
  {"State":"ANDHRA PRADESH","District":"HYDERABAD CITY","Year":"2001","CrimeType":"Rape","Numbers":"37","ID":"8"},
  {"State":"ANDHRA PRADESH","District":"HYDERABAD CITY","Year":"2001","CrimeType":"Kidnapping","Numbers":"80","ID":"8"},
  {"State":"ANDHRA PRADESH","District":"HYDERABAD CITY","Year":"2001","CrimeType":"Burglary","Numbers":"1155","ID":"8"},
  {"State":"ANDHRA PRADESH","District":"HYDERABAD CITY","Year":"2001","CrimeType":"Theft","Numbers":"2792","ID":"8"},
  {"State":"ANDHRA PRADESH","District":"KARIMNAGAR","Year":"2001","CrimeType":"Murder","Numbers":"162","ID":"9"},
  {"State":"ANDHRA PRADESH","District":"KARIMNAGAR","Year":"2001","CrimeType":"Rape","Numbers":"56","ID":"9"},
  {"State":"ANDHRA PRADESH","District":"KARIMNAGAR","Year":"2001","CrimeType":"Kidnapping","Numbers":"67","ID":"9"},
  {"State":"ANDHRA PRADESH","District":"KARIMNAGAR","Year":"2001","CrimeType":"Burglary","Numbers":"218","ID":"9"},
  {"State":"ANDHRA PRADESH","District":"KARIMNAGAR","Year":"2001","CrimeType":"Theft","Numbers":"392","ID":"9"},
  {"State":"ANDHRA PRADESH","District":"KHAMMAM","Year":"2001","CrimeType":"Murder","Numbers":"93","ID":"10"},
  {"State":"ANDHRA PRADESH","District":"KHAMMAM","Year":"2001","CrimeType":"Rape","Numbers":"47","ID":"10"},
  {"State":"ANDHRA PRADESH","District":"KHAMMAM","Year":"2001","CrimeType":"Kidnapping","Numbers":"41","ID":"10"},
  {"State":"ANDHRA PRADESH","District":"KHAMMAM","Year":"2001","CrimeType":"Burglary","Numbers":"172","ID":"10"},
  {"State":"ANDHRA PRADESH","District":"KHAMMAM","Year":"2001","CrimeType":"Theft","Numbers":"368","ID":"10"},
  {"State":"ANDHRA PRADESH","District":"KRISHNA","Year":"2001","CrimeType":"Murder","Numbers":"65","ID":"11"},
  {"State":"ANDHRA PRADESH","District":"KRISHNA","Year":"2001","CrimeType":"Rape","Numbers":"37","ID":"11"},
  {"State":"ANDHRA PRADESH","District":"KRISHNA","Year":"2001","CrimeType":"Kidnapping","Numbers":"36","ID":"11"},
  {"State":"ANDHRA PRADESH","District":"KRISHNA","Year":"2001","CrimeType":"Burglary","Numbers":"163","ID":"11"},
  {"State":"ANDHRA PRADESH","District":"KRISHNA","Year":"2001","CrimeType":"Theft","Numbers":"478","ID":"11"},
  {"State":"ANDHRA PRADESH","District":"KURNOOL","Year":"2001","CrimeType":"Murder","Numbers":"133","ID":"12"},
  {"State":"ANDHRA PRADESH","District":"KURNOOL","Year":"2001","CrimeType":"Rape","Numbers":"29","ID":"12"},
  {"State":"ANDHRA PRADESH","District":"KURNOOL","Year":"2001","CrimeType":"Kidnapping","Numbers":"47","ID":"12"},
  {"State":"ANDHRA PRADESH","District":"KURNOOL","Year":"2001","CrimeType":"Burglary","Numbers":"155","ID":"12"},
  {"State":"ANDHRA PRADESH","District":"KURNOOL","Year":"2001","CrimeType":"Theft","Numbers":"297","ID":"12"},
  {"State":"ANDHRA PRADESH","District":"MAHABOOBNAGAR","Year":"2001","CrimeType":"Murder","Numbers":"157","ID":"13"},
  {"State":"ANDHRA PRADESH","District":"MAHABOOBNAGAR","Year":"2001","CrimeType":"Rape","Numbers":"59","ID":"13"},
  {"State":"ANDHRA PRADESH","District":"MAHABOOBNAGAR","Year":"2001","CrimeType":"Kidnapping","Numbers":"42","ID":"13"},
  {"State":"ANDHRA PRADESH","District":"MAHABOOBNAGAR","Year":"2001","CrimeType":"Burglary","Numbers":"249","ID":"13"},
  {"State":"ANDHRA PRADESH","District":"MAHABOOBNAGAR","Year":"2001","CrimeType":"Theft","Numbers":"316","ID":"13"},
  {"State":"ANDHRA PRADESH","District":"MEDAK","Year":"2001","CrimeType":"Murder","Numbers":"101","ID":"14"},
  {"State":"ANDHRA PRADESH","District":"MEDAK","Year":"2001","CrimeType":"Rape","Numbers":"35","ID":"14"},
  {"State":"ANDHRA PRADESH","District":"MEDAK","Year":"2001","CrimeType":"Kidnapping","Numbers":"26","ID":"14"},
  {"State":"ANDHRA PRADESH","District":"MEDAK","Year":"2001","CrimeType":"Burglary","Numbers":"219","ID":"14"},
  {"State":"ANDHRA PRADESH","District":"MEDAK","Year":"2001","CrimeType":"Theft","Numbers":"286","ID":"14"},
  {"State":"ANDHRA PRADESH","District":"NALGONDA","Year":"2001","CrimeType":"Murder","Numbers":"122","ID":"15"},
  {"State":"ANDHRA PRADESH","District":"NALGONDA","Year":"2001","CrimeType":"Rape","Numbers":"35","ID":"15"},
  {"State":"ANDHRA PRADESH","District":"NALGONDA","Year":"2001","CrimeType":"Kidnapping","Numbers":"27","ID":"15"},
  {"State":"ANDHRA PRADESH","District":"NALGONDA","Year":"2001","CrimeType":"Burglary","Numbers":"133","ID":"15"},
  {"State":"ANDHRA PRADESH","District":"NALGONDA","Year":"2001","CrimeType":"Theft","Numbers":"318","ID":"15"},
  {"State":"ANDHRA PRADESH","District":"NELLORE","Year":"2001","CrimeType":"Murder","Numbers":"89","ID":"16"},
  {"State":"ANDHRA PRADESH","District":"NELLORE","Year":"2001","CrimeType":"Rape","Numbers":"46","ID":"16"},
  {"State":"ANDHRA PRADESH","District":"NELLORE","Year":"2001","CrimeType":"Kidnapping","Numbers":"90","ID":"16"},
  {"State":"ANDHRA PRADESH","District":"NELLORE","Year":"2001","CrimeType":"Burglary","Numbers":"244","ID":"16"},
  {"State":"ANDHRA PRADESH","District":"NELLORE","Year":"2001","CrimeType":"Theft","Numbers":"608","ID":"16"},
  {"State":"ANDHRA PRADESH","District":"NIZAMABAD","Year":"2001","CrimeType":"Murder","Numbers":"106","ID":"17"},
  {"State":"ANDHRA PRADESH","District":"NIZAMABAD","Year":"2001","CrimeType":"Rape","Numbers":"21","ID":"17"},
  {"State":"ANDHRA PRADESH","District":"NIZAMABAD","Year":"2001","CrimeType":"Kidnapping","Numbers":"38","ID":"17"},
  {"State":"ANDHRA PRADESH","District":"NIZAMABAD","Year":"2001","CrimeType":"Burglary","Numbers":"158","ID":"17"},
  {"State":"ANDHRA PRADESH","District":"NIZAMABAD","Year":"2001","CrimeType":"Theft","Numbers":"234","ID":"17"},
  {"State":"ANDHRA PRADESH","District":"PRAKASHAM","Year":"2001","CrimeType":"Murder","Numbers":"102","ID":"18"},
  {"State":"ANDHRA PRADESH","District":"PRAKASHAM","Year":"2001","CrimeType":"Rape","Numbers":"19","ID":"18"},
  {"State":"ANDHRA PRADESH","District":"PRAKASHAM","Year":"2001","CrimeType":"Kidnapping","Numbers":"31","ID":"18"},
  {"State":"ANDHRA PRADESH","District":"PRAKASHAM","Year":"2001","CrimeType":"Burglary","Numbers":"147","ID":"18"},
  {"State":"ANDHRA PRADESH","District":"PRAKASHAM","Year":"2001","CrimeType":"Theft","Numbers":"278","ID":"18"},
  {"State":"ANDHRA PRADESH","District":"RANGA REDDY","Year":"2001","CrimeType":"Murder","Numbers":"214","ID":"19"},
  {"State":"ANDHRA PRADESH","District":"RANGA REDDY","Year":"2001","CrimeType":"Rape","Numbers":"72","ID":"19"},
  {"State":"ANDHRA PRADESH","District":"RANGA REDDY","Year":"2001","CrimeType":"Kidnapping","Numbers":"106","ID":"19"},
  {"State":"ANDHRA PRADESH","District":"RANGA REDDY","Year":"2001","CrimeType":"Burglary","Numbers":"1076","ID":"19"},
  {"State":"ANDHRA PRADESH","District":"RANGA REDDY","Year":"2001","CrimeType":"Theft","Numbers":"1296","ID":"19"},
  {"State":"ANDHRA PRADESH","District":"SECUNDERABAD RLY.","Year":"2001","CrimeType":"Murder","Numbers":"6","ID":"20"},
  {"State":"ANDHRA PRADESH","District":"SECUNDERABAD RLY.","Year":"2001","CrimeType":"Rape","Numbers":"0","ID":"20"},
  {"State":"ANDHRA PRADESH","District":"SECUNDERABAD RLY.","Year":"2001","CrimeType":"Kidnapping","Numbers":"0","ID":"20"},
  {"State":"ANDHRA PRADESH","District":"SECUNDERABAD RLY.","Year":"2001","CrimeType":"Burglary","Numbers":"2","ID":"20"},
  {"State":"ANDHRA PRADESH","District":"SECUNDERABAD RLY.","Year":"2001","CrimeType":"Theft","Numbers":"296","ID":"20"},
  {"State":"ANDHRA PRADESH","District":"SRIKAKULAM","Year":"2001","CrimeType":"Murder","Numbers":"38","ID":"21"},
  {"State":"ANDHRA PRADESH","District":"SRIKAKULAM","Year":"2001","CrimeType":"Rape","Numbers":"8","ID":"21"},
  {"State":"ANDHRA PRADESH","District":"SRIKAKULAM","Year":"2001","CrimeType":"Kidnapping","Numbers":"12","ID":"21"},
  {"State":"ANDHRA PRADESH","District":"SRIKAKULAM","Year":"2001","CrimeType":"Burglary","Numbers":"118","ID":"21"},
  {"State":"ANDHRA PRADESH","District":"SRIKAKULAM","Year":"2001","CrimeType":"Theft","Numbers":"231","ID":"21"},
  {"State":"ANDHRA PRADESH","District":"VIJAYAWADA","Year":"2001","CrimeType":"Murder","Numbers":"53","ID":"22"},
  {"State":"ANDHRA PRADESH","District":"VIJAYAWADA","Year":"2001","CrimeType":"Rape","Numbers":"25","ID":"22"},
  {"State":"ANDHRA PRADESH","District":"VIJAYAWADA","Year":"2001","CrimeType":"Kidnapping","Numbers":"70","ID":"22"},
  {"State":"ANDHRA PRADESH","District":"VIJAYAWADA","Year":"2001","CrimeType":"Burglary","Numbers":"491","ID":"22"},
  {"State":"ANDHRA PRADESH","District":"VIJAYAWADA","Year":"2001","CrimeType":"Theft","Numbers":"2057","ID":"22"},
  {"State":"ANDHRA PRADESH","District":"VIJAYAWADA RLY.","Year":"2001","CrimeType":"Murder","Numbers":"2","ID":"23"},
  {"State":"ANDHRA PRADESH","District":"VIJAYAWADA RLY.","Year":"2001","CrimeType":"Rape","Numbers":"1","ID":"23"},
  {"State":"ANDHRA PRADESH","District":"VIJAYAWADA RLY.","Year":"2001","CrimeType":"Kidnapping","Numbers":"0","ID":"23"},
  {"State":"ANDHRA PRADESH","District":"VIJAYAWADA RLY.","Year":"2001","CrimeType":"Burglary","Numbers":"0","ID":"23"},
  {"State":"ANDHRA PRADESH","District":"VIJAYAWADA RLY.","Year":"2001","CrimeType":"Theft","Numbers":"265","ID":"23"},
  {"State":"ANDHRA PRADESH","District":"VISAKHA RURAL","Year":"2001","CrimeType":"Murder","Numbers":"58","ID":"24"},
  {"State":"ANDHRA PRADESH","District":"VISAKHA RURAL","Year":"2001","CrimeType":"Rape","Numbers":"12","ID":"24"},
  {"State":"ANDHRA PRADESH","District":"VISAKHA RURAL","Year":"2001","CrimeType":"Kidnapping","Numbers":"12","ID":"24"},
  {"State":"ANDHRA PRADESH","District":"VISAKHA RURAL","Year":"2001","CrimeType":"Burglary","Numbers":"76","ID":"24"},
  {"State":"ANDHRA PRADESH","District":"VISAKHA RURAL","Year":"2001","CrimeType":"Theft","Numbers":"165","ID":"24"},
  {"State":"ANDHRA PRADESH","District":"VISAKHAPATNAM","Year":"2001","CrimeType":"Murder","Numbers":"22","ID":"25"},
  {"State":"ANDHRA PRADESH","District":"VISAKHAPATNAM","Year":"2001","CrimeType":"Rape","Numbers":"13","ID":"25"},
  {"State":"ANDHRA PRADESH","District":"VISAKHAPATNAM","Year":"2001","CrimeType":"Kidnapping","Numbers":"13","ID":"25"},
  {"State":"ANDHRA PRADESH","District":"VISAKHAPATNAM","Year":"2001","CrimeType":"Burglary","Numbers":"323","ID":"25"},
  {"State":"ANDHRA PRADESH","District":"VISAKHAPATNAM","Year":"2001","CrimeType":"Theft","Numbers":"630","ID":"25"},
  {"State":"ANDHRA PRADESH","District":"VIZIANAGARAM","Year":"2001","CrimeType":"Murder","Numbers":"33","ID":"26"},
  {"State":"ANDHRA PRADESH","District":"VIZIANAGARAM","Year":"2001","CrimeType":"Rape","Numbers":"8","ID":"26"},
  {"State":"ANDHRA PRADESH","District":"VIZIANAGARAM","Year":"2001","CrimeType":"Kidnapping","Numbers":"8","ID":"26"},
  {"State":"ANDHRA PRADESH","District":"VIZIANAGARAM","Year":"2001","CrimeType":"Burglary","Numbers":"99","ID":"26"},
  {"State":"ANDHRA PRADESH","District":"VIZIANAGARAM","Year":"2001","CrimeType":"Theft","Numbers":"144","ID":"26"},
  {"State":"ANDHRA PRADESH","District":"WARANGAL","Year":"2001","CrimeType":"Murder","Numbers":"158","ID":"27"},
  {"State":"ANDHRA PRADESH","District":"WARANGAL","Year":"2001","CrimeType":"Rape","Numbers":"53","ID":"27"},
  {"State":"ANDHRA PRADESH","District":"WARANGAL","Year":"2001","CrimeType":"Kidnapping","Numbers":"81","ID":"27"},
  {"State":"ANDHRA PRADESH","District":"WARANGAL","Year":"2001","CrimeType":"Burglary","Numbers":"266","ID":"27"},
  {"State":"ANDHRA PRADESH","District":"WARANGAL","Year":"2001","CrimeType":"Theft","Numbers":"418","ID":"27"},
  {"State":"ANDHRA PRADESH","District":"WEST GODAVARI","Year":"2001","CrimeType":"Murder","Numbers":"77","ID":"28"},
  {"State":"ANDHRA PRADESH","District":"WEST GODAVARI","Year":"2001","CrimeType":"Rape","Numbers":"61","ID":"28"},
  {"State":"ANDHRA PRADESH","District":"WEST GODAVARI","Year":"2001","CrimeType":"Kidnapping","Numbers":"41","ID":"28"},
  {"State":"ANDHRA PRADESH","District":"WEST GODAVARI","Year":"2001","CrimeType":"Burglary","Numbers":"57","ID":"28"},
  {"State":"ANDHRA PRADESH","District":"WEST GODAVARI","Year":"2001","CrimeType":"Theft","Numbers":"1116","ID":"28"}
  ]
)
  // --------------------------------------------------------------------


// console.log(Arr);



function handleSearch (){
  var table = document.getElementById("myTable")
  table.innerHTML= " "
  var city = document.getElementById("SearchCity").value;
  var year = document.getElementById("SearchYear").value;

  var data = searchArr(city, year, Arr);
  buildTable(data);
   checkStatus(city, Arr); 
//   console.log(city);
//   console.log(year);
  data = null

} 
function checkStatus(city, data){
    var count = 0;
    var crimes = 0;
    for(var j = 0; j < data.length; j++){
        if(data[j].District === city){
            var num = parseInt(data[j].Numbers);
            crimes = crimes+ num;
            count++;
            // console.log("crimes = "+ crimes);
            // console.log("number = "+ count);
            
        }
    }
    var avg =0;
     avg = crimes/count;
    console.log(avg);
    
    if(avg > 100){
        document.getElementById("status").textContent = "Danger :("
        document.getElementById("status").style.color="red";
        document.getElementById("status").style.fontWeight= "Bold";
        document.getElementById("status").style.fontSize = "20px";
    }
    else if(avg < 100){
        document.getElementById("status").textContent = "Safe :)"
        document.getElementById("status").style.color="green";
        document.getElementById("status").style.fontWeight= "Bold";
        document.getElementById("status").style.fontSize = "Large";
    }
    else{
        document.getElementById("status").textContent= "Moderate :p"
        document.getElementById("status").style.color="orange";
        document.getElementById("status").style.fontWeight= "Bold";
        document.getElementById("status").style.fontSize = "20px";
    }
}
function searchArr(city,year,data) {
    var filteredData = [];
    for(var i = 0; i < data.length; i++){
        city = city.toUpperCase();
        var District = data[i].District;
        var Y = data[i].Year;
        if(city === District && year === Y){
            filteredData.push(data[i]);
        }
        
    }
    console.log(filteredData);
    return filteredData;
}
// buildTable(Arr);

  function buildTable(data){
		var table = document.getElementById("myTable")

		for (var i = 0; i < data.length; i++){
			var row = 
            `<tr>
							<td> ${i} </td> 
							<td>${data[i].CrimeType}</td>
							<td>${data[i].Numbers}</td>
					  </tr>`
			
        table.innerHTML += row;


		}
	}
