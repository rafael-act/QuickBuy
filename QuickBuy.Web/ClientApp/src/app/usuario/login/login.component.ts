import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../model/usuario";
import { ActivatedRoute, Router } from "@angular/router";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public usuario;
  public usuarioAutenticado: boolean;
  public usuarios = ["usuario1", "usuario2", "usuario3", "usuario4", "usuario5",]
  public returnUrl: string;
  public mensagem: string;
  public enderecoImagem: string;
  public titulo: string;
  public ativar_spinner: boolean;


  constructor(private router: Router, private activatedRouter: ActivatedRoute,
    private usuarioServico: UsuarioServico) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
    this.titulo = "Imagem padrão do site";
    this.enderecoImagem = "../../../assets/img/quick_buy_logo.jpg";
    this.ativar_spinner = false;
  }

  entrar() {
    this.ativar_spinner = true;
    this.usuarioServico.verificarUsuario(this.usuario)
      .subscribe(
        //tratamento do retorno do serviço
        usuario_json => {
          var usuarioRetorno: Usuario;
          //usuarioRetorno = data;
          //sessionStorage.setItem("usuario-autenticado", "1");
          //sessionStorage.setItem("email-usuario", usuarioRetorno.email);
          this.usuarioServico.usuario = usuario_json;
          if (this.returnUrl == null) {
            this.router.navigate(['/']);
          } else {
            this.router.navigate([this.returnUrl]);
          }
        },
        err => {
          console.log(err.error);
          this.mensagem = err.error;
          this.ativar_spinner = false;
        }
      );
    //if (this.usuario.email == "rafael.actt@gmail.com" && this.usuario.senha == "123") {
    //  //this.usuarioAutenticado = true;
    //  //localStorage.setItem("usuario-autenticado", "1");//armazena no navegador por tempo indeterminado
    //  sessionStorage.setItem("usuario-autenticado", "1");
    //  this.router.navigate([this.returnUrl]);
    //}
  }

  on_keypress(): void {
    alert('foi digitado no campo de email');
  }
}
