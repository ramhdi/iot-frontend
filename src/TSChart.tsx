import { useState, useEffect, ChangeEvent } from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Scatter,
  ScatterChart
} from 'recharts';
import Dropdown from './components/Dropdown';
import { DeviceData } from './DataTypes';

export function TSChart(_DeviceData: DeviceData[]) {
  const [tsData, setTSData] = useState(_DeviceData);
  const fetchTSData = async () => {
    const requestQuery = {
      device_id: "488188e2-1c9a-4c65-a83f-ef4b8cb640f1",
      start: '' + 0,
      end: '' + Date.now()
    };
    const requestString = new URLSearchParams(requestQuery).toString();
    const response = await fetch("http://localhost:1287/device_data?" + requestString,
    {
        method: "GET",
        mode: "cors",
    });
    const data: DeviceData[] = await response.json();
    setTSData(data);
  };

  useEffect(() => {
    fetchTSData();
    const interval = setInterval(() => {
      fetchTSData();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div style={{ float:'left', width: '50%' }}>
        <h4>Temperature</h4>
        <ResponsiveContainer width="80%" height={180}>
          <ScatterChart
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" dataKey="timestamp" domain={["auto", "auto"]} interval={0} />
            <YAxis type="number" dataKey="temperature" />
            <Tooltip />
            <Scatter data={tsData} fill="#8884d8" line shape="circle" />
          </ScatterChart>
        </ResponsiveContainer>

        <h4>Humidity</h4>
        <ResponsiveContainer width="80%" height={180}>
          <ScatterChart
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" dataKey="timestamp" domain={["auto", "auto"]} interval={0} />
            <YAxis type="number" dataKey="humidity" />
            <Tooltip />
            <Scatter data={tsData} fill="#82ca9d" line shape="circle" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <div style={{ float:'right', width: '50%' }}>
        <h4>X-axis Accel.</h4>
        <ResponsiveContainer width="80%" height={100}>
          <ScatterChart
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" dataKey="timestamp" domain={["auto", "auto"]} interval={0} />
            <YAxis type="number" dataKey="accel_x" />
            <Tooltip />
            <Scatter data={tsData} fill="#FF8042" line shape="circle" />
          </ScatterChart>
        </ResponsiveContainer>

        <h4>Y-axis Accel.</h4>
        <ResponsiveContainer width="80%" height={100}>
          <ScatterChart
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" dataKey="timestamp" domain={["auto", "auto"]} interval={0} />
            <YAxis type="number" dataKey="accel_y" />
            <Tooltip />
            <Scatter data={tsData} fill="red" line shape="circle" />
          </ScatterChart>
        </ResponsiveContainer>

        <h4>Z-axis Accel.</h4>
        <ResponsiveContainer width="80%" height={100}>
          <ScatterChart
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" dataKey="timestamp" domain={["auto", "auto"]} interval={0} />
            <YAxis type="number" dataKey="accel_z" />
            <Tooltip />
            <Scatter data={tsData} fill="#FFBB28" line shape="circle" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function DropdownMenu(_DeviceData: DeviceData[]) {
  const [tsData, setTSData] = useState(_DeviceData);
  const [param, setParam] = useState('temperature');

  const fetchTSData = async () => {
    const requestQuery = {
      device_id: "488188e2-1c9a-4c65-a83f-ef4b8cb640f1",
      start: '' + 0,
      end: '' + Date.now()
    };
    const requestString = new URLSearchParams(requestQuery).toString();
    const response = await fetch("http://localhost:1287/device_data?" + requestString,
    {
        method: "GET",
        mode: "cors",
    });
    const data: DeviceData[] = await response.json();
    setTSData(data);
    console.log(tsData);
  };

  const paramOptions = [
    {
      label: "Temperature",
      value: "temperature"
    },
    {
      label: "Humidity",
      value: "humidity",
    },
    {
      label: "X-axis accel.",
      value: "accel_x"
    },
    {
      label: "Y-axis accel.",
      value: "accel_y"
    },
    {
      label: "Z-axis accel.",
      value: "accel_z"
    },
  ];

  const onParamChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setParam(event.target.value);
    fetchTSData();
  };

  return (
    <div>
      <Dropdown value={param} label='What do we eat?' options={paramOptions} onChange={onParamChange}
      />
    </div>
  );
}
