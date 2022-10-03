import Gallery from "../../components/CollectionComponents/Gallery/Gallery"
import Footer from "../../components/GeneralComponents/Footer/Footer"
import Navbar from "../../components/GeneralComponents/Navbar/Navbar"
import SecondaryHero from "../../components/GeneralComponents/SecondaryHero/SecondaryHero"

export default function Collection({ artworks }) {
	return (
		<>
			<Navbar />
			<SecondaryHero
				primarytitle={"Collection"}
				secondaryTitle={"Explore Our"}
			/>
			<Gallery art={artworks[0].data} />
			<Footer />
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
