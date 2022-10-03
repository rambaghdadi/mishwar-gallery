import classes from "./Hero.module.css"
import Image from "next/image"

export default function Hero() {
	return (
		<section className={classes.section}>
			<main className={classes.hero}>
				<Image src={"/images/HeroImage.jpg"} width={800} height={800} />
				{/* <h1>hello</h1> */}
				<div className={classes.heroText}>
					<h1>A Journey through Art</h1>
					<p>
						Mishwar Gallery brings you premium and exclusive artwork from the
						levant.
					</p>
					<p>Artist: Abdullah Murad, 2021</p>
				</div>
			</main>
			<div className={classes.scrollDownButton}>
				<a href="#collection">
					<ion-icon name="arrow-down-circle"></ion-icon>
				</a>
			</div>
		</section>
	)
}
