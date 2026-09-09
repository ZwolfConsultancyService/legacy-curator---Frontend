



import Coffee from '../assets/stories/CoffeeTableBooks.jpeg'
import Family from '../assets/stories/FamilyLegacy.jpg'
import Memoir from '../assets/stories/MemoirBooks.jpg'
import Photo from '../assets/stories/PhotoBooks.jpg'
import Book from '../assets/stories/Books.jpeg'
import Devotional from '../assets/stories/Devotional.jpeg'
import Business from '../assets/stories/Business.jpeg'
import Travel from '../assets/stories/Travel.webp'
import Wedding from '../assets/stories/Wedding.jpeg'
import Individual from '../assets/stories/Individual.png'
import Customized from '../assets/stories/Customized.png'
import Children from '../assets/stories/Children.jpeg'
import Product from '../assets/stories/Product.jpeg'




// ─── All Service Data ────────────────────────────────────────────────────────
const services = {


    'coffee-table': {
    title: 'Coffee Table Books',
    subtitle: 'The beautiful statement edition',
    packageLabel: 'ALL-INCLUSIVE COFFEE TABLE BOOK PACKAGE',
    packageName: 'The Prestige',
    packageSubtitle: 'Statement Edition',
    slug: 'coffee-table',
    tagline: 'Art You Can Hold.',
    metaTitle: 'Coffee Table Book Design Service | Legacy Curator ',
    metaDescription: 'Commission a stunning bespoke coffee table book. Large-format, luxury printed art books that make bold statements and unforgettable gifts.',
    heroImage: Coffee,
    packageDesc: 'A story of elegance where visuals softly speak, each page unfolding moments refined and unique; placed with pride where every glance finds its way, a timeless piece that always has something to say, blending art and story with effortless grace, turning your memories into a statement of space, designed to be admired again and again, a book that stays beyond moments and trends.',
    detailTitle: 'We take care of every detail',
    featureGroups: [
      { title: 'Art Direction Sessions', items: ['3 full art direction meetings', '1 concept development session', '1 physical proof review', '1 final sign-off meeting'] },
      { title: 'Large format hardback books', items: ['Up to 35×35 cm format', 'Up to 120 pages', 'Up to 100 images', 'Lay-flat binding throughout'] },
      { title: 'A dedicated creative team', items: ['Senior art director', 'Professional photo editor', 'Expert typographer', 'Print production specialist'] },
      { title: 'Your vision, realised', items: ['Digital proof of every spread', 'Your book in PDF format', 'Print-ready files included', 'Full rights to all design files'] },
      { title: 'Yours to personalise', items: ['Spot UV cover option', 'Foil stamping available', 'Embossed title lettering', 'Custom slipcase design'] },
      { title: 'Printing and binding', items: ['170gsm silk art paper', 'Sewn sections to lie flat', 'Hand-bound in London', 'Luxury gift box for every copy'] },
    ],
    variants: [
      {
        title: 'Family Legacy Book',
        tagline: 'Generations, Displayed in Grandeur.',
        image: Family,
        path: '/services/coffee-table-family-legacy-book',
      },
      {
        title: 'Business Story Book',
        tagline: 'Your Brand, In Large Format.',
        image: Business,
        path: '/services/coffee-table-business-story-book',
      },
      {
        title: 'Devotional Book',
        tagline: 'Faith, Displayed With Grandeur.',
        image: Devotional,
        path: '/services/coffee-table-devotional-book',
      },
      {
        title: 'Individual Legacy Book',
        tagline: 'One Life, In Large Format.',
        image: Individual,
        path: '/services/coffee-table-individual-legacy-book',
      },
    ],
    faqs: [
      {
        q: 'What subjects work best for a coffee table book?',
        a: 'The possibilities are wide — architecture, travel, art collections, fashion, family estates, brand stories, personal photography, and more. If it is visually compelling and meaningful to you, our art director will know how to make it extraordinary on the page.',
      },
      {
        q: 'What is the finished size of the book?',
        a: 'The Prestige Statement Edition is produced in a generous 35×35 cm square format — substantial enough to command attention and designed to lie beautifully flat on any surface. Custom dimensions can be discussed during your art direction sessions.',
      },
      {
        q: 'Can this book be used as a corporate or client gift?',
        a: 'Absolutely. Many of our clients commission coffee table books as premium gifts for investors, clients, or key stakeholders. The book can be fully brand-aligned and presented in a custom luxury gift box, making it an unforgettable impression.',
      },
      {
        q: 'Do I receive the design files after the project?',
        a: 'Yes. Full rights to all print-ready design files are included in your package. You are free to commission reprints at any time, through us or independently, with no restrictions.',
      },
    ],
    carouselImages: [
      { src: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&q=85', caption: 'Large format, breathtaking design' },
      { src: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&q=85', caption: 'A statement piece for any space' },
      { src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=85', caption: 'Hand-bound in London' },
    ],
    carouselTitle: 'Explore the Prestige',
    carouselEdition: 'Statement Edition',
    carouselDesc: 'Our timeless and elegant statement edition, beautifully crafted and hand-bound.',
    testimonial: "It sits on every client's coffee table. It has started more conversations than any marketing campaign we have ever run.",
    testimonialAuthor: 'Arjun Kapoor, CEO — Kapoor & Associates',
    ctaItalic1: 'someday', ctaItalic2: 'today',
    ctaSubtitle: 'We would be delighted to help you begin your coffee table book journey and to answer any questions you may have.',
  },

  'coffee-table-family-legacy-book': {
    title: 'Coffee Table for Family Legacy Book',
    subtitle: 'The beautiful heritage in large format',
    packageLabel: 'ALL-INCLUSIVE COFFEE TABLE FAMILY LEGACY PACKAGE',
    packageName: 'The Heritage Prestige',
    packageSubtitle: 'Family Legacy Edition',
    slug: 'coffee-table-family-legacy-book',
    tagline: 'Generations, Displayed in Grandeur.',
    metaTitle: 'Coffee Table Family Legacy Book | Legacy Curator',
    metaDescription: 'A large-format coffee table book that turns your family legacy into a striking piece of art — hand-bound, archival, and built to be displayed for generations.',
    heroImage: Family,
    variantOf: { title: 'Coffee Table Books', path: '/services/coffee-table' },
    packageDesc: "Your family's story deserves more than a shelf — it deserves a stage. We take the memories, portraits, and milestones that define your lineage and present them in a grand, large-format volume designed to be admired in every room it enters.",
    detailTitle: 'We take care of every detail',
    featureGroups: [
      { title: 'Art Direction Sessions', items: ['3 full art direction meetings', '1 family archive review', '1 physical proof review', '1 final sign-off meeting'] },
      { title: 'Large format hardback books', items: ['Up to 35×35 cm format', 'Up to 120 pages', 'Up to 100 images', 'Lay-flat binding throughout'] },
      { title: 'A dedicated creative team', items: ['Senior art director', 'Professional photo editor', 'Family tree designer', 'Print production specialist'] },
      { title: 'Your legacy, realised', items: ['Digital proof of every spread', 'Your book in PDF format', 'Print-ready files included', 'Full rights to all design files'] },
      { title: 'Yours to personalise', items: ['Spot UV cover option', 'Foil-stamped family name', 'Embossed title lettering', 'Custom slipcase design'] },
      { title: 'Printing and binding', items: ['170gsm silk art paper', 'Sewn sections to lie flat', 'Hand-bound in London', 'Luxury gift box for every copy'] },
    ],
  faqs: [
  {
    q: 'What is a Coffee Table Family Legacy Book?',
    a: 'A Coffee Table Family Legacy Book is a premium, large-format visual record of your family’s history, memories, milestones, photographs, and traditions. It brings generations of your family story together in an elegant book designed to be displayed and passed down as a treasured heirloom.'
  },

  {
    q: 'How is a Coffee Table Family Legacy Book different from a regular Family Legacy Book?',
    a: 'A regular Family Legacy Book is primarily designed around reading and storytelling, while the Coffee Table Family Legacy Book is more visual and presentation-focused. It uses larger photography, spacious layouts, premium design, and carefully curated family stories to create a statement piece for your home.'
  },

  {
    q: 'Can the book include photographs from multiple generations?',
    a: 'Yes. The book can bring together photographs and stories from grandparents, parents, children, and earlier generations, creating a visual journey through your family history and showing how your family has evolved over time.'
  },

  {
    q: 'Can old and damaged family photographs be included?',
    a: 'Yes. Old family photographs can be carefully restored and enhanced before being incorporated into the book. This allows precious archival images to be presented beautifully while preserving their original character and historical value.'
  },

  {
    q: 'Can we include our family tree in the book?',
    a: 'Yes. A bespoke family tree can be designed as part of the Coffee Table Family Legacy Book. It can visually connect generations and complement the photographs, stories, and other family-history content throughout the book.'
  },

  {
    q: 'What kind of family stories can be included?',
    a: 'The book can include stories about your family’s origins, grandparents, childhood memories, marriages, achievements, traditions, important milestones, places you have lived, family businesses, celebrations, and the values that have been passed from one generation to another.'
  },

  {
    q: 'Can the Coffee Table Family Legacy Book be customized for our family?',
    a: 'Yes. Every Coffee Table Family Legacy Book can be tailored to your family. The photography, stories, family tree, typography, layouts, cover, materials, and overall visual direction can be thoughtfully designed around your family’s personality and history.'
  },

  {
    q: 'Can we include handwritten letters, documents, or family memorabilia?',
    a: 'Yes. Meaningful family documents, handwritten letters, certificates, invitations, newspaper clippings, artwork, and other memorabilia can be incorporated into the design to make the book a more complete record of your family legacy.'
  },

  {
    q: 'Who is a Coffee Table Family Legacy Book for?',
    a: 'It is ideal for families who want to preserve their history in a beautiful physical form. It can also make a meaningful heirloom or milestone gift for parents, grandparents, anniversaries, family reunions, weddings, or significant family occasions.'
  },

  {
    q: 'How is the family story organized inside the book?',
    a: 'The story can be organized chronologically, by generation, by family branch, or around significant chapters and themes. The structure is developed around your family’s history so that the final book feels natural, personal, and visually engaging.'
  },

  {
    q: 'Can multiple family members contribute to the book?',
    a: 'Yes. Different family members can contribute photographs, memories, stories, documents, and personal reflections. These contributions can then be carefully curated and brought together into one cohesive family legacy.'
  },

  {
    q: 'What makes this book a family heirloom?',
    a: 'The combination of carefully preserved family stories, photographs, archival material, and premium bookmaking creates something designed to last beyond a single generation. It becomes a physical record of where your family came from and a meaningful object to pass forward.'
  }
],
    carouselImages: [
      { src: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=1200&q=85', caption: 'Generations, displayed in grandeur' },
      { src: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&q=85', caption: 'Large format, breathtaking design' },
      { src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=85', caption: 'Hand-bound in London' },
    ],
    carouselTitle: 'Explore the Heritage Prestige',
    carouselEdition: 'Family Legacy Edition',
    carouselDesc: 'Your family story, told at a scale worthy of it.',
    testimonial: 'This is a great legacy for the grandchildren. I just wish that my parents had done the same.',
    testimonialAuthor: 'Linda de Marlor, USA',
    ctaItalic1: 'someday', ctaItalic2: 'today',
    ctaSubtitle: 'We would be delighted to help you begin your family legacy coffee table book journey and to answer any questions you may have.',
  },

  'coffee-table-business-story-book': {
    title: 'Coffee Table for Business Story Book',
    subtitle: 'The beautiful brand statement in large format',
    packageLabel: 'ALL-INCLUSIVE COFFEE TABLE BUSINESS PACKAGE',
    packageName: 'The Executive Prestige',
    packageSubtitle: 'Business Story Edition',
    slug: 'coffee-table-business-story-book',
    tagline: 'Your Brand, In Large Format.',
    metaTitle: 'Coffee Table Business Story Book | Legacy Curator',
    metaDescription: 'Turn your company history into a striking large-format coffee table book — the ultimate boardroom, client-gift, and lobby statement piece.',
    heroImage: Business,
    variantOf: { title: 'Coffee Table Books', path: '/services/coffee-table' },
    packageDesc: "A pitch deck fades from memory. A beautifully bound, large-format volume of your company's journey does not. We turn your milestones, people, and vision into a statement piece built for the boardroom table and the client's coffee table alike.",
    detailTitle: 'We take care of every detail',
    featureGroups: [
      { title: 'Art Direction Sessions', items: ['3 full art direction meetings', '1 stakeholder & archive review', '1 physical proof review', '1 final sign-off meeting'] },
      { title: 'Large format hardback books', items: ['Up to 35×35 cm format', 'Up to 120 pages', 'Up to 100 images or infographics', 'Lay-flat binding throughout'] },
      { title: 'A dedicated creative team', items: ['Senior art director', 'Business narrative writer', 'Brand-aligned typographer', 'Print production specialist'] },
      { title: 'Your brand, realised', items: ['Digital proof of every spread', 'Your book in PDF format', 'Print-ready files included', 'Full rights to all design files'] },
      { title: 'Yours to personalise', items: ['Full brand colour integration', 'Foil-stamped company name', 'Custom chapter dividers', 'Investor edition available'] },
      { title: 'Printing and binding', items: ['170gsm silk art paper', 'Sewn sections to lie flat', 'Hand-bound in London', 'Luxury gift box for every copy'] },
    ],
  faqs: [
  {
    q: 'How is this different from the regular Business Story Book?',
    a: 'The standard Business Story Book is a text-led narrative focused on documenting the company journey. This Coffee Table edition is a large-format, visually led statement piece that combines the company story with powerful photography, premium layouts, and an elevated presentation designed for boardrooms, offices, and distinguished client gifting.'
  },

  {
    q: 'What can be included in a Coffee Table Business Story Book?',
    a: 'It can include the company’s founding story, leadership journey, milestones, major projects, products, people, culture, achievements, client stories, photographs, and defining moments. The content is carefully curated to create a compelling visual record of the business and its journey.'
  },

  {
    q: 'Can this be brand-aligned to our identity?',
    a: 'Fully. The book can be designed around your existing brand identity, including brand colours, typography, visual language, photography style, and company marks. The design is developed to feel like a natural extension of your brand rather than a generic corporate publication.'
  },

  {
    q: 'Can the book showcase our founders and leadership team?',
    a: 'Yes. Founder and leadership profiles can be presented as dedicated visual chapters, combining portraits, personal stories, milestones, philosophies, and contributions to the organization’s journey.'
  },

  {
    q: 'Can we include our company history and milestones?',
    a: 'Yes. Key milestones can be structured into a visual timeline or dedicated chapters, showing how the organization evolved from its beginnings to where it stands today. Important events, achievements, expansions, and turning points can all be incorporated.'
  },

  {
    q: 'Can projects, products, or achievements be featured?',
    a: 'Absolutely. Major projects, flagship products, landmark achievements, awards, and important business moments can be given dedicated spreads. Photography, statistics, captions, and storytelling can be combined to make each achievement visually memorable.'
  },

  {
    q: 'Can it be created specifically for premium client gifting?',
    a: 'Yes. The Coffee Table Business Story Book is particularly suited to premium client and stakeholder gifting. The large-format design, refined presentation, and personalized brand treatment create a lasting physical representation of your organization and its story.'
  },

  {
    q: 'Is an investor edition available?',
    a: 'Yes. An investor-focused edition can be developed with content structured around the company vision, business journey, leadership, key milestones, market presence, achievements, and an executive summary section where appropriate.'
  },

  {
    q: 'Can employees and company culture be featured?',
    a: 'Yes. The book can include employees, teams, workplace culture, celebrations, traditions, and behind-the-scenes moments. This helps capture the people and culture behind the organization rather than focusing only on business milestones.'
  },

  {
    q: 'Can we include photographs from the early days of the company?',
    a: 'Yes. Archival photographs from the company’s early years can be restored, enhanced, and integrated with contemporary photography to create a visual contrast between where the organization began and where it is today.'
  },

  {
    q: 'How many copies come with the package?',
    a: 'The base package includes a curated number of hand-bound copies intended for internal presentation, leadership, and premium gifting. Additional copies can be produced whenever required, subject to the selected production specifications.'
  },

  {
    q: 'Can multiple editions be created for different audiences?',
    a: 'Yes. Different versions can be developed for audiences such as investors, clients, leadership, employees, or special events. The core story can remain consistent while the content and emphasis are adapted for each audience.'
  }
],
    carouselImages: [
      { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=85', caption: 'Your brand story, in large format' },
      { src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=85', caption: 'A legacy for your boardroom' },
      { src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=85', caption: 'Hand-bound in London' },
    ],
    carouselTitle: 'Explore the Executive Prestige',
    carouselEdition: 'Business Story Edition',
    carouselDesc: "Your company's journey, presented at boardroom scale.",
    testimonial: 'We presented this at our 25th anniversary gala. Every person in the room was moved. It is our proudest asset.',
    testimonialAuthor: 'Suresh Nair, Chairman — Nair Industries',
    ctaItalic1: 'someday', ctaItalic2: 'today',
    ctaSubtitle: 'We would be delighted to help you begin your business story coffee table book journey and to answer any questions you may have.',
  },

  'coffee-table-devotional-book': {
    title: 'Coffee Table for Devotional Book',
    subtitle: 'The beautiful faith statement in large format',
    packageLabel: 'ALL-INCLUSIVE COFFEE TABLE DEVOTIONAL PACKAGE',
    packageName: 'The Sacred Prestige',
    packageSubtitle: 'Devotional Edition',
    slug: 'coffee-table-devotional-book',
    tagline: 'Faith, Displayed With Grandeur.',
    metaTitle: 'Coffee Table Devotional Book | Legacy Curator',
    metaDescription: 'A large-format devotional coffee table book — prayers, sacred imagery, and your spiritual journey, presented as a piece of art for your home.',
    heroImage: Devotional,
    variantOf: { title: 'Coffee Table Books', path: '/services/coffee-table' },
    packageDesc: 'Faith deserves a place of honour in the home, not just the shelf. We bring together prayers, sacred imagery, and your spiritual story into a large-format volume designed to be seen, held, and returned to often.',
    detailTitle: 'We take care of every detail',
    featureGroups: [
      { title: 'Art Direction Sessions', items: ['3 full art direction meetings', '1 scripture & content review', '1 physical proof review', '1 final blessing & sign-off meeting'] },
      { title: 'Large format hardback books', items: ['Up to 35×35 cm format', 'Up to 120 pages', 'Up to 100 sacred images', 'Lay-flat binding throughout'] },
      { title: 'A dedicated creative team', items: ['Senior art director', 'Sacred art consultant', 'Expert typographer', 'Print production specialist'] },
      { title: 'Your faith, realised', items: ['Digital proof of every spread', 'Your book in PDF format', 'Print-ready files included', 'Full rights to all design files'] },
      { title: 'Yours to personalise', items: ['Gold or silver embossing', 'Foil-stamped title', 'Custom slipcase design', 'Personalised prayer page'] },
      { title: 'Printing and binding', items: ['170gsm silk art paper', 'Sewn sections to lie flat', 'Hand-bound in London', 'Luxury gift box for every copy'] },
    ],
  faqs: [
  {
    q: 'How is this different from the regular Devotional Book?',
    a: 'The standard Devotional Book is primarily a text-led hardback, while this Coffee Table edition is a large-format, visually led creation. It brings together sacred imagery, prayers, scripture, spiritual reflections, and meaningful moments in an elegant format designed to be displayed and revisited.'
  },

  {
    q: 'What can be included in a Coffee Table Devotional Book?',
    a: 'The book can include prayers, scriptures, spiritual teachings, sacred artwork, devotional photography, personal reflections, religious ceremonies, important spiritual milestones, and other content that holds deep meaning for you or your community.'
  },

  {
    q: 'Is the Coffee Table Devotional Book suitable for different faiths and traditions?',
    a: 'Yes. Each project is developed around the faith, spiritual tradition, and beliefs it is intended to represent. The content, imagery, language, and design are approached with care and respect for the traditions being documented.'
  },

  {
    q: 'Can it include family prayers and personal spiritual traditions?',
    a: 'Absolutely. Family prayers, traditions, blessings, rituals, spiritual memories, and meaningful passages can be incorporated to create a devotional book that reflects your family’s personal spiritual heritage.'
  },

  {
    q: 'Can sacred photographs and artwork be included?',
    a: 'Yes. Sacred photographs, religious artwork, temple or place-of-worship imagery, ceremonial moments, and other meaningful visual material can be carefully curated and integrated into the book’s design.'
  },

  {
    q: 'Can we include scripture or religious texts in the book?',
    a: 'Yes. Selected scripture, prayers, verses, hymns, teachings, and other devotional text can be incorporated into the book. Content can be carefully organized alongside imagery to create a balanced and meaningful visual experience.'
  },

  {
    q: 'Can the book document a spiritual journey or pilgrimage?',
    a: 'Yes. A spiritual journey, pilgrimage, visits to sacred places, religious ceremonies, or significant moments of faith can be developed into a visual narrative, combining photographs, reflections, dates, locations, and meaningful devotional content.'
  },

  {
    q: 'Can the Coffee Table Devotional Book be personalized?',
    a: 'Yes. The book can be personalized through its photography, artwork, typography, cover treatment, layout, written content, and overall visual direction. Every element can be thoughtfully selected to reflect the spiritual character and purpose of the book.'
  },

  {
    q: 'Can old devotional photographs and family archives be restored?',
    a: 'Yes. Older photographs, scanned prints, handwritten prayers, and archival materials can be carefully restored and prepared for inclusion. This allows important spiritual and family memories to become part of the finished book.'
  },

  {
    q: 'Can it be created as a family spiritual heirloom?',
    a: 'Yes. The book can preserve prayers, traditions, stories, photographs, teachings, and spiritual memories that are meaningful to your family. Created as a lasting physical record, it can be passed from one generation to the next.'
  },

  {
    q: 'Where can a Coffee Table Devotional Book be displayed?',
    a: 'Its large-format presentation makes it suitable for spaces such as a prayer room, meditation area, living room, family library, entrance space, or other meaningful setting where the book can be respectfully displayed and revisited.'
  },

  {
    q: 'What is the finished size of the Coffee Table Devotional Book?',
    a: 'The Coffee Table Devotional Book is created in a generous large-format presentation, with the final dimensions selected according to the project’s design, content, and production requirements.'
  }
],
    carouselImages: [
      { src: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1200&q=85', caption: 'Faith, displayed with grandeur' },
      { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=85', caption: 'Sacred imagery, large format' },
      { src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=85', caption: 'Hand-bound in London' },
    ],
    carouselTitle: 'Explore the Sacred Prestige',
    carouselEdition: 'Devotional Edition',
    carouselDesc: 'Faith, presented as a piece of art for your home.',
    testimonial: 'Reading this book feels like sitting in prayer. It has brought our whole family closer to our roots and to each other.',
    testimonialAuthor: 'Fatima Al-Rashid, Dubai',
    ctaItalic1: 'someday', ctaItalic2: 'today',
    ctaSubtitle: 'We would be delighted to help you begin your devotional coffee table book journey and to answer any questions you may have.',
  },

  'coffee-table-individual-legacy-book': {
    title: 'Coffee Table for Individual Legacy Book',
    subtitle: 'The beautiful portrait statement in large format',
    packageLabel: 'ALL-INCLUSIVE COFFEE TABLE INDIVIDUAL LEGACY PACKAGE',
    packageName: 'The Portrait Prestige',
    packageSubtitle: 'Individual Legacy Edition',
    slug: 'coffee-table-individual-legacy-book',
    tagline: 'One Life, In Large Format.',
    metaTitle: 'Coffee Table Individual Legacy Book | Legacy Curator',
    metaDescription: 'Celebrate one life at a grand scale — a large-format coffee table book honouring a milestone, a legacy, or a life well-lived.',
    heroImage: Individual,
    variantOf: { title: 'Coffee Table Books', path: '/services/coffee-table' },
    packageDesc: 'Some lives deserve to be displayed, not tucked away. We take the milestones, portraits, and moments that defined a single, remarkable life and present them in a grand, large-format volume built to be admired for years to come.',
    detailTitle: 'We take care of every detail',
    featureGroups: [
      { title: 'Art Direction Sessions', items: ['3 full art direction meetings', '1 photo archive review', '1 physical proof review', '1 final sign-off meeting'] },
      { title: 'Large format hardback books', items: ['Up to 35×35 cm format', 'Up to 120 pages', 'Up to 100 images', 'Lay-flat binding throughout'] },
      { title: 'A dedicated creative team', items: ['Senior art director', 'Professional photo editor', 'Expert typographer', 'Print production specialist'] },
      { title: 'Their story, realised', items: ['Digital proof of every spread', 'Your book in PDF format', 'Print-ready files included', 'Full rights to all design files'] },
      { title: 'Yours to personalise', items: ['Spot UV cover option', 'Foil-stamped title lettering', 'Custom slipcase design', 'Personalised tribute page'] },
      { title: 'Printing and binding', items: ['170gsm silk art paper', 'Sewn sections to lie flat', 'Hand-bound in London', 'Luxury gift box for every copy'] },
    ],
  faqs: [
  {
    q: 'How is this different from the regular Individual Legacy Book?',
    a: 'The regular Individual Legacy Book focuses primarily on documenting a person’s story in a traditional keepsake format. This Coffee Table edition is a larger, more visually led statement piece that combines personal stories, photographs, milestones, and memories in a format designed to be displayed and admired.'
  },

  {
    q: 'Who is a Coffee Table Individual Legacy Book best suited for?',
    a: 'It is ideal for milestone birthdays, retirements, anniversaries, professional achievements, tributes, or simply celebrating a remarkable life. It can also be created as a meaningful gift for a parent, grandparent, spouse, mentor, founder, or loved one.'
  },

  {
    q: 'What can be included in an Individual Legacy Book?',
    a: 'The book can include childhood memories, family photographs, education, career milestones, relationships, travels, achievements, personal philosophies, memorable experiences, important life events, and reflections from people who have been part of the journey.'
  },

  {
    q: 'Can the book tell the complete story of someone’s life?',
    a: 'Yes. The book can be structured as a complete visual life story, moving through different stages and chapters of a person’s journey. The narrative can be chronological or organized around the people, places, achievements, and experiences that shaped their life.'
  },

  {
    q: 'Can old or damaged photographs be restored?',
    a: 'Yes. Older, faded, damaged, or low-quality photographs can be carefully restored and enhanced before being incorporated into the book, helping important memories look their best at the larger Coffee Table format.'
  },

  {
    q: 'Can photographs from different stages of life be included?',
    a: 'Absolutely. Childhood photographs, school and college memories, professional portraits, family occasions, travels, celebrations, and recent photographs can all be brought together to create a visual journey through the individual’s life.'
  },

  {
    q: 'Can family and friends contribute stories or memories?',
    a: 'Yes. Contributions from family members, friends, colleagues, and other important people can be included as personal messages, memories, anecdotes, letters, or reflections, adding multiple perspectives to the life story.'
  },

  {
    q: 'Can the book include personal achievements and professional milestones?',
    a: 'Yes. Academic achievements, career milestones, awards, leadership roles, entrepreneurial journeys, creative accomplishments, community contributions, and other defining moments can be presented through dedicated visual chapters and spreads.'
  },

  {
    q: 'Can the Coffee Table Individual Legacy Book be personalized?',
    a: 'Yes. The book can be customized around the individual’s personality and story, including the photography, narrative, typography, layouts, cover treatment, colours, captions, and overall visual direction.'
  },

  {
    q: 'Can I create this book as a tribute to someone?',
    a: 'Yes. A Coffee Table Individual Legacy Book can thoughtfully preserve the life, memories, achievements, relationships, and personal qualities of someone who holds a special place in your life. It can become a lasting tribute for family and future generations.'
  },

  {
    q: 'Can the book include letters, certificates, awards, or other personal memorabilia?',
    a: 'Yes. Meaningful letters, certificates, newspaper features, awards, handwritten notes, artwork, invitations, and other personal archives can be incorporated into the design to make the book a richer record of the individual’s journey.'
  },

  {
    q: 'What makes this an Individual Legacy Book rather than just a photo book?',
    a: 'A photo book primarily presents a collection of images, while an Individual Legacy Book connects photographs with stories, memories, achievements, relationships, and personal reflections. The result is a complete portrait of a person’s life rather than simply a collection of photographs.'
  }
],
    carouselImages: [
      { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=85', caption: 'One life, in large format' },
      { src: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&q=85', caption: 'A statement piece for any space' },
      { src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=85', caption: 'Hand-bound in London' },
    ],
    carouselTitle: 'Explore the Portrait Prestige',
    carouselEdition: 'Individual Legacy Edition',
    carouselDesc: 'A life well-lived, presented at grand scale.',
    testimonial: 'Every page brought tears to my eyes. This is the most meaningful gift I have ever given my family.',
    testimonialAuthor: 'Kavya Nair, Bengaluru',
    ctaItalic1: 'someday', ctaItalic2: 'today',
    ctaSubtitle: 'We would be delighted to help you begin your individual legacy coffee table book journey and to answer any questions you may have.',
  },
  // 'photo-book': {
  //   title: 'Photo Books',
  //   subtitle: 'The beautiful memory edition',
  //   packageLabel: 'ALL-INCLUSIVE PHOTO BOOK PACKAGE',
  //   packageName: 'The Signature',
  //   packageSubtitle: 'Memory Edition',
  //   slug: 'photo-book',
  //   tagline: 'Memories Frozen in Time.',
  //   metaTitle: 'Custom Photo Book Service | Legacy Curator ',
  //   metaDescription: 'Create stunning custom photo books that preserve your most cherished memories. Professional printing, premium binding, and bespoke designs tailored just for you.',
  //   heroImage: Photo,
  //   packageDesc: 'Captured in frames the moments you love, like little blessings sent from above each picture a story silent yet clear, holding your memories forever near, turning fleeting time into something that stays, a collection of life most beautiful days, every glance brings feelings anew, reliving the past as if it in view.',
  //   detailTitle: 'We take care of every detail',
  //   featureGroups: [
  //     { title: 'Photo Sessions & Curation', items: ['Up to 200 curated photos', '1 dedicated curation session', '1 photo scanning service', '1 final review meeting'] },
  //     { title: 'Hand-bound hardback books', items: ['Up to 200 pages', 'Up to 80,000 words of captions', 'Up to 100 photos or images', '234mm × 156mm hardback (10 copies)'] },
  //     { title: 'A dedicated project team', items: ['Personal project manager', 'Handpicked photo editor', 'Expert layout designer', 'Quality control specialist'] },
  //     { title: 'Your story, captured', items: ['Digital copies of all restored photos', 'Your book in PDF format', 'High-res image archive', 'USB keepsake included'] },
  //     { title: 'Yours to personalise', items: ['Custom cover design', 'Choice of 4 linen colors', 'Silver or gold embossing', 'Personalised dedication page'] },
  //     { title: 'Printing and binding', items: ['Printed on archival-quality paper', 'Stitched in sections to lie flat', 'Hand-bound in London', 'Presentation box for every copy'] },
  //   ],
  //   faqs: [
  //     {
  //       q: 'How many photos can I include in my photo book?',
  //       a: 'Your Signature Memory Edition can include up to 100 curated photos across up to 200 pages. Our photo editors work with you during a dedicated curation session to select the images that tell your story most beautifully.',
  //     },
  //     {
  //       q: 'What happens if my photos are old or low quality?',
  //       a: 'No concern at all. Our package includes a professional photo scanning and restoration service. We carefully restore older or damaged photographs so they appear vibrant and timeless within your finished book.',
  //     },
  //     {
  //       q: 'How long does the entire process take?',
  //       a: 'From your first session to delivery of your finished copies, the typical timeline is 10 to 14 weeks. Your personal project manager will keep you informed at every stage.',
  //     },
  //     {
  //       q: 'Can I choose the cover style and colours?',
  //       a: 'Absolutely. Your book is fully personalised — choose from four linen cover colours, silver or gold embossing, and a bespoke dedication page. Every detail is crafted to reflect your taste and the spirit of your memories.',
  //     },
  //   ],
  //   carouselImages: [
  //     { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85', caption: 'Every photo, preserved forever' },
  //     { src: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200&q=85', caption: 'Professional curation & editing' },
  //     { src: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1200&q=85', caption: 'Hand-bound in London' },
  //   ],
  //   carouselTitle: 'Explore the Signature',
  //   carouselEdition: 'Memory Edition',
  //   carouselDesc: 'Our timeless and elegant memory edition, beautifully crafted and hand-bound.',
  //   testimonial: '"Every page brought tears to my eyes. This is the most meaningful gift I have ever given my family."',
  //   testimonialAuthor: 'Priya Sharma, Mumbai',
  //   ctaItalic1: 'someday', ctaItalic2: 'today',
  //   ctaSubtitle: 'We would be delighted to help you begin your photo book journey and to answer any questions you may have.',
  // },

  // 'travel-photo-book': {
  //   title: 'Travel Photo Books',
  //   subtitle: 'The beautiful wanderer edition',
  //   packageLabel: 'ALL-INCLUSIVE TRAVEL PHOTO BOOK PACKAGE',
  //   packageName: 'The Wanderer',
  //   packageSubtitle: 'Travel Edition',
  //   slug: 'travel-photo-book',
  //   tagline: 'Every Mile, a Memory.',
  //   metaTitle: 'Travel Photo Book Service | Legacy Curator ',
  //   metaDescription: 'Turn your travel photographs into a stunning custom photo book. Professionally printed, beautifully bound, and tailored to your adventures.',
  //   heroImage: Travel,
  //   packageDesc: 'From sunlit streets to mountain peaks, every destination holds a story waiting to be told. We gather your finest travel photographs and craft them into a beautifully printed keepsake — so every adventure lives on long after the journey ends.',
  //   detailTitle: 'We take care of every detail',
  //   featureGroups: [
  //     { title: 'Photo Sessions & Curation', items: ['Up to 200 curated travel photos', '1 dedicated curation session', '1 photo enhancement service', '1 final review meeting'] },
  //     { title: 'Hand-bound hardback books', items: ['Up to 200 pages', 'Up to 80,000 words of captions', 'Up to 100 photos or images', '234mm × 156mm hardback (10 copies)'] },
  //     { title: 'A dedicated project team', items: ['Personal project manager', 'Handpicked photo editor', 'Expert layout designer', 'Quality control specialist'] },
  //     { title: 'Your adventure, captured', items: ['Digital copies of all edited photos', 'Your book in PDF format', 'High-res image archive', 'USB keepsake included'] },
  //     { title: 'Yours to personalise', items: ['Custom destination cover design', 'Choice of 4 linen colors', 'Silver or gold embossing', 'Personalised journey dedication page'] },
  //     { title: 'Printing and binding', items: ['Printed on archival-quality paper', 'Stitched in sections to lie flat', 'Hand-bound in London', 'Presentation box for every copy'] },
  //   ],
  //   faqs: [
  //     {
  //       q: 'Can I include photos from multiple trips in one book?',
  //       a: 'Absolutely. Your Wanderer Travel Edition can feature photographs from multiple destinations and journeys, curated together into one seamless, beautifully told story of adventure.',
  //     },
  //     {
  //       q: 'What if my travel photos were taken on a phone?',
  //       a: 'No problem at all. Our photo editors are skilled at enhancing and optimising images from mobile devices to ensure they reproduce beautifully in print.',
  //     },
  //     {
  //       q: 'How long does the entire process take?',
  //       a: 'From your first session to delivery of your finished copies, the typical timeline is 10 to 14 weeks. Your personal project manager will keep you informed at every stage.',
  //     },
  //     {
  //       q: 'Can I choose the cover style and colours?',
  //       a: 'Yes. Choose from four linen cover colours, silver or gold embossing, and a personalised dedication page — every detail crafted to reflect the spirit of your travels.',
  //     },
  //   ],
  //   carouselImages: [
  //     { src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=85', caption: 'Every destination, preserved forever' },
  //     { src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=85', caption: 'Professional curation & editing' },
  //     { src: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1200&q=85', caption: 'Hand-bound in London' },
  //   ],
  //   carouselTitle: 'Explore the Wanderer',
  //   carouselEdition: 'Travel Edition',
  //   carouselDesc: 'Our timeless and elegant travel edition, beautifully crafted and hand-bound.',
  //   testimonial: '"This book captures not just where we went, but who we were in those moments. Absolutely priceless."',
  //   testimonialAuthor: 'Rahul & Anjali Mehra, Delhi',
  //   ctaItalic1: 'someday', ctaItalic2: 'today',
  //   ctaSubtitle: 'We would be delighted to help you begin your travel photo book journey and to answer any questions you may have.',
  // },

  // 'wedding-photo-book': {
  //   title: 'Wedding Photo Books',
  //   subtitle: 'The beautiful love edition',
  //   packageLabel: 'ALL-INCLUSIVE WEDDING PHOTO BOOK PACKAGE',
  //   packageName: 'The Beloved',
  //   packageSubtitle: 'Love Edition',
  //   slug: 'wedding-photo-book',
  //   tagline: 'Your Day. Forever Yours.',
  //   metaTitle: 'Wedding Photo Book Service | Legacy Curator ',
  //   metaDescription: 'Preserve your wedding memories in a stunning custom photo book. Professionally printed, luxuriously bound, and crafted to last a lifetime.',
  //   heroImage: Wedding,
  //   packageDesc: 'Your wedding day was filled with moments that words alone cannot hold — the laughter, the tears, the quiet glances shared. We take your most treasured photographs and craft them into a beautifully bound keepsake that tells the story of your love, exactly as it was.',
  //   detailTitle: 'We take care of every detail',
  //   featureGroups: [
  //     { title: 'Photo Sessions & Curation', items: ['Up to 200 curated wedding photos', '1 dedicated curation session', '1 photo retouching service', '1 final review meeting'] },
  //     { title: 'Hand-bound hardback books', items: ['Up to 200 pages', 'Up to 80,000 words of captions', 'Up to 100 photos or images', '234mm × 156mm hardback (10 copies)'] },
  //     { title: 'A dedicated project team', items: ['Personal project manager', 'Handpicked photo editor', 'Expert layout designer', 'Quality control specialist'] },
  //     { title: 'Your love story, captured', items: ['Digital copies of all retouched photos', 'Your book in PDF format', 'High-res image archive', 'USB keepsake included'] },
  //     { title: 'Yours to personalise', items: ['Custom bridal cover design', 'Choice of 4 linen colors', 'Silver or gold embossing', 'Personalised vow or dedication page'] },
  //     { title: 'Printing and binding', items: ['Printed on archival-quality paper', 'Stitched in sections to lie flat', 'Hand-bound in London', 'Presentation box for every copy'] },
  //   ],
  //   faqs: [
  //     {
  //       q: 'Can I use photos from my own wedding photographer?',
  //       a: 'Yes, absolutely. We work with images provided by you — whether from your professional photographer, family members, or both — curating the finest selection to tell your complete wedding story.',
  //     },
  //     {
  //       q: 'Can the book include a personalised vow or dedication page?',
  //       a: 'It can. Every Beloved Love Edition includes a personalised dedication page — the perfect place for your vows, a message to each other, or words from a loved one.',
  //     },
  //     {
  //       q: 'How long does the entire process take?',
  //       a: 'From your first session to delivery of your finished copies, the typical timeline is 10 to 14 weeks. Your personal project manager will keep you informed at every stage.',
  //     },
  //     {
  //       q: 'Can we order extra copies as gifts for family?',
  //       a: 'Yes. Additional copies can be ordered at a per-copy rate. Many couples gift copies to parents and grandparents — a meaningful extension of the day itself.',
  //     },
  //   ],
  //   carouselImages: [
  //     { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=85', caption: 'Your love story, preserved forever' },
  //     { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=85', caption: 'Professional curation & retouching' },
  //     { src: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1200&q=85', caption: 'Hand-bound in London' },
  //   ],
  //   carouselTitle: 'Explore the Beloved',
  //   carouselEdition: 'Love Edition',
  //   carouselDesc: 'Our timeless and elegant love edition, beautifully crafted and hand-bound.',
  //   testimonial: '"Every page brought tears to my eyes. This is the most meaningful gift I have ever given my family."',
  //   testimonialAuthor: 'Sneha & Vikram Patel, Mumbai',
  //   ctaItalic1: 'someday', ctaItalic2: 'today',
  //   ctaSubtitle: 'We would be delighted to help you begin your wedding photo book journey and to answer any questions you may have.',
  // },

  // 'individual-photo-book': {
  //   title: 'Individual Photo Books',
  //   subtitle: 'The beautiful portrait edition',
  //   packageLabel: 'ALL-INCLUSIVE INDIVIDUAL PHOTO BOOK PACKAGE',
  //   packageName: 'The Portrait',
  //   packageSubtitle: 'Portrait Edition',
  //   slug: 'individual-photo-book',
  //   tagline: 'One Life. One Story. One Book.',
  //   metaTitle: 'Personalized Photo Book Service | Legacy Curator ',
  //   metaDescription: 'Celebrate a single life with a beautifully crafted individual photo book. Milestones, memories, and moments — all in one stunning keepsake.',
  //   heroImage: Individual,
  //   packageDesc: 'A single life holds a world of moments — first steps and final farewells, quiet afternoons and milestone celebrations. We gather the photographs that define a person and craft them into a beautifully bound portrait of who they are, and all they mean.',
  //   detailTitle: 'We take care of every detail',
  //   featureGroups: [
  //     { title: 'Photo Sessions & Curation', items: ['Up to 200 curated personal photos', '1 dedicated curation session', '1 photo scanning & restoration service', '1 final review meeting'] },
  //     { title: 'Hand-bound hardback books', items: ['Up to 200 pages', 'Up to 80,000 words of captions', 'Up to 100 photos or images', '234mm × 156mm hardback (10 copies)'] },
  //     { title: 'A dedicated project team', items: ['Personal project manager', 'Handpicked photo editor', 'Expert layout designer', 'Quality control specialist'] },
  //     { title: 'Their story, captured', items: ['Digital copies of all restored photos', 'Your book in PDF format', 'High-res image archive', 'USB keepsake included'] },
  //     { title: 'Yours to personalise', items: ['Custom portrait cover design', 'Choice of 4 linen colors', 'Silver or gold embossing', 'Personalised tribute or dedication page'] },
  //     { title: 'Printing and binding', items: ['Printed on archival-quality paper', 'Stitched in sections to lie flat', 'Hand-bound in London', 'Presentation box for every copy'] },
  //   ],
  //   faqs: [
  //     {
  //       q: 'Who is an individual photo book best suited for?',
  //       a: 'It is perfect for celebrating a milestone birthday, honouring a life well-lived, or gifting someone a collection of their most treasured memories. Many families also create one as a lasting tribute to a loved one who has passed.',
  //     },
  //     {
  //       q: 'What happens if some photos are old or damaged?',
  //       a: 'Our package includes a professional photo scanning and restoration service. We carefully restore older or damaged photographs so they appear vibrant and timeless within the finished book.',
  //     },
  //     {
  //       q: 'How long does the entire process take?',
  //       a: 'From your first session to delivery of your finished copies, the typical timeline is 10 to 14 weeks. Your personal project manager will keep you informed at every stage.',
  //     },
  //     {
  //       q: 'Can we include captions or written memories alongside the photos?',
  //       a: 'Absolutely. The book accommodates up to 80,000 words of captions and written memories, allowing the photographs to be accompanied by the stories, dates, and voices that bring them to life.',
  //     },
  //   ],
  //   carouselImages: [
  //     { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=85', caption: 'A life, beautifully preserved' },
  //     { src: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200&q=85', caption: 'Professional curation & restoration' },
  //     { src: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1200&q=85', caption: 'Hand-bound in London' },
  //   ],
  //   carouselTitle: 'Explore the Portrait',
  //   carouselEdition: 'Portrait Edition',
  //   carouselDesc: 'Our timeless and elegant portrait edition, beautifully crafted and hand-bound.',
  //   testimonial: '"Every page brought tears to my eyes. This is the most meaningful gift I have ever given my family."',
  //   testimonialAuthor: 'Kavya Nair, Bengaluru',
  //   ctaItalic1: 'someday', ctaItalic2: 'today',
  //   ctaSubtitle: 'We would be delighted to help you begin your individual photo book journey and to answer any questions you may have.',
  // },

  // 'customized-photo-book': {
  //   title: 'Customized Photo Books',
  //   subtitle: 'The beautiful bespoke edition',
  //   packageLabel: 'ALL-INCLUSIVE CUSTOMIZED PHOTO BOOK PACKAGE',
  //   packageName: 'The Bespoke',
  //   packageSubtitle: 'Bespoke Edition',
  //   slug: 'customized-photo-book',
  //   tagline: 'Entirely Yours. Entirely Unique.',
  //   metaTitle: 'Customized Photo Book Service | Legacy Curator ',
  //   metaDescription: 'Create a fully customized photo book tailored to your exact vision. Bespoke design, premium printing, and a finish that is entirely your own.',
  //   heroImage: Customized,
  //   packageDesc: 'No template. No compromise. Your customized photo book is built entirely around your vision — your format, your feel, your story. We work with you from concept to creation, ensuring every detail reflects exactly what you imagined and more.',
  //   detailTitle: 'We take care of every detail',
  //   featureGroups: [
  //     { title: 'Bespoke Design Sessions', items: ['Up to 200 curated photos', '2 dedicated concept sessions', '1 photo scanning service', '1 final review & approval meeting'] },
  //     { title: 'Hand-bound hardback books', items: ['Up to 200 pages', 'Up to 80,000 words of captions', 'Up to 100 photos or images', '234mm × 156mm hardback (10 copies)'] },
  //     { title: 'A dedicated project team', items: ['Personal project manager', 'Bespoke design consultant', 'Expert layout designer', 'Quality control specialist'] },
  //     { title: 'Your vision, captured', items: ['Digital copies of all edited photos', 'Your book in PDF format', 'Print-ready design files included', 'USB keepsake included'] },
  //     { title: 'Yours to personalise', items: ['Fully custom cover design', 'Unlimited colour options', 'Silver or gold embossing', 'Bespoke dedication & section pages'] },
  //     { title: 'Printing and binding', items: ['Printed on archival-quality paper', 'Stitched in sections to lie flat', 'Hand-bound in London', 'Presentation box for every copy'] },
  //   ],
  //   faqs: [
  //     {
  //       q: 'How customized can the book truly be?',
  //       a: 'Entirely. The Bespoke Edition is built from scratch around your vision — the format, the feel, the colour palette, the layout style, and every detail in between. Nothing is template-driven; everything is created specifically for you.',
  //     },
  //     {
  //       q: 'What if I am not sure what I want yet?',
  //       a: 'That is precisely what our concept sessions are for. Our bespoke design consultant will guide you through the possibilities, helping you discover and define a direction that feels completely right.',
  //     },
  //     {
  //       q: 'How long does the entire process take?',
  //       a: 'Given the bespoke nature of this edition, the typical timeline is 12 to 16 weeks. Your personal project manager will set clear milestones and keep you informed at every stage.',
  //     },
  //     {
  //       q: 'Do I receive the design files after the project?',
  //       a: 'Yes. Print-ready design files are included in your package, giving you full ownership to reprint or adapt the book independently whenever you choose.',
  //     },
  //   ],
  //   carouselImages: [
  //     { src: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=1200&q=85', caption: 'Designed entirely around you' },
  //     { src: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200&q=85', caption: 'Bespoke design & editing' },
  //     { src: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1200&q=85', caption: 'Hand-bound in London' },
  //   ],
  //   carouselTitle: 'Explore the Bespoke',
  //   carouselEdition: 'Bespoke Edition',
  //   carouselDesc: 'Our timeless and elegant bespoke edition, beautifully crafted and hand-bound.',
  //   testimonial: '"Every page brought tears to my eyes. This is the most meaningful gift I have ever given my family."',
  //   testimonialAuthor: 'Arjun Kapoor, Mumbai',
  //   ctaItalic1: 'someday', ctaItalic2: 'today',
  //   ctaSubtitle: 'We would be delighted to help you begin your customized photo book journey and to answer any questions you may have.',
  // },

  // 'product-catalogue-photo-book': {
  //   title: 'Product Catalogue Photo Books',
  //   subtitle: 'The beautiful showcase edition',
  //   packageLabel: 'ALL-INCLUSIVE PRODUCT CATALOGUE PACKAGE',
  //   packageName: 'The Showcase',
  //   packageSubtitle: 'Catalogue Edition',
  //   slug: 'product-catalogue-photo-book',
  //   tagline: 'Your Products. Beautifully Presented.',
  //   metaTitle: 'Product Catalogue Design & Printing | Legacy Curator ',
  //   metaDescription: 'Present your products in a beautifully crafted printed catalogue. Professional photography editing, luxury binding, and a finish that commands attention.',
  //   heroImage: Product,
  //   packageDesc: 'First impressions are everything. A beautifully crafted product catalogue transforms the way your offerings are perceived — elevating every item into something worth coveting. We take your product photography and build a showcase that commands attention, inspires trust, and drives desire.',
  //   detailTitle: 'We take care of every detail',
  //   featureGroups: [
  //     { title: 'Product Photo Curation', items: ['Up to 200 curated product images', '1 dedicated curation session', '1 product photo enhancement service', '1 final review meeting'] },
  //     { title: 'Hand-bound hardback books', items: ['Up to 200 pages', 'Up to 80,000 words of product copy', 'Up to 100 photos or images', '234mm × 156mm hardback (10 copies)'] },
  //     { title: 'A dedicated project team', items: ['Personal project manager', 'Product photo editor', 'Expert catalogue designer', 'Quality control specialist'] },
  //     { title: 'Your brand, captured', items: ['Digital copies of all edited images', 'Your catalogue in PDF format', 'Print-ready design files included', 'USB keepsake included'] },
  //     { title: 'Yours to personalise', items: ['Custom branded cover design', 'Brand colour integration', 'Silver or gold embossing', 'Personalised brand introduction page'] },
  //     { title: 'Printing and binding', items: ['Printed on archival-quality paper', 'Stitched in sections to lie flat', 'Hand-bound in London', 'Presentation box for every copy'] },
  //   ],
  //   faqs: [
  //     {
  //       q: 'What kinds of products work best in a catalogue book?',
  //       a: 'Any product that benefits from being seen beautifully — fashion, jewellery, homeware, furniture, food, cosmetics, art, and more. If your products are worth showing, we will ensure they are shown at their absolute finest.',
  //     },
  //     {
  //       q: 'Can the catalogue be aligned with our brand identity?',
  //       a: 'Entirely. The Showcase Catalogue Edition includes full brand colour integration, a custom branded cover, and a personalised brand introduction page — creating a seamless extension of your visual identity.',
  //     },
  //     {
  //       q: 'How long does the entire process take?',
  //       a: 'From your first session to delivery of your finished copies, the typical timeline is 10 to 14 weeks. Your personal project manager will keep you informed at every stage.',
  //     },
  //     {
  //       q: 'Do we receive print-ready files to reprint independently?',
  //       a: 'Yes. Print-ready design files are included in your package, giving you full freedom to reprint or update the catalogue independently whenever your range evolves.',
  //     },
  //   ],
  //   carouselImages: [
  //     { src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=85', caption: 'Every product, perfectly presented' },
  //     { src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=85', caption: 'Professional editing & design' },
  //     { src: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1200&q=85', caption: 'Hand-bound in London' },
  //   ],
  //   carouselTitle: 'Explore the Showcase',
  //   carouselEdition: 'Catalogue Edition',
  //   carouselDesc: 'Our timeless and elegant catalogue edition, beautifully crafted and hand-bound.',
  //   testimonial: '"It sits on every client\'s coffee table. It has started more conversations than any marketing campaign we have ever run."',
  //   testimonialAuthor: 'Suresh Nair, Chairman — Nair Industries',
  //   ctaItalic1: 'someday', ctaItalic2: 'today',
  //   ctaSubtitle: 'We would be delighted to help you begin your product catalogue journey and to answer any questions you may have.',
  // },

  // 'childrens-photo-book': {
  //   title: "Children's Photo Books",
  //   subtitle: 'The beautiful wonder edition',
  //   packageLabel: "ALL-INCLUSIVE CHILDREN'S PHOTO BOOK PACKAGE",
  //   packageName: 'The Wonder',
  //   packageSubtitle: 'Wonder Edition',
  //   slug: 'childrens-photo-book',
  //   tagline: 'Little Moments. Big Memories.',
  //   metaTitle: "Children's Photo Book Service | Legacy Curator ",
  //   metaDescription: "Celebrate your child's story in a beautifully crafted photo book. From first steps to school days — a keepsake they will treasure for a lifetime.",
  //   heroImage: Children,
  //   packageDesc: 'Every giggle, every milestone, every ordinary afternoon made extraordinary — your child\'s world is filled with moments worth holding onto forever. We gather your favourite photographs and craft them into a beautifully bound keepsake that grows more precious with every passing year.',
  //   detailTitle: 'We take care of every detail',
  //   featureGroups: [
  //     { title: 'Photo Sessions & Curation', items: ['Up to 200 curated photos', '1 dedicated curation session', '1 photo scanning & enhancement service', '1 final review meeting'] },
  //     { title: 'Hand-bound hardback books', items: ['Up to 200 pages', 'Up to 80,000 words of captions', 'Up to 100 photos or images', '234mm × 156mm hardback (10 copies)'] },
  //     { title: 'A dedicated project team', items: ['Personal project manager', 'Handpicked photo editor', 'Expert layout designer', 'Quality control specialist'] },
  //     { title: 'Their story, captured', items: ['Digital copies of all edited photos', 'Your book in PDF format', 'High-res image archive', 'USB keepsake included'] },
  //     { title: 'Yours to personalise', items: ['Playful custom cover design', 'Choice of 4 linen colors', 'Silver or gold embossing', "Personalised dedication page in your child's honour"] },
  //     { title: 'Printing and binding', items: ['Printed on archival-quality paper', 'Stitched in sections to lie flat', 'Hand-bound in London', 'Presentation box for every copy'] },
  //   ],
  //   faqs: [
  //     {
  //       q: "Can the book follow my child's growth over several years?",
  //       a: "Absolutely. The Wonder Edition is ideal for capturing a child's journey across multiple years — from newborn to toddler to school days — curated into one seamless, joyful narrative of growing up.",
  //     },
  //     {
  //       q: 'Can captions and written memories be included alongside the photos?',
  //       a: 'Yes. The book accommodates up to 80,000 words of captions and written memories, allowing the photographs to be accompanied by the stories, dates, and milestones that make each image so meaningful.',
  //     },
  //     {
  //       q: 'How long does the entire process take?',
  //       a: 'From your first session to delivery of your finished copies, the typical timeline is 10 to 14 weeks. Your personal project manager will keep you informed at every stage.',
  //     },
  //     {
  //       q: 'Can we order extra copies as gifts for grandparents?',
  //       a: 'Yes. Additional copies can be ordered at a per-copy rate — and gifting one to grandparents is one of the most popular choices our families make.',
  //     },
  //   ],
  //   carouselImages: [
  //     { src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&q=85', caption: 'Every milestone, preserved forever' },
  //     { src: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200&q=85', caption: 'Professional curation & editing' },
  //     { src: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1200&q=85', caption: 'Hand-bound in London' },
  //   ],
  //   carouselTitle: 'Explore the Wonder',
  //   carouselEdition: 'Wonder Edition',
  //   carouselDesc: 'Our timeless and elegant wonder edition, beautifully crafted and hand-bound.',
  //   testimonial: '"Every page brought tears to my eyes. This is the most meaningful gift I have ever given my family."',
  //   testimonialAuthor: 'Priya Sharma, Mumbai',
  //   ctaItalic1: 'someday', ctaItalic2: 'today',
  //   ctaSubtitle: "We would be delighted to help you begin your children's photo book journey and to answer any questions you may have.",
  // },

  // 'travel-book': {
  //   title: 'Travel Books',
  //   subtitle: 'The beautiful journey edition',
  //   packageLabel: 'ALL-INCLUSIVE TRAVEL BOOK PACKAGE',
  //   packageName: 'The Explorer',
  //   packageSubtitle: 'Journey Edition',
  //   slug: 'travel-book',
  //   tagline: 'Every Journey Deserves a Story.',
  //   metaTitle: 'Travel Photo Book Service | Legacy Curator ',
  //   metaDescription: 'Turn your travel memories into a beautiful custom travel book. Photos, maps, journal entries — all woven into one breathtaking keepsake.',
  //   heroImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900&q=85',
  //   packageDesc: 'From the chai stalls of Jaipur to the fjords of Norway — your adventures deserve to be immortalised. We weave your photographs, maps, and memories into a beautifully crafted travel narrative you will return to again and again.',
  //   detailTitle: 'We take care of every detail',
  //   featureGroups: [
  //     { title: 'Journey Documentation', items: ['Up to 5 destinations per book', '1 dedicated story session', 'Custom illustrated route maps', '1 final review meeting'] },
  //     { title: 'Hand-bound hardback books', items: ['Up to 180 pages', 'Up to 60,000 words', 'Up to 80 photos or maps', '234mm × 156mm hardback (10 copies)'] },
  //     { title: 'A dedicated project team', items: ['Personal project manager', 'Travel narrative writer', 'Expert layout designer', 'Map illustrator'] },
  //     { title: 'Your adventure, captured', items: ['Digital archive of all photos', 'Your book in PDF format', 'Annotated map files', 'USB keepsake included'] },
  //     { title: 'Yours to personalise', items: ['Custom cover photo', 'Choice of 4 cover colors', 'Destination embossing', 'Personalised foreword page'] },
  //     { title: 'Printing and binding', items: ['Printed on archival-quality paper', 'Stitched in sections to lie flat', 'Hand-bound in London', 'Presentation box for every copy'] },
  //   ],
  //   faqs: [
  //     {
  //       q: 'Can I include multiple trips or destinations in one book?',
  //       a: 'Yes. The Explorer Journey Edition accommodates up to five destinations in a single volume. Whether it is one grand expedition or a series of beloved journeys, our team weaves them together into a seamless narrative.',
  //     },
  //     {
  //       q: 'Do you create the maps within the book?',
  //       a: 'Absolutely. Our dedicated map illustrator creates custom illustrated route maps that are unique to your journey. These become some of the most admired spreads in the finished book.',
  //     },
  //     {
  //       q: 'What if I only have photos on my phone — are they good enough?',
  //       a: 'In most cases, yes. Our photo editors are skilled at optimising images from mobile devices. During your story session, we will advise you on which photographs will reproduce most beautifully in print.',
  //     },
  //     {
  //       q: 'How is the travel narrative written — do I need to write anything?',
  //       a: 'Not at all. Our travel narrative writer works from your memories, notes, and photographs, gathered during a dedicated story session. You share your experiences in your own words; we shape them into something truly extraordinary.',
  //     },
  //   ],
  //   carouselImages: [
  //     { src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=85', caption: 'Every destination, documented' },
  //     { src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=85', caption: 'Moments that last a lifetime' },
  //     { src: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1200&q=85', caption: 'Hand-bound in London' },
  //   ],
  //   carouselTitle: 'Explore the Explorer',
  //   carouselEdition: 'Journey Edition',
  //   carouselDesc: 'Our timeless and elegant travel edition, beautifully crafted and hand-bound.',
  //   testimonial: '"This book captures not just where we went, but who we were in those moments. Absolutely priceless."',
  //   testimonialAuthor: 'Rahul & Anjali Mehra, Delhi',
  //   ctaItalic1: 'someday', ctaItalic2: 'today',
  //   ctaSubtitle: 'We would be delighted to help you begin your travel book journey and to answer any questions you may have.',
  // },

  // 'legacy-book': {
  //   title: 'Legacy Books',
  //   subtitle: 'The beautiful heritage edition',
  //   packageLabel: 'ALL-INCLUSIVE LEGACY BOOK PACKAGE',
  //   packageName: 'The Heritage',
  //   packageSubtitle: 'Legacy Edition',
  //   slug: 'legacy-book',
  //   tagline: 'Stories Passed Down Forever.',
  //   metaTitle: 'Family Legacy Book Service | Legacy Curator ',
  //   metaDescription: 'Create a beautifully crafted family legacy book that preserves your heritage, stories, and photographs for future generations. A true family heirloom.',
  //   heroImage: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=900&q=85',
  //   packageDesc: 'Threads of memories woven gently through time, stories of love captured in every line; from generations past to those yet to be, a legacy of roots, values, and family, holding emotions no words can fully define, yet living forever through each written line, a bond that grows stronger as years go by, a story that never says goodbye.',
  //   detailTitle: 'We take care of every detail',
  //   featureGroups: [
  //     { title: 'Family Interview Sessions', items: ['9 interviews of 90 minutes each', '1 main review meeting', '1 document scanning session', '1 final edit meeting with audio recording'] },
  //     { title: 'Hand-bound hardback books', items: ['Up to 200 pages', 'Up to 45,000 words', 'Up to 60 photos or images', '234mm × 156mm hardback (10 copies)'] },
  //     { title: 'A dedicated project team', items: ['Personal project manager', 'Handpicked family interviewer', 'Expert ghostwriter and editor', 'Book designer'] },
  //     { title: 'Your voice, captured', items: ['1 Audio Highlights recording (1 hour)', 'Digital copies of your restored photos', 'Your book in Microsoft Word format', 'Your book as a PDF file'] },
  //     { title: 'Yours to personalise', items: ['Dust jacket design', 'Choice of 4 linen colors', 'Silver or gold embossing', 'Family tree spread included'] },
  //     { title: 'Printing and binding', items: ['Printed on archival-quality paper', 'Stitched in sections to lie flat', 'Hand-bound in London', 'Presentation box for every copy'] },
  //   ],
  //   faqs: [
  //     {
  //       q: 'Who should be interviewed for the family legacy book?',
  //       a: 'The package includes nine interview sessions, allowing us to speak with multiple family members across different generations. We guide you on who to involve so that the story is rich, layered, and complete — capturing both living memories and cherished family lore.',
  //     },
  //     {
  //       q: 'What if some family members are hesitant or unsure about being interviewed?',
  //       a: 'Our interviewers are experienced in making people feel entirely at ease. Most participants find the process deeply enjoyable — a rare opportunity to reflect and share. Many tell us it was one of the most meaningful conversations they have ever had.',
  //     },
  //     {
  //       q: 'Is the family tree spread included as standard?',
  //       a: 'Yes. Every Heritage Legacy Edition includes a beautifully designed family tree spread, created by our book designer using information gathered during the project. It becomes one of the most treasured pages in the entire book.',
  //     },
  //     {
  //       q: 'How many copies are produced, and can we order more?',
  //       a: 'The package includes ten hand-bound hardback copies — enough to share among close family. Additional copies can be ordered at a per-copy rate. Many families order extras as gifts for children, grandchildren, or to mark significant family occasions.',
  //     },
  //   ],
  //   carouselImages: [
  //     { src: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=1200&q=85', caption: 'Generations, bound together' },
  //     { src: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&q=85', caption: 'Stories preserved forever' },
  //     { src: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=1200&q=85', caption: 'Hand-bound in London' },
  //   ],
  //   carouselTitle: 'Explore the Heritage',
  //   carouselEdition: 'Legacy Edition',
  //   carouselDesc: 'Our timeless and elegant legacy edition, beautifully crafted and hand-bound.',
  //   testimonial: '"This is a great legacy for the grandchildren. I just wish that my parents had done the same."',
  //   testimonialAuthor: 'Linda de Marlor, USA',
  //   ctaItalic1: 'someday', ctaItalic2: 'today',
  //   ctaSubtitle: 'We would be delighted to help you begin your legacy book journey and to answer any questions you may have.',
  // },

  // 'coffee-table': {
  //   title: 'Coffee Table Books',
  //   subtitle: 'The beautiful statement edition',
  //   packageLabel: 'ALL-INCLUSIVE COFFEE TABLE BOOK PACKAGE',
  //   packageName: 'The Prestige',
  //   packageSubtitle: 'Statement Edition',
  //   slug: 'coffee-table',
  //   tagline: 'Art You Can Hold.',
  //   metaTitle: 'Coffee Table Book Design Service | Legacy Curator ',
  //   metaDescription: 'Commission a stunning bespoke coffee table book. Large-format, luxury printed art books that make bold statements and unforgettable gifts.',
  //   heroImage: Coffee,
  //   packageDesc: 'A story of elegance where visuals softly speak, each page unfolding moments refined and unique; placed with pride where every glance finds its way, a timeless piece that always has something to say, blending art and story with effortless grace, turning your memories into a statement of space, designed to be admired again and again, a book that stays beyond moments and trends.',
  //   detailTitle: 'We take care of every detail',
  //   featureGroups: [
  //     { title: 'Art Direction Sessions', items: ['3 full art direction meetings', '1 concept development session', '1 physical proof review', '1 final sign-off meeting'] },
  //     { title: 'Large format hardback books', items: ['Up to 35×35 cm format', 'Up to 120 pages', 'Up to 100 images', 'Lay-flat binding throughout'] },
  //     { title: 'A dedicated creative team', items: ['Senior art director', 'Professional photo editor', 'Expert typographer', 'Print production specialist'] },
  //     { title: 'Your vision, realised', items: ['Digital proof of every spread', 'Your book in PDF format', 'Print-ready files included', 'Full rights to all design files'] },
  //     { title: 'Yours to personalise', items: ['Spot UV cover option', 'Foil stamping available', 'Embossed title lettering', 'Custom slipcase design'] },
  //     { title: 'Printing and binding', items: ['170gsm silk art paper', 'Sewn sections to lie flat', 'Hand-bound in London', 'Luxury gift box for every copy'] },
  //   ],
  //   faqs: [
  //     {
  //       q: 'What subjects work best for a coffee table book?',
  //       a: 'The possibilities are wide — architecture, travel, art collections, fashion, family estates, brand stories, personal photography, and more. If it is visually compelling and meaningful to you, our art director will know how to make it extraordinary on the page.',
  //     },
  //     {
  //       q: 'What is the finished size of the book?',
  //       a: 'The Prestige Statement Edition is produced in a generous 35×35 cm square format — substantial enough to command attention and designed to lie beautifully flat on any surface. Custom dimensions can be discussed during your art direction sessions.',
  //     },
  //     {
  //       q: 'Can this book be used as a corporate or client gift?',
  //       a: 'Absolutely. Many of our clients commission coffee table books as premium gifts for investors, clients, or key stakeholders. The book can be fully brand-aligned and presented in a custom luxury gift box, making it an unforgettable impression.',
  //     },
  //     {
  //       q: 'Do I receive the design files after the project?',
  //       a: 'Yes. Full rights to all print-ready design files are included in your package. You are free to commission reprints at any time, through us or independently, with no restrictions.',
  //     },
  //   ],
  //   carouselImages: [
  //     { src: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&q=85', caption: 'Large format, breathtaking design' },
  //     { src: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&q=85', caption: 'A statement piece for any space' },
  //     { src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=85', caption: 'Hand-bound in London' },
  //   ],
  //   carouselTitle: 'Explore the Prestige',
  //   carouselEdition: 'Statement Edition',
  //   carouselDesc: 'Our timeless and elegant statement edition, beautifully crafted and hand-bound.',
  //   testimonial: '"It sits on every client\'s coffee table. It has started more conversations than any marketing campaign we have ever run."',
  //   testimonialAuthor: 'Arjun Kapoor, CEO — Kapoor & Associates',
  //   ctaItalic1: 'someday', ctaItalic2: 'today',
  //   ctaSubtitle: 'We would be delighted to help you begin your coffee table book journey and to answer any questions you may have.',
  // },

  // 'memoir': {
  //   title: 'Memoir Books',
  //   subtitle: 'The beautiful bookshelf edition',
  //   packageLabel: 'ALL-INCLUSIVE MEMOIR PACKAGE',
  //   packageName: 'The Royal',
  //   packageSubtitle: 'Bookshelf Edition',
  //   slug: 'memoir',
  //   tagline: 'Your Life. Your Words. Forever.',
  //   metaTitle: 'Memoir Book Service | Legacy Curator ',
  //   metaDescription: 'We help you write, design, and publish your personal memoir. A beautifully crafted memoir book is the ultimate gift to leave your family and the world.',
  //   heroImage: Memoir,
  //   packageDesc: 'Moments of laughter and echoes of tears, stories that stayed through all the years; a life remembered in words so true, a timeless tribute always in view, capturing emotions with depth and care, preserving a journey beyond compare, a voice that lingers, soft yet strong, a memory that forever belongs.',
  //   detailTitle: 'We take care of every detail',
  //   featureGroups: [
  //     { title: '12 face-to-face meetings', items: ['9 interviews of 90 minutes each', '1 main review meeting', '1 photo-scanning session', '1 final edit meeting with audio recording'] },
  //     { title: 'Hand-bound hardback books', items: ['Up to 200 pages', 'Up to 45,000 words', 'Up to 60 photos or images', '234mm × 156mm hardback books (10 copies)'] },
  //     { title: 'A dedicated project team', items: ['Personal project manager', 'Handpicked interviewer', 'Expert ghostwriter and editor', 'Book designer'] },
  //     { title: 'Your voice, captured', items: ['1 Audio Highlights recordings (1 hour)', 'Digital copies of your restored photos', 'Your book in Microsoft Word format', 'Your book as a PDF file'] },
  //     { title: 'Yours to personalise', items: ['Dust jacket design', 'Choice of 4 linen colors', 'Silver or gold embossing', 'Presentation box for every copy'] },
  //     { title: 'Printing and binding', items: ['Printed on archival-quality paper', 'Stitched in sections to lie flat', 'Hand-bound in London', 'Presentation box for every copy'] },
  //   ],
  //   faqs: [
  //     {
  //       q: 'Do I need to be a good writer to have a memoir created?',
  //       a: 'Not at all. You simply need to have lived a life worth sharing — and you have. Our expert ghostwriter and interviewer draw your story out through nine in-depth sessions. You speak; we craft your words into a beautifully written memoir that sounds unmistakably like you.',
  //     },
  //     {
  //       q: 'How personal or private can the memoir be?',
  //       a: 'Your memoir is entirely your own. You decide what is included, what remains private, and who receives a copy. We operate with complete discretion, and nothing is shared or published beyond the copies you choose to distribute.',
  //     },
  //     {
  //       q: 'What if I have gaps in my memory or missing records?',
  //       a: 'This is very common and something our team navigates with care. Our interviewers are skilled at prompting memories through conversation, and our editors are adept at shaping a coherent, compelling narrative even when some details are incomplete or impressionistic.',
  //     },
  //     {
  //       q: 'Can the memoir be given as a gift to family members?',
  //       a: 'Many of our clients create their memoir specifically as a gift — for children, grandchildren, or to mark a significant milestone. The ten included copies are often distributed among loved ones, and additional copies can be ordered to ensure everyone who matters receives one.',
  //     },
  //   ],
  //   carouselImages: [
  //     { src: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=1200&q=85', caption: 'Your life, beautifully told' },
  //     { src: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&q=85', caption: 'Words that endure' },
  //     { src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=85', caption: 'Hand-bound in London' },
  //   ],
  //   carouselTitle: 'Explore the Royal',
  //   carouselEdition: 'Bookshelf Edition',
  //   carouselDesc: 'Our timeless and elegant bookshelf edition, beautifully crafted and hand-bound.',
  //   testimonial: '"This is a great legacy for the grandchildren. I just wish that my parents had done the same."',
  //   testimonialAuthor: 'Linda de Marlor, USA',
  //   ctaItalic1: 'someday', ctaItalic2: 'today',
  //   ctaSubtitle: 'We would be delighted to help you begin your memoir journey and to answer any questions you may have.',
  // },

  // 'vision-passion-book': {
  //   title: 'Vision & Passion Books',
  //   subtitle: 'The beautiful purpose edition',
  //   packageLabel: 'ALL-INCLUSIVE VISION BOOK PACKAGE',
  //   packageName: 'The Manifesto',
  //   packageSubtitle: 'Purpose Edition',
  //   slug: 'vision-book',
  //   tagline: 'Inspire. Motivate. Transform.',
  //   metaTitle: 'Personal Vision Book Service | Legacy Curator ',
  //   metaDescription: 'Create a powerful vision or passion book that captures your purpose, values, and mission. Ideal for leaders, coaches, and creators who want to inspire.',
  //   heroImage: Book,
  //   packageDesc: 'Dreams once hidden now finding their voice, turning purpose into a powerful choice; ideas and passion coming alive, shaping a story that helps you strive, more than ambition it\'s what you believe, a journey of purpose you choose to achieve, guiding your path through all you pursue, a reminder of everything meaningful to you.',
  //   detailTitle: 'We take care of every detail',
  //   featureGroups: [
  //     { title: 'Discovery Sessions', items: ['3 deep-dive vision interviews', '1 values mapping workshop', '1 content review session', '1 final approval meeting'] },
  //     { title: 'Hand-bound hardback books', items: ['Up to 160 pages', 'Up to 30,000 words', 'Up to 40 visual spreads', '234mm × 156mm hardback (20 copies)'] },
  //     { title: 'A dedicated creative team', items: ['Personal project manager', 'Vision narrative writer', 'Editorial designer', 'Brand alignment specialist'] },
  //     { title: 'Your vision, captured', items: ['Full digital PDF version', 'Print-ready master files', 'Branded quote card set', 'Social media asset pack'] },
  //     { title: 'Yours to personalise', items: ['Custom cover design', 'Brand color integration', 'Foil-stamped title', 'Personalised manifesto page'] },
  //     { title: 'Printing and binding', items: ['Printed on archival-quality paper', 'Stitched in sections to lie flat', 'Hand-bound in London', 'Presentation box for every copy'] },
  //   ],
  //   faqs: [
  //     {
  //       q: 'Who is a vision and passion book best suited for?',
  //       a: 'This book is ideal for founders, leaders, coaches, creators, and anyone with a compelling purpose they wish to articulate and share. It is equally powerful as a personal statement, a team culture document, or a gift to those you wish to inspire.',
  //     },
  //     {
  //       q: 'How is the content for the book developed?',
  //       a: 'Through three deep-dive vision interviews and a values mapping workshop, our narrative writer extracts the essence of your purpose, beliefs, and aspirations. The resulting book is not a generic motivational piece — it is a precise, personal expression of what drives you.',
  //     },
  //     {
  //       q: 'Can this book be aligned with our company branding?',
  //       a: 'Absolutely. The Manifesto Purpose Edition includes full brand colour integration, foil-stamped title, and a custom cover design. A brand alignment specialist ensures the finished book is a seamless extension of your visual identity.',
  //     },
  //     {
  //       q: 'Are digital assets included alongside the printed book?',
  //       a: 'Yes. Your package includes a full digital PDF, print-ready master files, a branded quote card set, and a social media asset pack — so your vision can be shared across every platform and format, not only in print.',
  //     },
  //   ],
  //   carouselImages: [
  //     { src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=85', caption: 'Purpose, beautifully articulated' },
  //     { src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=85', caption: 'Words that move people' },
  //     { src: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=85', caption: 'Hand-bound in London' },
  //   ],
  //   carouselTitle: 'Explore the Manifesto',
  //   carouselEdition: 'Purpose Edition',
  //   carouselDesc: 'Our timeless and elegant purpose edition, beautifully crafted and hand-bound.',
  //   testimonial: '"My team reads it every Monday. It has transformed our culture more than any strategy session ever could."',
  //   testimonialAuthor: 'Deepak Malhotra, Founder — Visionary Co.',
  //   ctaItalic1: 'someday', ctaItalic2: 'today',
  //   ctaSubtitle: 'We would be delighted to help you begin your vision book journey and to answer any questions you may have.',
  // },

  // 'business-book': {
  //   title: 'Business Story Books',
  //   subtitle: 'The beautiful brand edition',
  //   packageLabel: 'ALL-INCLUSIVE BUSINESS BOOK PACKAGE',
  //   packageName: 'The Legacy',
  //   packageSubtitle: 'Brand Edition',
  //   slug: 'business',
  //   tagline: 'Your Brand. Your Legacy.',
  //   metaTitle: 'Corporate History Book Service | Legacy Curator ',
  //   metaDescription: "Tell your company's story with a beautifully crafted business book. From startup origins to industry leadership — document your brand legacy in print.",
  //   heroImage: Business,
  //   packageDesc: 'From a simple idea to a powerful name, a journey of passion, struggle, and fame; every milestone captured, every lesson told, a story of vision courageous and bold, not just success but the purpose behind, a legacy that inspires both heart and mind, built on ambition, grit, and belief, a story that stands as your greatest relief.',
  //   detailTitle: 'We take care of every detail',
  //   featureGroups: [
  //     { title: 'Stakeholder Interviews', items: ['6 interviews of 90 minutes each', '1 founder deep-dive session', '1 archive & asset review', '1 final edit meeting'] },
  //     { title: 'Hand-bound hardback books', items: ['Up to 200 pages', 'Up to 50,000 words', 'Up to 80 photos or infographics', '234mm × 156mm hardback (25 copies)'] },
  //     { title: 'A dedicated project team', items: ['Senior brand strategist', 'Business narrative writer', 'Expert designer', 'Print production manager'] },
  //     { title: 'Your brand, captured', items: ['Digital PDF version', 'Print-ready master files', 'Brand milestone timeline', 'Executive summary chapter'] },
  //     { title: 'Yours to personalise', items: ['Full brand design integration', 'Foil-stamped company name', 'Custom chapter dividers', 'Investor edition available'] },
  //     { title: 'Printing and binding', items: ['Printed on archival-quality paper', 'Stitched in sections to lie flat', 'Hand-bound in London', 'Presentation box for every copy'] },
  //   ],
  //   faqs: [
  //     {
  //       q: 'What kinds of businesses commission a business story book?',
  //       a: 'We work with businesses of all sizes — from family enterprises marking a centenary to fast-growing startups defining their identity. Any organisation with a meaningful story to tell, a culture to celebrate, or a legacy to preserve will find this book a powerful investment.',
  //     },
  //     {
  //       q: 'Can the book be used for investor or client presentations?',
  //       a: 'Yes, and this is one of the most popular uses. The Legacy Brand Edition includes an investor edition option and an executive summary chapter specifically designed for this purpose. A beautifully produced business book communicates credibility and ambition in a way no pitch deck can.',
  //     },
  //     {
  //       q: 'How are the stakeholder interviews conducted?',
  //       a: 'Our senior business narrative writer conducts six in-depth interviews with founders, leaders, and key team members, supplemented by a founder deep-dive session and a thorough archive and asset review. The resulting narrative is authentic, nuanced, and compelling.',
  //     },
  //     {
  //       q: 'How many copies are included, and can we order more?',
  //       a: 'The package includes twenty-five hand-bound hardback copies — ideal for gifting to clients, staff, and stakeholders. Additional copies can be ordered at a per-copy rate, and print-ready files are provided so you can reprint independently whenever needed.',
  //     },
  //   ],
  //   carouselImages: [
  //     { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=85', caption: 'Your brand story, immortalised' },
  //     { src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=85', caption: 'A legacy for your business' },
  //     { src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=85', caption: 'Hand-bound in London' },
  //   ],
  //   carouselTitle: 'Explore the Legacy',
  //   carouselEdition: 'Brand Edition',
  //   carouselDesc: 'Our timeless and elegant brand edition, beautifully crafted and hand-bound.',
  //   testimonial: '"We presented this at our 25th anniversary gala. Every person in the room was moved. It is our proudest asset."',
  //   testimonialAuthor: 'Suresh Nair, Chairman — Nair Industries',
  //   ctaItalic1: 'someday', ctaItalic2: 'today',
  //   ctaSubtitle: 'We would be delighted to help you begin your business book journey and to answer any questions you may have.',
  // },

  // 'devotional-book': {
  //   title: 'Devotional Books',
  //   subtitle: 'The beautiful faith edition',
  //   packageLabel: 'ALL-INCLUSIVE DEVOTIONAL BOOK PACKAGE',
  //   packageName: 'The Sacred',
  //   packageSubtitle: 'Faith Edition',
  //   slug: 'devotional-book',
  //   tagline: 'Where Faith Finds Its Voice.',
  //   metaTitle: 'Devotional Book Printing Service | Legacy Curator ',
  //   metaDescription: 'Create a beautifully crafted devotional book that expresses your faith, prayers, and spiritual journey. A soulful keepsake for yourself and future generations.',
  //   heroImage: Devotional,
  //   packageDesc: 'Whispers of faith flowing through every page, a soulful journey beyond time and age; in words of devotion calmness you find, a deeper connection of heart and mind, a sacred space where belief feels true, bringing peace and meaning closer to you, a light that stays through dark and bright, guiding your soul with gentle light.',
  //   detailTitle: 'We take care of every detail',
  //   featureGroups: [
  //     { title: 'Spiritual Story Sessions', items: ['6 interviews of 90 minutes each', '1 values & faith mapping session', '1 scripture & content review', '1 final blessing & approval meeting'] },
  //     { title: 'Hand-bound hardback books', items: ['Up to 180 pages', 'Up to 40,000 words', 'Up to 50 photos or sacred images', '234mm × 156mm hardback (10 copies)'] },
  //     { title: 'A dedicated project team', items: ['Personal project manager', 'Spiritual narrative writer', 'Expert layout designer', 'Sacred art consultant'] },
  //     { title: 'Your faith, captured', items: ['1 Audio Highlights recording (1 hour)', 'Digital copies of all photos', 'Your book in PDF format', 'Your book in Microsoft Word format'] },
  //     { title: 'Yours to personalise', items: ['Custom devotional cover design', 'Choice of 4 linen colors', 'Gold or silver embossing', 'Personalised prayer or dedication page'] },
  //     { title: 'Printing and binding', items: ['Printed on archival-quality paper', 'Stitched in sections to lie flat', 'Hand-bound in London', 'Presentation box for every copy'] },
  //   ],
  //   faqs: [
  //     {
  //       q: 'Is this book suitable for all faiths and spiritual traditions?',
  //       a: 'Yes, entirely. We work with individuals and families across all faiths — Islam, Hinduism, Christianity, Sikhism, Judaism, and beyond — as well as those with deeply personal spiritual beliefs. Our spiritual narrative writer approaches every project with sensitivity, respect, and genuine care.',
  //     },
  //     {
  //       q: 'Can the book include prayers, scriptures, or sacred texts?',
  //       a: 'Absolutely. The scripture and content review session is dedicated to selecting the prayers, verses, and sacred passages that are most meaningful to you. These are woven throughout the book with beautiful typographic care, sitting alongside your personal story and photographs.',
  //     },
  //     {
  //       q: 'What kind of images can be included in the book?',
  //       a: 'The book can feature family photographs, images of sacred places, pilgrimage journeys, religious ceremonies, and sacred art. Our sacred art consultant advises on image selection to ensure everything is presented with the reverence and beauty the subject deserves.',
  //     },
  //     {
  //       q: 'Can this book be passed down as a family heirloom?',
  //       a: 'That is precisely its purpose. Printed on archival-quality paper and hand-bound in London, The Sacred Faith Edition is built to last generations. Many of our clients consider it the most enduring gift they could ever give — a living testament of faith for those who come after them.',
  //     },
  //   ],
  //   carouselImages: [
  //     { src: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1200&q=85', caption: 'Faith, beautifully preserved' },
  //     { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=85', caption: 'Words that bring peace' },
  //     { src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=85', caption: 'Hand-bound in London' },
  //   ],
  //   carouselTitle: 'Explore the Sacred',
  //   carouselEdition: 'Faith Edition',
  //   carouselDesc: 'Our timeless and elegant faith edition, beautifully crafted and hand-bound.',
  //   testimonial: '"Reading this book feels like sitting in prayer. It has brought our whole family closer to our roots and to each other."',
  //   testimonialAuthor: 'Fatima Al-Rashid, Dubai',
  //   ctaItalic1: 'someday', ctaItalic2: 'today',
  //   ctaSubtitle: 'We would be delighted to help you begin your devotional book journey and to answer any questions you may have.',
  // },
};

export default services;