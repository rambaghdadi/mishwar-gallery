import { Button } from "@mantine/core"

export default function Btn({ onClick, text }) {
	return (
		<Button
			fullWidth="100%"
			component="span"
			variant="gradient"
			gradient={{ from: "indigo", to: "cyan", deg: 45 }}
			weight={600}
			style={{
				fontFamily: "Greycliff CF, sans-serif",
				marginBottom: "2rem",
			}}
			onClick={onClick}
		>
			{text}
		</Button>
	)
}
