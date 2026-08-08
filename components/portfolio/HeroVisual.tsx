import Image from "next/image";

interface HeroVisualProps {
  readonly portraitImage?: string | null;
}

export function HeroVisual({ portraitImage = null }: HeroVisualProps) {
  return (
    <div aria-label="Composição visual de desenvolvimento" className="hero-visual" role="img">
      <div aria-hidden="true" className="hero-visual__grid" />
      <div aria-hidden="true" className="hero-visual__orb hero-visual__orb--violet" />
      <div aria-hidden="true" className="hero-visual__orb hero-visual__orb--blue" />
      <div aria-hidden="true" className="hero-visual__path hero-visual__path--one" />
      <div aria-hidden="true" className="hero-visual__path hero-visual__path--two" />

      <div className="hero-visual__code code-card code-card--main">
        <div className="code-card__toolbar">
          <span />
          <span />
          <span />
          <p>building.ts</p>
        </div>
        <pre>
          <code>
            <span className="code-violet">const</span> future = {"{"}
            {"\n"}  idea: <span className="code-blue">{'"real solutions"'}</span>,
            {"\n"}  stack: [<span className="code-blue">{'"Python"'}</span>, <span className="code-blue">{'"Java"'}</span>],
            {"\n"}  ship: <span className="code-violet">true</span>
            {"\n"}{"}"};
          </code>
        </pre>
      </div>

      {portraitImage ? (
        <div className="hero-visual__portrait">
          <Image
            alt="Retrato de Victor"
            fill
            priority
            sizes="(max-width: 580px) 50vw, 18rem"
            src={portraitImage}
          />
        </div>
      ) : (
        <div className="hero-visual__core">
          <span className="hero-visual__core-ring hero-visual__core-ring--one" />
          <span className="hero-visual__core-ring hero-visual__core-ring--two" />
          <div className="hero-visual__monogram">V.</div>
          <p>building</p>
          <span>products</span>
        </div>
      )}

      <div className="hero-visual__note hero-visual__note--top">
        <span className="note-dot" />
        <p>backend <b>+</b> web</p>
      </div>
      <div className="hero-visual__note hero-visual__note--bottom">
        <span className="note-spark">✦</span>
        <p>autônomo pro<br /><span>in progress</span></p>
      </div>
      <p className="hero-visual__caption">Área visual pronta para receber um retrato de perfil.</p>
    </div>
  );
}
