import { useState } from "react"
import {
	AppShell,
	Navbar,
	Header,
	Text,
	useMantineTheme,
	Stack,
	Button,
} from "@mantine/core"
import Btn from "./UI/Btn"
import AddArtwork from "./AddArtwork"
import AllArtworks from "./AllArtworks"
import Messages from "./Messages"
import AddArtist from "./AddArtist"
import AllArtists from "./AllArtists"
import { useAuth } from "../../context/AuthContext"
import Enquiries from "./Enquiries"

export default function Main(props) {
	const theme = useMantineTheme()
	const [opened, setOpened] = useState(false)
	const [tab, setTab] = useState("AllArtworks")
	const { logout } = useAuth()
	const { user } = useAuth()

	function tabSwitch() {
		switch (tab) {
			case "AllArtworks":
				return <AllArtworks />
			case "AddArtwork":
				return <AddArtwork />
			case "AllArtists":
				return <AllArtists />
			case "AddArtist":
				return <AddArtist />
			case "Enquiries":
				return <Enquiries />
			case "Messages":
				return <Messages />
			default:
				return
		}
	}

	return (
		<>
			<AppShell
				styles={{
					main: {
						background:
							theme.colorScheme === "dark"
								? theme.colors.dark[8]
								: theme.colors.gray[0],
					},
				}}
				navbarOffsetBreakpoint="sm"
				asideOffsetBreakpoint="sm"
				fixed
				navbar={
					<Navbar
						p="md"
						hiddenBreakpoint="sm"
						hidden={!opened}
						width={{ sm: 100, lg: 200 }}
						style={{ display: "flex" }}
					>
						<Navbar.Section grow mx="-xs" px="xs">
							<Btn
								text={"All Artworks"}
								onClick={() => {
									setTab("AllArtworks")
								}}
							/>
							<Btn
								text={"Add Artwork"}
								onClick={() => {
									setTab("AddArtwork")
								}}
							/>
							<Btn
								text={"All Artists"}
								onClick={() => {
									setTab("AllArtists")
								}}
							/>
							<Btn
								text={"Add Artists"}
								onClick={() => {
									setTab("AddArtist")
								}}
							/>
							<Btn
								text={"Enquiries"}
								onClick={() => {
									setTab("Enquiries")
								}}
							/>
							<Btn
								text={"Messages"}
								onClick={() => {
									setTab("Messages")
								}}
							/>
						</Navbar.Section>

						<Navbar.Section>
							<Button
								text={"Sign Out"}
								fullWidth="100%"
								color="red"
								onClick={() => {
									logout()
								}}
							>
								Sign Out
							</Button>
						</Navbar.Section>
					</Navbar>
				}
				header={
					<Header height={70} p="md">
						<div
							style={{ display: "flex", alignItems: "center", height: "100%" }}
						>
							<Stack>
								<Text>
									<strong>Mishwar Gallery - Admin Dashboard</strong>
								</Text>
								<Text>{user.email} - Signed In</Text>
							</Stack>
						</div>
					</Header>
				}
			>
				{tabSwitch()}
			</AppShell>
		</>
	)
}
