import { Injectable, Inject, OnInit } from "@angular/core" //para criação de classe e injeção - Inject e pra pegar o endereco do site
import { HttpClient, HttpHeaders } from "@angular/common/http";//pra fazer as requisições web
import { Observable } from "rxjs"// biblioteca pra programacao reativa
import { Produto } from "../../model/produto"

@Injectable({
  providedIn: "root"
})

export class ProdutoServico implements OnInit{ 
  private _baseUrl: string;//para pegar o endereço raiz do site
  private produtos: Produto[];

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }
    ngOnInit(): void {
      this.produtos = [];
    }

  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  public cadastrar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this._baseUrl + "api/produto/cadastrar", JSON.stringify(produto), { headers: this.headers });
  }

  public salvar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this._baseUrl + "api/produto/salvar", JSON.stringify(produto), { headers: this.headers });
  }

  public deletar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this._baseUrl + "api/produto/deletar", JSON.stringify(produto), { headers: this.headers });
  }

  public obterTodosProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this._baseUrl + "api/produto");
  }

  public obterProduto(produtoId): Observable<Produto> {
    return this.http.get<Produto>(this._baseUrl + "api/produto");
  }
}
