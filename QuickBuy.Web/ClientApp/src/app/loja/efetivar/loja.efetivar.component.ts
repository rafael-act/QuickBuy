
import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router";
import { forEach } from "@angular/router/src/utils/collection";
import { ItemPedido } from "../../model/itempedido";
import { Pedido } from "../../model/pedido - Cópia";
import { Produto } from "../../model/produto";
import { PedidoServico } from "../../servicos/pedido/pedido.servico";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";
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

  constructor(private usuarioServico: UsuarioServico, private pedidoServico: PedidoServico, private router: Router) {

  }

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
    this.total = this.produtos.reduce((acumulador, produto) => acumulador + produto.preco, 0);//reduce percorre todos os elementos dessa lista
  }

  public efetivarCompra() {
    this.pedidoServico.efetivarCompra(this.criarPedido())
      .subscribe(
        pedidoId => {
          sessionStorage.setItem("pedidoId", pedidoId.toString());
          this.produtos = [];
          this.carrinhoCompras.limparCarrinhoCompras();
          //redirecionar para outra pagina
          this.router.navigate(["/compra-realizada-sucesso"]);
        },
        err => {
          console.log(err.error);
        }
      );

  }

  public criarPedido(): Pedido {
    let pedido = new Pedido();
    pedido.usuarioId = this.usuarioServico.usuario.id;
    pedido.cep = "123456";
    pedido.cidade = "townsville";
    //pedido.dataPedido = new Date();
    pedido.estado = "MG";
    pedido.dataPrevisaoEntrega = new Date();
    pedido.formaPagamentoId = 1;
    pedido.numeroEndereco = 12;
    pedido.enderecoCompleto = "completo";
    this.produtos = this.carrinhoCompras.obterProdutos();

    for (let produto of this.produtos) {
      let itemPedido = new ItemPedido();
      itemPedido.produtoId = produto.id;
      itemPedido.quantidade = produto.quantidade;
      if (!produto.quantidade) {
        produto.quantidade = 1;
      }

      pedido.itensPedido.push(itemPedido);
    }
  }
}
