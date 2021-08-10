using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Repositorio.Config
{
    public class UsuarioConfiguration : IEntityTypeConfiguration<Usuario>
    {
        public void Configure(EntityTypeBuilder<Usuario> builder)
        {
            builder.HasKey(p => p.Id);
            builder.Property(u => u.Email)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(u => u.Senha)
                .IsRequired()
                .HasMaxLength(400);

            builder.Property(u => u.Nome).IsRequired()
                .HasMaxLength(50)
                .HasColumnType("nvarchar");

            builder.Property(u => u.Sobrenome).IsRequired()
               .HasMaxLength(50)
               .HasColumnType("nvarchar");

            builder.Property(u => u.Senha);

            builder.HasMany(u => u.Pedidos)
                .WithOne(p => p.Usuario);//acesso a propriedades do pedido;
        }
    }
}
