import { Button, Group, Table, Center, Stack } from "@mantine/core"
import { collection, deleteDoc, doc } from "firebase/firestore"
import { useState } from "react"
import useSnapshot from "../../hooks/useSnapshot"
import { db } from "../../pages/api/firebase/firebase"
import PopUp from "./UI/PopUp"

export default function Enquiries(props) {
	const artworkCollection = collection(db, "artworkEnquiry")
	const [toDelete, setToDelete] = useState(null)
	const [modalOpen, setModalOpen] = useState(false)

	const colls = useSnapshot(artworkCollection)

	function deleteMessage(id) {
		const docRef = doc(db, "artworkEnquiry", id)
		deleteDoc(docRef)
		setModalOpen(false)
		setToDelete(null)
	}

	const rows = colls.map((enquiry) => (
		<tr key={enquiry.id}>
			<td>{enquiry.data.date.split("T")[0]}</td>
			<td>{enquiry.data.name}</td>
			<td>{enquiry.data.email}</td>
			<td>{enquiry.data.artworkName}</td>
			<td>{enquiry.data.message}</td>
			<td>
				<Group>
					<Button
						onClick={() => {
							setModalOpen(true)
							setToDelete(enquiry.id)
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
						deleteMessage(toDelete)
					}}
					no={() => {
						setModalOpen(false)
					}}
				/>
			)}
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
							<th>Name</th>
							<th>Email</th>
							<th>Artwork</th>
							<th>Message</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>{rows}</tbody>
				</Table>
			</Stack>
		</>
	)
}
