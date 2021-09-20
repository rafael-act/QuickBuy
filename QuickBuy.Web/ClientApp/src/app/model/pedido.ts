import { ItemPedido } from "./itempedido";

export class Pedido{
  public id: number;
  public dataPedido: Date;
  public usuarioId: number;
  public dataPrevisaoEntrega: Date;
  public cep: string;
  public estado: string;
  public cidade: string;
  public enderecoCompleto: string;
  public numeroEndereco: string;
  public formaPagamentoId: string;

  public itenspedido: ItemPedido[]

  constructor() {
    this.itenspedido = [];
    this.dataPedido = new Date();
  } 
}
