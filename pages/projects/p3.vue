<script setup>
definePageMeta({ layout: 'project' })
useHead({ title: 'Discover Cancún — Gazel V.R' })
</script>

<template>
  <div class="container-sm">
    <NuxtLink to="/portfolio" class="back-btn">← Back to Portfolio</NuxtLink>

    <span class="eyebrow">Project 03 · UI Design · Web Development</span>
    <h2 style="margin-bottom:1rem;">Discover Cancún</h2>
    <div class="tags">
      <span class="tag hi">Role: Designer &amp; Developer</span>
      <span class="tag">WordPress</span>
      <span class="tag">Custom Theme</span>
      <span class="tag">SSH Deploy</span>
      <span class="tag">UX Research</span>
    </div>

    <img src="/images/project3-preview.webp" alt="Discover Cancún Travel Website" class="proj-hero-img" style="margin-top:2rem;" loading="lazy" />

    <p style="font-size:15px;line-height:1.9;color:var(--muted2);font-weight:300;">
      Discover Cancún is a travel website I designed and built to inspire people to visit the destination. I created a custom WordPress theme from scratch and deployed it to a live server using SSH through FileZilla. The site includes a vibrant brand identity, an immersive hero section, a search function, and a gallery of destination content.
    </p>

    <div class="live-link-banner">
      <div>
        <span>View live site</span>
        <span class="note">Hosted on Pantheon</span>
      </div>
      <a href="https://dev-vett0024.pantheonsite.io/" target="_blank" class="btn" style="padding:9px 20px;font-size:11px;">Visit Site ↗</a>
    </div>

    <div class="divider"></div>

    <h3 style="margin-bottom:1rem;font-size:16px;color:var(--muted2);font-weight:400;letter-spacing:1px;text-transform:uppercase;">My Role &amp; Contributions</h3>
    <p style="font-size:14px;line-height:1.9;color:var(--muted2);font-weight:300;">I designed and developed everything on this project. I created the Cancún wordmark, picked the colour palette, built the page layouts in WordPress, and wrote custom CSS to achieve the visual design I had in mind. I also handled the full deployment process remotely using SSH and FileZilla to push the theme files to the live server on Pantheon.</p>

    <div style="margin-top:2.5rem;">
      <h3 style="margin-bottom:1rem;font-size:16px;color:var(--muted2);font-weight:400;letter-spacing:1px;text-transform:uppercase;">Design Process</h3>
      <div class="process-grid">
        <div class="process-step">
          <div class="process-step-num">01</div>
          <div class="process-step-label">User Research</div>
          <p>I looked at how people browse travel sites and what they need most: strong visuals to get inspired, easy access to key info, and simple navigation. That guided every layout decision I made.</p>
        </div>
        <div class="process-step">
          <div class="process-step-num">02</div>
          <div class="process-step-label">Information Architecture</div>
          <p>I organized the site around three things users need: inspiration through visuals, useful destination info, and a clear path to act. Navigation was kept simple to reduce friction.</p>
        </div>
        <div class="process-step">
          <div class="process-step-num">03</div>
          <div class="process-step-label">Custom Theme &amp; Deploy</div>
          <p>I built a custom WordPress theme using PHP template files and custom CSS, then deployed it to the live Pantheon server remotely via SSH using FileZilla for file transfer.</p>
        </div>
      </div>
    </div>

    <div style="margin-top:2.5rem;">
      <h3 style="margin-bottom:1rem;font-size:16px;color:var(--muted2);font-weight:400;letter-spacing:1px;text-transform:uppercase;">Responsiveness Demo</h3>
      <div class="process-img-label">Screen recording showing the site adapting across screen sizes</div>
      <video class="process-video" autoplay loop muted playsinline preload="none">
        <source src="/images/cancun-responsive.mp4" type="video/mp4" />
      </video>
    </div>

    <div style="margin-top:2.5rem;">
      <h3 style="margin-bottom:1rem;font-size:16px;color:var(--muted2);font-weight:400;letter-spacing:1px;text-transform:uppercase;">Reflection</h3>
      <div class="reflection-box">
        This project pushed me to design in a very different visual style from my usual minimal approach. Bold colours and expressive typography were a new challenge. Working in WordPress taught me how to build within a platform's structure using custom PHP and CSS, and the SSH deployment process was a genuinely new technical skill I picked up on this project. If I redid it, I would spend more time on mobile responsiveness and tighten the typography hierarchy on smaller screens.
      </div>
    </div>
  </div>
</template>
