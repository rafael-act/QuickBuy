﻿using QuickBuy.Dominio.Entidades;
using QuickBuy.Dominio.Contratos;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Repositorio.Repositorios
{
    public class ProdutoRepositorio : BaseRepositorio<Usuario>, IUsuarioRepositorio
    {
        public void Adicionar(Usuario entity)
        {
            throw new NotImplementedException();
        }

        public void Atualizar(Usuario entity)
        {
            throw new NotImplementedException();
        }

        public void Remover(Usuario entity)
        {
            throw new NotImplementedException();
        }

        Usuario IBaseRepositorio<Usuario>.ObterPorId(int id)
        {
            throw new NotImplementedException();
        }

        IEnumerable<Usuario> IBaseRepositorio<Usuario>.ObterTodos()
        {
            throw new NotImplementedException();
        }
    }
}
