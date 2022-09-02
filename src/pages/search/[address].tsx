import Header from "@/components/Header"
import { useRouter } from "next/router"
import AddressInfosContainer from "@/components/AddressInfos"

const AddressInfos = () => {
	const route = useRouter()
	const { address } = route.query
	if (!address) return 

	return (
		<>
			<Header />
			<AddressInfosContainer Ip={address}/>
		</>
	)
}

export default AddressInfos