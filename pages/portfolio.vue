<template>
  <div>
    <div class="container">
      <span class="eyebrow">Selected Work</span>
      <h2 style="margin-bottom:0.5rem;">Portfolio</h2>
      <p class="muted" style="font-size:15px;margin-bottom:2.5rem;font-weight:300;">Six projects. Click any card to see the full case study and process.</p>

      <div class="grid-3">
        <NuxtLink to="/projects/p1" class="proj-card">
          <div class="proj-thumb">
            <img src="https://res.cloudinary.com/djytlquqa/image/upload/v1776220065/project1-preview_sawipp.webp" alt="Personal Website Screenshot" loading="lazy" />
            <div class="proj-thumb-overlay"></div>
          </div>
          <div class="proj-body">
            <div class="proj-num">01</div>
            <div class="proj-title">Personal Website</div>
            <div class="proj-role">UX Design · Front-End Development</div>
            <div class="proj-desc">A portfolio site I designed and coded from scratch using HTML, CSS, and JavaScript. No templates.</div>
            <div class="tags"><span class="tag hi">HTML/CSS</span><span class="tag">Figma</span><span class="tag">JavaScript</span></div>
          </div>
          <div class="proj-arrow">↗</div>
        </NuxtLink>

        <NuxtLink to="/projects/p2" class="proj-card">
          <div class="proj-thumb">
            <img src="https://res.cloudinary.com/djytlquqa/image/upload/v1776220066/project2-preview_mitygp.webp" alt="CMS Clothing Store Screenshot" loading="lazy" />
            <div class="proj-thumb-overlay"></div>
          </div>
          <div class="proj-body">
            <div class="proj-num">02</div>
            <div class="proj-title">CMS Clothing Store</div>
            <div class="proj-role">UI Design · E-Commerce</div>
            <div class="proj-desc">A vintage clothing store on Shopify with a custom brand identity built around a dark, editorial aesthetic.</div>
            <div class="tags"><span class="tag hi">Shopify</span><span class="tag">Branding</span><span class="tag">UI Design</span></div>
          </div>
          <div class="proj-arrow">↗</div>
        </NuxtLink>

        <NuxtLink to="/projects/p3" class="proj-card">
          <div class="proj-thumb">
            <img src="https://res.cloudinary.com/djytlquqa/image/upload/v1776220066/project3-preview_ojm3ds.webp" alt="Discover Cancún Travel Website Screenshot" loading="lazy" />
            <div class="proj-thumb-overlay"></div>
          </div>
          <div class="proj-body">
            <div class="proj-num">03</div>
            <div class="proj-title">Discover Cancún</div>
            <div class="proj-role">UI Design · Web Development</div>
            <div class="proj-desc">A travel website with a custom WordPress theme I built and deployed via SSH using FileZilla.</div>
            <div class="tags"><span class="tag hi">WordPress</span><span class="tag">Custom Theme</span><span class="tag">SSH Deploy</span></div>
          </div>
          <div class="proj-arrow">↗</div>
        </NuxtLink>

        <NuxtLink to="/projects/p4" class="proj-card">
          <div class="proj-thumb">
            <img src="https://res.cloudinary.com/djytlquqa/image/upload/v1776220063/baited-preview_byt0bg.webp" alt="Baited by the Odds campaign poster" loading="lazy" />
            <div class="proj-thumb-overlay"></div>
          </div>
          <div class="proj-body">
            <div class="proj-num">04</div>
            <div class="proj-title">Baited by the Odds</div>
            <div class="proj-role">UX Research · Print &amp; Campaign Design</div>
            <div class="proj-desc">A gambling awareness campaign designed for Ottawa Public Health, built through UX research, ideation, and print design.</div>
            <div class="tags"><span class="tag hi">UX Research</span><span class="tag">Print Design</span><span class="tag">Illustrator</span></div>
          </div>
          <div class="proj-arrow">↗</div>
        </NuxtLink>

        <NuxtLink to="/projects/p5" class="proj-card">
          <div class="proj-thumb">
            <img src="https://res.cloudinary.com/djytlquqa/image/upload/v1776220066/project5-preview_gvduvj.webp" alt="Photography Portfolio Preview" style="filter:brightness(0.75) saturate(0.85);" loading="lazy" />
            <div class="proj-thumb-overlay"></div>
          </div>
          <div class="proj-body">
            <div class="proj-num">05</div>
            <div class="proj-title">Photography Portfolio</div>
            <div class="proj-role">Portrait · Storytelling · Conceptual</div>
            <div class="proj-desc">A collection of portrait, storytelling, and conceptual photography published on Adobe Portfolio.</div>
            <div class="tags"><span class="tag hi">Photography</span><span class="tag">Adobe Portfolio</span><span class="tag">Visual Storytelling</span></div>
          </div>
          <div class="proj-arrow">↗</div>
        </NuxtLink>

        <NuxtLink to="/projects/p6" class="proj-card">
          <div class="proj-thumb">
            <img src="https://res.cloudinary.com/djytlquqa/image/upload/v1776220066/project6-preview_gp11wj.webp" alt="EchoLink Mobile App" loading="lazy" />
            <div class="proj-thumb-overlay"></div>
          </div>
          <div class="proj-body">
            <div class="proj-num">06</div>
            <div class="proj-title">EchoLink — Mobile App</div>
            <div class="proj-role">UX Research · UI Design · Prototyping</div>
            <div class="proj-desc">An AI-powered silent communication app using lip reading and gesture recognition, designed end-to-end in Figma.</div>
            <div class="tags"><span class="tag hi">Figma</span><span class="tag">UX Research</span><span class="tag">Prototyping</span><span class="tag">FigJam</span></div>
          </div>
          <div class="proj-arrow">↗</div>
        </NuxtLink>
      </div>
    </div>

    <footer>
      <span>Gazel V.R &mdash; UX Designer &amp; Front-End Developer</span>
      <span>Interactive Media Design &middot; Algonquin College &middot; 2026</span>
    </footer>
  </div>
</template>

<script setup>
useHead({ title: 'Portfolio — Gazel V.R' })
</script>
