import React, { useState, useEffect, useRef } from 'react';

const teams = [
  {
    id: 'editorial',
    slug: '01',
    label: 'Editorial Team',
    tagline: 'Guardians of voice, quality & craft',
    color: '#36615A',
    colorLight: 'rgba(54,97,90,0.08)',
    description: 'They work alongside creators to ensure every book that leaves our platform is one worth holding. From first draft to final proof, they are the invisible hands behind every great sentence.',
    members: [
      { initials: 'NK', name: 'Neha Krishnan', role: 'Head of Editorial', image: null, bio: '15 years in literary publishing across India and the UK.' },
      { initials: 'AV', name: 'Arjun Verma', role: 'Senior Editor', image: null, bio: 'Specialises in narrative non-fiction and memoir.' },
      { initials: 'SS', name: 'Shruti Singh', role: 'Copyeditor', image: null, bio: 'Obsessive about consistency, clarity, and the Oxford comma.' },
      { initials: 'DM', name: 'Divya Menon', role: 'Content Strategist', image: null, bio: 'Bridges the gap between author vision and reader experience.' },
      { initials: 'RP', name: 'Rahul Pillai', role: 'Editorial Associate', image: null, bio: 'Manages the editorial pipeline and author onboarding.' },
      { initials: 'IT', name: 'Isha Tiwari', role: 'Proofreader', image: null, bio: 'The last line of defence before a book goes to print.' },
    ],
  },
  {
    id: 'webdev',
    slug: '02',
    label: 'Web Development Team',
    tagline: 'Architects of the invisible',
    color: '#8B542B',
    colorLight: 'rgba(139,84,43,0.08)',
    description: 'They build the infrastructure that lets creativity flow freely. Fast, reliable, obsessively tested — so creators never notice the machinery humming beneath their work.',
    members: [
      { initials: 'VN', name: 'Vikram Nair', role: 'Head of Engineering', image: null, bio: 'Formerly at Razorpay. Believes every millisecond of latency is a broken promise.' },
      { initials: 'AG', name: 'Ananya Gupta', role: 'Frontend Lead', image: null, bio: 'Turns complex design systems into elegant, accessible interfaces.' },
      { initials: 'SK', name: 'Siddharth Kumar', role: 'Backend Engineer', image: null, bio: 'Architect of the print-rendering pipeline that processes 40k+ books a month.' },
      { initials: 'MR', name: 'Meera Rao', role: 'Full-Stack Engineer', image: null, bio: 'Owns the creator dashboard end-to-end — from first upload to final order.' },
      { initials: 'KP', name: 'Kiran Pandey', role: 'DevOps Engineer', image: null, bio: 'Keeps everything at 99.97% uptime. Quietly heroic.' },
      { initials: 'TB', name: 'Tanvi Bhat', role: 'QA Engineer', image: null, bio: 'Finds bugs before they find our users.' },
    ],
  },
  {
    id: 'bizdev',
    slug: '03',
    label: 'Business Development Team',
    tagline: 'Building the publishing movement',
    color: '#A7703D',
    colorLight: 'rgba(167,112,61,0.08)',
    description: 'They build the partnerships, channels, and relationships that turn a great product into a global publishing movement. Every deal they close opens a door for another creator.',
    members: [
      { initials: 'HA', name: 'Harsh Agarwal', role: 'Head of Biz Dev', image: null, bio: 'Closed our first 50 distribution partnerships across 12 countries.' },
      { initials: 'PC', name: 'Pooja Choudhary', role: 'Partnerships Manager', image: null, bio: 'Manages relationships with printers, distributors, and retail chains.' },
      { initials: 'RS', name: 'Raj Sharma', role: 'Growth Strategist', image: null, bio: 'Owns the creator acquisition funnel and referral programmes.' },
      
    ],
  },
];

function MemberPhoto({ member, color }) {
  const [err, setErr] = useState(false);
  if (member.image && !err) {
    return (
      <img
        src={member.image}
        alt={member.name}
        onError={() => setErr(true)}
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
      />
    );
  }
  return (
    <div style={{
      width: '100%', height: '100%',
      background: `linear-gradient(160deg, ${color} 0%, ${color}cc 100%)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Cormorant Garamond', serif", fontSize: 28,
      fontWeight: 300, color: '#F3F0E1', letterSpacing: '0.05em',
    }}>
      {member.initials}
    </div>
  );
}

export default function TeamPage() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(new Set());
  const [hovered, setHovered] = useState(null);
  const refs = useRef({});

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) setVisible(p => new Set([...p, e.target.dataset.vi]));
      }),
      { threshold: 0.07 }
    );
    Object.values(refs.current).forEach(el => el && obs.observe(el));
    return () => { clearTimeout(t); obs.disconnect(); };
  }, []);

  const r = (k) => (el) => { refs.current[k] = el; };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Libre+Baskerville:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        :root{
          --forest:#36615A;--saddle:#8B542B;--copper:#A7703D;
          --egg:#F3F0E1;--cream:#F7F4EC;--porcelain:#FDFFFC;
          --ink:#1a1816;--muted:#4a4540;--faint:#7a7570;--rule:#d0c8b0;
        }
        *.fp *{box-sizing:border-box;margin:0;padding:0}
        .tp{background:var(--porcelain);font-family:'DM Sans',sans-serif;color:var(--ink);overflow-x:hidden;min-height:100vh}

        /* NAV */
        .tp-nav{display:flex;align-items:center;justify-content:space-between;padding:20px 52px;border-bottom:1px solid var(--rule);opacity:0;transform:translateY(-10px);transition:opacity .6s,transform .6s}
        .tp-nav.v{opacity:1;transform:none}
        .tp-logo{font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:400;color:var(--forest);text-decoration:none}
        .tp-crumb{font-size:12px;color:var(--faint);display:flex;align-items:center;gap:8px}
        .tp-crumb b{color:var(--copper);font-weight:500}

        /* HERO */
        .tp-hero{max-width:1260px;margin:0 auto;padding:88px 52px 72px;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:end;opacity:0;transform:translateY(32px);transition:opacity .9s .1s,transform .9s .1s}
        .tp-hero.v{opacity:1;transform:none}
        .tp-overline{display:inline-flex;align-items:center;gap:12px;font-size:10px;font-weight:500;letter-spacing:.22em;text-transform:uppercase;color:var(--copper);margin-bottom:28px}
        .tp-overline::before{content:'';width:32px;height:1px;background:var(--copper)}
        .tp-h1{font-family:'Cormorant Garamond',serif;font-size:clamp(52px,7vw,100px);font-weight:300;line-height:.92;letter-spacing:-.038em;color:var(--forest);margin-bottom:44px}
        .tp-h1 em{font-style:italic;color:var(--saddle)}
        .tp-hero-meta{display:flex;align-items:center;gap:20px;font-size:13px;font-weight:300;color:var(--faint);letter-spacing:.04em}
        .tp-hero-meta::before{content:'';width:36px;height:1px;background:var(--rule)}
        .tp-hero-r p{font-size:17px;font-weight:300;line-height:1.88;color:var(--muted);margin-bottom:36px}
        .tp-hero-pull{font-family:'Libre Baskerville',serif;font-size:18px;font-style:italic;color:var(--forest);line-height:1.55;padding:24px 0 24px 28px;border-left:2px solid var(--copper)}

        /* TEAM NAV TABS */
        .tp-tabs-wrap{border-bottom:1px solid var(--rule);position:sticky;top:0;background:var(--porcelain);z-index:40}
        .tp-tabs{max-width:1260px;margin:0 auto;padding:0 52px;display:flex;gap:0}
        .tp-tab{font-size:12px;font-weight:400;letter-spacing:.1em;text-transform:uppercase;color:var(--faint);padding:18px 28px 18px 0;border:none;background:transparent;cursor:pointer;transition:color .2s;border-bottom:2px solid transparent;margin-bottom:-1px;display:flex;align-items:center;gap:10px}
        .tp-tab:hover{color:var(--forest)}
        .tp-tab.active{color:var(--forest);border-bottom-color:var(--forest)}
        .tp-tab-dot{width:6px;height:6px;border-radius:50%;flex-shrink:0}

        /* SECTION */
        .tp-section{opacity:0;transform:translateY(36px);transition:opacity .85s,transform .85s}
        .tp-section.v{opacity:1;transform:none}
        .tp-section-wrap{max-width:1260px;margin:0 auto;padding:72px 52px 80px}

        /* SECTION HEADER */
        .tp-sec-head{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;margin-bottom:64px;padding-bottom:40px;border-bottom:1px solid var(--rule)}
        .tp-sec-slug{font-family:'Cormorant Garamond',serif;font-size:80px;font-weight:300;color:var(--rule);line-height:1;letter-spacing:-.04em;margin-bottom:0}
        .tp-sec-title{font-family:'Cormorant Garamond',serif;font-size:clamp(36px,4vw,52px);font-weight:300;line-height:1.05;letter-spacing:-.03em;color:var(--forest);margin-bottom:12px}
        .tp-sec-title em{font-style:italic;color:var(--saddle)}
        .tp-sec-tagline{font-size:11px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--copper);margin-bottom:20px}
        .tp-sec-desc{font-size:15px;font-weight:300;line-height:1.85;color:var(--muted);max-width:480px}

        /* MEMBERS GRID */
        .tp-members{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;background:var(--rule)}

        /* MEMBER CARD */
        .tp-card{background:var(--cream);overflow:hidden;cursor:default;transition:background .25s}
        .tp-card:hover{background:#f2efe5}
        .tp-card-photo{width:100%;aspect-ratio:3/4;overflow:hidden;position:relative;background:var(--cream)}
        .tp-card-body{padding:24px 28px 28px}
        .tp-card-name{font-family:'Cormorant Garamond',serif;font-size:24px;font-weight:400;color:var(--forest);letter-spacing:-.02em;line-height:1.1;margin-bottom:6px}
        .tp-card-role{font-size:10px;font-weight:500;letter-spacing:.16em;text-transform:uppercase;margin-bottom:14px;padding-bottom:14px;border-bottom:1px solid var(--rule)}
        .tp-card-bio{font-size:13px;font-weight:300;color:var(--faint);line-height:1.75}
        .tp-card-hint{position:absolute;bottom:10px;left:0;right:0;text-align:center;font-size:9px;letter-spacing:.06em;color:rgba(243,240,225,.4);pointer-events:none}

        /* DIVIDER */
        .tp-sec-div{max-width:1260px;margin:0 auto;padding:0 52px}
        .tp-sec-div-line{height:1px;background:linear-gradient(to right,transparent,var(--rule) 15%,var(--rule) 85%,transparent)}

        /* BOTTOM STRIP */
        .tp-bottom{border-top:1px solid var(--rule);opacity:0;transform:translateY(20px);transition:opacity .7s,transform .7s}
        .tp-bottom.v{opacity:1;transform:none}
        .tp-bottom-in{max-width:1260px;margin:0 auto;padding:32px 52px;display:flex;align-items:center;justify-content:space-between;gap:24px}
        .tp-bottom-label{font-size:12px;font-weight:300;color:var(--faint);letter-spacing:.04em}
        .tp-bottom-btn{display:inline-flex;align-items:center;gap:10px;font-size:12px;font-weight:400;letter-spacing:.12em;text-transform:uppercase;color:var(--forest);text-decoration:none;padding:10px 22px;border:1px solid var(--rule);transition:all .2s;background:transparent}
        .tp-bottom-btn:hover{border-color:var(--forest);background:var(--forest);color:var(--egg)}

        @media(max-width:960px){
          .tp-nav{padding:16px 28px}
          .tp-hero{grid-template-columns:1fr;gap:36px;padding:56px 28px 56px}
          .tp-tabs{padding:0 28px;overflow-x:auto}
          .tp-section-wrap{padding:48px 28px 64px}
          .tp-sec-head{grid-template-columns:1fr;gap:24px}
          .tp-members{grid-template-columns:repeat(2,1fr)}
          .tp-bottom{padding:48px 28px}
          .tp-bottom-in{grid-template-columns:1fr;gap:32px}
        }
        @media(max-width:600px){
          .tp-h1{font-size:50px}
          .tp-members{grid-template-columns:1fr}
          .tp-tab{padding:14px 20px 14px 0;font-size:10px}
        }
      `}</style>

      <div className="tp">

        {/* NAV */}
        <nav className={`tp-nav${mounted ? ' v' : ''}`}>
          <a href="/" className="tp-logo">Inkwell</a>
          <div className="tp-crumb">
            <a href="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</a>
            <span style={{ color: 'var(--rule)' }}>—</span>
            <b>Team</b>
          </div>
        </nav>

        {/* HERO */}
        <div className={`tp-hero${mounted ? ' v' : ''}`}>
          <div>
            <p className="tp-overline">The team</p>
            <h1 className="tp-h1">People who make<br /><em>great books</em><br />possible.</h1>
            <p className="tp-hero-meta">3 teams · 17 people · 1 purpose</p>
          </div>
          <div className="tp-hero-r">
            <p>Behind every book we help create, there is a team of people who genuinely care — about words, about craft, about the creator holding a finished copy in their hands for the first time.</p>
            <blockquote className="tp-hero-pull">"We hire people who care about publishing more than they care about their job titles."</blockquote>
          </div>
        </div>

        {/* STICKY TABS */}
        <div className="tp-tabs-wrap">
          <div className="tp-tabs">
            {teams.map(team => (
              <button
                key={team.id}
                className="tp-tab"
                onClick={() => {
                  document.getElementById(team.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                <div className="tp-tab-dot" style={{ background: team.color }} />
                {team.label}
              </button>
            ))}
          </div>
        </div>

        {/* TEAMS */}
        {teams.map((team, ti) => (
          <div key={team.id} id={team.id}>
            {ti > 0 && (
              <div className="tp-sec-div" ref={r('div' + ti)}>
                <div className="tp-sec-div-line" />
              </div>
            )}
            <div
              className={`tp-section${visible.has('sec' + ti) ? ' v' : ''}`}
              data-vi={'sec' + ti}
              ref={r('sec' + ti)}
              style={{ transitionDelay: `${ti * 0.05}s` }}
            >
              <div className="tp-section-wrap">
                {/* Section Header */}
                <div className="tp-sec-head">
                  <div>
                    <p className="tp-sec-slug">{team.slug}</p>
                  </div>
                  <div>
                    <p className="tp-sec-tagline" style={{ color: team.color }}>{team.tagline}</p>
                    <h2 className="tp-sec-title" style={{ color: team.color }}>{team.label.split(' ').slice(0, -1).join(' ')} <em>{team.label.split(' ').slice(-1)[0]}</em></h2>
                    <p className="tp-sec-desc">{team.description}</p>
                  </div>
                </div>

                {/* Members */}
                <div className="tp-members">
                  {team.members.map((m, mi) => (
                    <div key={m.initials + mi} className="tp-card">
                      <div className="tp-card-photo">
                        <MemberPhoto member={m} color={team.color} />
                        {!m.image && (
                          <div className="tp-card-hint">Add image URL in members array</div>
                        )}
                      </div>
                      <div className="tp-card-body">
                        <h3 className="tp-card-name">{m.name}</h3>
                        <p className="tp-card-role" style={{ color: team.color }}>{m.role}</p>
                        <p className="tp-card-bio">{m.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* BOTTOM STRIP */}
        <div className={`tp-bottom${visible.has('bot') ? ' v' : ''}`} data-vi="bot" ref={r('bot')}>
          <div className="tp-bottom-in">
            <p className="tp-bottom-label">Think you belong on this team?</p>
            <a href="/careers" className="tp-bottom-btn">
              See open roles
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </>
  );
}