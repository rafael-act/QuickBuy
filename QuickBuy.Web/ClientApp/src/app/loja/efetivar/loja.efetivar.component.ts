import { Component, OnInit } from "@angular/core"
import { forEach } from "@angular/router/src/utils/collection";
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
  public total: number;

  ngOnInit(): void {
    this.carrinhoCompras = new LojaCarrinhoCompras();
    this.produtos = this.carrinhoCompras.obterProdutos();
    this.atualizarTotal();
  }

  public atualizarpreco(produto: Produto, quantidade: number) {
    if (!produto.precoOriginal) {
      produto.precoOriginal = produto.preco;
    }
    if (quantidade <= 0) {
      quantidade = 1;
      produto.quantidade = quantidade;
    }
    produto.preco = produto.precoOriginal * quantidade;
    this.carrinhoCompras.atualizar(this.produtos);
    this.atualizarTotal();
  }

  public remover(produto: Produto) {
    this.carrinhoCompras.removerProduto(produto);
    this.produtos = this.carrinhoCompras.obterProdutos();
    this.atualizarTotal();
  }

  public atualizarTotal() {
    this.total =this.produtos.reduce((acumulador, produto) => acumulador + produto.preco, 0);//reduce percorre todos os elementos dessa lista
  }

  public efetivarCompra() {

  }
}
