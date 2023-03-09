import React from 'react';
import ReactDOM from 'react-dom/client';
import { DeviceData } from './DataTypes';
import { Dashboard } from './Dashboard';
import { TSChart } from './TSChart';
// import './index.css'

let startDeviceValue: DeviceData = {
  timestamp: 0,
  device_id: "null",
  temperature: 0,
  humidity: 0,
  accel_x: 0,
  accel_y: 0,
  accel_z: 0
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Dashboard { ...startDeviceValue } />
    <TSChart {...[startDeviceValue]} />
  </React.StrictMode>,
)
