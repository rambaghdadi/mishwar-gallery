import Image from "next/image"
import classes from "./Footer.module.css"

export default function Footer(props) {
	return (
		<footer className={classes.footer}>
			<Image
				src={"/images/mishwarWhiteLogo.webp"}
				width={40}
				height={49}
			></Image>
			<div className={classes.footerText}>
				<ul className={classes.footerTextList}>
					<li>Mishwar Art Gallery</li>
					{/* <li>Qusour, Damascus, Syria</li> */}
					<li>mishwargallery@gmail.com</li>
				</ul>
			</div>
		</footer>
	)
}
