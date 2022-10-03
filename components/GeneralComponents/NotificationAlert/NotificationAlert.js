import { Button, Dialog, Group, Text } from "@mantine/core"

export default function NotificationAlert(props) {
	return (
		<Dialog
			opened={props.opened}
			withCloseButton
			onClose={props.onClose}
			size="lg"
			radius="md"
		>
			<Text size="sm" style={{ marginBottom: 10 }} weight={500}>
				{props.notificationHeadline}
			</Text>

			<Group align="flex-end">
				<Text style={{ flex: 1 }}>{props.notificationMessage}</Text>
				<Button onClick={props.onClick}>Dismiss</Button>
			</Group>
		</Dialog>
	)
}
