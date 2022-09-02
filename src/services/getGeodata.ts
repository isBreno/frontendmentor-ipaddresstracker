import axios from "axios"
import { useEffect, useState } from "react"

export function getGeoData<T = unknown> (url:string) {
	const [data, setData] = useState<T | null>(null)
	const [isLoading, setisLoading] = useState<boolean>(true)

	useEffect(() => {
		try {
			axios.get(url)
				.then(resp => setData(resp.data))
		}
		finally {
			setisLoading(false)
		}
	}, [])

	return { data, isLoading }
}