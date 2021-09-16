import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router";
import { Produto } from "../model/produto"
import { ProdutoServico } from "../servicos/produto/produto.servico"


@Component({
  selector: "app-produto",//nomedatag
  templateUrl: "./produto.component.html",
  styleUrls: ["./produto.component.css"]
})

export class ProdutoComponent implements OnInit {//nome das classes começando com maiusculo para convencao PascalCase

  public produto: Produto
  public arquivoSelecionado: File;
  public ativar_spinner: boolean;
  public mensagem: string;

  constructor(private produtoServico: ProdutoServico,private router: Router) {

  }

  ngOnInit(): void {
    this.produto = new Produto();
  }

  public cadastrar() {
    this.ativarEspera();
    this.produtoServico.cadastrar(this.produto)
      .subscribe(
        produtoJson => {
          console.log(produtoJson);
          this.desativarEspera();
          this.router.navigate(['/pesquisar-produto']);
        },
        e => {
          console.log(e.error);
          this.mensagem = e.error;
          this.desativarEspera();
        }
      )
  }

  public ativarEspera() {
    this.ativar_spinner = true;
  }
  public desativarEspera() {
    this.ativar_spinner = false;
  }

  public inputChange(files: FileList) {
    //upload de arquivo
    this.ativar_spinner = true;
    this.arquivoSelecionado = files.item(0);
    this.produtoServico.enviarArquivo(this.arquivoSelecionado)
      .subscribe(
        nomeArquivo => {
          this.produto.nomeArquivo = nomeArquivo;
          console.log(nomeArquivo);
          this.ativar_spinner = false;
        },
        err => {
          console.log(err.error);
          this.ativar_spinner = false;
        }
      );
  }
}
