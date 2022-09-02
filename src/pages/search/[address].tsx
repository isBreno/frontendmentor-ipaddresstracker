import Header from "@/components/Header"
import { useRouter } from "next/router"
import AddressInfosContainer from "@/components/AddressInfos"
import dynamic from "next/dynamic"

const AddressInfos = () => {
	const route = useRouter()
	const { address } = route.query

	const DynamicMap = dynamic(() => import("@/components/Map"), {
		ssr: false,
	})

	if (!address) return 

	return (
		<>
			<Header />
			<AddressInfosContainer Ip={address} />
			<DynamicMap Ip={Number(address)} />
		</>
	)
}

export default AddressInfos