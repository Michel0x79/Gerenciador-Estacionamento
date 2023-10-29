import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'carro-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'pega no meu pau';
  btnMode = 'Modo Escuro'
  isDark = false;
  clock = '';
  sidenavStyle = {};
  mainStyle = {};

 
  constructor() {
    this.openNav();
    setInterval(() => {this.updateClock(), 1000 });
  }

  openNav() {
    // document.getElementById("mySidenav")!.style.width = "250px";
    // document.getElementById("main")!.style.marginLeft = "250px";
    this.sidenavStyle = {
      'width' : '250px',
    }
    this.mainStyle = {
      'marginLeft' : '250px'
    }
  }
  closeNav() {
    // document.getElementById("mySidenav")!.style.width = "0";
    // document.getElementById("main")!.style.marginLeft = "0";
    this.sidenavStyle = {
      'width' : '0',
    }
    this.mainStyle = {
      'marginLeft' : '0'
    }
  }

  toggleTheme() {
    this.isDark = !this.isDark;
   
    this.isDark ? this.btnMode = 'Modo Claro' : this.btnMode = 'Modo Escuro';
    // const body = document.body;
    // if (body.classList.contains("dark-theme")) {
    //   body.classList.remove("dark-theme");
    //   document.getElementById("themeButton")!.textContent = "Modo Escuro";
    // } else {
    //   body.classList.add("dark-theme");
    //   document.getElementById("themeButton")!.textContent = "Modo Claro";
    // }
  }

  updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    this.clock = `${hours}h ${minutes}m ${seconds}s`;
    setInterval(this.updateClock, 1000);

  }

  // Atualizar o relógio a cada segundo
  // setInterval(updateClock, 1000);

  // // Iniciar o relógio
  // updateClock();
}
