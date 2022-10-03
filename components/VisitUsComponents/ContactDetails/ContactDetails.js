import GeneralImg from "../../GeneralComponents/GeneralImg/GeneralImg"
import classes from "./ContactDetails.module.css"

export default function ContactDetails(props) {
	return (
		<div className={classes.main}>
			<div className={classes.details}>
				<h2>Get In Touch</h2>
				<div className={classes.contactDetails}>
					<p>
						<strong>CONTACT DETAILS</strong>
					</p>
					{/* <p>Phone: +963 11 4475471</p> */}
					<p>Email: mishwargallery@gmail.com</p>
				</div>
				<div className={classes.address}>
					<p>
						<strong>ADDRESS</strong>
					</p>
					<p>Abdel Kareem al-Khatabi Street,</p>
					<p>Qusour, Damascus,</p>
					<p> Syria</p>
				</div>
				<div className={classes.timeDetails}>
					<p>
						<strong>REGULAR EXHIBITION HOURS</strong>
					</p>
					<p>Monday to Friday / 9.30am–5pm </p>
					<p>Saturday / 10.30am–5pm</p>
					<p>Sunday / 10.30am–5pm</p>
				</div>
			</div>
		</div>
	)
}
