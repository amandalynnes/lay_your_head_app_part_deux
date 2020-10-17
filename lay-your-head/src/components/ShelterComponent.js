import React from "react"
import { Descriptions, Statistic, Card } from 'antd';
import  { SHELTER_URL } from "../utils/shelterApi"
import {useQuery} from "react-query"
import { GoogleMap,  LoadScript, Marker } from '@react-google-maps/api';

export const ShelterComponent = () => {

    async function fetchData() {
        const response = await fetch(SHELTER_URL)
        const data = await response.json()
        return data
    }
    const {status, data, error} = useQuery("shelter", fetchData)
    // const {features} = data
    if(status==="loading"){return <p>Loading </p>}
    if(error) return <p>some worng</p>
    if(data)
    return (
        <>         
     {data.features.map((shelter, i)=> {  
           return <ShelterCard key ={i} shelter={shelter}/>
       })}
    </>
    )
}

const ShelterCard = ({shelter}) => {
    const {attributes} = shelter    
    const styles = {    
        width: "150px",
        height: "150px",
        border: "2px solid grey"
    }
    const position = { 
        lat: attributes.LATITUDE,
        lng: attributes.LONGITUDE
    }
    return (<Card.Grid className="first" >
        <LoadScript  googleMapsApiKey="AIzaSyB9SYF-7udz1_Ydp8fUce08yWSCJKaF2qQ">
        <GoogleMap mapContainerStyle={styles} zoom={14} center={position} > <Marker position={position}></Marker></GoogleMap>
        </LoadScript>
        <Descriptions title="" layout="vertical">
<Descriptions.Item label="Name"> {attributes.FACILITY_NAME}</Descriptions.Item>
            {/* Consider making the contact INFO as a button instead to send a message or something, since there's no phone number */}
            <Descriptions.Item label="Info">Contact</Descriptions.Item>
            <Descriptions.Item label="Address"> {attributes.ADDRESS}</Descriptions.Item>
            <Descriptions.Item label="State and Zipcode"> {attributes.STATE, attributes.ZIP}</Descriptions.Item>
        </Descriptions>
        <Statistic title="Number of Beds" value={attributes.NUMBER_OF_BEDS} />
       

    </Card.Grid>)
}


