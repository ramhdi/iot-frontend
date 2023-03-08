export interface DeviceData {
    timestamp: number,
    device_id: string,
    temperature: number,
    humidity: number,
    accel_x: number,
    accel_y: number,
    accel_z: number
}

export interface TSData {
    timestamp: number[],
    data: number[]
}