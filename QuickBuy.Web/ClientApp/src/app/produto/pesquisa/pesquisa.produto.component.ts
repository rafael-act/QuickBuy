import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Produto } from "../../model/produto";
import { ProdutoServico } from "../../servicos/produto/produto.servico";

@Component({
  selector: "pesquisa-produto",//nomedatag
  templateUrl: "./pesquisa.produto.component.html",
  styleUrls: ["./pesquisa.produto.component.css"]
})

export class PesquisaProdutoComponent implements OnInit {

  public produtos: Produto[];

  ngOnInit(): void {
  }

  constructor(private produtoServico: ProdutoServico, private router: Router) {
    this.produtoServico.obterTodosProdutos()
      .subscribe(
        produtos => {
          this.produtos = produtos
        },
        e => {
          console.log(e.error)
        }
      );
  }

  public adicionarproduto() {
    this.router.navigate(['/produto']);
  }

  public deletarproduto(produto: Produto) {
    var retorno = confirm("Deseja realmente deletar o produto selecionado?");
    if (retorno == true) {
      this.produtoServico.deletar(produto)
        .subscribe(
          produtos => {
            this.produtos=produtos;
          },
          e => {
            console.log(e.error);
          });
    }
  }
}
