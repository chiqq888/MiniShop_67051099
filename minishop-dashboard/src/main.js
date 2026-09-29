import './style.css'

const sidebarLinks = document.querySelectorAll('.sidebar-link')
const activePage = document.body.dataset.currentPage

sidebarLinks.forEach((link) => {
  const isActive = link.dataset.page === activePage
  link.classList.toggle('is-active', isActive)

  if (isActive) {
    link.setAttribute('aria-current', 'page')
  } else {
    link.removeAttribute('aria-current')
  }
})
