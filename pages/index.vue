<template>
  <div>
    <section class="hero">
      <div class="hero-left">
        <span class="eyebrow">UX Designer &amp; Front-End Developer</span>
        <h1>Design<br>that <span class="accent-text">works.</span></h1>
        <p class="hero-tagline">
          I'm Gazel. I build digital experiences that are clear, accessible, and easy to use. I combine design thinking with front-end development to make things that actually work for people.
        </p>
        <div class="btn-group">
          <NuxtLink to="/portfolio" class="btn btn-fill">See My Work</NuxtLink>
          <NuxtLink to="/contact" class="btn btn-ghost">Get in Touch</NuxtLink>
        </div>
        <div class="hero-stat-row">
          <div>
            <div class="hero-stat-num accent-text">6</div>
            <div class="hero-stat-label">Projects</div>
          </div>
          <div>
            <div class="hero-stat-num" style="color:var(--accent2);">UX</div>
            <div class="hero-stat-label">Focus Area</div>
          </div>
          <div>
            <div class="hero-stat-num" style="color:var(--accent3);">AC</div>
            <div class="hero-stat-label">Algonquin</div>
          </div>
        </div>
      </div>

      <div class="hero-right">
        <img src="/images/gazel-pixel.png" alt="Gazel V.R" class="hero-photo hero-photo-pixel" />
        <div class="hero-photo-overlay"></div>
        <div class="hero-name-tag">
          <span>Gazel V.R</span>
          <small>UX Design · Front-End Dev</small>
        </div>
      </div>
    </section>

    <section class="work-teaser">
      <div style="max-width:1000px;margin:0 auto;">
        <span class="eyebrow">Selected Work</span>
        <h2>Recent <span class="accent-text">Projects</span></h2>
        <p class="muted" style="font-size:15px;margin-top:.5rem;margin-bottom:0;font-weight:300;">Six projects. Hover to preview, click to explore.</p>

        <div class="work-teaser-grid">
          <NuxtLink to="/projects/p1" class="work-thumb" title="Personal Website">
            <img src="https://res.cloudinary.com/djytlquqa/image/upload/v1776220065/project1-preview_sawipp.webp" alt="Personal Website project preview" loading="lazy" />
            <div class="work-thumb-overlay">
              <div class="work-thumb-num">01</div>
              <div class="work-thumb-title">Personal Website</div>
            </div>
            <div class="work-thumb-arrow">↗</div>
          </NuxtLink>

          <NuxtLink to="/projects/p2" class="work-thumb" title="CMS Clothing Store">
            <img src="https://res.cloudinary.com/djytlquqa/image/upload/v1776220066/project2-preview_mitygp.webp" alt="CMS Clothing Store project preview" loading="lazy" />
            <div class="work-thumb-overlay">
              <div class="work-thumb-num">02</div>
              <div class="work-thumb-title">Clothing Store</div>
            </div>
            <div class="work-thumb-arrow">↗</div>
          </NuxtLink>

          <NuxtLink to="/projects/p3" class="work-thumb" title="Travel Website">
            <img src="https://res.cloudinary.com/djytlquqa/image/upload/v1776220066/project3-preview_ojm3ds.webp" alt="Discover Cancún project preview" loading="lazy" />
            <div class="work-thumb-overlay">
              <div class="work-thumb-num">03</div>
              <div class="work-thumb-title">Travel Website</div>
            </div>
            <div class="work-thumb-arrow">↗</div>
          </NuxtLink>

          <NuxtLink to="/projects/p4" class="work-thumb" title="Baited by the Odds">
            <img src="https://res.cloudinary.com/djytlquqa/image/upload/v1776220063/baited-preview_byt0bg.webp" alt="Baited by the Odds campaign poster preview" loading="lazy" />
            <div class="work-thumb-overlay">
              <div class="work-thumb-num">04</div>
              <div class="work-thumb-title">Awareness Campaign</div>
            </div>
            <div class="work-thumb-arrow">↗</div>
          </NuxtLink>

          <NuxtLink to="/projects/p5" class="work-thumb" title="Photography Portfolio">
            <img src="https://res.cloudinary.com/djytlquqa/image/upload/v1776220066/project5-preview_gvduvj.webp" alt="Photography Portfolio preview" loading="lazy" />
            <div class="work-thumb-overlay">
              <div class="work-thumb-num">05</div>
              <div class="work-thumb-title">Photography</div>
            </div>
            <div class="work-thumb-arrow">↗</div>
          </NuxtLink>

          <NuxtLink to="/projects/p6" class="work-thumb" title="EchoLink Mobile App">
            <img src="https://res.cloudinary.com/djytlquqa/image/upload/v1776220066/project5-preview_gvduvj.webp" alt="EchoLink Mobile App preview" loading="lazy" />
            <div class="work-thumb-overlay">
              <div class="work-thumb-num">06</div>
              <div class="work-thumb-title">Mobile App</div>
            </div>
            <div class="work-thumb-arrow">↗</div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="what-section">
      <div style="max-width:1000px;margin:0 auto;">
        <div class="divider"></div>
        <span class="eyebrow">Capabilities</span>
        <h2 style="margin-bottom:1.5rem;">What I <span class="accent-text">do</span></h2>
        <div class="grid-3">
          <div class="what-card">
            <div class="what-icon c1">◈</div>
            <div class="what-title">UX Design</div>
            <div class="what-desc">User research, wireframing, prototyping, and high-fidelity interfaces that put clarity and accessibility first.</div>
          </div>
          <div class="what-card">
            <div class="what-icon c2">✶</div>
            <div class="what-title">Front-End Development</div>
            <div class="what-desc">HTML, CSS, and JavaScript. I turn designs into responsive, functional websites that work across all devices.</div>
          </div>
          <div class="what-card">
            <div class="what-icon c3">◉</div>
            <div class="what-title">Visual Branding</div>
            <div class="what-desc">Visual identity systems that are consistent and intentional, built to communicate the right message to the right people.</div>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <span>Gazel V.R &mdash; UX Designer &amp; Front-End Developer</span>
      <span>Interactive Media Design &middot; Algonquin College &middot; 2026</span>
    </footer>
  </div>
</template>

<script setup>
useHead({ title: 'Gazel V.R — UX Designer & Front-End Developer' })
</script>
