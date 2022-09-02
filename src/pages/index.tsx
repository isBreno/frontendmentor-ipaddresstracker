import AddressInfos from "@/components/AddressInfos"
import Header from "@/components/Header"
import Map from "@/components/Map"
import type { NextPage } from "next"

const Home: NextPage = (props: any) => {
	return (
		<>
			<Header />
			<AddressInfos ClientIp={props.ip} />
			<Map Ip={props.ip}/>
		</>
	)
}

export default Home

export async function getServerSideProps(context: any) {
	let ip

	const { req } = context

	if (req.headers["x-forwarded-for"]) {
		ip = req.headers["x-forwarded-for"].split(",")[0]
	} else if (req.headers["x-real-ip"]) {
		ip = req.connection.remoteAddress
	} else {
		ip = req.connection.remoteAddress
	}

	return {
		props: {
			ip,
		},
	}
}
