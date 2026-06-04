<template>
  <form class="form" @submit.prevent="submit" novalidate>
    <div class="grid">
      <label class="field" :class="{ err: errors.name }">
        <span class="lab ts">Your name</span>
        <input v-model.trim="form.name" type="text" autocomplete="name" placeholder="Jane Doe">
        <span v-if="errors.name" class="msg">{{ errors.name }}</span>
      </label>

      <label class="field" :class="{ err: errors.email }">
        <span class="lab ts">Email</span>
        <input v-model.trim="form.email" type="email" autocomplete="email" placeholder="jane@studio.com">
        <span v-if="errors.email" class="msg">{{ errors.email }}</span>
      </label>

      <label class="field span">
        <span class="lab ts">Company / brand <em>(optional)</em></span>
        <input v-model.trim="form.company" type="text" placeholder="Acme Films">
      </label>

      <label class="field span">
        <span class="lab ts">Project type</span>
        <div class="chips">
          <button
            v-for="t in types"
            :key="t"
            type="button"
            class="chip"
            :class="{ on: form.type === t }"
            @click="form.type = t">{{ t }}</button>
        </div>
      </label>

      <label class="field span" :class="{ err: errors.message }">
        <span class="lab ts">Tell me about it</span>
        <textarea v-model.trim="form.message" rows="5" placeholder="What are you trying to say, and when do you need it?"></textarea>
        <span v-if="errors.message" class="msg">{{ errors.message }}</span>
      </label>
    </div>

    <div class="foot">
      <button type="submit" class="btn btn-primary" :disabled="sent">
        <span>{{ sent ? 'Opening your mail…' : 'Send the brief' }}</span><span>→</span>
      </button>
      <Transition name="film">
        <p v-if="sent" class="ok ts">✓ Your email draft is ready — hit send and I’ll be in touch.</p>
      </Transition>
    </div>
  </form>
</template>

<script setup lang="ts">
import { profile } from '~/data/profile'

const types = ['Commercial / TVC', 'Brand Film', 'Music Video', 'Documentary', 'Feature / Other']

const form = reactive({ name: '', email: '', company: '', type: types[0], message: '' })
const errors = reactive<Record<string, string>>({})
const sent = ref(false)

function validate() {
  errors.name = form.name ? '' : 'Please add your name.'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'A valid email, please.'
  errors.message = form.message.length >= 10 ? '' : 'A line or two about the project.'
  return !errors.name && !errors.email && !errors.message
}

function submit() {
  if (!validate()) return
  const subject = `New project enquiry — ${form.type}${form.company ? ` · ${form.company}` : ''}`
  const body = [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    form.company ? `Company: ${form.company}` : '',
    `Project type: ${form.type}`,
    '',
    form.message
  ].filter(Boolean).join('\n')

  const href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  if (typeof window !== 'undefined') window.location.href = href
  sent.value = true
}
</script>

<style scoped>
.form { display: flex; flex-direction: column; gap: 28px; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
@media (max-width: 640px) { .grid { grid-template-columns: 1fr; } }
.field { display: flex; flex-direction: column; gap: 10px; }
.field.span { grid-column: 1 / -1; }
.lab { color: var(--bone-3); }
.lab em { font-style: italic; text-transform: none; letter-spacing: 0; color: var(--bone-3); }
input, textarea {
  background: var(--ink-2); border: 1px solid var(--line); border-radius: 4px;
  padding: 14px 16px; color: var(--bone); font-family: var(--ff-sans); font-size: 15px;
  transition: border-color .3s var(--ease), background .3s var(--ease);
  width: 100%; resize: vertical;
}
input::placeholder, textarea::placeholder { color: var(--bone-3); }
input:focus, textarea:focus { outline: none; border-color: var(--amber); background: var(--ink-3); }
.field.err input, .field.err textarea { border-color: var(--red); }
.msg { color: var(--red); font-size: 12px; font-family: var(--ff-mono); }

.chips { display: flex; flex-wrap: wrap; gap: 10px; }
.chip {
  border: 1px solid var(--line); padding: 10px 16px; border-radius: 999px;
  font-family: var(--ff-mono); font-size: 11px; letter-spacing: .08em; color: var(--bone-2);
  transition: all .3s var(--ease);
}
.chip:hover { border-color: var(--bone-2); color: var(--bone); }
.chip.on { background: var(--amber); color: var(--ink-0); border-color: var(--amber); }

.foot { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }
.btn[disabled] { opacity: .7; cursor: default; }
.ok { color: var(--amber); }
</style>
