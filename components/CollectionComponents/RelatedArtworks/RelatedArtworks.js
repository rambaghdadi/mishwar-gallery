import Image from "next/image"
import { useRouter } from "next/router"
import classes from "./RelatedArtworks.module.css"

export default function RelatedArtworks(props) {
	const router = useRouter()
	return (
		<div className={classes.relatedArtworks}>
			<h1>Related Artworks</h1>
			<div className={classes.artworks}>
				{props.relatedImages.map((relatedImage) => {
					return (
						<div style={{ flex: "0 0 30%" }} key={relatedImage.id}>
							<Image
								src={
									"https://mishwar-gallery-backend.onrender.com" +
									relatedImage.attributes.picture.data.attributes.url
								}
								alt="related img"
								width={100}
								height={100}
								layout="responsive"
								onClick={() => {
									router.push(`/collection/${relatedImage.id}`)
								}}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}
