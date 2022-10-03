import classes from "./ExploreCollection.module.css"
import Image from "next/image"
import { useRouter } from "next/router"

export default function ExploreCollection(props) {
	const router = useRouter()

	return (
		<section className={classes.section}>
			<main className={classes.main}>
				<h1>Explore the Collection</h1>
				<div id="collection" className={classes.collection}>
					{props.artworks
						.filter(
							(img) =>
								img.attributes.artists.data[0].attributes.name ===
								"Abdullah Murad"
						)
						.slice(0, 3)
						.map((artwork) => {
							return (
								<div key={artwork.id}>
									<Image
										onClick={() => {
											router.push(`collection/${artwork.id}`)
										}}
										src={
											`https://mishwar-gallery-backend.onrender.com` +
											artwork.attributes.picture.data.attributes.url
										}
										width="400"
										height="400"
									></Image>
								</div>
							)
						})}
				</div>
				<button
					onClick={() => {
						router.push("/collection")
					}}
					className={classes.button}
				>
					<span>View Full Collection</span>
					<ion-icon name="chevron-forward"></ion-icon>
				</button>
			</main>
		</section>
	)
}
