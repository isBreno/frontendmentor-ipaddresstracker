import { useRouter } from "next/router"


const AddressInfos = () => {

	const route = useRouter()
	const { address } = route.query
	return (
		<div>
			<h1>{address}</h1>
		</div>
	)
}

export default AddressInfos