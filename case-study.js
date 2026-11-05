const cases = {
  beauty: {
    type: 'DESIGN STUDIO / 001',
    title: 'SKINCARE<br><em>VISUALS.</em>',
    subtitle: 'Beauty product · Infographic concept · AI-assisted art direction',
    brief: 'Create a premium visual direction for a skincare serum, balancing product focus, atmosphere and a clear information hierarchy.',
    approach: 'Use a restrained palette, controlled highlights and editorial composition. This is a speculative portfolio concept; verify ingredient and efficacy claims before commercial use.',
   images: [
  { src: 'skincare-01.png', title: '01 — Hero visual' },
  { src: 'skincare-02.png', title: '02 — Active ingredients' },
  { src: 'skincare-03.png', title: '03 — Visible results' }
]
  },
  orbit: {
    type: 'DESIGN STUDIO / 002',
    title: 'COFFEE<br><em>RITUAL.</em>',
    subtitle: 'Small appliance · Product infographic · Art direction',
    brief: 'Build a warm, premium product story for a cream espresso machine, making its key features easy to understand at a glance.',
    approach: 'Combine soft natural light, warm neutrals, product close-ups and concise feature callouts. Concept visuals; confirm product specs before commercial publication.',
   images: [
  { src: 'coffee-01.png', title: '01 — Coffee at home' },
  { src: 'coffee-02.png', title: '02 — From bean to latte' },
  { src: 'coffee-03.png', title: '03 — Espresso essentials' }
]
  },
  editorial: {
    type: 'DESIGN STUDIO / 003',
    title: 'LINGERIE<br><em>EDITORIAL.</em>',
    subtitle: 'Fashion · Product infographic · Editorial layout',
    brief: 'Create a cohesive visual series for a burgundy lace lingerie set.',
    approach: 'Pair a cream background with wine-red accents and refined typography.',
    images: [
      { src: 'lingerie-01.png', title: '01 — Lace set' },
      { src: 'lingerie-02.png', title: '02 — Fine details' },
      { src: 'lingerie-03.png', title: '03 — Sizes 42–54' }
    ]
  },
  novair: {
    type: 'DESIGN STUDIO / 004',
    title: 'NOVAIR<br><em>AIR STYLER.</em>',
    subtitle: 'Premium beauty technology · 5-in-1 styling system · Product infographic series',
    brief: 'Develop a premium product story for the NOVAIR Air Styler, presenting the device, its attachments and styling versatility through a cohesive editorial infographic series.',
    approach: 'A warm beige visual language, graphite product finishes and champagne-gold details create a premium beauty-tech identity. UNA is the digital model featured in selected lifestyle cards. This is a portfolio concept; product specifications and performance claims should be verified against the final device before commercial use.',
    images: [
      { src: 'hair-dryer-01.png', title: '01 — NOVAIR Air Styler' },
      { src: 'hair-dryer-02.png', title: '02 — Salon Styling at Home' },
      { src: 'hair-dryer-03.png', title: '03 — 5-in-1 Styling System' },
      { src: 'hair-dryer-04.png', title: '04 — Coanda Technology' },
      { src: 'hair-dryer-05.png', title: '05 — Multiple Styling Looks' },
      { src: 'hair-dryer-06.png', title: '06 — Lightweight & Comfortable' },
      { src: 'hair-dryer-07.png', title: '07 — Complete Styling Kit' }
    ]
  },
  clay: {
    type: 'DESIGN STUDIO / 005',
    title: 'WATER<br><em>FLOSSER.</em>',
    subtitle: 'Personal care · Product infographic · Feature hierarchy',
    brief: 'Create a clean, high-contrast product infographic for a portable oral-care device.',
    approach: 'Use a crisp background and vivid accent colors. Confirm specifications before publication.',
    images: [
      { src: 'hair-dryer.webp', title: '01 — Hero visual' }
    ]
  },
  motion: {
    type: 'DESIGN STUDIO / 006',
    title: 'GREEN LACE<br><em>SET.</em>',
    subtitle: 'Fashion · Product infographic · Editorial series',
    brief: 'Create a product story for a dark green lace lingerie set.',
    approach: 'Use muted olive, warm beige and dark green for a premium fashion direction.',
    images: [
      { src: 'lingerie-green.webp', title: '01 — Hero visual' }
    ]
  },
  scrub: {
    type: 'DESIGN STUDIO / 007',
    title: 'BODY<br><em>SCRUB.</em>',
    subtitle: 'Beauty product · Infographic concept · AI-assisted art direction',
    brief: 'Create an editorial product series for The Act body scrub, combining warm minimalism, tactile texture and a clear information hierarchy.',
    approach: 'Warm cream background, black typography with cobalt accents, macro texture shots and consistent product rendering across the series. Concept visuals; verify claims before commercial use.',
    images: [
      { src: 'scrub-01.png', title: '01 — Body scrub' },
      { src: 'scrub-02.png', title: '02 — Deep cleanse' },
      { src: 'scrub-03.png', title: '03 — Visible results' }
    ]
  }
};

const id = new URLSearchParams(location.search).get('id') || 'beauty';
const c = cases[id] || cases.beauty;

document.getElementById('caseType').textContent = c.type;
document.getElementById('caseTitle').innerHTML = c.title;
document.getElementById('caseSubtitle').textContent = c.subtitle;
document.getElementById('briefTitle').textContent = 'The idea';
document.getElementById('briefText').textContent = c.brief;
document.getElementById('approachText').textContent = c.approach;
document.title = c.type + ' — Polina Veltcheva';

const gallery = document.getElementById('caseGallery');

c.images.forEach((item) => {
  const figure = document.createElement('figure');
  figure.className = 'case-gallery-card';

  const frame = document.createElement('div');
  frame.className = 'case-gallery-frame';

  const img = document.createElement('img');
  img.src = 'assets/images/' + item.src;
  img.alt = item.title;
  img.loading = 'lazy';

  img.onerror = () => {
    img.remove();
    const missing = document.createElement('p');
    missing.className = 'image-missing';
    missing.textContent = 'Image not uploaded yet: ' + item.src;
    frame.appendChild(missing);
  };

  const caption = document.createElement('figcaption');
  const label = document.createElement('strong');
  label.textContent = item.title;
  const number = document.createElement('span');
  number.textContent = c.type;

  frame.appendChild(img);
  caption.append(label, number);
  figure.append(frame, caption);
  gallery.appendChild(figure);
});
