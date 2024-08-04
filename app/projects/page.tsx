import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PROJECT_DOCUMENTS, sanityQuery } from '@import/sanity'
import { ProjectSchemaProps, searchParamsProps } from '@import/types'
import { MotionDiv, MotionP, ProjectCardComponent } from '@import/components'

export const metadata: Metadata = {
	title: 'Projects',
	openGraph: { title: 'Projects' },
	twitter: { title: 'Projects' },
	alternates: { canonical: 'https://koushikpuppala.com/projects' },
}

const ProjectsPage = async ({ searchParams }: searchParamsProps) => {
	const data: ProjectSchemaProps[] = await sanityQuery(PROJECT_DOCUMENTS)

	if (data.length === 0) return notFound()

	return (
		<div className='h-full bg-primary/50'>
			<div className='h-full w-full overflow-y-auto'>
				<div className='container mx-auto h-full items-center py-6 text-left md:py-12 lg:py-24'>
					<MotionDiv direction='right' delay={0.1} className='md:px-6'>
						<p className='text-xs uppercase tracking-wider text-secondary lg:text-base'>My work</p>
						<h2 className='text-3xl font-black text-white lg:text-5xl'>Projects</h2>
					</MotionDiv>

					<MotionP
						direction='right'
						delay={0.2}
						className='mx-auto mb-2 mt-4 max-w-3xl text-justify text-sm leading-6 text-secondary md:px-6 lg:mx-0 lg:text-lg xl:max-w-5xl'>
						Following projects showcases my skills and experience through real-world examples of my work.
						Each project is briefly described with links to code repositories and live demos in it. It
						reflects my ability to solve complex problems, work with different technologies, and manage
						projects effectively.
					</MotionP>

					<ProjectCardComponent data={data} searchParams={searchParams} />
				</div>
			</div>
		</div>
	)
}

export default ProjectsPage
