import React, { ReactNode } from "react"
import Header from "../header/Header.component"
import globalStyles from "../../styles/globals"

type Props = {
	children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
	<div>
		<Header />
		<div className="layout">{ props.children }</div>
		<style jsx global>
			{globalStyles}
		</style>
	</div>
)

export default Layout
