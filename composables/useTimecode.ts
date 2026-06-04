/**
 * Returns a reactive HH:MM:SS string that ticks once per second,
 * formatted as `current / total`.
 */
export function useTimecode(totalSeconds = 60 * 60 * 2 + 38 * 60) {
  const seconds = ref(14)
  const display = computed(() => {
    const t = seconds.value
    const h = String(Math.floor(t / 3600)).padStart(2, '0')
    const m = String(Math.floor((t % 3600) / 60)).padStart(2, '0')
    const s = String(t % 60).padStart(2, '0')
    const total = formatHMS(totalSeconds)
    return `${h}:${m}:${s} / ${total}`
  })

  let timer: ReturnType<typeof setInterval> | null = null
  onMounted(() => {
    timer = setInterval(() => { seconds.value = (seconds.value + 1) % (60 * 60 * 3) }, 1000)
  })
  onBeforeUnmount(() => { if (timer) clearInterval(timer) })

  return { display, seconds }
}

export function useKarachiClock() {
  const display = ref('— : — : — KHI')
  let timer: ReturnType<typeof setInterval> | null = null
  function tick() {
    const now = new Date()
    const khi = new Date(now.getTime() + (now.getTimezoneOffset() + 300) * 60000)
    display.value = `${pad(khi.getHours())}:${pad(khi.getMinutes())}:${pad(khi.getSeconds())} KHI`
  }
  onMounted(() => { tick(); timer = setInterval(tick, 1000) })
  onBeforeUnmount(() => { if (timer) clearInterval(timer) })
  return display
}

function pad(n: number) { return String(n).padStart(2, '0') }
function formatHMS(t: number) {
  return `${pad(Math.floor(t / 3600))}:${pad(Math.floor((t % 3600) / 60))}:${pad(t % 60)}`
}
