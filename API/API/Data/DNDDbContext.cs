using API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data
{
    public class DNDDbContext : DbContext
    {
        public DbSet<Character> Character { get; set; }
        public DbSet<CharacterApperance> CharacterApperance { get; set; }
        public DbSet<CharacterDescriptionDetails> CharacterDescriptionDetails { get; set; }
        public DbSet<CharacterEquipments> CharacterEquipments { get; set; }
        public DbSet<CharacterMainStats> CharacterMainStats { get; set; }
        public DbSet<CharacterMoney> CharacterMoney { get; set; }
        public DbSet<CharacterSavingThrows> CharacterSavingThrows { get; set; }
        public DNDDbContext(DbContextOptions<DNDDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        public override int SaveChanges()
        {
            ChangeTracker.DetectChanges();
            return base.SaveChanges();
        }

    }
}
