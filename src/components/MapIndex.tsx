import dynamic from "next/dynamic"

const MapNoSSR = dynamic(() => import("./Map"), {
	ssr: false,
})

export default MapNoSSR
