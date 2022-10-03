// import { onSnapshot } from "firebase/firestore"
// import { useState, useEffect } from "react"

// export default function useSnapshot(collection) {
// 	const [colls, setColls] = useState([])

// 	useEffect(() => {
// 		const unsubscribe = onSnapshot(collection, (snapshot) => {
// 			setColls(
// 				snapshot.docs.map((doc) => {
// 					return { data: doc.data(), id: doc.id }
// 				})
// 			)
// 		})
// 		return () => {
// 			unsubscribe()
// 		}
// 	}, [])

// 	return colls
// }
