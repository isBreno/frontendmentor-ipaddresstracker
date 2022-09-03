import Header from "@/components/Header"
import { useRouter } from "next/router"
import AddressInfosContainer from "@/components/AddressInfos"
import MapNoSSR from "@/components/MapIndex"

const AddressInfos = () => {
	const route = useRouter()
	const { address } = route.query

	if (!address) return 

	return (
		<>
			<Header />
			<AddressInfosContainer Ip={address} />
			<MapNoSSR Ip={address} />
		</>
	)
}

export default AddressInfos