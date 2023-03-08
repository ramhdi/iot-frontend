import { useState } from 'react';
import { DeviceData, TSData } from './DataTypes';

export function Dashboard(deviceData: DeviceData) {
  const [latestData, setLatestData] = useState(deviceData);

  const fetchLatestData = async () => {
    const response = await fetch("http://localhost:1287/device_data/dummy",
    {
        method: "GET",
        mode: "cors"
    });
    const data = await response.json();
    // console.log(data);
    setLatestData(data as DeviceData);
  };

  return (
    <div>
      <h1>IoT Dashboard</h1>
      <div>
        <button onClick={async () => await fetchLatestData()}>
          Fetch Latest Data
        </button>
      </div>
      <div>
        <b>Timestamp</b> {String(new Date(latestData.timestamp))}<br></br>
        <b>Device ID</b> {latestData.device_id}<br></br>
        <b>Temperature</b> {latestData.temperature}<br></br>
        <b>Humidity</b> {latestData.humidity}<br></br>
      </div>
    </div>
  )
}
