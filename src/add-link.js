export default function importLink(src) {
  let script = document.createElement('script')
  script.async = true
  script.src = src
  document.head.appendChild(script)
}