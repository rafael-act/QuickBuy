import { Component,OnInit} from "@angular/core"
import { Produto } from "../../model/produto";
import { LojaCarrinhoCompras } from "../carrinho-compras/loja.carrinho.compras"

@Component({
  selector: "loja-efetivar",//nomedatag
  templateUrl: "./loja.efetivar.component.html",
  styleUrls: ["./loja.efetivar.component.css"]
})

export class LojaEfetivarComponent implements OnInit {
  public carrinhoCompras: LojaCarrinhoCompras
  public produtos: Produto[];

  ngOnInit(): void {
    this.carrinhoCompras = new LojaCarrinhoCompras();
    this.produtos = this.carrinhoCompras.obterProdutos();
    }


}
