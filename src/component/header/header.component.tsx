import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { signOut, useSession } from "next-auth/client"
import headerStyles from "./header.style"

const Header: React.FC = () => {
	const router = useRouter()
	const isActive: (pathname: string) => boolean = (pathname) =>
		router.pathname === pathname

	const [session, loading] = useSession()

	const logoContainer = (
		<div className="logo_container">
			<Link href="/">
				<a className="bold" data-active={isActive("/")}>
					Home
				</a>
			</Link>
		</div>
	)

	const menuContainer = (
		<div className="menu_container">
			<Link href="/checkout">
				<a className="bold" data-active={isActive("/")}>
					First <br/> redirection
				</a>
			</Link>
			<Link href="/">
				<a className="bold" data-active={isActive("/")}>
					Second <br/> redirection
				</a>
			</Link>
			<Link href="/">
				<a className="bold" data-active={isActive("/")}>
					Third <br/> redirection
				</a>
			</Link>
		</div>
	)

	let userContainer = null

	if (loading) {
		userContainer = (
			<div className="user_container">
				<p>Validating session ...</p>
			</div>
		)
	}

	if (!session) {
		userContainer = (
			<div className="user_container">
				<Link href="/api/auth/signin">
					<a className="bold" data-active={isActive("/sign-in")}>
						Sign-in
					</a>
				</Link>
				<Link href="/auth/signup">
					<a className="bold" data-active={isActive("/sign-up")}>
						Sign-up
					</a>
				</Link>
			</div>
		)
	}

	if (session) {
		userContainer = (
			<div className="user_container">
				<p>
					{session.user.name} ({session.user.email})
				</p>
				<button onClick={() => signOut()}>
					<a>Log out</a>
				</button>
			</div>
		)
	}

	return (
		<nav>
			{logoContainer}
			{menuContainer}
			{userContainer}
			<style jsx global>
				{headerStyles}
			</style>
		</nav>
	)
}

export default Header
