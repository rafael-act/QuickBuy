import { Component, OnInit } from "@angular/core"
import { ProdutoServico } from "../../servicos/produto/produto.servico";
import { Produto } from "../../model/produto";

@Component({
  selector: "loja-app-produto",//nomedatag
  templateUrl: "./loja.produto.component.html",
  styleUrls: ["./loja.produto.component.css"]
})


export class LojaProdutoComponent implements OnInit {
  private produto: Produto;
  ngOnInit(): void {
    var produtoDetalhe = sessionStorage.getItem('ProdutoDetalhe');
    if (produtoDetalhe) {
      this.produto = JSON.parse(produtoDetalhe);
    }
  }

  constructor(private produtoServico: ProdutoServico) {

  }


}
