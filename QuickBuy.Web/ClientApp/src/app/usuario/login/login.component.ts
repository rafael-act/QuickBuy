import { Component } from "@angular/core";
import { Usuario } from "../../model/usuario";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  public usuario;
  public usuarioAutenticado: boolean;
  public usuarios = ["usuario1", "usuario2", "usuario3", "usuario4", "usuario5",]


  constructor(private router:Router) {
    this.usuario = new Usuario();
  }

  entrar() {
    if (this.usuario.email == "rafael.actt@gmail.com" && this.usuario.senha == "123") {
      //this.usuarioAutenticado = true;
      //localStorage.setItem("usuario-autenticado", "1");//armazena no navegador por tempo indeterminado
      sessionStorage.setItem("usuario-autenticado", "1");
      this.router.navigate(['/']);
    }
  }

  on_keypress(): void {
    alert('foi digitado no campo de email');
  }
}
