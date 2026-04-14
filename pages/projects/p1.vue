<script setup>
definePageMeta({ layout: 'project' })
useHead({ title: 'Personal Website — Gazel V.R' })
</script>

<template>
  <div class="container-sm">
    <NuxtLink to="/portfolio" class="back-btn">← Back to Portfolio</NuxtLink>

    <span class="eyebrow">Project 01 · UX Design · Front-End Development</span>
    <h2 style="margin-bottom:1rem;">Personal Website</h2>
    <div class="tags">
      <span class="tag hi">Role: Designer &amp; Developer</span>
      <span class="tag">HTML / CSS</span>
      <span class="tag">JavaScript</span>
      <span class="tag">Figma</span>
    </div>

    <img src="/images/p1-mockup.webp" alt="Personal Website shown on laptop mockup" class="proj-hero-img" style="margin-top:2rem;" loading="lazy" />

    <p style="font-size:15px;line-height:1.9;color:var(--muted2);font-weight:300;">
      This is a personal portfolio site I designed and built completely from scratch. I wanted something that felt clean and professional but still reflected my own style. Everything from the layout to the code was made by me, with no templates or frameworks.
    </p>

    <div class="live-link-banner" style="margin-top:1.5rem;">
      <div>
        <span>View live site</span>
        <span class="note">Hosted on GitHub Pages</span>
      </div>
      <a href="https://vett0024.github.io/mtm6201_final/Home.html" target="_blank" class="btn" style="padding:9px 20px;font-size:11px;">Visit Site ↗</a>
    </div>

    <div class="divider"></div>

    <h3 style="margin-bottom:1rem;font-size:16px;color:var(--muted2);font-weight:400;letter-spacing:1px;text-transform:uppercase;">My Role &amp; Contributions</h3>
    <p style="font-size:14px;line-height:1.9;color:var(--muted2);font-weight:300;">I handled everything on this project. I came up with the concept, wireframed the pages in Figma, made all the design decisions around layout, typography, and colour, and then coded the whole thing in HTML, CSS, and JavaScript. I also deployed it to GitHub Pages myself.</p>

    <div style="margin-top:2.5rem;">
      <h3 style="margin-bottom:1rem;font-size:16px;color:var(--muted2);font-weight:400;letter-spacing:1px;text-transform:uppercase;">Design Process</h3>
      <div class="process-grid">
        <div class="process-step">
          <div class="process-step-num">01</div>
          <div class="process-step-label">Research</div>
          <p>I looked at portfolio sites from other UX and front-end designers to understand what worked well. I paid attention to how they organized content and communicated their skills to employers.</p>
        </div>
        <div class="process-step">
          <div class="process-step-num">02</div>
          <div class="process-step-label">Wireframes</div>
          <p>I wireframed every page in Figma across desktop and mid-size breakpoints before writing any code. This helped me figure out the structure and navigation early on.</p>
        </div>
        <div class="process-step">
          <div class="process-step-num">03</div>
          <div class="process-step-label">Prototype &amp; Build</div>
          <p>I connected the frames into a clickable prototype to test the flow, then built the final site in code with consistent spacing, type, and colour throughout.</p>
        </div>
      </div>

      <div style="margin-top:1.5rem;">
        <div class="process-img-label">Figma — Lo-fi Wireframes</div>
        <img src="/images/p1-figma-wires.webp" alt="Figma wireframe workspace" class="process-full-img" loading="lazy" />
      </div>

      <div style="margin-top:1.25rem;">
        <div class="process-img-label">Figma — Interactive Prototype Flows</div>
        <img src="/images/p1-figma-proto.webp" alt="Figma prototype flow" class="process-full-img" loading="lazy" />
      </div>
    </div>

    <div style="margin-top:2.5rem;">
      <h3 style="margin-bottom:1rem;font-size:16px;color:var(--muted2);font-weight:400;letter-spacing:1px;text-transform:uppercase;">Reflection</h3>
      <div class="reflection-box">
        Building this site showed me how much design and development inform each other. A lot of decisions I thought were just visual, like spacing and font weight, directly affected how readable the final product felt. If I had more time I would add more motion and interactivity. Overall this project gave me a lot of confidence in my ability to take something from an idea to a deployed, working product on my own.
      </div>
    </div>
  </div>
</template>
