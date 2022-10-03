import { Button } from "@mantine/core"
import Image from "next/image"
import classes from "./ArtworkDetails.module.css"

export default function ArtworkDetails(props) {
	return (
		<div className={classes.main}>
			<div className={classes.imgContainer}>
				<Image
					className={classes.img}
					src={props.src}
					width={props.artworkWidth}
					height={props.artworkHeight}
					layout="responsive"
				/>
			</div>
			<div className={classes.text}>
				<h1>{props.name}</h1>
				<p>{props.description}</p>
				<p>
					{props.artworkWidth}x{props.artworkHeight} cm
				</p>
				<p>
					<strong>Artist:</strong> {props.artist}
				</p>
				<p>
					To find out more about the price, availability, and shipping of this
					artwork, please contact us by clicking on the enquiry button below.
				</p>
				<Button
					onClick={props.onClick}
					style={{ backgroundColor: "var(--accent-color)" }}
				>
					Enquiry
				</Button>
			</div>
		</div>
	)
}
