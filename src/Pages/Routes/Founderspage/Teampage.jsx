import React, { useState, useEffect, useRef } from 'react';

/*
  Color palette:
  --color-forest:    #36615A  (deep teal-green)
  --color-saddle:    #8B542B  (warm brown)
  --color-copper:    #A7703D  (copper/amber)
  --color-eggshell:  #F3F0E1  (warm off-white surface)
  --color-porcelain: #FDFFFC  (page background)
*/

const teams = [
  {
    id: 'editorial',
    slug: '01',
    label: 'Editorial',
    tagline: 'Guardians of voice, quality & craft',
    color: '#36615A',
    colorMid: '#4e8a81',
    colorPale: '#eaf2f1',
    description:
      'They work alongside creators to ensure every book that leaves our platform is one worth holding. From first draft to final proof — the invisible hands behind every great sentence.',
    members: [
      { initials: 'NK', name: 'Neha Krishnan',  role: 'Head of Editorial',   image: null, bio: '15 years in literary publishing across India and the UK.' },
      { initials: 'AV', name: 'Arjun Verma',    role: 'Senior Editor',       image: null, bio: 'Specialises in narrative non-fiction and memoir.' },
      { initials: 'SS', name: 'Shruti Singh',   role: 'Copyeditor',          image: null, bio: 'Obsessive about consistency, clarity, and the Oxford comma.' },
      { initials: 'DM', name: 'Divya Menon',    role: 'Content Strategist',  image: null, bio: 'Bridges the gap between author vision and reader experience.' },
      { initials: 'RP', name: 'Rahul Pillai',   role: 'Editorial Associate', image: null, bio: 'Manages the editorial pipeline and author onboarding.' },
      { initials: 'IT', name: 'Isha Tiwari',    role: 'Proofreader',         image: null, bio: 'The last line of defence before a book goes to print.' },
    ],
  },
  {
    id: 'webdev',
    slug: '02',
    label: 'Engineering',
    tagline: 'Architects of the invisible',
    color: '#8B542B',
    colorMid: '#b5703a',
    colorPale: '#f5ede4',
    description:
      'They build the infrastructure that lets creativity flow freely. Fast, reliable, obsessively tested — so creators never notice the machinery humming beneath their work.',
    members: [
      { initials: 'VN', name: 'Vikram Nair',     role: 'Head of Engineering', image: null, bio: 'Formerly at Razorpay. Believes every millisecond of latency is a broken promise.' },
      { initials: 'AG', name: 'Ananya Gupta',    role: 'Frontend Lead',       image: null, bio: 'Turns complex design systems into elegant, accessible interfaces.' },
      { initials: 'SK', name: 'Siddharth Kumar', role: 'Backend Engineer',    image: null, bio: 'Architect of the print-rendering pipeline that processes 40k+ books a month.' },
      { initials: 'MR', name: 'Meera Rao',       role: 'Full-Stack Engineer', image: null, bio: 'Owns the creator dashboard end-to-end — from first upload to final order.' },
      { initials: 'KP', name: 'Kiran Pandey',    role: 'DevOps Engineer',     image: null, bio: 'Keeps everything at 99.97% uptime. Quietly heroic.' },
      { initials: 'TB', name: 'Tanvi Bhat',      role: 'QA Engineer',         image: null, bio: 'Finds bugs before they find our users.' },
    ],
  },
  {
    id: 'bizdev',
    slug: '03',
    label: 'Biz Dev',
    tagline: 'Building the publishing movement',
    color: '#A7703D',
    colorMid: '#c9904f',
    colorPale: '#f8f0e6',
    description:
      'They build the partnerships, channels, and relationships that turn a great product into a global publishing movement. Every deal they close opens a door for another creator.',
    members: [
      { initials: 'HA', name: 'Harsh Agarwal',   role: 'Head of Biz Dev',      image: null, bio: 'Closed our first 50 distribution partnerships across 12 countries.' },
      { initials: 'PC', name: 'Pooja Choudhary', role: 'Partnerships Manager', image: null, bio: 'Manages relationships with printers, distributors, and retail chains.' },
      { initials: 'RS', name: 'Raj Sharma',       role: 'Growth Strategist',    image: null, bio: 'Owns the creator acquisition funnel and referral programmes.' },
    ],
  },
];

/* ── Avatar ── */
function Avatar({ member, color, colorPale }) {
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
      background: colorPale,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* subtle dot grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle, ${color}28 1px, transparent 1px)`,
        backgroundSize: '28px 28px',
      }} />
      {/* corner brackets */}
      <div style={{ position: 'absolute', top: 24, left: 24, width: 36, height: 1, background: color, opacity: .35 }} />
      <div style={{ position: 'absolute', top: 24, left: 24, width: 1, height: 36, background: color, opacity: .35 }} />
      <div style={{ position: 'absolute', bottom: 24, right: 24, width: 36, height: 1, background: color, opacity: .35 }} />
      <div style={{ position: 'absolute', bottom: 24, right: 24, width: 1, height: 36, background: color, opacity: .35 }} />
      {/* big initials */}
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 88, fontWeight: 300,
        color, letterSpacing: '0.04em',
        lineHeight: 1, position: 'relative', zIndex: 1,
      }}>
        {member.initials}
      </div>
      <div style={{
        position: 'relative', zIndex: 1,
        marginTop: 14, fontSize: 9, fontWeight: 500,
        letterSpacing: '.22em', textTransform: 'uppercase',
        color, opacity: .5, fontFamily: "'DM Sans', sans-serif",
      }}>
        {member.role}
      </div>
    </div>
  );
}

/* ── Member Row ── */
function MemberCard({ member, color, colorPale, reverse, cardIdx }) {
  const [vis, setVis] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.07 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        borderBottom: '1px solid #e8e2d4',
        minHeight: 540,
        opacity: vis ? 1 : 0,
        transform: vis ? 'none' : `translateY(44px)`,
        transition: `opacity 0.7s ${cardIdx * 0.07}s ease, transform 0.7s ${cardIdx * 0.07}s ease`,
      }}
    >
      {/* Photo side */}
      <div style={{
        order: reverse ? 2 : 1,
        minHeight: 540,
        overflow: 'hidden',
        position: 'relative',
        borderRight: reverse ? 'none' : '1px solid #e8e2d4',
        borderLeft: reverse ? '1px solid #e8e2d4' : 'none',
      }}>
        <Avatar member={member} color={color} colorPale={colorPale} />
        {/* index label */}
        <div style={{
          position: 'absolute',
          bottom: 24,
          left: reverse ? 'auto' : 24,
          right: reverse ? 24 : 'auto',
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 11, fontStyle: 'italic',
          color, opacity: .5, letterSpacing: '.06em',
        }}>
          {String(cardIdx + 1).padStart(2, '0')} — {member.role}
        </div>
      </div>

      {/* Info side */}
      <div style={{
        order: reverse ? 1 : 2,
        background: '#FDFFFC',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: reverse ? '64px 72px 64px 64px' : '64px 64px 64px 72px',
      }}>
        {/* role tag */}
        <div style={{
          display: 'flex', alignItems: 'center',
          gap: 12, marginBottom: 28,
          flexDirection: reverse ? 'row-reverse' : 'row',
        }}>
          <div style={{ width: 32, height: 1, background: color, flexShrink: 0 }} />
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 9, fontWeight: 500,
            letterSpacing: '.24em', textTransform: 'uppercase',
            color, margin: 0,
          }}>
            {member.role}
          </p>
        </div>

        {/* name */}
        <h3 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(42px, 4.2vw, 68px)',
          fontWeight: 300, lineHeight: .9,
          letterSpacing: '-.03em', color: '#1a1714',
          marginBottom: 32,
          textAlign: reverse ? 'right' : 'left',
        }}>
          {member.name.split(' ')[0]}<br />
          <em style={{ color, fontStyle: 'italic' }}>
            {member.name.split(' ').slice(1).join(' ')}
          </em>
        </h3>

        <div style={{ height: 1, background: '#e8e2d4', marginBottom: 28 }} />

        {/* bio */}
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 15, fontWeight: 300,
          lineHeight: 1.9, color: '#7a7368',
          maxWidth: 340,
          marginLeft: reverse ? 'auto' : 0,
          textAlign: reverse ? 'right' : 'left',
        }}>
          {member.bio}
        </p>

        <div style={{
          marginTop: 36,
          width: 20, height: 1, background: color, opacity: .45,
          marginLeft: reverse ? 'auto' : 0,
        }} />
      </div>
    </div>
  );
}

/* ── Page ── */
export default function TeamPage() {
  const [mounted, setMounted] = useState(false);
  const [heroVis, setHeroVis] = useState(false);
  const [activeTab, setActiveTab] = useState('editorial');

  useEffect(() => {
    setTimeout(() => setMounted(true), 50);
    setTimeout(() => setHeroVis(true), 150);
  }, []);

  let globalIdx = 0;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
    
       *.fp *{box-sizing:border-box;margin:0;padding:0}
        .tp { background: #FDFFFC; font-family: 'DM Sans', sans-serif; color: #1a1714; min-height: 100vh; overflow-x: hidden; }

        /* NAV */
        .tp-nav { display: flex; align-items: center; justify-content: space-between; padding: 24px 60px; border-bottom: 1px solid #e8e2d4; opacity: 0; transform: translateY(-10px); transition: opacity .5s, transform .5s; }
        .tp-nav.v { opacity: 1; transform: none; }
        .tp-logo { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 400; color: #1a1714; text-decoration: none; letter-spacing: .04em; }
        .tp-logo span { color: #36615A; }
        .tp-nav-r { display: flex; align-items: center; gap: 28px; }
        .tp-navlink { font-size: 10px; font-weight: 400; letter-spacing: .18em; text-transform: uppercase; color: #b0a898; text-decoration: none; transition: color .2s; }
        .tp-navlink:hover, .tp-navlink.cur { color: #1a1714; }
        .tp-navbtn { font-size: 10px; font-weight: 500; letter-spacing: .16em; text-transform: uppercase; color: #FDFFFC; background: #36615A; padding: 10px 22px; text-decoration: none; transition: background .2s; }
        .tp-navbtn:hover { background: #1a1714; }

        /* HERO */
        .tp-hero { padding: 120px 60px 108px; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: end; border-bottom: 1px solid #e8e2d4; opacity: 0; transform: translateY(28px); transition: opacity .9s .12s, transform .9s .12s; }
        .tp-hero.v { opacity: 1; transform: none; }
        .tp-eline { font-size: 10px; font-weight: 500; letter-spacing: .24em; text-transform: uppercase; color: #A7703D; display: flex; align-items: center; gap: 14px; margin-bottom: 36px; }
        .tp-eline::before { content: ''; width: 36px; height: 1px; background: #A7703D; flex-shrink: 0; }
        .tp-h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(58px, 8vw, 116px); font-weight: 300; line-height: .87; letter-spacing: -.04em; color: #1a1714; margin-bottom: 56px; }
        .tp-h1 em { font-style: italic; color: #36615A; }
        .tp-stats { display: flex; gap: 44px; }
        .tp-sv { font-family: 'Cormorant Garamond', serif; font-size: 44px; font-weight: 300; color: #1a1714; letter-spacing: -.02em; line-height: 1; margin-bottom: 6px; }
        .tp-sl { font-size: 9px; font-weight: 500; letter-spacing: .2em; text-transform: uppercase; color: #c4bdb0; }
        .tp-hero-r { display: flex; flex-direction: column; justify-content: flex-end; gap: 28px; }
        .tp-body { font-size: 16px; font-weight: 300; line-height: 1.95; color: #9a9088; }
        .tp-quote { font-family: 'Cormorant Garamond', serif; font-size: 21px; font-style: italic; font-weight: 300; color: #3a3530; line-height: 1.6; padding-left: 24px; border-left: 2px solid #A7703D; }

        /* TABS */
        .tp-tabs-wrap { position: sticky; top: 0; z-index: 50; background: #FDFFFC; border-bottom: 1px solid #e8e2d4; }
        .tp-tabs { display: flex; padding: 0 60px; overflow-x: auto; }
        .tp-tab { font-size: 10px; font-weight: 500; letter-spacing: .2em; text-transform: uppercase; color: #c4bdb0; padding: 20px 0; margin-right: 36px; border: none; background: transparent; cursor: pointer; border-bottom: 1px solid transparent; margin-bottom: -1px; transition: color .2s, border-color .2s; display: flex; align-items: center; gap: 9px; white-space: nowrap; }
        .tp-tab:hover { color: #7a7368; }
        .tp-tab.on { color: #1a1714; border-bottom-color: #1a1714; }
        .tp-pip { width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0; }

        /* SECTION HEADER */
        .tp-sec-hd { display: grid; grid-template-columns: 200px 1fr; border-bottom: 1px solid #e8e2d4; }
        .tp-sec-l { padding: 72px 0 72px 60px; border-right: 1px solid #e8e2d4; display: flex; flex-direction: column; justify-content: space-between; }
        .tp-slug { font-family: 'Cormorant Garamond', serif; font-size: 108px; font-weight: 300; line-height: 1; letter-spacing: -.06em; color: #ede8df; user-select: none; }
        .tp-cnt { font-size: 9px; font-weight: 500; letter-spacing: .2em; text-transform: uppercase; color: #d4cfc5; }
        .tp-sec-r { padding: 72px 60px; display: flex; flex-direction: column; justify-content: center; gap: 18px; }
        .tp-stag { font-size: 10px; font-weight: 500; letter-spacing: .22em; text-transform: uppercase; }
        .tp-stitle { font-family: 'Cormorant Garamond', serif; font-size: clamp(40px, 4.5vw, 64px); font-weight: 300; line-height: .93; letter-spacing: -.03em; }
        .tp-stitle em { font-style: italic; }
        .tp-sdesc { font-size: 15px; font-weight: 300; line-height: 1.9; color: #9a9088; max-width: 500px; }

        /* BOTTOM */
        .tp-bottom { padding: 72px 60px; display: flex; align-items: center; justify-content: space-between; border-top: 1px solid #e8e2d4; gap: 40px; background: #F3F0E1; }
        .tp-bl { font-family: 'Cormorant Garamond', serif; font-size: 36px; font-weight: 300; font-style: italic; color: #1a1714; margin-bottom: 10px; }
        .tp-bs { font-size: 13px; font-weight: 300; color: #9a9088; letter-spacing: .04em; }
        .tp-bbtn { display: inline-flex; align-items: center; gap: 14px; font-size: 10px; font-weight: 500; letter-spacing: .18em; text-transform: uppercase; color: #FDFFFC; background: #36615A; padding: 18px 36px; text-decoration: none; transition: background .2s; white-space: nowrap; }
        .tp-bbtn:hover { background: #1a1714; }

        @media (max-width: 960px) {
          .tp-nav { padding: 18px 28px; }
          .tp-nav-r .tp-navlink { display: none; }
          .tp-hero { grid-template-columns: 1fr; gap: 44px; padding: 72px 28px; }
          .tp-tabs { padding: 0 28px; }
          .tp-sec-hd { grid-template-columns: 1fr; }
          .tp-sec-l { padding: 48px 28px 32px; border-right: none; border-bottom: 1px solid #e8e2d4; }
          .tp-slug { font-size: 56px; }
          .tp-sec-r { padding: 40px 28px 60px; }
          .tp-bottom { padding: 52px 28px; flex-direction: column; align-items: flex-start; gap: 28px; }
        }
        @media (max-width: 600px) {
          .tp-h1 { font-size: 52px; }
          .tp-stats { gap: 28px; }
        }
      `}</style>

      <div className="tp">

       

        {/* HERO */}
        <section className={`tp-hero${heroVis ? ' v' : ''}`}>
          <div>
            <p className="tp-eline">The people</p>
            <h1 className="tp-h1">
              Behind every<br />
              <em>great book</em><br />
              is a team.
            </h1>
            <div className="tp-stats">
              {[['3','Teams'],['17','People'],['1','Purpose']].map(([v,l]) => (
                <div key={l}>
                  <div className="tp-sv">{v}</div>
                  <div className="tp-sl">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="tp-hero-r">
            <p className="tp-body">
              Behind every book we help create, there is a team of people who genuinely care — about words, about craft, about the creator holding a finished copy in their hands for the first time.
            </p>
            <blockquote className="tp-quote">
              "We hire people who care about publishing more than they care about their job titles."
            </blockquote>
          </div>
        </section>

        {/* STICKY TABS */}
        <div className="tp-tabs-wrap">
          <div className="tp-tabs">
            {teams.map(t => (
              <button
                key={t.id}
                className={`tp-tab${activeTab === t.id ? ' on' : ''}`}
                onClick={() => {
                  setActiveTab(t.id);
                  document.getElementById(t.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                <div className="tp-pip" style={{ background: t.color }} />
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* TEAMS */}
        {teams.map((team, ti) => {
          return (
            <div key={team.id} id={team.id}>
              {ti > 0 && <div style={{ height: 1, background: '#f0ebe0' }} />}

              {/* Section intro */}
              <div className="tp-sec-hd">
                <div className="tp-sec-l">
                  <div className="tp-slug" style={{ color: team.colorPale }}>{team.slug}</div>
                  <div>
                    <div style={{ width: 24, height: 1, background: team.color, marginBottom: 8 }} />
                    <p className="tp-cnt" style={{ color: team.color }}>{team.members.length} members</p>
                  </div>
                </div>
                <div className="tp-sec-r">
                  <p className="tp-stag" style={{ color: team.color }}>{team.tagline}</p>
                  <h2 className="tp-stitle" style={{ color: team.color }}>
                    {team.label.split(' ').slice(0,-1).join(' ')}{team.label.split(' ').length > 1 ? ' ' : ''}
                    <em>{team.label.split(' ').slice(-1)[0]}</em>
                  </h2>
                  <p className="tp-sdesc">{team.description}</p>
                </div>
              </div>

              {/* Members */}
              {team.members.map((m, mi) => {
                const rev = globalIdx % 2 === 1;
                const ci = mi;
                globalIdx++;
                return (
                  <MemberCard
                    key={m.initials + mi}
                    member={m}
                    color={team.color}
                    colorPale={team.colorPale}
                    reverse={rev}
                    cardIdx={ci}
                  />
                );
              })}
            </div>
          );
        })}

    

      </div>
    </>
  );
}




// import { useState, useEffect, useCallback } from "react";

// const teams = [
//   {
//     id: "editorial",
//     label: "Editorial Team",
//     chapter: "I",
//     tagline: "Guardians of voice, quality & craft",
//     color: "#36615A",
//     colorMid: "#4e8a81",
//     colorPale: "#eaf2f1",
//     colorDeep: "#1e3d38",
//     members: [
//       { initials: "NK", name: "Neha Krishnan",  role: "Head of Editorial",   bio: "15 years in literary publishing across India and the UK. Believes every manuscript deserves a patient reader before it finds its audience.", skills: ["Developmental Editing", "Author Relations", "Literary Strategy"] },
//       { initials: "AV", name: "Arjun Verma",    role: "Senior Editor",       bio: "Specialises in narrative non-fiction and memoir. Has worked with debut authors and bestselling names across three publishers.", skills: ["Non-Fiction", "Memoir", "Structural Editing"] },
//       { initials: "SS", name: "Shruti Singh",   role: "Copyeditor",          bio: "Obsessive about consistency, clarity, and the Oxford comma. No typo has ever survived her final pass.", skills: ["Copyediting", "Style Guides", "Consistency"] },
//       { initials: "DM", name: "Divya Menon",    role: "Content Strategist",  bio: "Bridges the gap between author vision and reader experience. Shapes how a book talks to the world before it's even printed.", skills: ["Content Strategy", "Brand Voice", "Reader Research"] },
//       { initials: "RP", name: "Rahul Pillai",   role: "Editorial Associate", bio: "Manages the editorial pipeline and author onboarding. Keeps the team on schedule without losing the human touch.", skills: ["Project Management", "Onboarding", "Workflow"] },
//       { initials: "IT", name: "Isha Tiwari",    role: "Proofreader",         bio: "The last line of defence before a book goes to print. Reads everything twice — once for errors, once for joy.", skills: ["Proofreading", "Final QA", "Print Prep"] },
//     ],
//   },
//   {
//     id: "webdev",
//     label: "Web Development Team",
//     chapter: "II",
//     tagline: "Architects of the invisible",
//     color: "#8B542B",
//     colorMid: "#b5703a",
//     colorPale: "#f5ede4",
//     colorDeep: "#4a2c14",
//     members: [
//       { initials: "VN", name: "Vikram Nair",     role: "Head of Engineering", bio: "Formerly at Razorpay. Believes every millisecond of latency is a broken promise to a creator. Runs on black coffee and pull requests.", skills: ["System Architecture", "Team Leadership", "Scalability"] },
//       { initials: "AG", name: "Ananya Gupta",    role: "Frontend Lead",       bio: "Turns complex design systems into elegant, accessible interfaces. Her components are so clean other engineers study them.", skills: ["React", "Design Systems", "Accessibility"] },
//       { initials: "SK", name: "Siddharth Kumar", role: "Backend Engineer",    bio: "Architect of the print-rendering pipeline that processes 40,000+ books a month. Quietly runs the hardest part of the platform.", skills: ["Node.js", "Pipeline Design", "APIs"] },
//       { initials: "MR", name: "Meera Rao",       role: "Full-Stack Engineer", bio: "Owns the creator dashboard end-to-end — from first upload to final order. Has touched every corner of the codebase and improved it.", skills: ["Full-Stack", "Creator Tools", "Databases"] },
//       { initials: "KP", name: "Kiran Pandey",    role: "DevOps Engineer",     bio: "Keeps everything at 99.97% uptime. The team calls him the silent guardian. He calls himself a plumber.", skills: ["Kubernetes", "CI/CD", "Monitoring"] },
//       { initials: "TB", name: "Tanvi Bhat",      role: "QA Engineer",         bio: "Finds bugs before they find our users. Writes test cases like short stories — precise, complete, and always with a twist ending.", skills: ["Test Automation", "QA Strategy", "Bug Hunting"] },
//     ],
//   },
//   {
//     id: "bizdev",
//     label: "Business Development Team",
//     chapter: "III",
//     tagline: "Building the publishing movement",
//     color: "#A7703D",
//     colorMid: "#c9904f",
//     colorPale: "#f8f0e6",
//     colorDeep: "#5a3a1a",
//     members: [
//       { initials: "HA", name: "Harsh Agarwal",   role: "Head of Biz Dev",      bio: "Closed our first 50 distribution partnerships across 12 countries. Sees every deal not as a transaction but as a door opened for a creator.", skills: ["Partnerships", "Distribution", "Global Strategy"] },
//       { initials: "PC", name: "Pooja Choudhary", role: "Partnerships Manager", bio: "Manages relationships with printers, distributors, and retail chains. Remembers every partner's birthday — and their quarterly targets.", skills: ["Vendor Relations", "Retail Channels", "Negotiations"] },
//       { initials: "RS", name: "Raj Sharma",      role: "Growth Strategist",    bio: "Owns the creator acquisition funnel and referral programmes. Grew our creator base 3× in eight months through community-led growth.", skills: ["Growth Hacking", "Funnels", "Community"] },
//     ],
//   },
// ];

// function SilhouetteAvatar({ initials, color, colorPale }) {
//   return (
//     <svg width="100%" height="100%" viewBox="0 0 360 400" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <rect width="360" height="400" fill={colorPale} />
//       {Array.from({ length: 9 }).map((_, row) =>
//         Array.from({ length: 8 }).map((_, col) => (
//           <circle key={`${row}-${col}`} cx={24 + col * 44} cy={24 + row * 44} r={1.5} fill={color} opacity={0.15} />
//         ))
//       )}
//       <ellipse cx="180" cy="155" rx="56" ry="62" fill={color} opacity="0.12" />
//       <ellipse cx="180" cy="148" rx="40" ry="46" fill={color} opacity="0.2" />
//       <path d="M60 400 C60 310 130 270 180 270 C230 270 300 310 300 400" fill={color} opacity="0.12" />
//       <path d="M80 400 C80 318 138 280 180 280 C222 280 280 318 280 400" fill={color} opacity="0.2" />
//       <path d="M24 24 L24 50 M24 24 L50 24" stroke={color} strokeWidth="1.5" opacity="0.28" strokeLinecap="round" />
//       <path d="M336 24 L336 50 M336 24 L310 24" stroke={color} strokeWidth="1.5" opacity="0.28" strokeLinecap="round" />
//       <path d="M24 376 L24 350 M24 376 L50 376" stroke={color} strokeWidth="1.5" opacity="0.28" strokeLinecap="round" />
//       <path d="M336 376 L336 350 M336 376 L310 376" stroke={color} strokeWidth="1.5" opacity="0.28" strokeLinecap="round" />
//       <text x="180" y="230" textAnchor="middle" dominantBaseline="middle"
//         fontFamily="'Cormorant Garamond', serif" fontSize="110" fontWeight="300"
//         fill={color} opacity="0.7" letterSpacing="6">{initials}</text>
//     </svg>
//   );
// }

// export default function TeamPage() {
//   const [activeTeam, setActiveTeam] = useState(0);
//   const [memberIdx, setMemberIdx] = useState(0);
//   const [visible, setVisible] = useState(true);
//   const [animating, setAnimating] = useState(false);
//   const [dir, setDir] = useState(1);
//   const [bannerVis, setBannerVis] = useState(false);
//   const [btnHover, setBtnHover] = useState(null); // "prev" | "next" | null

//   useEffect(() => { setTimeout(() => setBannerVis(true), 100); }, []);

//   const team = teams[activeTeam];
//   const member = team.members[memberIdx];
//   const total = team.members.length;

//   const switchTeam = (idx) => {
//     if (idx === activeTeam) return;
//     setVisible(false);
//     setTimeout(() => {
//       setActiveTeam(idx);
//       setMemberIdx(0);
//       setVisible(true);
//     }, 260);
//   };

//   const goMember = useCallback((next) => {
//     if (animating || next < 0 || next >= total) return;
//     setDir(next > memberIdx ? 1 : -1);
//     setAnimating(true);
//     setVisible(false);
//     setTimeout(() => {
//       setMemberIdx(next);
//       setVisible(true);
//       setTimeout(() => setAnimating(false), 380);
//     }, 260);
//   }, [animating, memberIdx, total]);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowRight") goMember(memberIdx + 1);
//       if (e.key === "ArrowLeft") goMember(memberIdx - 1);
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [memberIdx, goMember]);

//   const slideStyle = visible
//     ? { opacity: 1, transform: "translateX(0)" }
//     : { opacity: 0, transform: `translateX(${dir > 0 ? "-36px" : "36px"})` };
//   const transition = "opacity 0.26s ease, transform 0.26s ease";

//   const isPrevDisabled = memberIdx === 0;
//   const isNextDisabled = memberIdx === total - 1;

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
//       *.fp *{box-sizing:border-box;margin:0;padding:0}


//         .tp-root { font-family: 'DM Sans', sans-serif; background: #F3F0E1; min-height: 100vh; }

//         .tp-banner {
//           background: #FDFFFC; border-bottom: 1px solid #ddd8cc;
//           padding: 72px 64px 64px;
//           display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: end;
//           opacity: 0; transform: translateY(24px);
//           transition: opacity .8s ease, transform .8s ease;
//         }
//         .tp-banner.vis { opacity: 1; transform: none; }
//         .tp-banner-eyebrow {
//           font-size: 9px; font-weight: 500; letter-spacing: .26em;
//           text-transform: uppercase; color: #A7703D;
//           display: flex; align-items: center; gap: 14px; margin-bottom: 24px;
//         }
//         .tp-banner-eyebrow::before { content: ''; width: 32px; height: 1px; background: #A7703D; flex-shrink: 0; }
//         .tp-banner-h1 {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: clamp(52px, 7vw, 96px); font-weight: 300;
//           line-height: .88; letter-spacing: -.04em; color: #1a1714; margin-bottom: 40px;
//         }
//         .tp-banner-h1 em { font-style: italic; color: #36615A; }
//         .tp-banner-stats { display: flex; gap: 40px; }
//         .tp-stat-val {
//           font-family: 'Cormorant Garamond', serif; font-size: 40px; font-weight: 300;
//           color: #1a1714; letter-spacing: -.02em; line-height: 1; margin-bottom: 4px;
//         }
//         .tp-stat-lbl { font-size: 9px; font-weight: 500; letter-spacing: .2em; text-transform: uppercase; color: #c4bdb0; }
//         .tp-banner-right { display: flex; flex-direction: column; justify-content: flex-end; gap: 24px; }
//         .tp-banner-body { font-size: 15px; font-weight: 300; line-height: 1.95; color: #9a9088; max-width: 400px; }
//         .tp-banner-quote {
//           font-family: 'Cormorant Garamond', serif; font-size: 20px;
//           font-style: italic; font-weight: 300; color: #3a3530; line-height: 1.6;
//           padding-left: 20px; border-left: 2px solid #A7703D; border-radius: 0;
//         }

//         .tp-tabs-bar {
//           background: #FDFFFC; border-bottom: 1px solid #ddd8cc;
//           display: flex; padding: 0 64px;
//           position: sticky; top: 0; z-index: 40; overflow-x: auto;
//         }
//         .tp-tab {
//           font-size: 10px; font-weight: 500; letter-spacing: .18em; text-transform: uppercase;
//           color: #c4bdb0; padding: 20px 0; margin-right: 40px; margin-bottom: -1px;
//           border: none; background: transparent; cursor: pointer;
//           border-bottom: 2px solid transparent;
//           transition: color .2s, border-color .2s;
//           display: flex; align-items: center; gap: 10px;
//           white-space: nowrap; font-family: 'DM Sans', sans-serif;
//         }
//         .tp-tab:hover { color: #7a7368; }
//         .tp-tab.active { color: #1a1714; }
//         .tp-pip { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }

//         .tp-book { display: grid; grid-template-columns: 1fr 1fr; min-height: calc(100vh - 220px); }

//         .tp-photo { position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: flex-end; }
//         .tp-photo-inner {
//           width: 100%; height: 100%; position: absolute; inset: 0;
//           display: flex; align-items: flex-end;
//         }
//         .tp-photo-inner svg { display: block; width: 100%; height: 100%; object-fit: cover; }
//         .tp-photo-overlay-top {
//           position: absolute; top: 0; left: 0; right: 0;
//           padding: 28px 32px; display: flex; align-items: center; gap: 10px; z-index: 2;
//         }
//         .tp-photo-dot { width: 6px; height: 6px; border-radius: 50%; }
//         .tp-photo-label { font-size: 9px; font-weight: 500; letter-spacing: .2em; text-transform: uppercase; }
//         .tp-photo-watermark {
//           position: absolute; bottom: 20px; left: 24px;
//           font-family: 'Cormorant Garamond', serif; font-size: 140px;
//           font-weight: 300; line-height: 1; letter-spacing: -.08em;
//           opacity: .05; color: #1a1714; user-select: none; pointer-events: none; z-index: 1;
//         }

//         .tp-info {
//           background: #FDFFFC; border-left: 1px solid #ddd8cc;
//           display: flex; flex-direction: column; justify-content: center;
//           padding: 60px 60px 100px; position: relative; min-height: 580px;
//         }
//         .tp-role-tag { display: flex; align-items: center; gap: 12px; margin-bottom: 28px; }
//         .tp-role-line { height: 1px; width: 28px; flex-shrink: 0; }
//         .tp-role-text { font-size: 9px; font-weight: 500; letter-spacing: .22em; text-transform: uppercase; }
//         .tp-member-name {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: clamp(44px, 5vw, 74px); font-weight: 300;
//           line-height: .88; letter-spacing: -.03em; color: #1a1714; margin-bottom: 32px;
//         }
//         .tp-member-name em { font-style: italic; }
//         .tp-hr { height: 1px; background: #e8e2d4; margin-bottom: 26px; }
//         .tp-bio { font-size: 15px; font-weight: 300; line-height: 1.9; color: #7a7368; margin-bottom: 32px; max-width: 380px; }
//         .tp-skills { display: flex; flex-wrap: wrap; gap: 8px; }
//         .tp-skill {
//           font-size: 9px; font-weight: 500; letter-spacing: .15em; text-transform: uppercase;
//           padding: 6px 14px; border: 1px solid; border-radius: 2px;
//         }

//         /* ── POLISHED FLIP NAV ── */
//         .tp-flip-nav {
//           position: absolute; bottom: 0; left: 0; right: 0;
//           border-top: 1px solid #e8e2d4;
//           display: flex; align-items: stretch;
//           height: 64px;
//         }

//         .tp-nav-arrow {
//           width: 64px; flex-shrink: 0;
//           display: flex; align-items: center; justify-content: center;
//           border: none; background: transparent; cursor: pointer;
//           transition: background .18s;
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 22px; font-weight: 300; color: #1a1714;
//           position: relative;
//         }
//         .tp-nav-arrow:disabled { opacity: .2; cursor: default; }
//         .tp-nav-arrow:not(:disabled):hover { background: #f5f2ea; }
//         .tp-nav-arrow.prev { border-right: 1px solid #e8e2d4; }
//         .tp-nav-arrow.next { border-left: 1px solid #e8e2d4; }

//         /* Arrow SVG icons inside buttons */
//         .tp-nav-arrow svg { width: 18px; height: 18px; }

//         .tp-nav-center {
//           flex: 1; display: flex; flex-direction: column;
//           align-items: center; justify-content: center; gap: 10px;
//           padding: 0 24px;
//         }

//         /* Dot indicators */
//         .tp-dots {
//           display: flex; align-items: center; gap: 6px;
//         }
//         .tp-dot {
//           width: 6px; height: 6px; border-radius: 50%;
//           border: none; padding: 0; cursor: pointer;
//           transition: all .22s; background: #e0dbd0;
//         }
//         .tp-dot.active { width: 20px; border-radius: 3px; }
//         .tp-dot:hover:not(.active) { background: #c4bdb0; }

//         .tp-nav-name {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 12px; font-style: italic; color: #b0a898;
//           letter-spacing: .04em;
//         }

//         .tp-chapter-tag {
//           position: absolute; top: 36px; right: 60px; text-align: right;
//         }
//         .tp-chapter-tag-line { font-size: 8px; font-weight: 500; letter-spacing: .18em; text-transform: uppercase; color: #d4cfc5; margin-bottom: 3px; }
//         .tp-chapter-tag-num { font-family: 'Cormorant Garamond', serif; font-size: 13px; font-style: italic; color: #d4cfc5; }

//         @media (max-width: 800px) {
//           .tp-banner { grid-template-columns: 1fr; padding: 48px 24px; }
//           .tp-tabs-bar { padding: 0 20px; }
//           .tp-book { grid-template-columns: 1fr; }
//           .tp-photo { min-height: 320px; }
//           .tp-info { padding: 40px 28px 100px; border-left: none; border-top: 1px solid #ddd8cc; }
//           .tp-chapter-tag { display: none; }
//         }
//       `}</style>

//       <div className="tp-root">

//         {/* BANNER */}
//         <section className={`tp-banner${bannerVis ? " vis" : ""}`}>
//           <div>
//             <p className="tp-banner-eyebrow">Our People</p>
//             <h1 className="tp-banner-h1">
//               Behind every<br />
//               <em>great book</em><br />
//               is a team.
//             </h1>
           
//           </div>
//           <div className="tp-banner-right">
//             <p className="tp-banner-body">
//               Behind every book we help create, there is a team of people who genuinely care — about words, about craft, about the creator holding a finished copy in their hands for the first time.
//             </p>
//             <blockquote className="tp-banner-quote">
//               "We hire people who care about publishing more than they care about their job titles."
//             </blockquote>
//           </div>
//         </section>

//         {/* TABS */}
//         <div className="tp-tabs-bar">
//           {teams.map((t, i) => (
//             <button
//               key={t.id}
//               className={`tp-tab${activeTeam === i ? " active" : ""}`}
//               onClick={() => switchTeam(i)}
//               style={{
//                 borderBottomColor: activeTeam === i ? t.color : "transparent",
//                 color: activeTeam === i ? "#1a1714" : "#c4bdb0",
//               }}
//             >
//               <div className="tp-pip" style={{ background: t.color }} />
//               {t.label}
//             </button>
//           ))}
//         </div>

//         {/* BOOK VIEWER */}
//         <div className="tp-book">

//           {/* LEFT — avatar */}
//           <div className="tp-photo" style={{ background: team.colorPale }}>
//             <div className="tp-photo-inner" style={{ ...slideStyle, transition }}>
//               <SilhouetteAvatar initials={member.initials} color={team.color} colorPale={team.colorPale} />
//             </div>
//             <div className="tp-photo-overlay-top">
//               <div className="tp-photo-dot" style={{ background: team.color }} />
//               <div className="tp-photo-label" style={{ color: team.colorMid }}>
//                 {team.label} &nbsp;·&nbsp; {String(memberIdx + 1).padStart(2, "0")} of {total}
//               </div>
//             </div>
//             <div className="tp-photo-watermark">{team.chapter}</div>
//           </div>

//           {/* RIGHT — info */}
//           <div className="tp-info">

//             <div className="tp-chapter-tag">
//               <div className="tp-chapter-tag-line">{team.tagline}</div>
//               <div className="tp-chapter-tag-num">Chapter {team.chapter}</div>
//             </div>

//             <div style={{ ...slideStyle, transition }}>
//               <div className="tp-role-tag">
//                 <div className="tp-role-line" style={{ background: team.color }} />
//                 <div className="tp-role-text" style={{ color: team.color }}>{member.role}</div>
//               </div>

//               <h2 className="tp-member-name">
//                 {member.name.split(" ")[0]}<br />
//                 <em style={{ color: team.color }}>{member.name.split(" ").slice(1).join(" ")}</em>
//               </h2>

//               <div className="tp-hr" />
//               <p className="tp-bio">{member.bio}</p>

//               <div className="tp-skills">
//                 {member.skills.map((s) => (
//                   <span key={s} className="tp-skill" style={{ color: team.color, borderColor: team.colorMid + "55" }}>
//                     {s}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* ── POLISHED FLIP NAV ── */}
//             <div className="tp-flip-nav">

//               {/* PREV button */}
//               <button
//                 className="tp-nav-arrow prev"
//                 onClick={() => goMember(memberIdx - 1)}
//                 disabled={isPrevDisabled}
//                 title="Previous member"
//               >
//                 <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M11 4L6 9l5 5" />
//                 </svg>
//               </button>

//               {/* CENTER — dots + name */}
//               <div className="tp-nav-center">
//                 <div className="tp-dots">
//                   {team.members.map((m, i) => (
//                     <button
//                       key={m.initials}
//                       className={`tp-dot${i === memberIdx ? " active" : ""}`}
//                       onClick={() => goMember(i)}
//                       title={m.name}
//                       style={{
//                         background: i === memberIdx ? team.color : "#e0dbd0",
//                       }}
//                     />
//                   ))}
//                 </div>
//                 <div className="tp-nav-name" style={{ color: team.colorMid }}>
//                   {member.name} &nbsp;·&nbsp; {memberIdx + 1} / {total}
//                 </div>
//               </div>

//               {/* NEXT button */}
//               <button
//                 className="tp-nav-arrow next"
//                 onClick={() => goMember(memberIdx + 1)}
//                 disabled={isNextDisabled}
//                 title="Next member"
//               >
//                 <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M7 4l5 5-5 5" />
//                 </svg>
//               </button>

//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }