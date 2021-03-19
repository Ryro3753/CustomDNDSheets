using API.Data;
using API.Models;
using API.Models.Equipments;
using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public interface IWorksHowService
    {
    }
    public class WorksHowService : IWorksHowService
    {
        private readonly DNDDbContext _context;

        public WorksHowService(DNDDbContext context)
        {
            _context = context;
        }

        public IEnumerable<WorksHow> GetWorksHows()
        {
            return _context.WorksHow.OrderBy(i => i.Ref);
        }

    }
}
