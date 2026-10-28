const cases = {
  beauty: {
    type: 'DESIGN STUDIO / 001',
    title: 'SKINCARE<br><em>VISUALS.</em>',
    subtitle: 'Beauty product · Infographic concept · AI-assisted art direction',
    brief: 'Create a premium visual direction for a skincare serum, balancing product focus, atmosphere and a clear information hierarchy.',
    approach: 'Use a restrained palette, controlled highlights and editorial composition. This is a speculative portfolio concept; verify ingredient and efficacy claims before commercial use.',
    images: [
      { src: 'skincare.webp', title: '01 — Hero visual' }
    ]
  },
  orbit: {
    type: 'DESIGN STUDIO / 002',
    title: 'COFFEE<br><em>RITUAL.</em>',
    subtitle: 'Small appliance · Product infographic · Art direction',
    brief: 'Build a warm, premium product story for a cream espresso machine, making its key features easy to understand at a glance.',
    approach: 'Combine soft natural light, warm neutrals, product close-ups and concise feature callouts. Concept visuals; confirm product specs before commercial publication.',
    images: [
      { src: 'Кофейный ритуал дома.png', title: '01 — Coffee at home' },
      { src: 'Эспрессо дома_ от зерна до латте-1.png', title: '02 — From bean to latte' },
      { src: 'Эспрессо начинается с основы-2.png', title: '03 — Espresso essentials' }
    ]
  },
  editorial: {
    type: 'DESIGN STUDIO / 003',
    title: 'LINGERIE<br><em>EDITORIAL.</em>',
    subtitle: 'Fashion · Product infographic · Editorial layout',
    brief: 'Create a cohesive visual series for a burgundy lace lingerie set.',
    approach: 'Pair a cream background with wine-red accents and refined typography.',
    images: [
      { src: 'lingerie-burgundy.webp', title: '01 — Hero visual' }
    ]
  },
  pop: {
    type: 'AI CREATIVE LAB / 004',
    title: 'HAIR DRYER<br><em>CAMPAIGN.</em>',
    subtitle: 'Beauty tech · Product visuals · Infographic series',
    brief: 'Develop a modern rose-pink product campaign.',
    approach: 'Use glossy product lighting and a blush palette. Verify product specifications before publication.',
    images: [
      { src: 'hair-dryer.webp', title: '01 — Hero visual' }
    ]
  },
  clay: {
    type: 'DESIGN STUDIO / 005',
    title: 'WATER<br><em>FLOSSER.</em>',
    subtitle: 'Personal care · Product infographic · Feature hierarchy',
    brief: 'Create a clean, high-contrast product infographic for a portable oral-care device.',
    approach: 'Use a crisp background and vivid accent colors. Confirm specifications before publication.',
    images: [
      { src: 'water-flosser.webp', title: '01 — Hero visual' }
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
    frame.innerHTML = '<p style="padding:20px;text-align:center;color:#77736c">Image not found: ' +
      item.src.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') +
      '</p>';
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
