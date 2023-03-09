export interface DeviceData {
    timestamp: number,
    device_id: string,
    temperature: number,
    humidity: number,
    accel_x: number,
    accel_y: number,
    accel_z: number
}

export interface TSRequest {
    device_id: string,
    start: number,
    end: number,
}