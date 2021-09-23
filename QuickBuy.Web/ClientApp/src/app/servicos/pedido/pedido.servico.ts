import { Injectable, Inject, OnInit } from "@angular/core" //para criação de classe e injeção - Inject e pra pegar o endereco do site
import { HttpClient, HttpHeaders } from "@angular/common/http";//pra fazer as requisições web
import { Observable } from "rxjs"// biblioteca pra programacao reativa
import { Pedido } from "../../model/pedido"

@Injectable({
  providedIn: 'root'
})

export class PedidoServico {
  public _baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  public efetivarCompra(pedido: Pedido): Observable<number> {
    return this.http.post<number>(this._baseUrl + "api/pedido", JSON.stringify(pedido), { headers: this.headers });
  }
}
