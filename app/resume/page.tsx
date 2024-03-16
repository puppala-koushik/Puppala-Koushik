import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Resume',
	openGraph: {
		title: 'Resume',
	},
	twitter: {
		title: 'Resume',
	},
}

const ResumePage = () => {
	return (
		<iframe
			className='h-screen w-full rounded-2xl'
			src='/koushikpuppala_resume.pdf'
			allowTransparency={true}
			loading='lazy'
			title='Resume'>
			<span className='sr-only'>Koushikpuppala Resume</span>
		</iframe>
	)
}

export default ResumePage
