import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../modelo/usuario";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";

@Component({
  selector: "cadastro-usuario",
  templateUrl: "./cadastro.usuario.component.html",
  styles: ["./cadastro.usuario.component.css"]
})

export class CadastroUsuarioComponent implements OnInit {
  public usuario: Usuario;
  
  constructor(private usuarioServico: UsuarioServico) {

  }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }
}
