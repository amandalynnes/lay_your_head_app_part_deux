//use fetch to get the info from the shelter api using the query url

async function shelterApi() {
    try {
// use fetch and .then
fetch("https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/25/query?where=1%3D1&outFields=FACILITY_NAME,PROVIDER,ADDRESS,CITY,STATE,ZIP,LATITUDE,LONGITUDE,NUMBER_OF_BEDS,AGES_SERVED,TYPE,SUBTYPE&outSR=4326&f=json")
        .then(response => response.json())
        .then(data => console.log(data));
    } catch (err) {
        console.error(err);
    }
}

export default shelterApi