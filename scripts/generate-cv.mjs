import { writeFile } from 'node:fs/promises'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { resolve } from 'node:path'

const execFileAsync = promisify(execFile)

const cvHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Tanvir Ahmad — Curriculum Vitae</title>
  <style>
    @page {
      size: A4;
      margin: 10mm 12mm;
    }
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      color: #1e293b;
      background: #ffffff;
      line-height: 1.35;
      font-size: 9.5pt;
    }
    a {
      color: #0d9488;
      text-decoration: none;
      font-weight: 500;
    }
    .header {
      text-align: center;
      padding-bottom: 8px;
      border-bottom: 2px solid #0d9488;
      margin-bottom: 10px;
    }
    .name {
      font-size: 22pt;
      font-weight: 800;
      letter-spacing: -0.5px;
      color: #0f172a;
      text-transform: uppercase;
      margin-bottom: 2px;
    }
    .title {
      font-size: 11pt;
      font-weight: 600;
      color: #0d9488;
      margin-bottom: 6px;
    }
    .contact-bar {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
      font-size: 8.5pt;
      color: #475569;
    }
    .contact-item {
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    .section {
      margin-bottom: 10px;
    }
    .section-title {
      font-size: 10pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #0f172a;
      border-bottom: 1px solid #cbd5e1;
      padding-bottom: 2px;
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .section-title::before {
      content: "";
      display: inline-block;
      width: 4px;
      height: 12px;
      background: #0d9488;
      border-radius: 2px;
    }
    .summary-text {
      font-size: 9pt;
      color: #334155;
      text-align: justify;
      line-height: 1.4;
    }
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px 16px;
    }
    .skill-category {
      font-size: 8.8pt;
      margin-bottom: 3px;
    }
    .skill-label {
      font-weight: 700;
      color: #0f172a;
    }
    .skill-content {
      color: #334155;
    }
    .item {
      margin-bottom: 7px;
    }
    .item:last-child {
      margin-bottom: 0;
    }
    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 1px;
    }
    .item-title {
      font-size: 9.6pt;
      font-weight: 700;
      color: #0f172a;
    }
    .item-role {
      font-size: 9pt;
      font-weight: 600;
      color: #0d9488;
    }
    .item-date {
      font-size: 8.5pt;
      color: #64748b;
      font-weight: 500;
      white-space: nowrap;
    }
    .item-subtitle {
      font-size: 8.5pt;
      color: #64748b;
      margin-bottom: 3px;
    }
    ul.bullet-list {
      list-style-type: disc;
      padding-left: 14px;
      margin-top: 2px;
    }
    ul.bullet-list li {
      font-size: 8.8pt;
      color: #334155;
      margin-bottom: 1.5px;
      line-height: 1.35;
    }
    .tags {
      margin-top: 3px;
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
    }
    .tag {
      display: inline-block;
      font-size: 7.5pt;
      font-weight: 600;
      background: #f1f5f9;
      color: #475569;
      padding: 1px 6px;
      border-radius: 4px;
      border: 1px solid #e2e8f0;
    }
  </style>
</head>
<body>

  <header class="header">
    <h1 class="name">Tanvir Ahmad</h1>
    <div class="title">Full-Stack MERN Developer • CEO of Lugaish • Web Dev Educator (Bangla on YouTube)</div>
    <div class="contact-bar">
      <span class="contact-item">📧 <a href="mailto:tahmadium@gmail.com">tahmadium@gmail.com</a></span>
      <span class="contact-item">📍 Madinah, Saudi Arabia / Dhaka, Bangladesh</span>
      <span class="contact-item">💼 <a href="https://www.linkedin.com/in/tanvir-ahmad-701265415/">linkedin.com/in/tanvir-ahmad</a></span>
      <span class="contact-item">💻 <a href="https://github.com/tanvir560298">github.com/tanvir560298</a></span>
      <span class="contact-item">▶️ <a href="https://youtube.com/playlist?list=PLZPdXFF1ExFQ">YouTube Course</a></span>
      <span class="contact-item">🌐 <a href="https://my-protfolio-client-brown.vercel.app">Portfolio Live</a></span>
    </div>
  </header>

  <section class="section">
    <h2 class="section-title">Professional Summary</h2>
    <p class="summary-text">
      Versatile Full-Stack MERN Developer, educator, and entrepreneur with proven expertise in building responsive, production-ready web applications using MongoDB, Express.js, React, and Node.js. Founder & CEO of Lugaish, a dedicated language-learning platform for students. Passionate about computer science education, actively teaching modern web development in Bangla on YouTube (author of the 7-class HTML Full Course). Former District Secretary for Interact District 3281 Bangladesh, coordinating youth initiatives across 2,000+ students. Fellow of the American Center's 2-Year English Access Program and international youth delegate in Nepal. Combines engineering craftsmanship with strategic negotiation, cross-cultural communication, and leadership.
    </p>
  </section>

  <section class="section">
    <h2 class="section-title">Core Competencies & Skills</h2>
    <div class="grid-2">
      <div class="skill-category">
        <span class="skill-label">Frontend Development:</span>
        <span class="skill-content">React, JavaScript (ES6+), TypeScript, Tailwind CSS, DaisyUI, HTML5, CSS3, Responsive Design, State Management, React Router.</span>
      </div>
      <div class="skill-category">
        <span class="skill-label">Backend & Database:</span>
        <span class="skill-content">Node.js, Express.js, MongoDB, Mongoose, RESTful API Design, JWT Authentication, Role-Based Access Control (RBAC), Firebase Auth, CRUD Operations.</span>
      </div>
      <div class="skill-category">
        <span class="skill-label">Leadership & Soft Skills:</span>
        <span class="skill-content">Youth Leadership (Interact 3281 District Secretary), Strategic Negotiation & Deal Making, Public Speaking & Mentorship, Stakeholder Management (2,000+ Students).</span>
      </div>
      <div class="skill-category">
        <span class="skill-label">Languages:</span>
        <span class="skill-content"><strong>English</strong> (Proficient — Instructor), <strong>Bengali</strong> (Native), <strong>Urdu</strong> (Fluent), <strong>Hindi</strong> (Fluent), <strong>Arabic</strong> (Academic / Working).</span>
      </div>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">Leadership & Professional Experience</h2>

    <div class="item">
      <div class="item-header">
        <div>
          <span class="item-title">Lugaish — Language Learning Platform for Students</span>
          <span class="item-role"> | Founder & CEO, Lead Full-Stack Developer</span>
        </div>
        <span class="item-date">Mid 2026 – Present</span>
      </div>
      <div class="item-subtitle">Live Platform: <a href="https://lugaish.vercel.app">lugaish.vercel.app</a> • Repository: <a href="https://github.com/tanvir560298/Lugaish-client">github.com/tanvir560298/Lugaish-client</a></div>
      <ul class="bullet-list">
        <li>Founded, architected, and deployed a full-stack language learning web platform designed specifically for students mastering Arabic and English.</li>
        <li>Implemented structured 60-day curriculum modules with 12-class monthly subscription tiers, automated access gating, and lifetime retention of completed batches.</li>
        <li>Built an integrated audio masterclass player with Cambridge test practice and an administrative dashboard for one-click student tier management.</li>
      </ul>
    </div>

    <div class="item">
      <div class="item-header">
        <div>
          <span class="item-title">YouTube Web Development Educator (Bangla)</span>
          <span class="item-role"> | Instructor & Content Creator</span>
        </div>
        <span class="item-date">2026 – Present</span>
      </div>
      <div class="item-subtitle">Playlist: <a href="https://youtube.com/playlist?list=PLZPdXFF1ExFQ">HTML Full Course in Bangla | Web Development for Beginners</a></div>
      <ul class="bullet-list">
        <li>Authored and published an intensive 7-class structured HTML video curriculum in Bangla on YouTube.</li>
        <li>Taught semantic layout, SEO hierarchy, media, forms, containers, and live portfolio creation to Bengali-speaking learners worldwide.</li>
      </ul>
    </div>

    <div class="item">
      <div class="item-header">
        <div>
          <span class="item-title">Lugaish</span>
          <span class="item-role"> | English Language Instructor</span>
        </div>
        <span class="item-date">Mid 2026 – Present</span>
      </div>
      <ul class="bullet-list">
        <li>Design and teach communicative, outcome-driven English lessons focusing on spoken fluency, grammar fundamentals, and interview preparation.</li>
        <li>Provide structured feedback and personalized mentoring to accelerate students' confidence and language proficiency.</li>
      </ul>
    </div>

    <div class="item">
      <div class="item-header">
        <div>
          <span class="item-title">Interact District 3281 Bangladesh (Rotary International)</span>
          <span class="item-role"> | District Secretary</span>
        </div>
        <span class="item-date">2023 – 2024</span>
      </div>
      <ul class="bullet-list">
        <li>Directed administrative operations, district communications, and youth leadership initiatives representing <strong>over 2,000+ students</strong> across Bangladesh.</li>
        <li>Organized district-wide youth summits, social impact programs, and inter-school community development projects.</li>
        <li>Demonstrated exceptional diplomacy, public speaking, negotiation, and cross-functional team coordination skills.</li>
      </ul>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">Featured Full-Stack Projects</h2>

    <div class="item">
      <div class="item-header">
        <div>
          <span class="item-title">StudyMate — Collaborative Study Partner Platform</span>
          <span class="item-role"> | Full-Stack MERN Developer</span>
        </div>
        <span class="item-date">May 2026</span>
      </div>
      <div class="item-subtitle">Live Demo: <a href="https://studymate-client-two.vercel.app">studymate-client-two.vercel.app</a> • GitHub: <a href="https://github.com/tanvir560298/studymate-client">github.com/tanvir560298/studymate-client</a></div>
      <ul class="bullet-list">
        <li>Developed a collaborative study partner matching platform with Firebase Authentication, subject filtering, and experience-level sorting.</li>
        <li>Implemented full CRUD connection management, dynamic request flows, and responsive dark/light mode UI with React, Tailwind CSS, DaisyUI, and MongoDB.</li>
      </ul>
      <div class="tags">
        <span class="tag">MongoDB</span><span class="tag">Express.js</span><span class="tag">React</span><span class="tag">Node.js</span><span class="tag">Firebase Auth</span><span class="tag">Tailwind CSS</span><span class="tag">DaisyUI</span>
      </div>
    </div>

    <div class="item">
      <div class="item-header">
        <div>
          <span class="item-title">BookCourier — Library Book Borrowing & Delivery Platform</span>
          <span class="item-role"> | Full-Stack MERN Developer</span>
        </div>
        <span class="item-date">May 2026</span>
      </div>
      <div class="item-subtitle">Live Demo: <a href="https://bookcourier-client-neon.vercel.app">bookcourier-client-neon.vercel.app</a> • GitHub: <a href="https://github.com/tanvir560298/bookcourier-client">github.com/tanvir560298/bookcourier-client</a></div>
      <ul class="bullet-list">
        <li>Engineered a comprehensive library management and book ordering platform with 3-tier Role-Based Access Control (Reader, Librarian, Admin).</li>
        <li>Implemented catalogue search, book ordering, delivery tracking, order cancellation, and administrative controls with JWT-protected Express routes.</li>
      </ul>
      <div class="tags">
        <span class="tag">MongoDB</span><span class="tag">Express.js</span><span class="tag">React</span><span class="tag">Node.js</span><span class="tag">JWT Auth</span><span class="tag">Firebase</span><span class="tag">Tailwind CSS</span>
      </div>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">Education, Fellowships & Certifications</h2>
    <div class="item">
      <div class="item-header">
        <div>
          <span class="item-title">Islamic University of Madinah</span>
          <span class="item-role"> | Undergraduate Studies</span>
        </div>
        <span class="item-date">Madinah, Saudi Arabia</span>
      </div>
      <div class="item-subtitle">Active student pursuing higher education in Islamic Studies & Computing.</div>
    </div>
    <div class="item">
      <div class="item-header">
        <div>
          <span class="item-title">American Center (U.S. Embassy Dhaka)</span>
          <span class="item-role"> | 2-Year Intensive English Access & Leadership Program</span>
        </div>
        <span class="item-date">Dhaka, Bangladesh</span>
      </div>
      <div class="item-subtitle">Completed an intensive 2-year English language proficiency, public speaking, and youth leadership fellowship.</div>
    </div>
    <div class="item">
      <div class="item-header">
        <div>
          <span class="item-title">Youth Leadership Program in Nepal</span>
          <span class="item-role"> | International Youth Delegate (American Center)</span>
        </div>
        <span class="item-date">Kathmandu, Nepal</span>
      </div>
      <div class="item-subtitle">Selected youth delegate representing Bangladesh in cross-cultural leadership, diplomacy, and community development.</div>
    </div>
    <div class="item">
      <div class="item-header">
        <div>
          <span class="item-title">The Art of Negotiation Program</span>
          <span class="item-role"> | Deal Making & Strategic Negotiation</span>
        </div>
        <span class="item-date">Certified Training</span>
      </div>
      <div class="item-subtitle">Mastered tactical negotiation, interest-based bargaining, conflict mediation, and deal closing methodologies.</div>
    </div>
  </section>

</body>
</html>
`

async function main() {
  const tempHtmlPath = resolve('public/cv-print.html')
  const outputPdfPath = resolve('public/Tanvir_Ahmad_CV.pdf')
  
  await writeFile(tempHtmlPath, cvHtml, 'utf-8')
  console.log('Temporary CV HTML written to:', tempHtmlPath)

  const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  console.log('Generating PDF via headless Chrome...')

  const args = [
    '--headless',
    '--disable-gpu',
    '--no-sandbox',
    '--print-to-pdf-no-header',
    `--print-to-pdf=${outputPdfPath}`,
    tempHtmlPath
  ]

  await execFileAsync(chromePath, args)
  console.log('Successfully generated CV PDF at:', outputPdfPath)
}

main().catch(err => {
  console.error('Failed to generate CV:', err)
  process.exit(1)
})
