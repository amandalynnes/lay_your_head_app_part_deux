//use fetch to get the info from the shelter api using the query url
export const SHELTER_URL = "https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/25/query?where=1%3D1&outFields=FACILITY_NAME,PROVIDER,ADDRESS,CITY,STATE,ZIP,LATITUDE,LONGITUDE,WARD,NUMBER_OF_BEDS,AGES_SERVED&outSR=4326&f=json"
async function shelterApi() {
    try {
// use fetch and .then
fetch("https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/25/query?where=1%3D1&outFields=FACILITY_NAME,PROVIDER,ADDRESS,CITY,STATE,ZIP,LATITUDE,LONGITUDE,WARD,NUMBER_OF_BEDS,AGES_SERVED&outSR=4326&f=json")
        .then(response => response.json())
        .then(data =>data);
    } catch (err) {
        console.error(err);
    }
}

export default shelterApi