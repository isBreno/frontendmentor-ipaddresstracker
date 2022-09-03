import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export function getGeoData<T = unknown> (url:string) {
	const [data, setData] = useState<T | null>(null)
	const [isLoading, setisLoading] = useState<boolean>(true)
	const route = useRouter()
	const { address } = route.query

	useEffect(() => {
		try {
			axios.get(url)
				.then(resp => setData(resp.data))
				.catch(err => {
					if (err) {
						route.push("/404")
					}
				})
		}
		finally {
			setisLoading(false)
		}
	}, [address])

	return { data, isLoading }
}