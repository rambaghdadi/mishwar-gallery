import { useEffect, useState } from "react"
import classes from "./Filter.module.css"

export default function Filter(props) {
	const [artists, setArtists] = useState([])
	const [selectedArtist, setSelectedArtists] = useState(null)

	async function getArtists() {
		try {
			const response = await fetch(
				`https://mishwar-gallery-backend.onrender.com/api/artists?populate=*`
			)
			const data = await response.json()
			setArtists(() =>
				data.data
					.filter((artist) => artist.attributes.artworks.data.length)
					.map((artist) => artist.attributes.name)
			)
		} catch (error) {
			console.log(error.toString())
		}
	}

	useEffect(() => {
		getArtists()
	}, [])

	function filterHandler(e) {
		props.selectedArtist(e.target.value)
		setSelectedArtists(e.target.value)
	}

	return (
		<div className={classes.main}>
			<form onChange={filterHandler} className={classes.form}>
				{/* <select name="select" id="artists">
					<option value="all">All</option>
					<option value="mishwarCollection">Mishwar Collection</option>
					{artists.map((artist) => (
						<option key={artist} value={artist}>
							{artist}
						</option>
					))}
				</select> */}
				<ul>
					<button
						className={
							selectedArtist === "all" || !selectedArtist
								? `${classes.selected}`
								: ""
						}
						onClick={(e) => {
							e.preventDefault()
							filterHandler(e)
						}}
						value="all"
					>
						All
					</button>
					<button
						className={
							selectedArtist === "mishwarCollection"
								? `${classes.selected}`
								: ""
						}
						onClick={(e) => {
							e.preventDefault()
							filterHandler(e)
						}}
						value="mishwarCollection"
					>
						Mishwar Collection
					</button>

					{artists.map((artist) => (
						<button
							onClick={(e) => {
								e.preventDefault()
								filterHandler(e)
							}}
							key={artist}
							value={artist}
							className={artist === selectedArtist ? `${classes.selected}` : ""}
						>
							{artist}
						</button>
					))}
				</ul>
			</form>
		</div>
	)
}
