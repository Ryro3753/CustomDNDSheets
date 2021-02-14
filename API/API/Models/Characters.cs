using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Sqlite;

namespace API.Models
{
    [Table("Characters")]
    public class Characters
    {
        [Key]
        [Required]
        public int Key { get; set; }

        public string Name { get; set; }
    }
}
