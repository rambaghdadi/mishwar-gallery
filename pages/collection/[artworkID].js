import Navbar from "../../components/GeneralComponents/Navbar/Navbar"
import ArtworkDetails from "../../components/CollectionComponents/ArtworkDetails/ArtworkDetails"
import Footer from "../../components/GeneralComponents/Footer/Footer"
import { useState } from "react"
import { Modal } from "@mantine/core"
import Form from "../../components/CollectionComponents/Form/Form"
import NotificationAlert from "../../components/GeneralComponents/NotificationAlert/NotificationAlert"
import RelatedArtworks from "../../components/CollectionComponents/RelatedArtworks/RelatedArtworks"

export default function Artwork({ artwork, artworks }) {
	const [opened, setOpened] = useState(false)
	const [notification, setNotification] = useState(false)

	async function formHandler(data) {
		try {
			const response = await fetch(
				`https://mishwar-gallery-backend.onrender.com/api/enquiries`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						data: {
							artwork: artwork.id,
							...data,
						},
					}),
				}
			)
			if (!response.ok) throw new Error("Try again later.")
			setNotification({
				headline: "Success",
				message: "Your message has been sent!",
			})
		} catch (error) {
			console.log(error)
			setNotification({
				headline: "Error",
				message: "Please try again later!",
			})
		}
	}

	return (
		<>
			<Modal
				onClose={() => setOpened(false)}
				centered
				opened={opened}
				title={"Enquire about this artwork using the form below."}
			>
				{
					<Form
						formInput={formHandler}
						value={artwork.attributes.name}
						// onSend={() => {
						// 	setOpened(false)
						// }}
					/>
				}
			</Modal>
			<NotificationAlert
				opened={notification}
				onClose={() => setNotification(false)}
				notificationHeadline={notification.headline}
				notificationMessage={notification.message}
				onClick={() => setNotification(false)}
			/>
			<Navbar></Navbar>
			<ArtworkDetails
				src={
					artwork.attributes.picture
						? "https://mishwar-gallery-backend.onrender.com" +
						  artwork.attributes.picture.data.attributes.url
						: "/images/default.jpeg"
				}
				name={artwork.attributes.name}
				artist={artwork.attributes.artists.data[0].attributes.name}
				description={artwork.attributes.description}
				artworkWidth={artwork.attributes.width}
				artworkHeight={artwork.attributes.height}
				onClick={() => setOpened(true)}
			/>
			<RelatedArtworks
				relatedImages={artworks[0].data
					.filter((imgs) => imgs.attributes.mishwarCollection)
					.filter((hero) => hero.attributes.name !== artwork.name)
					.slice(0, 3)}
			/>
			<Footer></Footer>
		</>
	)
}

export async function getStaticPaths() {
	const response = await fetch(
		`https://mishwar-gallery-backend.onrender.com/api/artworks?populate=*`
	)
	const data = await response.json()

	const paths = data.data.map((artwork) => {
		return {
			params: { artworkID: artwork.id.toString() },
		}
	})

	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps(context) {
	let artwork
	let artworks = []

	try {
		const response = await fetch(
			`https://mishwar-gallery-backend.onrender.com/api/artworks?populate=*`
		)
		const data = await response.json()
		artworks.push(data)
	} catch (error) {
		console.log(error)
	}

	try {
		const { artworkID } = context.params
		const response = await fetch(
			`https://mishwar-gallery-backend.onrender.com/api/artworks/${artworkID}?populate=*`
		)
		const data = await response.json()

		if (response.ok) {
			artwork = data.data
		} else {
			return {
				redirect: {
					permanent: false,
					destination: "/404",
				},
			}
		}
	} catch (error) {
		console.log(error)
	}

	return {
		props: {
			artwork,
			artworks,
		},
	}
}
