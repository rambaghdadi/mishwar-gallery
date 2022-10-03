import Filter from "../Filter/Filter"
import classes from "./Gallery.module.css"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Gallery(props) {
	const [artworks, setArtworks] = useState([])
	const router = useRouter()

	let colls = props.art

	useEffect(() => {
		console.log(colls)
		selectedArtistHandler("all")
	}, [colls])

	function selectedArtistHandler(artist) {
		if (artist === "all") {
			setArtworks(colls)
			return
		}

		if (artist === "mishwarCollection") {
			setArtworks(
				colls.filter((artwork) => artwork.attributes.mishwarCollection)
			)
			return
		}

		setArtworks(
			colls.filter((artwork) =>
				artwork.attributes.artists.data[0].attributes.name.includes(artist)
			)
		)
	}

	return (
		<div className={classes.main}>
			<Filter selectedArtist={selectedArtistHandler} />
			<motion.div
				animate={{ x: 0, opacity: 1 }}
				initial={{ x: -200, opacity: 0 }}
				transition={{ ease: "easeOut", duration: 0.4, type: "tween" }}
				className={classes.gallery}
			>
				{artworks.map((x) => (
					<motion.div
						animate={{ x: 0, opacity: 1 }}
						initial={{ x: -200, opacity: 0 }}
						transition={{ ease: "easeOut", duration: 0.2, type: "tween" }}
						key={x.id}
					>
						<Image
							src={
								x.attributes.picture.data.attributes.formats.medium.url
									? `https://mishwar-gallery-backend.onrender.com${x.attributes.picture.data.attributes.formats.medium.url}`
									: "/images/default.jpeg"
							}
							height={800}
							width={800}
							onClick={() => {
								router.push(`collection/${x.id}`)
							}}
						/>
					</motion.div>
				))}
			</motion.div>
		</div>
	)
}
