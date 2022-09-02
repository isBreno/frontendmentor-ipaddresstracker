
const AddressInfos = ({ defaultIp }: { defaultIp: string}) => {
  
	return (
		<section className="mx-auto grid w-11/12 max-w-[1200px] rounded-2xl bg-white p-8 min-h-[200px] sm:grid-cols-4 -translate-y-24">
			<div>
				<h2>IP ADDRESS</h2>
				<span>{defaultIp}</span>
			</div>
			<div>
				<h2>LOCATION</h2>
				<span>192.212.174.101</span>
			</div>
			<div>
				<h2>TIMEZONE</h2>
				<span>192.212.174.101</span>
			</div>
			<div>
				<h2>ISP</h2>
				<span>192.212.174.101</span>
			</div>
		</section>
	)
}

export default AddressInfos
