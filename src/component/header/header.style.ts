import css from "styled-jsx/css"

export default css.global`
	nav {
		display: flex;
		flex-wrap: no-wrap;
		flex-direction: row;
		text-align: center;
	}

	.logo_container, .user_container {
    width: 155px;
		padding: 12px;
	}

	.menu_container {
		padding: 12px 0px;
    margin: 0 auto;
	}

	.bold {
		font-weight: bold;
	}

	a {
		text-decoration: none;
		color: #000;
		display: inline-block;
	}

	a[data-active="true"] {
		color: gray;
	}

	a + a {
		margin-left: 1rem;
	}

	.menu_container a + a {
		margin-left: 2rem;
	}
`
