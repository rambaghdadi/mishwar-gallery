import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import classes from "./Navbar.module.css"
import { useRouter } from "next/router"

export default function Navbar() {
	const router = useRouter()
	let currentPage = router.pathname
	const [activeMenu, setActiveMenu] = useState(false)

	let activeClass = activeMenu ? classes.active : ""

	function menuHandler() {
		setActiveMenu(!activeMenu)
	}

	return (
		<header className={classes.header}>
			<Image
				style={{ cursor: "pointer" }}
				onClick={() => {
					if (router.pathname === "/") return
					router.push("/")
				}}
				src={"/images/Mishwar-Logo-Small.png"}
				width={43}
				height={52}
			/>
			<nav className={`${classes.navbar} ${activeClass}`}>
				<div onClick={menuHandler} className={classes.menuHandle}>
					<span>Main Menu</span>
					<ion-icon name="menu"></ion-icon>
				</div>
				<ul className={classes.navList}>
					<li className={currentPage === "/" ? classes.currentPage : ""}>
						<Link href={"/"}>Home</Link>
					</li>
					<li
						className={currentPage === "/collection" ? classes.currentPage : ""}
					>
						<Link href={"/collection"}>Collection</Link>
					</li>
					<li
						className={currentPage === "/about-us" ? classes.currentPage : ""}
					>
						<Link href={"/about-us"}>About Us</Link>
					</li>
					<li
						className={currentPage === "/visit-us" ? classes.currentPage : ""}
					>
						<Link href={"/visit-us"}>Visit Us</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
