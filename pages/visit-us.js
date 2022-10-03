import Footer from "../components/GeneralComponents/Footer/Footer"
import Navbar from "../components/GeneralComponents/Navbar/Navbar"
import SecondaryHero from "../components/GeneralComponents/SecondaryHero/SecondaryHero"
import ContactPageContainer from "../components/VisitUsComponents/ContactPageContainer"

export default function VisitUs() {
	return (
		<>
			<Navbar />
			<SecondaryHero primarytitle={"Visit Us"} />
			<ContactPageContainer />
			<Footer />
		</>
	)
}
