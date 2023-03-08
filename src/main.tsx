import React from 'react';
import ReactDOM from 'react-dom/client';
import { DeviceData, TSData } from './DataTypes';
import { Dashboard } from './Dashboard';
// import './index.css'

let startValue: DeviceData = {
  timestamp: 0,
  device_id: "null",
  temperature: 0,
  humidity: 0,
  accel_x: 0,
  accel_y: 0,
  accel_z: 0
};

const fetchDummyData = async () => {
  const response = await fetch("http://localhost:1287/device_data/dummy",
  {
      method: "GET",
      mode: "cors"
  });
  const data = await response.json();
  startValue = data as DeviceData;
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Dashboard { ...startValue } />
  </React.StrictMode>,
)
