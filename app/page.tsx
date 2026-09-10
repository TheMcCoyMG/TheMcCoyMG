import Image from "next/image"
import "./styles.css"

const logo = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_6pofin6pofin6pof.jfif-DT90Xfrfodzif2AABZtAUk9In040lp.jpeg"
const heroImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tse7NTbDHakCFProB62o6zFOuhWc40.png"

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Rotimi Ogundele home">
          <span className="brand-mark">R</span>
          <span>ROTIMI OGUNDELE</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#journey">Journey</a>
          <a href="#principles">Principles</a>
          <a href="#updates">Updates</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Get in touch <span>↗</span></a>
      </header>

      <section className="campaign-strip" aria-label="Community highlights">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div className="strip-card" key={item}>
            <Image src={heroImage} alt="Rotimi Ogundele community highlight" fill sizes="170px" />
          </div>
        ))}
      </section>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> PUBLIC PROFILE</p>
          <h1>A better<br />future<br /><em>starts</em> with<br />us.</h1>
          <p className="intro">A public record of service, conviction, and the work still ahead.</p>
          <a className="hero-link" href="#about">Explore the journey <span>↓</span></a>
        </div>
        <div className="hero-visual">
          <div className="logo-card">
            <Image src={logo} alt="Rotimi Ogundele Solution logo" width={400} height={267} priority />
          </div>
          <div className="hero-photo">
            <Image src={heroImage} alt="Rotimi Ogundele speaking with community members" fill sizes="(max-width: 800px) 100vw, 52vw" priority />
          </div>
          <p className="caption">People first. Progress always.</p>
        </div>
      </section>

      <section className="statement" id="about">
        <p className="eyebrow"><span /> THE WORK</p>
        <h2>Leadership is not a title.<br /><em>It is a promise kept.</em></h2>
      </section>

      <footer id="contact"><span>ROTIMI OGUNDELE</span><a href="mailto:hello@rotimogundele.com">Start a conversation ↗</a></footer>
    </main>
  )
}
