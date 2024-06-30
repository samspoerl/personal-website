import { type Metadata } from 'next'
import Image, { ImageProps } from 'next/image'

import { GitHubIcon } from '@/components/SocialIcons'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import screenshot1 from '@/images/photos/personal-website.png'
import { Button } from '@/components/Button'
import Link from 'next/link'

interface Project {
  name: string
  description: string
  gitHubLink?: string
  demoLink?: string
  image?: ImageProps['src']
  imageSubstitute?: string
}

const projects: Project[] = [
  {
    name: 'This site!',
    description:
      "The site you're looking at is one of my projects. I built it to introduce myself and showcase my work.",
    gitHubLink: 'https://github.com/samspoerl/personal-website',
    image: screenshot1,
  },
  {
    name: 'Personal Finance App',
    description:
      "I built this app to automate my monthly financial statements. It uses Plaid to fetch balances and transactions in real time. Check out the demo using Plaid's Sandbox environment.",
    imageSubstitute: 'Coming soon!',
    // gitHubLink: 'https://github.com/samspoerl/personal-finance-app',
    // demoLink: 'https://finance.samspoerl.com',
  },
  {
    name: 'AI Assistant',
    description:
      "No, I'm not trying to compete with ChatGPT. I built this app because the free version runs older models and uses your data to train its models. I didn't want to pay for ChatGPT+ and wanted some features they didn't have yet. Plus, it was fun to build.",
    imageSubstitute: 'In progress',
  },
  {
    name: 'Notes App',
    description:
      "One of my biggest frustrations with nearly all of the note-taking apps on the market is that they all depend on title-based organization. Coming up with titles is burdensome and I feel like it stifles my creativity. I want an note-taking and journaling app that is date-based, so I don't have to create titles.",
    imageSubstitute: 'Planned',
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <>
      <div className="flex h-64 flex-row overflow-hidden rounded-lg bg-white shadow-xl dark:bg-zinc-900 dark:shadow-2xl dark:shadow-zinc-950">
        <div className="flex w-1/3 items-center justify-center">
          {project.image !== undefined ? (
            <Image
              src={project.image}
              alt=""
              className="h-full w-full object-cover"
              unoptimized
            />
          ) : (
            <p className="text-center text-xl font-medium">
              {project.imageSubstitute}
            </p>
          )}
        </div>
        <div className="flex h-full w-2/3 flex-col justify-between p-6">
          <div>
            <p className="mb-4 text-base text-lg font-semibold text-zinc-800 dark:text-zinc-100">
              {project.name}
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
          </div>
          <div className="mt-4 flex flex-row items-center justify-end gap-x-4">
            {project.gitHubLink !== undefined && (
              <Link
                href={project.gitHubLink}
                aria-label="View repository on GitHub"
              >
                <GitHubIcon className="h-10 w-10 fill-zinc-800 transition hover:fill-zinc-700 dark:fill-zinc-500 dark:hover:fill-zinc-400" />
              </Link>
            )}

            {project.demoLink !== undefined && (
              <Button href={project.demoLink} variant="primary">
                Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                  <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
                </svg>
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Personal projects',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Personal projects."
      intro={
        <>
          <p>
            I’ve worked on tons of little projects over the years but these are
            the ones that I’m most proud of. I work on side projects to learn
            and build a portfolio, but the strongest motivator for me is usually
            that I want the app for myself, either because I want custom
            features, don't want to pay for another service, or I want more
            control over my data.
          </p>
          <br />
          <p>
            Some of them are a work in progress, some have live demos, and many
            of them are open-source. If you see something that piques your
            interest, check out the code and contribute if you have ideas for
            how it can be improved.
          </p>
        </>
      }
    >
      <ul role="list" className="mx-auto flex max-w-7xl flex-col gap-y-12">
        {projects.map((project, i) => (
          <ProjectCard key={i++} project={project} />
        ))}
      </ul>
    </SimpleLayout>
  )
}
