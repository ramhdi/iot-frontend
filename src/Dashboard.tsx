import { useState, useEffect } from 'react';
import { DeviceData } from './DataTypes';
import Table from './components/Table';

export function Dashboard(deviceData: DeviceData) {
  const [latestData, setLatestData] = useState(deviceData);

  const fetchLatestData = async () => {
    // Post dummy data
    const _ = await fetch("http://localhost:1287/device_data/dummy",
    {
        method: "POST",
        mode: "cors"
    });

    // Get latest data
    const response = await fetch("http://localhost:1287/device_data/latest",
    {
        method: "GET",
        mode: "cors"
    });
    const data: DeviceData = await response.json();
    setLatestData(data);
  };

  useEffect(() => {
    // Get latest data every 10 seconds
    const interval = setInterval(() => {
      if (Date.now() % 10000 <= 11) fetchLatestData();
    }, 10);
    return () => clearInterval(interval);
  }, []);

  let headers = ['', ''];
  let entries = [];
  const key_mapping = {
    "_id": '',
    "timestamp": "Timestamp",
    "device_id": "Device ID",
    "temperature": "Temperature",
    "humidity": "Humidity",
    "accel_x": "X-axis accel.",
    "accel_y": "Y-axis accel.",
    "accel_z": "Z-axis accel."
  };
  for (const [key, value] of Object.entries(latestData)) {
    let key_mapped = key_mapping[key as keyof typeof key_mapping];
    let valueStr = '' + value;
    if (key_mapped !== '') {
      if (key_mapped === 'Timestamp') valueStr = String(new Date(value).toString())
      entries.push([key_mapping[key as keyof typeof key_mapping], valueStr]);
    }
  }

  return (
    <div>
      <h1>IoT Dashboard</h1>
      <Table headers={headers} entries={entries} />
      {/* <div>
        <button onClick={async () => await fetchLatestData()}>
          Fetch latest data
        </button>
      </div> */}
    </div>
  );
}
