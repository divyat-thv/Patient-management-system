// ================================================
//  AYUSHMAN PATIENT MGMT — app.js (shared nav)
// ================================================

function initNav(activePage) {
  const user = Auth.getSession();
  if (!user) return;

  const root = location.pathname.includes('/pages/') ? '../' : './';

  const navItems = [
    { id: 'dashboard', icon: '🏠', label: 'Dashboard',       href: root + 'index.html' },
    { id: 'add',       icon: '➕', label: 'Add Patient',     href: root + 'pages/add-patient.html' },
    { id: 'patients',  icon: '👥', label: 'All Patients',    href: root + 'pages/all-patients.html' },
    { id: 'search',    icon: '🔍', label: 'Search Patient',  href: root + 'pages/search-patient.html' },
  ];

  // Topbar
  document.getElementById('topbarTitle').textContent = user.clinic || 'Ayushman';
  document.getElementById('topbarUser').textContent  = user.name || user.email;

  // Drawer
  const drawerNav = document.getElementById('drawerNav');
  const linksHTML = navItems.map(n => `
    <a href="${n.href}" class="drawer-link ${n.id === activePage ? 'active' : ''}">
      <span class="icon">${n.icon}</span> ${n.label}
    </a>
  `).join('');

  drawerNav.innerHTML = `
    <span class="drawer-section-label">Menu</span>
    ${linksHTML}
    <div class="drawer-logout">
      <button onclick="Auth.logout()">🚪 Logout (${escHtml(user.name || user.email)})</button>
    </div>
  `;

  // Hamburger toggle
  const btn     = document.getElementById('hamburgerBtn');
  const drawer  = document.getElementById('drawerNav');
  const overlay = document.getElementById('drawerOverlay');

  function openDrawer()  { drawer.classList.add('open');  overlay.classList.add('show'); }
  function closeDrawer() { drawer.classList.remove('open'); overlay.classList.remove('show'); }

  btn.addEventListener('click', () => drawer.classList.contains('open') ? closeDrawer() : openDrawer());
  overlay.addEventListener('click', closeDrawer);
}

function escHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

window.initNav = initNav;
window.escHtml = escHtml;
