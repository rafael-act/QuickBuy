import { Injectable, Inject } from "@angular/core" //para criação de classe e injeção - Inject e pra pegar o endereco do site
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs"// biblioteca pra programacao reativa
import { Usuario } from "../../model/usuario";

@Injectable({
  providedIn: "root"
})

export class UsuarioServico {

  private baseUrl: string;
  private _usuario: Usuario;

  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  get usuario(): Usuario {
    let usuario_json = sessionStorage.getItem("usuario-autenticado");
    this._usuario = JSON.parse(usuario_json);
    return this._usuario;
  }
  set usuario(usuario: Usuario) {
    sessionStorage.setItem("usuario-autenticado", JSON.stringify(usuario));
    this._usuario = usuario;
  }

  public usuario_autenticado(): boolean {
    return this._usuario != null && this._usuario.email != "" && this._usuario.senha != "";
  }

  public usuario_administrador(): boolean {
    return this.usuario_autenticado() && this.usuario.ehAdministrador;
  }

  public limpar_sessao() {
    sessionStorage.setItem("usuario-autenticado", "");
    this._usuario = null;
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public verificarUsuario(usuario: Usuario): Observable<Usuario> {
    var body = {
      email: usuario.email,
      senha: usuario.senha
    }

    //this.baseUrl = raiz do site que pode ser exemplo.: http://www.quickbuy.com
    return this.http.post<Usuario>(this.baseUrl + "api/usuario/VerificarUsuario", body, { headers: this.headers });
  }

  public cadastrarUsuario(usuario: Usuario): Observable<Usuario> {
    var body = {
      email: usuario.email,
      senha: usuario.senha,
      nome: usuario.nome,
      sobreNome: usuario.sobreNome
    }

    return this.http.post<Usuario>(this.baseUrl + "api/usuario", body, { headers: this.headers })
  }
}
