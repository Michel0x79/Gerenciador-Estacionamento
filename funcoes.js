function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
      }

      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
      }
      openNav();

      // JavaScript para alternância de modo claro e escuro
      function toggleTheme() {
        const body = document.body;
        if (body.classList.contains("dark-theme")) {
          body.classList.remove("dark-theme");
          document.getElementById("themeButton").textContent = "Modo Escuro";
        } else {
          body.classList.add("dark-theme");
          document.getElementById("themeButton").textContent = "Modo Claro";
        }
      }

      function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        document.getElementById(
          "clock"
        ).textContent = `${hours}h ${minutes}m ${seconds}s`;
      }

      // Atualizar o relógio a cada segundo
      setInterval(updateClock, 1000);

      // Iniciar o relógio
      updateClock();