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

const cartStorageKey = 'minishop-cart'
const cartBadges = document.querySelectorAll('.cart-count')

function readCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem(cartStorageKey) || '{}')
    return savedCart && typeof savedCart === 'object' && !Array.isArray(savedCart) ? savedCart : {}
  } catch {
    return {}
  }
}

let cart = readCart()

function updateCartBadges() {
  const count = Object.values(cart).reduce((total, quantity) => {
    return total + (Number.isSafeInteger(quantity) && quantity > 0 ? quantity : 0)
  }, 0)

  cartBadges.forEach((badge) => {
    badge.textContent = count
    badge.setAttribute('aria-label', `${count} items in cart`)
  })
}

updateCartBadges()
window.addEventListener('storage', (event) => {
  if (event.key === cartStorageKey) {
    cart = readCart()
    updateCartBadges()
  }
})

const productDialog = document.querySelector('#product-dialog')

if (productDialog) {
  const productCards = [...document.querySelectorAll('.product-card')]
  const searchInput = document.querySelector('#product-search')
  const categorySelect = document.querySelector('#product-category')
  const noProducts = document.querySelector('#no-products')
  const quantityOutput = document.querySelector('#product-quantity')
  const currency = new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
  let selectedProduct = null
  let quantity = 1

  function filterProducts() {
    const query = searchInput.value.trim().toLocaleLowerCase()
    const category = categorySelect.value
    let visibleCount = 0

    productCards.forEach((card) => {
      const matchesSearch = card.dataset.name.toLocaleLowerCase().includes(query)
      const matchesCategory = category === 'all' || card.dataset.category === category
      const isVisible = matchesSearch && matchesCategory
      card.classList.toggle('hidden', !isVisible)
      if (isVisible) visibleCount += 1
    })

    noProducts.classList.toggle('hidden', visibleCount !== 0)
  }

  searchInput.addEventListener('input', filterProducts)
  categorySelect.addEventListener('change', filterProducts)

  productCards.forEach((card) => {
    card.querySelector('.open-product-dialog').addEventListener('click', () => {
      selectedProduct = card
      quantity = 1
      quantityOutput.textContent = quantity
      document.querySelector('#dialog-product-image').src = card.querySelector('.product-image').src
      document.querySelector('#dialog-product-image').alt = card.dataset.name
      document.querySelector('#dialog-product-name').textContent = card.dataset.name
      document.querySelector('#dialog-product-price').textContent = currency.format(Number(card.dataset.price))
      document.querySelector('#dialog-product-rating').textContent = `${card.dataset.rating} (${card.dataset.reviews})`
      productDialog.showModal()
    })
  })

  document.querySelector('#close-product-dialog').addEventListener('click', () => productDialog.close())
  document.querySelector('#decrease-quantity').addEventListener('click', () => {
    quantity = Math.max(1, quantity - 1)
    quantityOutput.textContent = quantity
  })
  document.querySelector('#increase-quantity').addEventListener('click', () => {
    quantity += 1
    quantityOutput.textContent = quantity
  })
  document.querySelector('#confirm-add-to-cart').addEventListener('click', () => {
    if (!selectedProduct) return

    const name = selectedProduct.dataset.name
    cart[name] = (Number(cart[name]) || 0) + quantity
    try {
      localStorage.setItem(cartStorageKey, JSON.stringify(cart))
    } catch {
      // The visible count still updates when browser storage is unavailable.
    }
    updateCartBadges()
    productDialog.close()
  })
}
