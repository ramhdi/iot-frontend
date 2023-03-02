import { useEffect, useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface DeviceData {
    timestamp: number,
    device_id: string,
    temperature: number,
    humidity: number,
    accel_x: number,
    accel_y: number,
    accel_z: number
}

export default function GetDummyData(deviceData: DeviceData) {
    const [dummyData, setDummyData] = useState(deviceData);

    const dum: DeviceData = {
        timestamp: dummyData.timestamp + 1,
        device_id: dummyData.device_id + "a",
        temperature: dummyData.temperature + 1,
        humidity: dummyData.humidity + 1,
        accel_x: dummyData.accel_x + 1,
        accel_y: dummyData.accel_y + 1,
        accel_z: dummyData.accel_z + 1
    };

    const fetchDummyData = async () => {
        const response = await fetch("http://localhost:1287/device_data/dummy",
        {
            method: "GET",
            mode: "cors"
        });
        const data = await response.json();
        // console.log(data);
        setDummyData(data as DeviceData);
    };

    return (
        <>
            <Button onClick={async () => await fetchDummyData()}>Fetch Dummy Data</Button>
            <p>
                Timestamp: {dummyData.timestamp}<br></br>
                Device ID: {dummyData.device_id}<br></br>
                Temperature: {dummyData.temperature}<br></br>
                Humidity: {dummyData.humidity}<br></br>
                Accel-X: {dummyData.accel_x}<br></br>
                Accel-Y: {dummyData.accel_y}<br></br>
                Accel-Z: {dummyData.accel_z}<br></br>
            </p>
        </>
    );
}