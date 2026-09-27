import './style.css'
document.querySelector('#app').innerHTML = `
  <header class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-6 py-4
      flex items-center justify-between">

    <!-- Logo -->
      <div>
      <h1 class="text-2xl font-bold text-blue-600">
        MiniShop
      </h1>
      <p class="text-sm text-gray-500">
        Online Shopping
      </p>
    </div>

    <!-- Search -->
    <div class="flex items-center gap-4">
      <input type="text" placeholder="Search products..." class="border border-gray-300 rounded-lg px-4 py-2 w-64">
      <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Search</button>
    </div>

    <!-- Cart -->
    <button class="bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200">🛒 Cart</button>

    </div>
  </header>
`