import Footer from "../components/GeneralComponents/Footer/Footer"
import Navbar from "../components/GeneralComponents/Navbar/Navbar"
import SecondaryHero from "../components/GeneralComponents/SecondaryHero/SecondaryHero"
import AboutUsMain from "../components/AboutUsComponents/AboutUsMain"

export default function AboutUs() {
	return (
		<>
			<Navbar />
			<SecondaryHero primarytitle={"About Us"} />
			<AboutUsMain></AboutUsMain>
			<Footer />
		</>
	)
}
