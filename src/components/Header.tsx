// Imports
import { ArrowRight } from "phosphor-react"
import { FormEvent, useState } from "react"
import {  useRouter } from "next/router"
import Image from "next/image"

// Imports

const Header = () => {
	const [ adress, setAdress ] = useState("")
	const route = useRouter()

	const redirect = (e: FormEvent) => {
		e.preventDefault()

		route.push(`/search/${adress}`)

	}



	return (
		<header className="flex min-h-[350px] bg-[url('/pattern-bg.png')] bg-cover bg-center">
			<div
				className="flex w-full flex-col items-center justify-center gap-8 mb-[8.5rem]"
			>
				<h1 className="text-4xl text-white">IP Address Tracker</h1>
				<form className="flex w-11/12 max-w-[700px]" onSubmit={redirect}>
					<input
						type="text"
						placeholder="Search for any IP address or domain"
						className="w-full rounded-tl-3xl rounded-bl-3xl border-none p-5 pl-8 text-xl text-black"
						onChange={e => setAdress(e.currentTarget.value)}
					/>
					<button className="flex min-w-[75px] items-center justify-center rounded-tr-3xl rounded-br-3xl bg-black">
						<Image src="/icon-arrow.svg" alt="" width={14} height={14} />
					</button>
				</form>
			</div>
		</header>
	)
}

export default Header
