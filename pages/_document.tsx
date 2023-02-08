// pages/_document.js
import Document, {
	DocumentContext,
	DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document';

export default class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		// const sheet = new ServerStyleSheet();
		// const originalRenderPage = ctx.renderPage;

		const initialProps = await Document.getInitialProps(ctx);
		return initialProps;
	}

	render() {
		return (
			<Html id='mainHtml'>
				<Head>
					<meta
						name='description'
						content='Accelerating Digital Transformation'
					/>
					<link rel='icon' type='image/png' href='images/favicon.png' />
					<meta
						name='description'
						content='We build innovative software solutions'
					/>
					<meta
						name='keywords'
						content='Intrapair, Intrapair Technologies Limited, Intrapair.com, Intrapair company, software company, software, webapp, website, blockchain, data engineering, devops, cloud computing, big data, data pipeline, data science, data analytics, open source'
					/>
					<meta property='og:url' content='https://intrapair.com/' />
					<meta
						property='og:description'
						content='We build innovative software solutions'
					/>
					<meta
						property='og:image'
						content='https://intrapair.com/images/favicon.png'
					/>
					<meta name='theme-color' content='#185fa1' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
