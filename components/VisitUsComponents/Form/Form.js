import { useRef, useState } from "react"
import NotificationAlert from "../../GeneralComponents/NotificationAlert/NotificationAlert"
import classes from "./Form.module.css"

export default function Form(props) {
	const [notification, setNotification] = useState(false)
	const formName = useRef()
	const formEmail = useRef()
	const formMessage = useRef()

	async function formHandler(e) {
		e.preventDefault()
		try {
			const response = await fetch(
				`https://mishwar-gallery-backend.onrender.com/api/messages`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						data: {
							name: formName.current.value,
							email: formEmail.current.value,
							message: formMessage.current.value,
						},
					}),
				}
			)

			setNotification({
				headline: "Success",
				message: "Your message has been sent!",
			})
			e.target.reset()
			console.log(response)
		} catch (error) {
			console.log(error)
			setNotification({
				headline: "Error",
				message: "Please try again later!",
			})
		}
	}

	return (
		<>
			<NotificationAlert
				opened={notification}
				onClose={() => setNotification(false)}
				notificationHeadline={notification.headline}
				notificationMessage={notification.message}
				onClick={() => setNotification(false)}
			/>
			<div className={classes.main}>
				<h2>{props.title}</h2>
				<form onSubmit={formHandler} className={classes.form}>
					<div className={classes.inputs}>
						<label htmlFor="name">Your Name</label>
						<input
							className={classes.input}
							type="text"
							name="name"
							id="name"
							required
							ref={formName}
						/>
						<label htmlFor="email">Your Email</label>
						<input
							className={classes.input}
							type="email"
							name="email"
							id="email"
							required
							ref={formEmail}
						/>

						<label htmlFor="message">Your Message</label>

						<textarea
							className={classes.input}
							name="message"
							id="message"
							cols="30"
							rows="10"
							required
							ref={formMessage}
						/>
					</div>
					<button type="submit" className={classes.submitButton}>
						Submit
					</button>
				</form>
			</div>
		</>
	)
}
