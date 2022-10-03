// import { createContext, useContext, useState, useEffect } from "react"
// import {
// 	signInWithEmailAndPassword,
// 	onAuthStateChanged,
// 	signOut,
// } from "firebase/auth"
// import { auth } from "../pages/api/firebase/firebase"
// import { useRouter } from "next/router"

// const AuthContext = createContext({})

// export function useAuth() {
// 	return useContext(AuthContext)
// }

// export function AuthProvider(props) {
// 	const [user, setUser] = useState(null)
// 	const [loading, setLoading] = useState(true)

// 	const router = useRouter()

// 	useEffect(() => {
// 		const unsubscribe = onAuthStateChanged(auth, (user) => {
// 			if (user) {
// 				setUser({
// 					uid: user.uid,
// 					email: user.email,
// 					displayName: user.displayName,
// 				})
// 			} else {
// 				setUser(null)
// 			}
// 			setLoading(false)
// 		})
// 		return () => unsubscribe()
// 	}, [])

// 	function login(email, password) {
// 		return signInWithEmailAndPassword(auth, email, password)
// 	}

// 	async function logout() {
// 		setUser(null)
// 		await signOut(auth)
// 		router.replace("/")
// 	}

// 	const value = {
// 		user,
// 		// signup,
// 		login,
// 		logout,
// 	}

// 	return (
// 		<AuthContext.Provider value={value}>
// 			{!loading && props.children}
// 		</AuthContext.Provider>
// 	)
// }
