import AddressInfos from "@/components/AddressInfos"
import Header from "@/components/Header"
import MapNoSSR from "@/components/MapIndex"
import type { GetServerSidePropsContext, NextPage } from "next"

const Home: NextPage = (props:any) => {
	return (
		<>
			<Header />
			<AddressInfos ClientIp={props.ip} />
			<MapNoSSR Ip={props.ip} />
		</>
	)
}

export default Home

export async function getServerSideProps(context: GetServerSidePropsContext) {
	let ip

	const { req } = context

	if (req.headers["x-forwarded-for"]) {
		ip = req.headers.authorization?.split(",")[0]
	} else if (req.headers["x-real-ip"]) {
		ip = req.socket.remoteAddress
	} else {
		ip = req.socket.remoteAddress
	}

	return {
		props: {
			ip,
		},
	}
}
