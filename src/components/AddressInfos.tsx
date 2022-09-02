import { getGeoData } from "src/services/getGeodata"

export interface geoDataType {
  ip: string;
  location: {
    region: string;
    timezone: string;
  }
  isp: string;
}
const AddressInfos = ({ defaultIp }: { defaultIp: string}) => {


	const [data] = getGeoData<geoDataType>(
		`https://geo.ipify.org/api/v2/country?apiKey=at_jCLUGRmEJFx8DdwYQqAfTtqnsG4gA&ipAddress=${defaultIp}`
	)
  


	return (
		<section className="mx-auto grid w-11/12 max-w-[1200px] rounded-2xl bg-white p-8 min-h-[200px] sm:grid-cols-4 -translate-y-24">
			<div>
				<h2>IP ADDRESS</h2>
				<span>{data?.ip}</span>
			</div>
			<div>
				<h2>LOCATION</h2>
				<span>{data?.location.region}</span>
			</div>
			<div>
				<h2>TIMEZONE</h2>
				<span>{data?.location.timezone}</span>
			</div>
			<div>
				<h2>ISP</h2>
				<span>{data?.isp}</span>
			</div>
		</section>
	)
}

export default AddressInfos
