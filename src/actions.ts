'use server'

import { captureException } from '@sentry/nextjs'
import { createTransport } from 'nodemailer'

export const handleSubmit = async (
	prevState: {
		statusCode: number
		statusMessage: string
	},
	form: FormData,
) => {
	'use server'

	const name = form.get('name')!.toString()
	const email = form.get('email')!.toString()
	const subject = form.get('subject')!.toString()
	const message = form.get('message')!.toString()

	const mailer = createTransport({
		service: 'gmail',
		auth: {
			user: process.env.USER!,
			pass: process.env.PASS!,
		},
	})

	if (prevState.statusCode === 200 || prevState.statusCode === 400) {
		return {
			statusCode: 400,
			statusMessage: 'You have already submitted a message. Please wait for a response. Thank you!',
		}
	}

	try {
		await mailer.sendMail({
			from: `Admin Contact Form <me@koushikpuppala.com>`,
			replyTo: email,
			sender: email,
			to: 'message@koushikpuppala.com',
			subject: `${name} (${email}) sent you a message`,
			html: `<b>Subject:</b> ${subject}<br /><br /><b>Message:</b> ${message}`,
		})

		return {
			statusCode: 200,
			statusMessage: 'Submitted successfully, I will get back to you as soon as possible!',
		}
	} catch (error) {
		captureException(error)
		return {
			statusCode: 500,
			statusMessage: 'Something went wrong, please try again later.',
		}
	}
}
