// import { useState, useEffect } from "react"
// import { storage } from "../pages/api/firebase/firebase"
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

// export default function useStorage(file) {
// 	if (!file) return

// 	const [progress, setProgress] = useState(0)
// 	const [error, setError] = useState(null)
// 	const [url, setUrl] = useState(null)

// 	useEffect(() => {
// 		// references
// 		const storageRef = ref(storage, file.name)
// 		const uploadTask = uploadBytesResumable(storageRef, file)

// 		uploadTask.on(
// 			"state_changed",
// 			(snapshot) => {
// 				let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
// 				setProgress(percentage)
// 			},
// 			(err) => {
// 				setError(err)
// 			},
// 			async () => {
// 				const url = await getDownloadURL(uploadTask.snapshot.ref)
// 				setUrl(url)
// 			}
// 		)
// 	}, [file])

// 	return { progress, url, error }
// }
