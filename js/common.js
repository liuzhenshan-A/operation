// 菜单配置
const menuConfig = [
  { id: "overview", name: "数据总览", icon: "📊", page: "overview.html" },
  { id: "premium", name: "保费概况", icon: "💰", page: "premium.html" },
  { id: "claims", name: "补医理赔", icon: "📋", page: "claims.html" },
  { id: "employer-claims", name: "雇主理赔", icon: "🏢", page: "employer-claims.html" },
  { id: "renewal", name: "续签汇总", icon: "🔄", page: "renewal.html" },
  { id: "renewal-data", name: "续签指标", icon: "📊", page: "renewal-data.html" },
  { id: "performance", name: "业绩达成", icon: "📈", page: "performance.html" },
];

// 渲染侧边栏菜单
function renderSidebar() {
  const sidebar = document.getElementById("sidebar-menu");
  if (!sidebar) return;

  const currentPage = window.location.pathname.split("/").pop();

  let html = '<div class="menu-group"><div class="menu-group-title">运营工作台</div>';
  menuConfig.forEach((item) => {
    const isActive = currentPage === item.page;
    html += `
      <a href="${item.page}" class="menu-item ${isActive ? "active" : ""}">
        <span class="menu-icon">${item.icon}</span>
        <span>${item.name}</span>
      </a>`;
  });
  html += "</div>";
  sidebar.innerHTML = html;
}

// 设置页面标题
function setPageTitle(title) {
  const header = document.getElementById("page-title");
  if (header) header.textContent = title;
}

// 问号提示初始化 - 使用CSS ::after方案
function initHelpIcons() {
  document.querySelectorAll('.help-icon').forEach(function(icon) {
    icon.style.cursor = 'help';
  });
}

// 重置表单
function resetForm() {
  document.querySelectorAll('.search-form select, .search-form input').forEach(function(el) {
    if (el.tagName === 'SELECT') {
      el.selectedIndex = 0;
    } else {
      el.value = '';
    }
  });
}

// 初始化
document.addEventListener("DOMContentLoaded", function() {
  renderSidebar();
  setTimeout(initHelpIcons, 200);
});
