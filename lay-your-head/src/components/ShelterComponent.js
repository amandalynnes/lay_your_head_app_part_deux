import React, { useState } from "react"
import { Descriptions, Statistic, Card, Button } from 'antd';
import { SHELTER_URL } from "../utils/shelterApi"
import { useQuery } from "react-query"
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import ShelterChat from "./PostMessages";

export const ShelterComponent = () => {

    async function fetchData() {
        const response = await fetch(SHELTER_URL)
        const data = await response.json()
        return data
    }
    const ID = function () {
        // Math.random should be unique because of its seeding algorithm.
        // Convert it to base 36 (numbers + letters), and grab the first 9 characters
        // after the decimal.
        return '_' + Math.random().toString(36).substr(2, 9);
      };
    const { status, data, error } = useQuery("shelter", fetchData)
    // const {features} = data
    if (status === "loading") { return <p>Loading </p> }
    if (error) return <p>some worng</p>
    if (data)
        return (
            <>
                {data.features.map((shelter) => {
                    return <ShelterCard key={ID()} shelter={shelter} />
                })}
            </>
        )
}

const ShelterCard = ({ shelter }) => {
    const [chat, setChat] = useState(false)
    const { attributes } = shelter

    return (<Card.Grid className="first" >
        { chat ? <ShelterChat shelter={attributes.FACILITY_NAME} /> : <InfoCard attributes={attributes} />}
        <Button onClick={() => { setChat(!chat) }} >Chat</Button>
    </Card.Grid>)
}

const InfoCard = ({ attributes }) => {
    const styles = {
        width: "150px",
        height: "150px",
        border: "2px solid grey"
    }
    const position = {
        lat: attributes.LATITUDE,
        lng: attributes.LONGITUDE
    }
    return (
        <>
            <LoadScript googleMapsApiKey="AIzaSyB9SYF-7udz1_Ydp8fUce08yWSCJKaF2qQ">
                <GoogleMap mapContainerStyle={styles} zoom={14} center={position} > <Marker position={position}></Marker></GoogleMap>
            </LoadScript>
            <Descriptions title="" layout="vertical">
                <Descriptions.Item label="Name"> {attributes.FACILITY_NAME}</Descriptions.Item>
                <Descriptions.Item label="Info">Contact</Descriptions.Item>
                <Descriptions.Item label="Address"> {attributes.ADDRESS}</Descriptions.Item>
                <Descriptions.Item label="State and Zipcode"> {attributes.STATE, attributes.ZIP}</Descriptions.Item>
            </Descriptions>
            <Statistic title="Available Beds" value={attributes.NUMBER_OF_BEDS} />
        </>
    )
}


