import {
	Button,
	Group,
	Table,
	Center,
	Stack,
	Drawer,
	Image,
	TextInput,
	NumberInput,
} from "@mantine/core"
import {
	collection,
	deleteDoc,
	doc,
	getDoc,
	updateDoc,
} from "firebase/firestore"
import { useRef, useState } from "react"
import useSnapshot from "../../hooks/useSnapshot"
import { db } from "../../pages/api/firebase/firebase"
import PopUp from "./UI/PopUp"

export default function AllArtworks(props) {
	const [modalOpen, setModalOpen] = useState(false)
	const [drawerOpen, setDrawerOpen] = useState(false)

	const [toDelete, setToDelete] = useState(null)
	const [toEdit, setToEdit] = useState(null)
	const [artworkDetails, setArtworkDetails] = useState(null)

	const artworkCollection = collection(db, "artworks")
	const colls = useSnapshot(artworkCollection)

	const artworkName = useRef()
	const artworkDescription = useRef()
	const artworkWidth = useRef()
	const artworkHeight = useRef()

	function deleteArtwork(id) {
		const docRef = doc(db, "artworks", id)
		deleteDoc(docRef)
		setModalOpen(false)
		setToDelete(null)
	}

	async function getData(id) {
		const docRef = doc(db, "artworks", id)
		try {
			const docSnap = await getDoc(docRef)
			if (docSnap.exists()) {
				setArtworkDetails({ ...docSnap.data() })
			} else {
				console.log("Data not found")
			}
		} catch (error) {
			console.error(error)
		}
	}

	async function updateArtwork(e) {
		e.preventDefault()
		const docRef = doc(db, "artworks", toEdit)
		const docSnap = await updateDoc(docRef, {
			artworkName: artworkName.current.value,
			artworkDescription: artworkDescription.current.value,
			artworkWidth: artworkWidth.current.value,
			artworkHeight: artworkHeight.current.value,
		})
		setDrawerOpen(false)
	}

	const editContainer = artworkDetails && (
		<form onSubmit={updateArtwork}>
			<Stack>
				<TextInput
					label="Artwork Name"
					defaultValue={artworkDetails.artworkName}
					required
					ref={artworkName}
				/>
				<TextInput
					label="Artwork Description"
					defaultValue={artworkDetails.artworkDescription}
					required
					ref={artworkDescription}
				/>
				<NumberInput
					label="Artwork Width"
					defaultValue={+artworkDetails.artworkWidth}
					required
					ref={artworkWidth}
				/>
				<NumberInput
					label="Artwork Height"
					value={+artworkDetails.artworkHeight}
					required
					ref={artworkHeight}
				/>

				<Button type="submit">Update Artwork</Button>
			</Stack>
		</form>
	)

	const rows = colls.map((artwork) => (
		<tr key={artwork.id}>
			<td>{artwork.data.dateAdded.split("T")[0]}</td>
			<td>
				<Image
					src={
						artwork.data.imgURL ? artwork.data.imgURL : "/images/default.jpeg"
					}
					width={60}
				/>
			</td>
			<td>{artwork.data.artworkName}</td>
			<td>{artwork.data.artworkArtist.join(", ")}</td>
			<td>{artwork.data.artworkDescription}</td>
			<td>{`${artwork.data.artworkWidth} w x ${artwork.data.artworkHeight} h`}</td>
			<td>
				<Group>
					<Button
						onClick={() => {
							setDrawerOpen(true)
							setToEdit(artwork.id)
							setArtworkDetails(null)
							getData(artwork.id)
						}}
					>
						Edit
					</Button>
					<Button
						onClick={() => {
							setModalOpen(true)
							setToDelete(artwork.id)
						}}
						color={"red"}
					>
						Delete
					</Button>
				</Group>
			</td>
		</tr>
	))

	return (
		<>
			{modalOpen && (
				<PopUp
					opened={modalOpen}
					onClose={() => {
						setModalOpen(false)
					}}
					yes={() => {
						deleteArtwork(toDelete)
					}}
					no={() => {
						setModalOpen(false)
					}}
				/>
			)}
			<Drawer
				opened={drawerOpen}
				onClose={() => setDrawerOpen(false)}
				title="Edit Artwork Details"
				padding="xl"
				size="xl"
			>
				{editContainer}
			</Drawer>

			<Stack>
				<Center>
					<h1>Artworks</h1>
				</Center>
				<Table
					horizontalSpacing="md"
					verticalSpacing="md"
					striped
					highlightOnHover
				>
					<thead>
						<tr>
							<th>Date Added</th>
							<th>Artwork Image</th>
							<th>Artwork Name</th>
							<th>Artwork Artist</th>
							<th>Artwork Description</th>
							<th>Artwork Dimensions</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>{rows}</tbody>
				</Table>
			</Stack>
		</>
	)
}
