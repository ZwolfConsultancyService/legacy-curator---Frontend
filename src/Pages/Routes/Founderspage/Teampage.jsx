
// import React, { useState, useEffect, useRef } from 'react';
// import sonam from '../../../assets/TeamSection/sonam.jpeg'
// import Namrata from '../../../assets/TeamSection/Namrata.jpeg'

// const teams = [
//   {
//     id: 'editorial',
//     slug: '01',
//     label: 'Editorial',
//     tagline: 'Guardians of voice, quality & craft',
//     color: '#36615A',
//     colorMid: '#4e8a81',
//     colorPale: '#eaf2f1',
//     description:
//       'They work alongside creators to ensure every book that leaves our platform is one worth holding. From first draft to final proof — the invisible hands behind every great sentence.',
//     members: [
//       {
//         initials: 'SS',
//         name: 'Sonam Sharma',
//         role: 'Chief Editor & Creative Director',
//         image: sonam,
//         bio: 'Sonam Sharma serves as the Chief Editor and Creative Director at Legacy Curators, where she co-shapes the vision of the brand alongside Founder, Dr. Ashish Sharma. At the heart of her role lies a singular intention, to transform lived experiences, generational journeys, and personal histories into narratives that endure beyond time.With a foundation rooted in storytelling, human psychology, and brand strategy, Sonam brings depth, direction, and emotional intelligence to every legacy she helps curate. She leads the narrative architecture of each project, crafting stories that are not only documented but felt, stories that carry the weight of identity, memory, and meaning.Working in close collaboration with the design team, she ensures that every word, visual, and detail aligns seamlessly, allowing the creative, aesthetic, and strategic vision to translate into a final form that is both timeless and tangible. Each piece emerges not just as a book, but as a collectible, an heirloom designed to be held, revisited, and passed forward across generations.Beyond Legacy Curators, Sonam is the Founder and Director of Sozart Creative, where she continues to build brands at the intersection of strategy and soul. Yet within this space, her focus remains deeply intentional, to preserve what matters, to give permanence to stories, and to ensure that no meaningful legacy is left undocumented.For her, legacy is not just what is remembered, it is what is consciously preserved.',
//       },
//       {
//         initials: 'NC',
//         name: 'Namrata Chaudhary',
//         role: 'Creative Direction & Design Lead',
//         image: Namrata,
//         bio: 'Namrata Chaudhary leads the design vision at Legacy Curators, shaping each project into a timeless work of art. With a deep understanding of visual storytelling, she brings structure, sensitivity, and sophistication to the process of translating legacy into form, where every layout, texture, and detail is intentional.Her approach to design goes beyond aesthetics. For Namrata, it is about preserving meaning, crafting pieces that not only look beautiful but carry emotional and historical depth. Each coffee table book she designs becomes a carefully curated experience, balancing elegance with authenticity.With over seven years of experience in branding and design, she has honed a style that is both refined and expressive, where heritage meets contemporary sensibility. Her work reflects a quiet luxury, allowing stories to unfold visually with grace and permanence.Also the founder of NC Designs and Head of Design at Sozart Creative, Namrata continues to explore design as both discipline and art, but at Legacy Curators, her focus remains singular, to create pieces that endure beyond time.For her, design isn’t just creation, it is preservation.',
//       },
//     ],
//   },
//   {
//     id: 'webdev',
//     slug: '02',
//     label: 'Engineering',
//     tagline: 'Architects of the invisible',
//     color: '#8B542B',
//     colorMid: '#b5703a',
//     colorPale: '#f5ede4',
//     description:
//       'They build the infrastructure that lets creativity flow freely. Fast, reliable, obsessively tested — so creators never notice the machinery humming beneath their work.',
//     members: [
//       { initials: 'VN', name: 'Vikram Nair',     role: 'Head of Engineering', image: null, bio: 'Formerly at Razorpay. Believes every millisecond of latency is a broken promise to a creator. Runs on black coffee and pull requests.' },
//       { initials: 'AG', name: 'Ananya Gupta',    role: 'Frontend Lead',       image: null, bio: 'Turns complex design systems into elegant, accessible interfaces. Her components are so clean other engineers study them.' },
//       { initials: 'SK', name: 'Siddharth Kumar', role: 'Backend Engineer',    image: null, bio: 'Architect of the print-rendering pipeline that processes 40k+ books a month. Quietly runs the hardest part of the platform.' },
//       { initials: 'MR', name: 'Meera Rao',       role: 'Full-Stack Engineer', image: null, bio: 'Owns the creator dashboard end-to-end — from first upload to final order. Has touched every corner of the codebase and improved it.' },
//       { initials: 'KP', name: 'Kiran Pandey',    role: 'DevOps Engineer',     image: null, bio: 'Keeps everything at 99.97% uptime. The team calls him the silent guardian. He calls himself a plumber.' },
//       { initials: 'TB', name: 'Tanvi Bhat',      role: 'QA Engineer',         image: null, bio: 'Finds bugs before they find our users. Writes test cases like short stories — precise, complete, and always with a twist ending.' },
//     ],
//   },
//   {
//     id: 'bizdev',
//     slug: '03',
//     label: 'Biz Dev',
//     tagline: 'Building the publishing movement',
//     color: '#A7703D',
//     colorMid: '#c9904f',
//     colorPale: '#f8f0e6',
//     description:
//       'They build the partnerships, channels, and relationships that turn a great product into a global publishing movement. Every deal they close opens a door for another creator.',
//     members: [
//       { initials: 'HA', name: 'Harsh Agarwal',   role: 'Head of Biz Dev',      image: null, bio: 'Closed our first 50 distribution partnerships across 12 countries. Sees every deal not as a transaction but as a door opened for a creator.' },
//       { initials: 'PC', name: 'Pooja Choudhary', role: 'Partnerships Manager', image: null, bio: 'Manages relationships with printers, distributors, and retail chains. Remembers every partner\'s birthday — and their quarterly targets.' },
//       { initials: 'RS', name: 'Raj Sharma',      role: 'Growth Strategist',    image: null, bio: 'Owns the creator acquisition funnel and referral programmes. Grew our creator base 3× in eight months through community-led growth.' },
//     ],
//   },
// ];

// /* ── Avatar ── */
// function Avatar({ member, color, colorPale }) {
//   const [err, setErr] = useState(false);
//   if (member.image && !err) {
//     return (
//       <img
//         src={member.image}
//         alt={member.name}
//         onError={() => setErr(true)}
//         style={{
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//           objectPosition: 'top center',
//           display: 'block',
//         }}
//       />
//     );
//   }
//   return (
//     <div style={{
//       width: '100%', height: '100%',
//       background: colorPale,
//       display: 'flex', flexDirection: 'column',
//       alignItems: 'center', justifyContent: 'center',
//       position: 'relative', overflow: 'hidden',
//     }}>
//       <div style={{
//         position: 'absolute', inset: 0,
//         backgroundImage: `radial-gradient(circle, ${color}28 1px, transparent 1px)`,
//         backgroundSize: '28px 28px',
//       }} />
//       <div style={{ position: 'absolute', top: 24, left: 24, width: 36, height: 1, background: color, opacity: .35 }} />
//       <div style={{ position: 'absolute', top: 24, left: 24, width: 1, height: 36, background: color, opacity: .35 }} />
//       <div style={{ position: 'absolute', bottom: 24, right: 24, width: 36, height: 1, background: color, opacity: .35 }} />
//       <div style={{ position: 'absolute', bottom: 24, right: 24, width: 1, height: 36, background: color, opacity: .35 }} />
//       <div style={{
//         fontFamily: "'Cormorant Garamond', serif",
//         fontSize: 88, fontWeight: 300,
//         color, letterSpacing: '0.04em',
//         lineHeight: 1, position: 'relative', zIndex: 1,
//       }}>
//         {member.initials}
//       </div>
//       <div style={{
//         position: 'relative', zIndex: 1,
//         marginTop: 14, fontSize: 9, fontWeight: 500,
//         letterSpacing: '.22em', textTransform: 'uppercase',
//         color, opacity: .5, fontFamily: "'DM Sans', sans-serif",
//         textAlign: 'center', padding: '0 16px',
//       }}>
//         {member.role}
//       </div>
//     </div>
//   );
// }

// /* ── Member Card ── */
// function MemberCard({ member, color, colorPale, reverse, cardIdx }) {
//   const [vis, setVis] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) setVis(true); },
//       { threshold: 0.05 }
//     );
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       style={{
//         display: 'grid',
//         gridTemplateColumns: '1fr 1fr',
//         borderBottom: '1px solid #e8e2d4',
//         minHeight: 560,
//         opacity: vis ? 1 : 0,
//         transform: vis ? 'none' : 'translateY(44px)',
//         transition: `opacity 0.7s ${cardIdx * 0.07}s ease, transform 0.7s ${cardIdx * 0.07}s ease`,
//       }}
//     >
//       {/* ── Photo side ── */}
//       <div style={{
//         order: reverse ? 2 : 1,
//         minHeight: 560,
//         overflow: 'hidden',
//         position: 'relative',
//         borderRight: reverse ? 'none' : '1px solid #e8e2d4',
//         borderLeft: reverse ? '1px solid #e8e2d4' : 'none',
//         flexShrink: 0,
//       }}>
//         <Avatar member={member} color={color} colorPale={colorPale} />
//         <div style={{
//           position: 'absolute',
//           bottom: 24,
//           left: reverse ? 'auto' : 24,
//           right: reverse ? 24 : 'auto',
//           fontFamily: "'Cormorant Garamond', serif",
//           fontSize: 11, fontStyle: 'italic',
//           color, opacity: .5, letterSpacing: '.06em',
//         }}>
//           {String(cardIdx + 1).padStart(2, '0')} — {member.role}
//         </div>
//       </div>

//       {/* ── Info side ── */}
//       <div style={{
//         order: reverse ? 1 : 2,
//         background: '#FDFFFC',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         padding: reverse ? '64px 72px 64px 60px' : '64px 60px 64px 72px',
//         minWidth: 0, /* CRITICAL: prevents text overflow squishing */
//         overflow: 'hidden',
//       }}>

//         {/* Role tag */}
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: 12,
//           marginBottom: 20,
//           flexDirection: reverse ? 'row-reverse' : 'row',
//         }}>
//           <div style={{ width: 32, height: 1, background: color, flexShrink: 0 }} />
//           <p style={{
//             fontFamily: "'DM Sans', sans-serif",
//             fontSize: 9, fontWeight: 500,
//             letterSpacing: '.22em', textTransform: 'uppercase',
//             color, margin: 0,
//             whiteSpace: 'nowrap',
//             overflow: 'hidden',
//             textOverflow: 'ellipsis',
//           }}>
//             {member.role}
//           </p>
//         </div>

//         {/* Name */}
//         <h3 style={{
//           fontFamily: "'Cormorant Garamond', serif",
//           fontSize: 'clamp(38px, 3.8vw, 62px)',
//           fontWeight: 300,
//           lineHeight: 0.92,
//           letterSpacing: '-.03em',
//           color: '#1a1714',
//           marginBottom: 28,
//           textAlign: reverse ? 'right' : 'left',
//           wordBreak: 'break-word',
//         }}>
//           {member.name.split(' ')[0]}<br />
//           <em style={{ color, fontStyle: 'italic' }}>
//             {member.name.split(' ').slice(1).join(' ')}
//           </em>
//         </h3>

//         {/* Divider */}
//         <div style={{ height: 1, background: '#e8e2d4', marginBottom: 24 }} />

//         {/* Bio — FIXED: proper wrapping, no truncation */}
//         <p style={{
//           fontFamily: "'DM Sans', sans-serif",
//           fontSize: 14,
//           fontWeight: 300,
//           lineHeight: 1.95,
//           color: '#7a7368',
//           textAlign: reverse ? 'right' : 'left',
//           margin: 0,
//           whiteSpace: 'normal',    /* ensures wrapping */
//           wordWrap: 'break-word',  /* handles long words */
//           overflowWrap: 'break-word',
//         }}>
//           {member.bio}
//         </p>

//         {/* Bottom accent */}
//         <div style={{
//           marginTop: 32,
//           width: 20, height: 1,
//           background: color, opacity: .4,
//           marginLeft: reverse ? 'auto' : 0,
//         }} />
//       </div>
//     </div>
//   );
// }

// /* ── Page ── */
// export default function TeamPage() {
//   const [heroVis, setHeroVis] = useState(false);
//   const [activeTab, setActiveTab] = useState('editorial');

//   useEffect(() => {
//     setTimeout(() => setHeroVis(true), 150);
//   }, []);

//   let globalIdx = 0;

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

//         * { box-sizing: border-box; margin: 0; padding: 0; }

//         .tp {
//           background: #FDFFFC;
//           font-family: 'DM Sans', sans-serif;
//           color: #1a1714;
//           min-height: 100vh;
//           overflow-x: hidden;
//         }

//         /* HERO */
//         .tp-hero {
//           padding: 120px 60px 108px;
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 80px;
//           align-items: end;
//           border-bottom: 1px solid #e8e2d4;
//           opacity: 0; transform: translateY(28px);
//           transition: opacity .9s .12s, transform .9s .12s;
//         }
//         .tp-hero.v { opacity: 1; transform: none; }

//         .tp-eline {
//           font-size: 10px; font-weight: 500;
//           letter-spacing: .24em; text-transform: uppercase;
//           color: #A7703D; display: flex; align-items: center;
//           gap: 14px; margin-bottom: 36px;
//         }
//         .tp-eline::before {
//           content: ''; width: 36px; height: 1px;
//           background: #A7703D; flex-shrink: 0;
//         }

//         .tp-h1 {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: clamp(58px, 8vw, 116px);
//           font-weight: 300; line-height: .87;
//           letter-spacing: -.04em; color: #1a1714;
//           margin-bottom: 56px;
//         }
//         .tp-h1 em { font-style: italic; color: #36615A; }

//         .tp-stats { display: flex; gap: 44px; }
//         .tp-sv {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 44px; font-weight: 300;
//           color: #1a1714; letter-spacing: -.02em;
//           line-height: 1; margin-bottom: 6px;
//         }
//         .tp-sl {
//           font-size: 9px; font-weight: 500;
//           letter-spacing: .2em; text-transform: uppercase;
//           color: #c4bdb0;
//         }

//         .tp-hero-r {
//           display: flex; flex-direction: column;
//           justify-content: flex-end; gap: 28px;
//         }
//         .tp-body {
//           font-size: 16px; font-weight: 300;
//           line-height: 1.95; color: #9a9088;
//         }
//         .tp-quote {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 21px; font-style: italic;
//           font-weight: 300; color: #3a3530;
//           line-height: 1.6; padding-left: 24px;
//           border-left: 2px solid #A7703D;
//         }

//         /* TABS */
//         .tp-tabs-wrap {
//           position: sticky; top: 0; z-index: 50;
//           background: #FDFFFC;
//           border-bottom: 1px solid #e8e2d4;
//         }
//         .tp-tabs {
//           display: flex; padding: 0 60px;
//           overflow-x: auto;
//         }
//         .tp-tab {
//           font-size: 10px; font-weight: 500;
//           letter-spacing: .2em; text-transform: uppercase;
//           color: #c4bdb0; padding: 20px 0;
//           margin-right: 36px; border: none;
//           background: transparent; cursor: pointer;
//           border-bottom: 1px solid transparent;
//           margin-bottom: -1px;
//           transition: color .2s, border-color .2s;
//           display: flex; align-items: center; gap: 9px;
//           white-space: nowrap;
//         }
//         .tp-tab:hover { color: #7a7368; }
//         .tp-tab.on { color: #1a1714; border-bottom-color: #1a1714; }
//         .tp-pip { width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0; }

//         /* SECTION HEADER */
//         .tp-sec-hd {
//           display: grid;
//           grid-template-columns: 200px 1fr;
//           border-bottom: 1px solid #e8e2d4;
//         }
//         .tp-sec-l {
//           padding: 72px 0 72px 60px;
//           border-right: 1px solid #e8e2d4;
//           display: flex; flex-direction: column;
//           justify-content: space-between;
//         }
//         .tp-slug {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 108px; font-weight: 300;
//           line-height: 1; letter-spacing: -.06em;
//           color: #ede8df; user-select: none;
//         }
//         .tp-cnt {
//           font-size: 9px; font-weight: 500;
//           letter-spacing: .2em; text-transform: uppercase;
//           color: #d4cfc5;
//         }
//         .tp-sec-r {
//           padding: 72px 60px;
//           display: flex; flex-direction: column;
//           justify-content: center; gap: 18px;
//         }
//         .tp-stag {
//           font-size: 10px; font-weight: 500;
//           letter-spacing: .22em; text-transform: uppercase;
//         }
//         .tp-stitle {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: clamp(40px, 4.5vw, 64px);
//           font-weight: 300; line-height: .93;
//           letter-spacing: -.03em;
//         }
//         .tp-stitle em { font-style: italic; }
//         .tp-sdesc {
//           font-size: 15px; font-weight: 300;
//           line-height: 1.9; color: #9a9088;
//           max-width: 500px;
//         }

//         /* MEMBER CARD RESPONSIVE */
//         @media (max-width: 900px) {
//           .tp-hero { grid-template-columns: 1fr; gap: 44px; padding: 72px 28px; }
//           .tp-tabs { padding: 0 28px; }
//           .tp-sec-hd { grid-template-columns: 1fr; }
//           .tp-sec-l { padding: 48px 28px 32px; border-right: none; border-bottom: 1px solid #e8e2d4; }
//           .tp-slug { font-size: 56px; }
//           .tp-sec-r { padding: 40px 28px 60px; }
//         }

//         /* Force member cards to stack on mobile */
//         @media (max-width: 768px) {
//           .member-card-grid {
//             grid-template-columns: 1fr !important;
//           }
//           .member-card-photo {
//             min-height: 380px !important;
//             order: 1 !important;
//             border-right: none !important;
//             border-left: none !important;
//             border-bottom: 1px solid #e8e2d4 !important;
//           }
//           .member-card-info {
//             order: 2 !important;
//             padding: 48px 28px !important;
//           }
//         }

//         @media (max-width: 600px) {
//           .tp-h1 { font-size: 52px; }
//           .tp-stats { gap: 28px; }
//         }
//       `}</style>

//       <div className="tp">

//         {/* HERO */}
//         <section className={`tp-hero${heroVis ? ' v' : ''}`}>
//           <div>
//             <p className="tp-eline">The people</p>
//             <h1 className="tp-h1">
//               Behind every<br />
//               <em>great book</em><br />
//               is a team.
//             </h1>
//             <div className="tp-stats">
//               {[['3','Teams'],['17','People'],['1','Purpose']].map(([v,l]) => (
//                 <div key={l}>
//                   <div className="tp-sv">{v}</div>
//                   <div className="tp-sl">{l}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="tp-hero-r">
//             <p className="tp-body">
//               Behind every book we help create, there is a team of people who genuinely care — about words, about craft, about the creator holding a finished copy in their hands for the first time.
//             </p>
//             <blockquote className="tp-quote">
//               "We hire people who care about publishing more than they care about their job titles."
//             </blockquote>
//           </div>
//         </section>

//         {/* STICKY TABS */}
//         <div className="tp-tabs-wrap">
//           <div className="tp-tabs">
//             {teams.map(t => (
//               <button
//                 key={t.id}
//                 className={`tp-tab${activeTab === t.id ? ' on' : ''}`}
//                 onClick={() => {
//                   setActiveTab(t.id);
//                   document.getElementById(t.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
//                 }}
//               >
//                 <div className="tp-pip" style={{ background: t.color }} />
//                 {t.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* TEAMS */}
//         {teams.map((team, ti) => {
//           return (
//             <div key={team.id} id={team.id}>
//               {ti > 0 && <div style={{ height: 1, background: '#f0ebe0' }} />}

//               {/* Section intro */}
//               <div className="tp-sec-hd">
//                 <div className="tp-sec-l">
//                   <div className="tp-slug" style={{ color: team.colorPale }}>{team.slug}</div>
//                   <div>
//                     <div style={{ width: 24, height: 1, background: team.color, marginBottom: 8 }} />
//                     <p className="tp-cnt" style={{ color: team.color }}>{team.members.length} members</p>
//                   </div>
//                 </div>
//                 <div className="tp-sec-r">
//                   <p className="tp-stag" style={{ color: team.color }}>{team.tagline}</p>
//                   <h2 className="tp-stitle" style={{ color: team.color }}>
//                     {team.label.split(' ').slice(0,-1).join(' ')}{team.label.split(' ').length > 1 ? ' ' : ''}
//                     <em>{team.label.split(' ').slice(-1)[0]}</em>
//                   </h2>
//                   <p className="tp-sdesc">{team.description}</p>
//                 </div>
//               </div>

//               {/* Members */}
//               {team.members.map((m, mi) => {
//                 const rev = globalIdx % 2 === 1;
//                 const ci = mi;
//                 globalIdx++;
//                 return (
//                   <MemberCard
//                     key={m.initials + mi}
//                     member={m}
//                     color={team.color}
//                     colorPale={team.colorPale}
//                     reverse={rev}
//                     cardIdx={ci}
//                   />
//                 );
//               })}
//             </div>
//           );
//         })}

//       </div>
//     </>
//   );
// }


import React, { useState, useEffect, useRef } from 'react';
import sonam from '../../../assets/TeamSection/sonam.jpeg'
import Namrata from '../../../assets/TeamSection/Namrata.jpeg'

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
      {
        initials: 'SS',
        name: 'Sonam Sharma',
        role: 'Chief Editor & Creative Director',
        image: sonam,
        bio: 'Sonam Sharma serves as the Chief Editor and Creative Director at Legacy Curators, where she co-shapes the vision of the brand alongside Founder, Dr. Ashish Sharma. At the heart of her role lies a singular intention, to transform lived experiences, generational journeys, and personal histories into narratives that endure beyond time.With a foundation rooted in storytelling, human psychology, and brand strategy, Sonam brings depth, direction, and emotional intelligence to every legacy she helps curate. She leads the narrative architecture of each project, crafting stories that are not only documented but felt, stories that carry the weight of identity, memory, and meaning.Working in close collaboration with the design team, she ensures that every word, visual, and detail aligns seamlessly, allowing the creative, aesthetic, and strategic vision to translate into a final form that is both timeless and tangible. Each piece emerges not just as a book, but as a collectible, an heirloom designed to be held, revisited, and passed forward across generations.Beyond Legacy Curators, Sonam is the Founder and Director of Sozart Creative, where she continues to build brands at the intersection of strategy and soul. Yet within this space, her focus remains deeply intentional, to preserve what matters, to give permanence to stories, and to ensure that no meaningful legacy is left undocumented.For her, legacy is not just what is remembered, it is what is consciously preserved.',
      },
      {
        initials: 'NC',
        name: 'Namrata Chaudhary',
        role: 'Creative Direction & Design Lead',
        image: Namrata,
        bio: 'Namrata Chaudhary leads the design vision at Legacy Curators, shaping each project into a timeless work of art. With a deep understanding of visual storytelling, she brings structure, sensitivity, and sophistication to the process of translating legacy into form, where every layout, texture, and detail is intentional.Her approach to design goes beyond aesthetics. For Namrata, it is about preserving meaning, crafting pieces that not only look beautiful but carry emotional and historical depth. Each coffee table book she designs becomes a carefully curated experience, balancing elegance with authenticity.With over seven years of experience in branding and design, she has honed a style that is both refined and expressive, where heritage meets contemporary sensibility. Her work reflects a quiet luxury, allowing stories to unfold visually with grace and permanence.Also the founder of NC Designs and Head of Design at Sozart Creative, Namrata continues to explore design as both discipline and art, but at Legacy Curators, her focus remains singular, to create pieces that endure beyond time.For her, design isn\'t just creation, it is preservation.',
      },
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
      { initials: 'VN', name: 'Vikram Nair',     role: 'Head of Engineering', image: null, bio: 'Formerly at Razorpay. Believes every millisecond of latency is a broken promise to a creator. Runs on black coffee and pull requests.' },
      { initials: 'AG', name: 'Ananya Gupta',    role: 'Frontend Lead',       image: null, bio: 'Turns complex design systems into elegant, accessible interfaces. Her components are so clean other engineers study them.' },
      { initials: 'SK', name: 'Siddharth Kumar', role: 'Backend Engineer',    image: null, bio: 'Architect of the print-rendering pipeline that processes 40k+ books a month. Quietly runs the hardest part of the platform.' },
      { initials: 'MR', name: 'Meera Rao',       role: 'Full-Stack Engineer', image: null, bio: 'Owns the creator dashboard end-to-end — from first upload to final order. Has touched every corner of the codebase and improved it.' },
      { initials: 'KP', name: 'Kiran Pandey',    role: 'DevOps Engineer',     image: null, bio: 'Keeps everything at 99.97% uptime. The team calls him the silent guardian. He calls himself a plumber.' },
      { initials: 'TB', name: 'Tanvi Bhat',      role: 'QA Engineer',         image: null, bio: 'Finds bugs before they find our users. Writes test cases like short stories — precise, complete, and always with a twist ending.' },
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
      { initials: 'HA', name: 'Harsh Agarwal',   role: 'Head of Biz Dev',      image: null, bio: 'Closed our first 50 distribution partnerships across 12 countries. Sees every deal not as a transaction but as a door opened for a creator.' },
      { initials: 'PC', name: 'Pooja Choudhary', role: 'Partnerships Manager', image: null, bio: 'Manages relationships with printers, distributors, and retail chains. Remembers every partner\'s birthday — and their quarterly targets.' },
      { initials: 'RS', name: 'Raj Sharma',      role: 'Growth Strategist',    image: null, bio: 'Owns the creator acquisition funnel and referral programmes. Grew our creator base 3× in eight months through community-led growth.' },
    ],
  },
];

/* ── useIsMobile hook ── */
function useBreakpoint() {
  const [bp, setBp] = useState({ isMobile: false, isTablet: false });
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setBp({ isMobile: w <= 640, isTablet: w > 640 && w <= 1024 });
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return bp;
}

/* ── Avatar ── */
function Avatar({ member, color, colorPale }) {
  const [err, setErr] = useState(false);
  if (member.image && !err) {
    return (
      <img
        src={member.image}
        alt={member.name}
        onError={() => setErr(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'top center',
          display: 'block',
        }}
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
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle, ${color}28 1px, transparent 1px)`,
        backgroundSize: '28px 28px',
      }} />
      <div style={{ position: 'absolute', top: 24, left: 24, width: 36, height: 1, background: color, opacity: .35 }} />
      <div style={{ position: 'absolute', top: 24, left: 24, width: 1, height: 36, background: color, opacity: .35 }} />
      <div style={{ position: 'absolute', bottom: 24, right: 24, width: 36, height: 1, background: color, opacity: .35 }} />
      <div style={{ position: 'absolute', bottom: 24, right: 24, width: 1, height: 36, background: color, opacity: .35 }} />
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(56px, 12vw, 88px)',
        fontWeight: 300,
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
        textAlign: 'center', padding: '0 16px',
      }}>
        {member.role}
      </div>
    </div>
  );
}

/* ── Member Card ── */
function MemberCard({ member, color, colorPale, reverse, cardIdx }) {
  const [vis, setVis] = useState(false);
  const ref = useRef(null);
  const { isMobile, isTablet } = useBreakpoint();

  // On mobile/tablet always stack vertically (photo top, info below)
  const shouldStack = isMobile || isTablet;

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: shouldStack ? '1fr' : '1fr 1fr',
        borderBottom: '1px solid #e8e2d4',
        minHeight: shouldStack ? 'auto' : 560,
        opacity: vis ? 1 : 0,
        transform: vis ? 'none' : 'translateY(44px)',
        transition: `opacity 0.7s ${cardIdx * 0.07}s ease, transform 0.7s ${cardIdx * 0.07}s ease`,
      }}
    >
      {/* ── Photo side ── */}
      <div style={{
        order: shouldStack ? 1 : (reverse ? 2 : 1),
        minHeight: shouldStack ? (isMobile ? 320 : 420) : 560,
        overflow: 'hidden',
        position: 'relative',
        borderRight: (!shouldStack && !reverse) ? '1px solid #e8e2d4' : 'none',
        borderLeft: (!shouldStack && reverse) ? '1px solid #e8e2d4' : 'none',
        borderBottom: shouldStack ? '1px solid #e8e2d4' : 'none',
        flexShrink: 0,
      }}>
        <Avatar member={member} color={color} colorPale={colorPale} />
        <div style={{
          position: 'absolute',
          bottom: 16,
          left: 16,
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 11, fontStyle: 'italic',
          color, opacity: .5, letterSpacing: '.06em',
        }}>
          {String(cardIdx + 1).padStart(2, '0')} — {member.role}
        </div>
      </div>

      {/* ── Info side ── */}
      <div style={{
        order: shouldStack ? 2 : (reverse ? 1 : 2),
        background: '#FDFFFC',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: isMobile
          ? '40px 24px 48px'
          : isTablet
          ? '52px 40px'
          : (reverse ? '64px 72px 64px 60px' : '64px 60px 64px 72px'),
        minWidth: 0,
        overflow: 'hidden',
      }}>

        {/* Role tag */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          marginBottom: 20,
          flexDirection: 'row', // always LTR on mobile/tablet
        }}>
          <div style={{ width: 32, height: 1, background: color, flexShrink: 0 }} />
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 9, fontWeight: 500,
            letterSpacing: '.22em', textTransform: 'uppercase',
            color, margin: 0,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
            {member.role}
          </p>
        </div>

        {/* Name */}
        <h3 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: isMobile ? '42px' : isTablet ? '48px' : 'clamp(38px, 3.8vw, 62px)',
          fontWeight: 300,
          lineHeight: 0.92,
          letterSpacing: '-.03em',
          color: '#1a1714',
          marginBottom: 28,
          textAlign: 'left', // always left-aligned on mobile
          wordBreak: 'break-word',
        }}>
          {member.name.split(' ')[0]}<br />
          <em style={{ color, fontStyle: 'italic' }}>
            {member.name.split(' ').slice(1).join(' ')}
          </em>
        </h3>

        {/* Divider */}
        <div style={{ height: 1, background: '#e8e2d4', marginBottom: 24 }} />

        {/* Bio */}
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: isMobile ? 13 : 14,
          fontWeight: 300,
          lineHeight: 1.95,
          color: '#7a7368',
          textAlign: 'left', // always left on mobile/tablet
          margin: 0,
          whiteSpace: 'normal',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
        }}>
          {member.bio}
        </p>

        {/* Bottom accent */}
        <div style={{
          marginTop: 32,
          width: 20, height: 1,
          background: color, opacity: .4,
          marginLeft: 0,
        }} />
      </div>
    </div>
  );
}

/* ── Page ── */
export default function TeamPage() {
  const [heroVis, setHeroVis] = useState(false);
  const [activeTab, setActiveTab] = useState('editorial');
  const { isMobile, isTablet } = useBreakpoint();

  useEffect(() => {
    setTimeout(() => setHeroVis(true), 150);
  }, []);

  let globalIdx = 0;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

      .fp *{box-sizing:border-box;margin:0;padding:0}

        .tp {
          background: #FDFFFC;
          font-family: 'DM Sans', sans-serif;
          color: #1a1714;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* ── HERO ── */
        .tp-hero {
          padding: 120px 60px 108px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: end;
          border-bottom: 1px solid #e8e2d4;
          opacity: 0; transform: translateY(28px);
          transition: opacity .9s .12s, transform .9s .12s;
        }
        .tp-hero.v { opacity: 1; transform: none; }

        .tp-eline {
          font-size: 10px; font-weight: 500;
          letter-spacing: .24em; text-transform: uppercase;
          color: #A7703D; display: flex; align-items: center;
          gap: 14px; margin-bottom: 36px;
        }
        .tp-eline::before {
          content: ''; width: 36px; height: 1px;
          background: #A7703D; flex-shrink: 0;
        }

        .tp-h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(44px, 8vw, 116px);
          font-weight: 300; line-height: .87;
          letter-spacing: -.04em; color: #1a1714;
          margin-bottom: 40px;
        }
        .tp-h1 em { font-style: italic; color: #36615A; }

        .tp-stats { display: flex; gap: 44px; flex-wrap: wrap; }
        .tp-sv {
          font-family: 'Cormorant Garamond', serif;
          font-size: 44px; font-weight: 300;
          color: #1a1714; letter-spacing: -.02em;
          line-height: 1; margin-bottom: 6px;
        }
        .tp-sl {
          font-size: 9px; font-weight: 500;
          letter-spacing: .2em; text-transform: uppercase;
          color: #c4bdb0;
        }

        .tp-hero-r {
          display: flex; flex-direction: column;
          justify-content: flex-end; gap: 28px;
        }
        .tp-body {
          font-size: 16px; font-weight: 300;
          line-height: 1.95; color: #9a9088;
        }
        .tp-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: 21px; font-style: italic;
          font-weight: 300; color: #3a3530;
          line-height: 1.6; padding-left: 24px;
          border-left: 2px solid #A7703D;
        }

        /* ── TABS ── */
        .tp-tabs-wrap {
          position: sticky; top: 0; z-index: 50;
          background: #FDFFFC;
          border-bottom: 1px solid #e8e2d4;
        }
        .tp-tabs {
          display: flex; padding: 0 60px;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .tp-tabs::-webkit-scrollbar { display: none; }

        .tp-tab {
          font-size: 10px; font-weight: 500;
          letter-spacing: .2em; text-transform: uppercase;
          color: #c4bdb0; padding: 20px 0;
          margin-right: 36px; border: none;
          background: transparent; cursor: pointer;
          border-bottom: 1px solid transparent;
          margin-bottom: -1px;
          transition: color .2s, border-color .2s;
          display: flex; align-items: center; gap: 9px;
          white-space: nowrap;
          -webkit-tap-highlight-color: transparent;
        }
        .tp-tab:hover { color: #7a7368; }
        .tp-tab.on { color: #1a1714; border-bottom-color: #1a1714; }
        .tp-pip { width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0; }

        /* ── SECTION HEADER ── */
        .tp-sec-hd {
          display: grid;
          grid-template-columns: 200px 1fr;
          border-bottom: 1px solid #e8e2d4;
        }
        .tp-sec-l {
          padding: 72px 0 72px 60px;
          border-right: 1px solid #e8e2d4;
          display: flex; flex-direction: column;
          justify-content: space-between;
        }
        .tp-slug {
          font-family: 'Cormorant Garamond', serif;
          font-size: 108px; font-weight: 300;
          line-height: 1; letter-spacing: -.06em;
          color: #ede8df; user-select: none;
        }
        .tp-cnt {
          font-size: 9px; font-weight: 500;
          letter-spacing: .2em; text-transform: uppercase;
          color: #d4cfc5;
        }
        .tp-sec-r {
          padding: 72px 60px;
          display: flex; flex-direction: column;
          justify-content: center; gap: 18px;
        }
        .tp-stag {
          font-size: 10px; font-weight: 500;
          letter-spacing: .22em; text-transform: uppercase;
        }
        .tp-stitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4.5vw, 64px);
          font-weight: 300; line-height: .93;
          letter-spacing: -.03em;
        }
        .tp-stitle em { font-style: italic; }
        .tp-sdesc {
          font-size: 15px; font-weight: 300;
          line-height: 1.9; color: #9a9088;
          max-width: 500px;
        }

        /* ── TABLET (641px – 1024px) ── */
        @media (max-width: 1024px) {
          .tp-hero {
            padding: 80px 40px 80px;
            gap: 52px;
          }
          .tp-tabs { padding: 0 40px; }
          .tp-sec-hd { grid-template-columns: 160px 1fr; }
          .tp-sec-l { padding: 56px 0 56px 40px; }
          .tp-sec-r { padding: 56px 40px; }
          .tp-slug { font-size: 80px; }
          .tp-body { font-size: 15px; }
          .tp-quote { font-size: 18px; }
        }

        /* ── MOBILE (≤ 640px) ── */
        @media (max-width: 640px) {
          .tp-hero {
            grid-template-columns: 1fr;
            padding: 60px 20px 64px;
            gap: 40px;
            align-items: start;
          }
          .tp-eline { margin-bottom: 24px; }
          .tp-h1 { font-size: clamp(44px, 13vw, 68px); margin-bottom: 32px; }
          .tp-stats { gap: 28px; }
          .tp-sv { font-size: 36px; }
          .tp-body { font-size: 14px; }
          .tp-quote { font-size: 17px; }

          .tp-tabs { padding: 0 20px; }
          .tp-tab { padding: 16px 0; margin-right: 28px; font-size: 9px; }

          .tp-sec-hd { grid-template-columns: 1fr; }
          .tp-sec-l {
            padding: 40px 20px 28px;
            border-right: none;
            border-bottom: 1px solid #e8e2d4;
            flex-direction: row;
            align-items: center;
            gap: 16px;
          }
          .tp-slug { font-size: 48px; line-height: 1; }
          .tp-sec-r { padding: 32px 20px 48px; gap: 14px; }
          .tp-stag { font-size: 9px; }
          .tp-sdesc { font-size: 14px; }
        }

        /* ── VERY SMALL (≤ 380px) ── */
        @media (max-width: 380px) {
          .tp-hero { padding: 48px 16px 52px; }
          .tp-h1 { font-size: 40px; }
          .tp-tabs { padding: 0 16px; }
          .tp-sec-l { padding: 32px 16px 24px; }
          .tp-sec-r { padding: 28px 16px 40px; }
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