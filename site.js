const PRODUCTS = [
  { id: 'p1', name: 'Premium Wireless Airphone', price: 990, image: 'file_00000000d5dc71fab880da618d7aafe5.png', description: 'Deep bass + 6 months warranty' },
  { id: 'p2', name: 'Soundora Neckband X2', price: 1250, image: 'airphone.jpg', description: 'Long battery backup for daily use' },
  { id: 'p3', name: 'Gaming Earbuds Pro', price: 1490, image: 'file_00000000d5dc71fab880da618d7aafe5.png', description: 'Low latency mode for gaming' },
  { id: 'p4', name: 'Studio Headphone Lite', price: 1890, image: 'airphone.jpg', description: 'Clear vocal and comfort cushions' },
  { id: 'p5', name: 'Soundora Smart Speaker Mini', price: 2190, image: 'file_00000000d5dc71fab880da618d7aafe5.png', description: 'Compact smart audio speaker' },
  { id: 'p6', name: 'USB-C Fast Charger 25W', price: 650, image: 'airphone.jpg', description: 'Fast and safe charging' }
];

const bdAddressData = {
  'ঢাকা': { districts: ['ঢাকা', 'গাজীপুর'], upazilas: { 'ঢাকা': ['মিরপুর', 'গুলশান', 'মোহাম্মদপুর'], 'গাজীপুর': ['টঙ্গী', 'শ্রীপুর'] } },
  'চট্টগ্রাম': { districts: ['চট্টগ্রাম', 'কুমিল্লা'], upazilas: { 'চট্টগ্রাম': ['পটিয়া', 'রাউজান'], 'কুমিল্লা': ['সদর', 'দেবিদ্বার'] } },
  'রাজশাহী': { districts: ['রাজশাহী', 'বগুড়া'], upazilas: { 'রাজশাহী': ['পবা', 'চারঘাট'], 'বগুড়া': ['সদর', 'শিবগঞ্জ'] } },
  'খুলনা': { districts: ['খুলনা', 'যশোর'], upazilas: { 'খুলনা': ['দাকোপ', 'ডুমুরিয়া'], 'যশোর': ['সদর', 'কেশবপুর'] } },
  'বরিশাল': { districts: ['বরিশাল', 'ভোলা'], upazilas: { 'বরিশাল': ['সদর', 'উজিরপুর'], 'ভোলা': ['সদর', 'চরফ্যাশন'] } },
  'সিলেট': { districts: ['সিলেট', 'হবিগঞ্জ'], upazilas: { 'সিলেট': ['সদর', 'জৈন্তাপুর'], 'হবিগঞ্জ': ['সদর', 'মাধবপুর'] } },
  'রংপুর': { districts: ['রংপুর', 'দিনাজপুর'], upazilas: { 'রংপুর': ['সদর', 'মিঠাপুকুর'], 'দিনাজপুর': ['সদর', 'বিরামপুর'] } },
  'ময়মনসিংহ': { districts: ['ময়মনসিংহ', 'জামালপুর'], upazilas: { 'ময়মনসিংহ': ['সদর', 'ত্রিশাল'], 'জামালপুর': ['সদর', 'ইসলামপুর'] } }
};

const ORDER_KEY = 'soundoraOrders';
const USERS_KEY = 'soundoraUsers';
const CURRENT_USER_KEY = 'soundoraCurrentUser';

const byId = (id) => document.getElementById(id);
const getOrders = () => JSON.parse(localStorage.getItem(ORDER_KEY) || '[]');
const setOrders = (orders) => localStorage.setItem(ORDER_KEY, JSON.stringify(orders));
const getUsers = () => JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
const setUsers = (users) => localStorage.setItem(USERS_KEY, JSON.stringify(users));
const getCurrentUser = () => JSON.parse(localStorage.getItem(CURRENT_USER_KEY) || 'null');

function renderProducts() {
  const productList = byId('product-list');
  if (!productList) return;

  productList.innerHTML = PRODUCTS.map((p) => `
    <article class="product-card">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <strong>${p.price.toLocaleString('bn-BD')}৳</strong>
      <button type="button" onclick="selectProduct('${p.id}')">এইটি অর্ডার করুন</button>
    </article>
  `).join('');
}

function selectProduct(productId) {
  const selected = PRODUCTS.find((p) => p.id === productId);
  if (!selected) return;

  byId('productId').value = selected.id;
  byId('productName').value = selected.name;
  byId('price').value = String(selected.price);
  byId('selected-product-text').textContent = `সিলেক্টেড প্রোডাক্ট: ${selected.name} (${selected.price.toLocaleString('bn-BD')}৳)`;
  byId('checkout-form').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
window.selectProduct = selectProduct;

function fillSelect(selectEl, options, placeholder) {
  selectEl.innerHTML = `<option value="">${placeholder}</option>`;
  options.forEach((item) => {
    const option = document.createElement('option');
    option.value = item;
    option.textContent = item;
    selectEl.appendChild(option);
  });
}

function setupAddressSelectors() {
  const divisionSelect = byId('division');
  const districtSelect = byId('district');
  const upazilaSelect = byId('upazila');
  if (!divisionSelect || !districtSelect || !upazilaSelect) return;

  fillSelect(divisionSelect, Object.keys(bdAddressData), 'বিভাগ পছন্দ করুন');

  divisionSelect.addEventListener('change', () => {
    const division = divisionSelect.value;
    if (!division) {
      districtSelect.disabled = true;
      upazilaSelect.disabled = true;
      fillSelect(districtSelect, [], 'আগে বিভাগ নির্বাচন করুন');
      fillSelect(upazilaSelect, [], 'আগে জেলা নির্বাচন করুন');
      return;
    }

    fillSelect(districtSelect, bdAddressData[division].districts, 'জেলা পছন্দ করুন');
    districtSelect.disabled = false;
    upazilaSelect.disabled = true;
    fillSelect(upazilaSelect, [], 'আগে জেলা নির্বাচন করুন');
  });

  districtSelect.addEventListener('change', () => {
    const division = divisionSelect.value;
    const district = districtSelect.value;
    if (!division || !district) {
      upazilaSelect.disabled = true;
      fillSelect(upazilaSelect, [], 'আগে জেলা নির্বাচন করুন');
      return;
    }

    fillSelect(upazilaSelect, bdAddressData[division].upazilas[district] || ['সদর'], 'উপজেলা পছন্দ করুন');
    upazilaSelect.disabled = false;
  });
}

function createTrackingId() {
  return `SD-${Date.now().toString().slice(-6)}-${Math.floor(Math.random() * 900 + 100)}`;
}

function setupCheckout() {
  const form = byId('checkout-form');
  const btn = byId('submit-btn');
  if (!form || !btn) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const currentUser = getCurrentUser();

    if (!form.productId.value) {
      alert('দয়া করে আগে একটি প্রোডাক্ট সিলেক্ট করুন।');
      return;
    }

    btn.disabled = true;
    btn.textContent = 'অর্ডার প্রসেস হচ্ছে...';

    const qty = Math.max(1, Math.min(5, Number.parseInt(form.quantity.value, 10) || 1));
    const unitPrice = Number.parseInt(form.price.value, 10) || 0;
    const newOrder = {
      id: crypto.randomUUID(),
      trackingId: createTrackingId(),
      status: 'Pending',
      createdAt: new Date().toISOString(),
      userEmail: currentUser?.email || null,
      customerName: form.name.value.trim(),
      phone: form.phone.value.trim(),
      division: form.division.value,
      district: form.district.value,
      upazila: form.upazila.value,
      address: form.address.value.trim(),
      productId: form.productId.value,
      productName: form.productName.value,
      unitPrice,
      quantity: qty,
      totalPrice: unitPrice * qty
    };

    const orders = getOrders();
    orders.push(newOrder);
    setOrders(orders);
    localStorage.setItem('soundoraOrderSummary', JSON.stringify(newOrder));

    window.location.href = 'order-summary.html';
  });
}

function setupAuth() {
  const signupForm = byId('signup-form');
  const loginForm = byId('login-form');
  const logoutBtn = byId('logout-btn');

  signupForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData(signupForm);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim().toLowerCase();
    const password = String(form.get('password') || '');

    const users = getUsers();
    if (users.some((u) => u.email === email)) {
      alert('এই ইমেইল দিয়ে ইতোমধ্যে অ্যাকাউন্ট আছে।');
      return;
    }

    users.push({ id: crypto.randomUUID(), name, email, password });
    setUsers(users);
    alert('Signup সফল। এখন Login করুন।');
    signupForm.reset();
  });

  loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData(loginForm);
    const email = String(form.get('email') || '').trim().toLowerCase();
    const password = String(form.get('password') || '');

    const user = getUsers().find((u) => u.email === email && u.password === password);
    if (!user) {
      alert('ইমেইল বা পাসওয়ার্ড সঠিক নয়।');
      return;
    }

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({ name: user.name, email: user.email }));
    loginForm.reset();
    renderUserState();
    renderMyOrders();
  });

  logoutBtn?.addEventListener('click', () => {
    localStorage.removeItem(CURRENT_USER_KEY);
    renderUserState();
    renderMyOrders();
  });
}

function renderUserState() {
  const userBox = byId('current-user');
  const logoutBtn = byId('logout-btn');
  const currentUser = getCurrentUser();

  if (!userBox || !logoutBtn) return;

  if (currentUser) {
    userBox.textContent = `লগইন আছেন: ${currentUser.name} (${currentUser.email})`;
    logoutBtn.style.display = 'inline-block';
  } else {
    userBox.textContent = 'আপনি গেস্ট হিসেবে আছেন।';
    logoutBtn.style.display = 'none';
  }
}

function renderMyOrders() {
  const container = byId('my-orders');
  const currentUser = getCurrentUser();
  if (!container) return;

  if (!currentUser) {
    container.innerHTML = '<p class="muted">অর্ডার হিস্ট্রি দেখতে Login করুন।</p>';
    return;
  }

  const orders = getOrders()
    .filter((o) => o.userEmail === currentUser.email)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  if (!orders.length) {
    container.innerHTML = '<p class="muted">আপনার এখনো কোনো অর্ডার নেই।</p>';
    return;
  }

  container.innerHTML = orders.map((o) => `
    <div class="order-item">
      <h4>${o.productName}</h4>
      <p>Tracking: <strong>${o.trackingId}</strong></p>
      <p>Status: <strong>${o.status}</strong></p>
      <p>মোট: ${o.totalPrice.toLocaleString('bn-BD')}৳ | Qty: ${o.quantity}</p>
      <p>তারিখ: ${new Date(o.createdAt).toLocaleString('bn-BD')}</p>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  setupAddressSelectors();
  setupCheckout();
  setupAuth();
  renderUserState();
  renderMyOrders();
});
