/** @type {import('next').NextConfig} */

import * as nextPWA from '@ducanh2912/next-pwa'
import { withSentryConfig } from '@sentry/nextjs'

const nextConfig = nextPWA.default({
	dest: 'public',
	register: process.env.NODE_ENV !== 'development',
	disable: process.env.NODE_ENV === 'development',
	cacheOnFrontEndNav: process.env.NODE_ENV !== 'development',
	aggressiveFrontEndNavCaching: process.env.NODE_ENV !== 'development',
	workboxOptions: {
		disableDevLogs: process.env.NODE_ENV !== 'development',
		cleanupOutdatedCaches: process.env.NODE_ENV !== 'development',
	},
})({
	reactStrictMode: process.env.NODE_ENV !== 'development',
	experimental: { instrumentationHook: true, reactCompiler: true },
	output: process.env.ENVIRONMENT === 'production' ? 'standalone' : undefined,
	images: { remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io', port: '', pathname: '**' }] },
	redirects: async () => {
		return [
			{ source: '/github', destination: 'https://github.com/koushikpuppala', permanent: true },
			{ source: '/github/:params', destination: 'https://github.com/koushikpuppala/:params', permanent: true },
			{ source: '/linkedin', destination: 'https://www.linkedin.com/in/koushikpuppala', permanent: true },
			{ source: '/twitter', destination: 'https://twitter.com/puppala_koushik', permanent: true },
			{ source: '/instagram', destination: 'https://www.instagram.com/koushikpuppala', permanent: true },
			{ source: '/facebook', destination: 'https://www.facebook.com/puppalakoushik', permanent: true },
			{ source: '/discord', destination: 'https://discordapp.com/users/735813371433058354', permanent: true },
			{ source: '/skype', destination: 'https://join.skype.com/invite/vfWLRyA9iFQc', permanent: true },
			{ source: '/youtube', destination: 'https://www.youtube.com/@koushikpuppala', permanent: true },
			{ source: '/server', destination: 'https://discord.gg/MsJ99j5Bcv', permanent: true },
			{ source: '/status', destination: 'https://status.koushikpuppala.com/', permanent: true },
		]
	},
})

const sentryBuildOptions = {
	org: 'koushikpuppala',
	project: 'koushikpuppala',
	release: process.env.npm_package_version,
	authToken: process.env.SENTRY_AUTH_TOKEN,
	silent: process.env.NODE_ENV === 'production',
}

const sentryOptions = {
	disableLogger: process.env.NODE_ENV === 'production',
	hideSourceMaps: process.env.NODE_ENV === 'production',
	widenClientFileUpload: process.env.NODE_ENV !== 'production',
	tunnelRoute: process.env.NODE_ENV === 'production' ? '/monitoring' : undefined,
}

export default withSentryConfig(nextConfig, sentryBuildOptions, sentryOptions)
