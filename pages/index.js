import Navbar from "../components/GeneralComponents/Navbar/Navbar"
import Hero from "../components/HomeComponents/Hero/Hero"
import ExploreCollection from "../components/HomeComponents/ExploreCollection/ExploreCollection"
import Footer from "../components/GeneralComponents/Footer/Footer"
import { useEffect } from "react"

export default function Home({ artworks }) {
	useEffect(() => {
		console.log(artworks)
	}, [])

	return (
		<>
			<Navbar></Navbar>
			<Hero></Hero>
			<ExploreCollection artworks={artworks[0].data} />
			<Footer></Footer>
		</>
	)
}

export async function getStaticProps() {
	let artworks = []

	const response = await fetch(
		`https://mishwar-gallery-backend.onrender.com/api/artworks?populate=*`
	)
	const data = await response.json()
	artworks.push(data)

	return {
		props: {
			artworks,
		},
		revalidate: 10,
	}
}
