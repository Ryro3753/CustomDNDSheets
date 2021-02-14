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
        public DbSet<Characters> Characters { get; set; }
        public DNDDbContext(DbContextOptions<DNDDbContext> options) : base(options)
        {
        }



    }
}
