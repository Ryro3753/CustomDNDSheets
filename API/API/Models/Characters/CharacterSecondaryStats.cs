using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    [Table("CharacterStats")]
    public class CharacterStats
    {
        [Key]
        [Required]
        public int Ref { get; set; }
        public int CharacterRef { get; set; }
        public int Strength { get; set; }
        public int Dexterity { get; set; }
        public int Constitution { get; set; }
        public int Intelligence { get; set; }
        public int Wisdom { get; set; }
        public int Charisma { get; set; }
        public int Speed { get; set; }
        public int Armor { get; set; }
        public int Initiative { get; set; }
    }
}
