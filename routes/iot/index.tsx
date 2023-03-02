import GetDummyData from "../../islands/Retriever.tsx";

export default function IoT_Dashboard() {
    return (
        <>
            <head>
                <title>IoT Dashboard</title>
            </head>
            <body>
                <div class="p-4 mx-auto max-w-screen-md">
                    <img
                    src="/logo.svg"
                    class="w-32 h-32"
                    alt="the fresh logo: a sliced lemon dripping with juice"
                    />
                    <p class="my-6">
                    Wololo
                    </p>
                </div>
                <div>
                    <GetDummyData timestamp={1} device_id={""} temperature={0} humidity={0} accel_x={0} accel_y={0} accel_z={0} />
                </div>
            </body>
        </>
    );
}