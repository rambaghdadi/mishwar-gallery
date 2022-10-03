import {
	Card,
	Center,
	Container,
	Grid,
	Group,
	Image,
	Stack,
	Text,
	Button,
} from "@mantine/core"
import { collection, deleteDoc, doc } from "firebase/firestore"
import { onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import useSnapshot from "../../hooks/useSnapshot"
import { db } from "../../pages/api/firebase/firebase"
import PopUp from "./UI/PopUp"

export default function AllArtists() {
	const [modalOpen, setModalOpen] = useState(false)
	const [toDelete, setToDelete] = useState(null)
	const artistCollection = collection(db, "artists")

	function deleteArtist(id) {
		const docRef = doc(db, "artists", id)
		deleteDoc(docRef)
		setModalOpen(false)
		setToDelete(null)
	}

	const colls = useSnapshot(artistCollection)

	return (
		<Container>
			{modalOpen && (
				<PopUp
					opened={modalOpen}
					onClose={() => {
						setModalOpen(false)
					}}
					yes={() => {
						deleteArtist(toDelete)
					}}
					no={() => {
						setModalOpen(false)
					}}
				/>
			)}
			<Center>
				<h1>All Artists</h1>
			</Center>
			<Grid style={{ marginTop: "4rem" }}>
				{colls.map((artist) => {
					return (
						<Grid.Col key={artist.id} span={4}>
							<Card shadow="sm" p="xl">
								<Card.Section>
									<Image
										src={artist.data.imgURL}
										height={160}
										alt="artist image"
									/>
								</Card.Section>

								<Group
									position="apart"
									style={{ marginBottom: 5, marginTop: 5 }}
								>
									<Text
										weight={500}
									>{`${artist.data.firstName} ${artist.data.lastName}`}</Text>
								</Group>

								<Button
									onClick={() => {
										setModalOpen(true)
										setToDelete(artist.id)
									}}
								>
									Delete
								</Button>
							</Card>
						</Grid.Col>
					)
				})}
			</Grid>
		</Container>
	)
}
