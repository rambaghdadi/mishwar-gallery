import { useRef } from "react"
import classes from "./Form.module.css"

export default function Form(props) {
	const formName = useRef()
	const formEmail = useRef()
	const formMessage = useRef()

	function formHandler(e) {
		e.preventDefault()
		let formData = {
			name: formName.current.value,
			message: formMessage.current.value,
			email: formEmail.current.value,
		}
		props.formInput(formData)
		e.target.reset()
	}

	return (
		<>
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
						<label htmlFor="email">Artwork</label>
						<input
							className={classes.input}
							type="text"
							name="artwork"
							id="artwork"
							required
							disabled
							value={props.value}
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
					<button
						// onClick={props.onSend}
						type="submit"
						className={classes.submitButton}
					>
						Submit
					</button>
				</form>
			</div>
		</>
	)
}
