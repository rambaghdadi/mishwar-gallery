import classes from "./AboutUsMain.module.css"
import Image from "next/image"
import GeneralImg from "../GeneralComponents/GeneralImg/GeneralImg"

export default function AboutUsMain(props) {
	return (
		<div className={classes.main}>
			<div className={classes.text}>
				<p>
					Throughout the many years, art accompanied me in every detail of my
					life, until the time my friend and artist, Waddah al-Sayed, visited
					our media office in Damascus and asked me to set up an exhibition for
					his artwork in mid 2010. It was a great challenge, but I went for it
					nonetheless.
				</p>
				<p>
					The success of this exceptional exhibition, along with the waves of
					positive feedback and great encouragement from fellow artists,
					prompted me to continue and hold another exhibition. Therefore, in
					late 2010, I held another exhibition for the great artist Naim
					Shalash. Here, Mishwar Gallery was officially born.
				</p>
				<p>
					Unfortunately, this was right before the outbreak of the Syrian crisis
					in 2011 where the feeling of fear began to infiltrate the hearts of
					many. Despite the many difficulties, I continued to hold exhibitions
					for various artists including George Maher, Mustafa al-Ali, Lotfi
					al-Romhein, Nasha’at al-Zoubi, Muwaffaq Makhoul, and many others.
				</p>
				<p>
					The Syrian crisis intensified, and mortar shells began falling near
					the Gallery. A huge explosion shocked the city of Damascus which
					killed dozens and wounded hundreds of innocent people. The frequency
					of mortar shells and the possibility of another big explosion that can
					target innocent civilians made it dangerous to hold another
					exhibition. Therefore, Mishwar Gallery closed its doors to the public
					near the end of 2012. It was a difficult decision, but the right one.
				</p>
				<p>
					However, after a long and difficult pause, and once the streets of
					Damascus were relatively safe again, I was finally able to reopen the
					gallery in early 2018. Since then, Mishwar Gallery has held multiple
					exhibitions in the hopes of restoring and supporting the fine arts in
					Damascus.
				</p>
				<p className={classes.outro}>
					<strong>Mayada Killisly</strong> <span>Founder</span>
				</p>
			</div>
			{/* <div className={classes.img}>
				<GeneralImg src={"/images/mayadapp.webp"} width={600} height={490} />
			</div> */}
		</div>
	)
}
