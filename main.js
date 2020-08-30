// const ISS_API_url = "https://api.wheretheiss.at/v1/satellites/25544";
// async function getISS() {
//     const response = await fetch(ISS_API_url);
//     const data = await response.json();
//     console.log(Date);
// }
// getISS();

//   const attributation =
//     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
//   const tileURL =
//     "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}";
//   var tiles = L.tileLayer(tileURL, { attributation });
//   tiles.addTo(mymap);

const ISS_API_url = "https://api.wheretheiss.at/v1/satellites/25544";

async function getISS() {
  const response = await fetch(ISS_API_url);
  const data = await response.json();
  const {
    name,
    latitude,
    longitude,
    id,
    altitude,
    timestamp,
    daynum,
    solar_lat,
    solar_lon,
    units,
  } = data;
  if (latitude == undefined || longitude == undefined) {
    document.getElementById(
      "error"
    ).innerHTML = `<h4>Too Many Requests . The Site Is Currently Down , Please <a href="index.html"> Try Again </a> Later</h4> <p style="color:red;">The ISS's Api Currently Not Providing Data!`;
    document.getElementById("name").innerHTML = name;
    document.getElementById("id").innerHTML = id;
    document.getElementById("lat").innerHTML = latitude;
    document.getElementById("lon").innerHTML = longitude;
    document.getElementById("alti").innerHTML = altitude;
    document.getElementById("timestamp").innerHTML = timestamp;
    document.getElementById("daynum").innerHTML = daynum;
    document.getElementById("solar_Lattitude").innerHTML = solar_lat;
    document.getElementById("solar_Longitude").innerHTML = solar_lon;
    document.getElementById("units").innerHTML = units;
  } else {
    document.getElementById("name").innerHTML = name;
    document.getElementById("id").innerHTML = id;
    document.getElementById("lat").innerHTML = latitude;
    document.getElementById("lon").innerHTML = longitude;
    document.getElementById("alti").innerHTML = altitude;
    document.getElementById("timestamp").innerHTML = timestamp;
    document.getElementById("daynum").innerHTML = daynum;
    document.getElementById("solar_Lattitude").innerHTML = solar_lat;
    document.getElementById("solar_Longitude").innerHTML = solar_lon;
    document.getElementById("units").innerHTML = units;

    function map() {
      const mymap = L.map("mapid").setView([latitude, longitude], 6);

      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGFzc2FubW9zdGFmYSIsImEiOiJja2VkOGVpYnYwcGduMnZtdHQwajFnMWFzIn0.D3Jjox2EP4YVMp6d94coCA",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken: "your.mapbox.access.token",
        }
      ).addTo(mymap);
      L.marker([latitude, longitude]).addTo(mymap);
    }

    setInterval(getISS(), 5000);
    setInterval(map(), 100);
  }
}
getISS();
