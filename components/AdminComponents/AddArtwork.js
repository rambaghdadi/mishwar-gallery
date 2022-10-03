import {
	Center,
	Container,
	MultiSelect,
	NumberInput,
	Stack,
	Textarea,
	TextInput,
	Button,
	Text,
} from "@mantine/core"
import { addDoc, collection, getDocs } from "firebase/firestore"
import { useEffect, useRef, useState } from "react"
import { db } from "../../pages/api/firebase/firebase"
import ProgressBar from "./UI/ProgressBar"

export default function AddArtwork(props) {
	const [error, setError] = useState("")

	const artworkName = useRef()
	const artworkDescription = useRef()
	const artworkWidth = useRef()
	const artworkHeight = useRef()

	const artworkCollection = collection(db, "artworks")

	const [imgFile, setImgFile] = useState(null)
	const [url, setUrl] = useState(null)

	const [artists, setArtists] = useState([])
	const [selectedArtists, setSelectedArtists] = useState([])

	const artistCollection = collection(db, "artists")

	useEffect(() => {
		getArtists()
	}, [])

	const type = [`image/png`, `image/jpeg`, `image/webp`]
	function imgHandler(e) {
		let selectedFile = e.target.files[0]
		if (selectedFile && type.includes(selectedFile.type)) {
			setImgFile(selectedFile)
			setError("")
		} else {
			setError("Please select a valid image file (png or jpeg)")
			setImgFile(null)
		}
	}

	function dataHandler(url) {
		setUrl(url)
	}

	async function formHandler(e) {
		e.preventDefault()
		try {
			const response = await addDoc(artworkCollection, {
				artworkName: artworkName.current.value,
				artworkArtist: selectedArtists,
				artworkDescription: artworkDescription.current.value,
				artworkWidth: artworkWidth.current.value,
				artworkHeight: artworkHeight.current.value,
				imgURL: url,
				dateAdded: new Date().toISOString(),
			})
			console.log(response)
		} catch (error) {
			console.log(error)
		}
		e.target.reset()
	}

	async function getArtists() {
		const response = await getDocs(artistCollection)
		const artists = response.docs.map((doc) => {
			return {
				value: `${doc.data().firstName} ${doc.data().lastName}`,
				label: `${doc.data().firstName} ${doc.data().lastName}`,
			}
		})
		const sortedArtists = artists.sort((a, b) => {
			const nameA = a.label.toUpperCase()
			const nameB = b.label.toUpperCase()
			if (nameA < nameB) {
				return -1
			}
			if (nameA > nameB) {
				return 1
			}

			return 0
		})
		setArtists(sortedArtists)
	}

	return (
		<Container>
			<Center>
				<h1>Add New Artwork Below</h1>
			</Center>
			<form onSubmit={formHandler}>
				<Stack>
					<TextInput
						placeholder="The Fez"
						label="Artwork Name"
						ref={artworkName}
						required
					/>
					<MultiSelect
						data={artists}
						value={selectedArtists}
						onChange={setSelectedArtists}
						label="Artist"
						required
						placeholder="You can choose more than one"
					/>
					<Textarea
						placeholder="Artwork description"
						label="Description"
						ref={artworkDescription}
						required
					/>
					<NumberInput
						defaultValue={100}
						label="Width"
						ref={artworkWidth}
						required
					/>
					<NumberInput
						defaultValue={100}
						label="Height"
						ref={artworkHeight}
						required
					/>
					<input
						type="file"
						name="image-upload"
						id="image-upload"
						onChange={imgHandler}
					/>
					{imgFile && (
						<ProgressBar
							file={imgFile}
							setFile={setImgFile}
							link={dataHandler}
						/>
					)}
					{error && <Text style={{ color: "red" }}>{error}</Text>}
					<Button type="submit" disabled={error}>
						Add New Artwork
					</Button>
				</Stack>
			</form>
		</Container>
	)
}
