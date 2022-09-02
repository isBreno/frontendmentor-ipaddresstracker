import axios from "axios"
import { useEffect, useState } from "react"

export function getGeoData<T = unknown> (url:string) {
	const [data, setData] = useState<T | null>(null)

	useEffect(() => {
		axios.get(url)
			.then(resp => setData(resp.data))
	}, [])

	return [data]
}