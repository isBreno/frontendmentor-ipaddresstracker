import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initalProps = await Document.getInitialProps(ctx)
		return initalProps
	}

	render() {
		return (
			<Html>
				<Head>
					<meta name="description" content="Don't forget check my github https://github.com/pedromdsn" />
					<meta name="author" content="Pedromdsn <me@pedromdsn.com>" />
					<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" />
				</Head>
				<body className="font-Main scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-gray-700">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
