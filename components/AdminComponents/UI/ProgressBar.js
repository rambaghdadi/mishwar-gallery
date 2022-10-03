import { useEffect } from "react"
import useStorage from "../../../hooks/useStorage"

export default function ProgressBar({ file, setFile, link }) {
	const { url, progress } = useStorage(file)

	useEffect(() => {
		if (url) {
			link(url)
			setFile(null)
		}
	}, [url, setFile])

	return <p>{progress}</p>
}
