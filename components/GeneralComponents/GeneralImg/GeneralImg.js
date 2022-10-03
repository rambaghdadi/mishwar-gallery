import Image from "next/image"
import classes from "./GeneralImg.module.css"

export default function GeneralImg(props) {
	return (
		<div className={classes.image}>
			<Image
				className={classes.img}
				src={props.src}
				width={props.width}
				height={props.height}
			/>
		</div>
	)
}
