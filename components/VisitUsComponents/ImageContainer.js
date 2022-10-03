import GeneralImg from "../GeneralComponents/GeneralImg/GeneralImg"
import classes from "./ImageContainer.module.css"

export default function ImageContainer(props) {
	return (
		<div className={classes.main}>
			<GeneralImg src={"/images/welcome.webp"} width={384} height={288} />
		</div>
	)
}
