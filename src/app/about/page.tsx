import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import { getYearsExperience } from '@/lib/utils'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Sam Spoerl and I’m a coding addict.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Hi, my name is Sam Spoerl. I’m a software engineer and I’ve been
              writing code for over {getYearsExperience()} years.
            </p>

            <p>
              Like many software developers, I got my start because of some
              tedious task I didn’t want to do anymore. For me, it was a report
              that required a lot of manual parsing through data in an
              home-grown ERP system. I then spent an entire summer learning SQL
              in my free time to automate that report.
            </p>

            <p>
              After that, I was forever changed. I discovered my love for
              automation and writing code. I graduated college and started a
              role as a Supply Chain Analyst. I joined the team at its
              inception. The team was effectively formed for a single initial
              purpose: to crank out reports.
            </p>

            <p>
              These reports were an immensely manual process. Our data source
              was filled with unclean data, where we needed to understand that
              “PRODUCT” and “prdct” were the same thing. We estimated that it
              took about 60 hours on average to finish a report on a single
              product.
            </p>

            <p>
              Driven by a dislike for manual processes, I learned Python to fill
              the gaps that SQL left in this process. Combining multiple queries
              with a fuzzy-wuzzy string match and pandas DataFrames, I was able
              to reduce the man hours to complete this task down to as little as
              a minute. We still had to wait for the program to run, but we were
              able to work on other, more fulfilling tasks while we waited.
            </p>

            <p>
              That began my love affair with coding. Since then, I’ve explored
              myriad other languages including R, Java, HTML/CSS, JavaScript,
              and eventually my favorite: C#.
            </p>

            <p>
              Also, as I started working less on analytics and more on pure
              software development, I began focusing in areas such as cloud
              services, Agile methodology, DevOps, and database management. As a
              member of a two-person software development team, I’ve had my hand
              in everything. No language, framework, or technology is off
              limits. This has not only satisfied my intellectual itch, but made
              me an all around better programmer.
            </p>

            <p>
              For me, coding is like a drug. I can’t imagine giving it up, I
              think about it day and night, and I do it on the weekends.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/samspoerl"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/sam-spoerl/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
