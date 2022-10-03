import {
	Center,
	Container,
	Stack,
	Textarea,
	TextInput,
	Button,
	Text,
} from "@mantine/core"
import { useRef, useState } from "react"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../pages/api/firebase/firebase"
import ProgressBar from "./UI/ProgressBar"

export default function AddArtist(props) {
	const artistCollection = collection(db, "artists")

	const [imgFile, setImgFile] = useState(null)

	const [error, setError] = useState("")
	const [url, setUrl] = useState(null)

	const type = [`image/png`, `image/jpeg`]

	const firstName = useRef()
	const lastName = useRef()
	const description = useRef()

	function dataHandler(url) {
		setUrl(url)
	}

	function imgHandler(e) {
		let selectedFile = e.target.files[0]
		if (selectedFile && type.includes(selectedFile.type)) {
			setImgFile(selectedFile)
			setError("")
		} else {
			setError("Please select an image file (png or jpeg)")
			setImgFile(null)
		}
	}

	async function submitHandler(e) {
		e.preventDefault()
		try {
			const response = await addDoc(artistCollection, {
				firstName: firstName.current.value,
				lastName: lastName.current.value,
				description: description.current.value,
				imgURL: url,
			})
			console.log(response)
		} catch (error) {
			console.log(error)
		}
		e.target.reset()
	}

	return (
		<Container>
			<Center>
				<h1>Add New Artist Below</h1>
			</Center>
			<form onSubmit={submitHandler}>
				<Stack>
					<TextInput
						placeholder="Ahman"
						label="First Name"
						required
						ref={firstName}
					/>
					<TextInput
						placeholder="Suleiman"
						label="Last Name"
						required
						ref={lastName}
					/>
					<Textarea
						autosize
						placeholder="Artist Bio"
						label="Artist Description"
						required
						ref={description}
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
					<Button disabled={error} type="submit">
						Add Artist
					</Button>
				</Stack>
			</form>
		</Container>
	)
}
