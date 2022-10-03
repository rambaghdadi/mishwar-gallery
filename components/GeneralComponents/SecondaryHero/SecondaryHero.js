import classes from "./SecondaryHero.module.css"

export default function SecondaryHero(props) {
	return (
		<section className={classes.section}>
			<main className={classes.main}>
				<div className={classes.text}>
					<h2>{props.secondaryTitle}</h2>
					<h1>{props.primarytitle}</h1>
				</div>
				<div className={classes.line}></div>
			</main>
		</section>
	)
}
