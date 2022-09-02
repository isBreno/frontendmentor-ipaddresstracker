import { MapContainer, TileLayer, Marker } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png"
import iconUrl from "leaflet/dist/images/marker-icon.png"
import shadowUrl from "leaflet/dist/images/marker-shadow.png"
import { getGeoData } from "src/services/getGeodata"
import { geoDataType } from "./AddressInfos"

L.Icon.Default.mergeOptions({
	iconRetinaUrl: iconRetinaUrl.src,
	iconUrl: iconUrl.src,
	shadowUrl: shadowUrl.src,
})

interface MapProps {
  Ip?: string | string[];
}

interface geoDataBetterType extends geoDataType {
  location: {
    region: string;
    timezone: string;
    lat: number;
    lng: number;
  };
}

const Map = ({ Ip }: MapProps) => {
	const { data, isLoading } = getGeoData<geoDataBetterType>(
		`https://geo.ipify.org/api/v2/country,city?apiKey=at_jCLUGRmEJFx8DdwYQqAfTtqnsG4gA&ipAddress=${Ip}`
	)

	if (isLoading) return <div>Loading</div>
	if (!data) return <div>Loading</div>

	return (
		<div className="-z-0 max-h-[50vh] -translate-y-10">
			<MapContainer
				minZoom={8}
				center={[data.location.lat, data.location.lng]}
				zoom={12}
				scrollWheelZoom={true}
				style={{ height: "68vh", zIndex: -1 }}
			>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				<Marker position={[data.location.lat, data.location.lng]} />
			</MapContainer>
		</div>
	)
}

export default Map
