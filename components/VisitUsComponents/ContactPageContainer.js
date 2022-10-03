import ContactDetails from "./ContactDetails/ContactDetails"
import Form from "./Form/Form"
import classes from "./ContactPageContainer.module.css"
import ImageContainer from "./ImageContainer"

export default function ContactPageContainer(props) {
	return (
		<div className={classes.main}>
			<ImageContainer></ImageContainer>
			<ContactDetails />
			<Form title={"Leave us a message"}></Form>
		</div>
	)
}
