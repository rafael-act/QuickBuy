import { Component } from "@angular/core";
import { Usuario } from "../../model/usuario";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls:["./login.component.css"]
})
export class LoginComponent {
  public usuario;
  public usuarioAutenticado: boolean;
  public usuarios = ["usuario1", "usuario2", "usuario3", "usuario4", "usuario5",]


  constructor() {
    this.usuario = new Usuario();
  }
  
  entrar() {
    if (this.usuario.email=="rafael.actt@gmail.com" && this.usuario.senha=="123") {
      this.usuarioAutenticado = true;
    }
  }

  on_keypress(): void {
    alert('foi digitado no campo de email');
  }
}
