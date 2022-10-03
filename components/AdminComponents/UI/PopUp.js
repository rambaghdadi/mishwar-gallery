import { Button, Group, Modal, Space, Stack, Text } from "@mantine/core"

export default function PopUp(props) {
	return (
		<Modal centered="true" opened={props.opened} onClose={props.onClose}>
			<Stack>
				<h1 centered={"true"}>Are you sure you want to delete?</h1>
				<Space h="lg" />
				<Group position="center">
					<Button variant="outline" onClick={props.yes}>
						Yes
					</Button>
					<Button onClick={props.no}>No</Button>
				</Group>
			</Stack>
		</Modal>
	)
}
