import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Carve Outs',
  description: 'Stuff I use, gadgets I love, and other things I recommend.',
}

export default function CarveOuts() {
  return (
    <SimpleLayout
      title="Books, gadgets, and other stuff I recommend."
      intro={
        <>
          "This page was inspired by my favorite podcast,{' '}
          <a
            className="text-zinc-800 underline dark:text-zinc-100"
            href="https://www.acquired.fm"
          >
            Acquired.fm
          </a>
          . At the end of every episode they share their “carve outs” -
          essentially recommendations for stuff they've found cool lately. As a
          big nerd with high standards for what I buy, I have more than a few
          carve outs of my own. Here’s a big list of all of my favorite stuff."
        </>
      }
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="Lenovo ThinkPad X1 Carbon (Gen 10), Intel i7 Processor, 16GB RAM">
            I’ve been a die-hard Windows user for years. That may be a
            controversial opinion in this line of work, but I stand by it. I
            love the (slightly-more) open ecosystem, and I love using the same
            OS for both work and personal projects. Plus, my parents both run
            Windows and they always seem to need technical support.
            <br />
            <br />
            Windows aside, I actually wouldn’t recommend this particular laptop.
            It’s noisy and the battery life is bad. My old ThinkPad didn’t have
            these issues, nor does my work machine (the enterprise work-horse
            T-14).
          </Tool>
          <Tool title="LG UltraFine 32 Inch 4K Monitor">
            I freaking love this monitor. It’s simple and high resolution. I
            tried many other monitors before eventually landing at this one.
            I’ve had the dual monitor setup, and there are advantages to that,
            but with two computers connected via a KVM switch, there were just
            too many cables and it made my workspace feel cluttered.
            <br />
            <br />I also tried a massive 45 inch curved LG OLED. It was a sweet
            monitor, the perfect size. The only problem was the pixel density.
            It was QHD but there was so much screen space that the resolution
            was actually worse than on my old FHD 24 inch monitors. Someday,
            when 4K or even 8K becomes the norm in these massive curved
            monitors, I’ll get one. The LG I have today is great because it’s
            simple and high res.
          </Tool>
          <Tool title="Logitech K750 Wireless Solar Keyboard">
            After getting tired of constantly recharging my old keyboard, I
            bought this solar-powered one. I’ve had it for over a year and
            haven’t had to charge it once. I like the laptop-like feel better,
            like on the MX Master, but it’s worth it not to constantly be
            plugging it in.
          </Tool>
          <Tool title="FlexiSpot Standing Desk - 60 Inch">
            As someone with horrible posture, this was a game changer. When I
            feel myself slouching, I’ll make myself stand for punishment. My
            only regret is that I didn’t buy this sooner.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Books">
          <Tool title="The Art of Fielding by Chad Harbach">
            A novel set along the coast of Lake Michigan in Wisconsin, where I’m
            from. It follows a young baseball player through college.
            Beautifully written and you fall in love with the characters. If you
            don’t like baseball, I still think you’d enjoy this book. If you do
            like baseball, what are you waiting for?
          </Tool>
          <Tool title="The Time Traveller's Wife by Audrey Neffeneger">
            One of my favorite books of all time. It follows two protagonists,
            Henry and Clare. Henry is (no surprise) a time traveller. Not only
            is the prose and character development great, but the concept of
            time travel is really interesting.
            <br />
            <br />
            I’ve both read this book and listened to the audiobook. I recommend
            both, and if you like audiobooks, this is one of the best. The
            narrators have awesome voices, and they trade off depending on which
            character’s perspective it is.
          </Tool>
          <Tool title="The Mistborn Saga">
            I’m a huge fantasy nerd and this trilogy is my favorite. Sanderson
            is all about world-building. He crafts clever characters and even
            cleverer plots. I’ve read it twice and devoured it both times.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
