using QuickBuy.Dominio.Entidades;
using QuickBuy.Dominio.Contratos;
using System;
using System.Collections.Generic;
using System.Text;
using QuickBuy.Repositorio.Contexto;

namespace QuickBuy.Repositorio.Repositorios
{
    public class ProdutoRepositorio : BaseRepositorio<Produto>, IProdutoRepositorio
    {

        public ProdutoRepositorio(QuickBuyContexto quickBuyContexto) : base(quickBuyContexto)
        {
        }

        public void Adicionar(Produto entity)
        {
            QuickBuyContexto.Produtos.Add(entity);
            QuickBuyContexto.SaveChanges();
            return;
        }

        public void Atualizar(Produto entity)
        {
            throw new NotImplementedException();
        }

        public void Remover(Produto entity)
        {
            QuickBuyContexto.Produtos.Remove(entity);
            QuickBuyContexto.SaveChanges();
            return;
        }

        Produto IBaseRepositorio<Produto>.ObterPorId(int id)
        {
            throw new NotImplementedException();
        }

        IEnumerable<Produto> IBaseRepositorio<Produto>.ObterTodos()
        {
            return QuickBuyContexto.Produtos;
        }
    }
}
