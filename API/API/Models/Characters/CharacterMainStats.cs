using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    [Table("CharacterMainStats")]
    public class CharacterMainStats
    {
        [Key]
        [Required]
        public int Ref { get; set; }
        public int CharacterRef { get; set; }
        public int Speed { get; set; }
        public int Armor { get; set; }
        public int Initiative { get; set; }
        public int Profiency { get; set; }
        public bool Inspiration { get; set; }
        public int Health { get; set; }
        public int MaxHealth { get; set; }
        public int Experience { get; set; }
        public int TempHealth { get; set; }
    }
}
