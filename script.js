function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



const checkbox = document.getElementById('checkbox');
      const body = document.body;

      checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
          body.classList.add('dark-mode');
        } else {
          body.classList.remove('dark-mode');
        }
      });
