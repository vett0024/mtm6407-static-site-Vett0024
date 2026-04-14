<template>
  <div>
    <div class="container-sm">
      <span class="eyebrow">Say Hello</span>
      <h2 style="margin-bottom:0.5rem;">Let's <span class="accent-text">Connect</span></h2>
      <p class="muted" style="font-size:15px;margin-bottom:3rem;font-weight:300;">Open to internships, freelance work, and collaborations.</p>

      <div class="contact-grid">
        <div class="contact-item">
          <div class="contact-item-label">Email</div>
          <div class="contact-item-val"><a href="mailto:vett0024@algonquinlive.com">vett0024@algonquinlive.com</a></div>
        </div>
        <div class="contact-item">
          <div class="contact-item-label">Location</div>
          <div class="contact-item-val">Ottawa / Gloucester, ON</div>
        </div>
        <div class="contact-item">
          <div class="contact-item-label">LinkedIn</div>
          <div class="contact-item-val"><a href="https://www.linkedin.com/in/gazel-vr/" target="_blank">linkedin.com/in/gazel-vr</a></div>
        </div>
      </div>

      <div class="divider"></div>

      <h3 style="font-size:15px;font-weight:400;color:var(--muted2);margin-bottom:1.5rem;">Or send a message directly</h3>
      <form id="contact-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label>Name</label>
          <input v-model="form.name" type="text" name="name" placeholder="Your name" required />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input v-model="form.email" type="email" name="email" placeholder="your@email.com" required />
        </div>
        <div class="form-group">
          <label>Message</label>
          <textarea v-model="form.message" name="message" placeholder="What are you working on?" required></textarea>
        </div>
        <button
          type="submit"
          class="btn"
          :style="btnStyle"
          style="margin-top:0.5rem;background:transparent;"
          :disabled="btnDisabled"
        >{{ btnText }}</button>
      </form>
    </div>

    <footer>
      <span>Gazel V.R &mdash; UX Designer &amp; Front-End Developer</span>
      <span>Interactive Media Design &middot; Algonquin College &middot; 2026</span>
    </footer>
  </div>
</template>

<script setup>
useHead({ title: 'Contact — Gazel V.R' })

const form = reactive({ name: '', email: '', message: '' })
const btnText = ref('Send Message')
const btnDisabled = ref(false)
const btnStyle = ref({})

async function handleSubmit() {
  btnText.value = 'Sending...'
  btnDisabled.value = true

  try {
    const data = new FormData()
    data.append('name', form.name)
    data.append('email', form.email)
    data.append('message', form.message)

    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' }
    })

    if (response.ok) {
      btnText.value = 'Message Sent ✓'
      btnStyle.value = { borderColor: '#a8e063', color: '#a8e063' }
      form.name = ''
      form.email = ''
      form.message = ''
      setTimeout(() => {
        btnText.value = 'Send Message'
        btnStyle.value = {}
        btnDisabled.value = false
      }, 4000)
    } else {
      btnText.value = 'Error — Try Again'
      btnStyle.value = { borderColor: '#e06363', color: '#e06363' }
      btnDisabled.value = false
    }
  } catch {
    btnText.value = 'Error — Try Again'
    btnStyle.value = { borderColor: '#e06363', color: '#e06363' }
    btnDisabled.value = false
  }
}
</script>
