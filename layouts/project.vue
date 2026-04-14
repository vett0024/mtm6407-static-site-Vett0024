<template>
  <div>
    <AppNav />
    <slot />
    <footer>
      <span>Gazel V.R &mdash; UX Designer &amp; Front-End Developer</span>
      <span>
        <NuxtLink to="/portfolio" class="back-btn" style="display:inline;font-size:11px;">← All Projects</NuxtLink>
      </span>
    </footer>
  </div>
</template>
