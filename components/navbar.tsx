import { Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import type { NextComponentType } from 'next'
import { useEffect } from 'react'
import { NavbarAction } from '@import/actions'
import { NavbarStyles as styles } from '@import/styles/components'

const Navbar: NextComponentType = () => {
	useEffect(() => {
		NavbarAction(
			styles['header'],
			styles['header-top'],
			styles['active'],
			styles['navbar'],
			styles['mobile-nav-toggle'],
			styles['navbar-mobile']
		)
	}, [])
	return (
		<>
			<header id={styles['header']}>
				<Box className={`${styles['container-header']} container`}>
					<Typography variant='h1'>Koushik Puppala</Typography>
					<Typography variant='h2'>
						I&apos;m a <span id='typed'></span> from India
					</Typography>

					<nav
						id='navbar'
						className={styles['navbar']}>
						<ul>
							<li>
								<a
									className={`nav-link ${styles['active']}`}
									href={`#${styles['header']}`}>
									Home
								</a>
							</li>
							<li>
								<a
									className='nav-link'
									href='#about'>
									About
								</a>
							</li>
							<li>
								<a
									className='nav-link'
									href='#portfolio'>
									Portfolio
								</a>
							</li>
							<li>
								<a
									className='nav-link'
									href='#contact'>
									Contact
								</a>
							</li>
						</ul>
						<i
							id={styles['mobile-nav-toggle']}
							className='bi bi-list'></i>
					</nav>

					<Box className={styles['social-links']}>
						<Link
							href='/linkedin'
							target='_blank'
							rel='noreferrer'
							className='bi bi-linkedin'></Link>
						<Link
							href='/github'
							target='_blank'
							rel='noreferrer'
							className='bi bi-github'></Link>
						<Link
							href='/discord'
							target='_blank'
							rel='noreferrer'
							className='bi bi-discord'></Link>
						<Link
							href='/instagram'
							target='_blank'
							rel='noreferrer'
							className='bi bi-instagram'></Link>
						<Link
							href='/twitter'
							target='_blank'
							rel='noreferrer'
							className='bi bi-twitter'></Link>
						<Link
							href='/facebook'
							target='_blank'
							rel='noreferrer'
							className='bi bi-facebook'></Link>
					</Box>
				</Box>
			</header>
		</>
	)
}

export default Navbar
