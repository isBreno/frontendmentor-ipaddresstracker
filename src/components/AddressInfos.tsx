import { getGeoData } from "src/services/getGeodata"

export interface geoDataType {
  ip: string;
  location: {
    region: string;
    timezone: string;
  };
  isp: string;
}
const AddressInfos = ({
	ClientIp,
	Ip,
}: {
  ClientIp?: string;
  Ip?: string | string[];
}) => {
	const { data, isLoading } = getGeoData<geoDataType>(
		`https://geo.ipify.org/api/v2/country?apiKey=at_jCLUGRmEJFx8DdwYQqAfTtqnsG4gA&ipAddress=${
			Ip || ClientIp
		}`
	)
	

	return (
		<>
			<section className="absolute z-50 translate-x-1/2 right-1/2  mx-auto grid min-h-[200px] w-11/12 max-w-[1200px] -translate-y-32 rounded-2xl bg-white p-8 sm:grid-cols-4">
				<div className=" flex flex-col gap-4 border-black border-opacity-25 sm:border-r">
					<h2 className="text-sm font-bold tracking-widest text-[#969696] ">
            IP ADDRESS
					</h2>
					<span className="break-words text-3xl font-bold text-[#2b2b2b]">
						{isLoading ? "..." : data?.ip}
					</span>
				</div>
				<div className="flex flex-col gap-4 border-black border-opacity-25 sm:border-r  sm:px-8">
					<h2 className="text-sm font-bold tracking-widest text-[#969696] ">
            LOCATION
					</h2>
					<span className="break-words text-3xl font-bold text-[#2b2b2b]">
						{isLoading ? "..." : data?.location.region}
					</span>
				</div>
				<div className="flex flex-col gap-4 border-black border-opacity-25 sm:border-r  sm:px-8">
					<h2 className="text-sm font-bold tracking-widest text-[#969696] ">
            TIMEZONE
					</h2>
					<span className="break-words text-3xl font-bold text-[#2b2b2b]">
						{isLoading ? "..." : data?.location.timezone}
					</span>
				</div>
				<div className="flex flex-col gap-4 sm:px-8 ">
					<h2 className="text-sm font-bold tracking-widest text-[#969696] ">
            ISP
					</h2>
					<span className="break-words text-3xl font-bold text-[#2b2b2b]">
						{isLoading ? "..." : data?.isp}
					</span>
				</div>
			</section>
		</>
	)
}

export default AddressInfos
