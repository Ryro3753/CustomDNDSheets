using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    [Table("CharacterSpells")]
    public class CharacterSpells
    {
        public int CharacterRef { get; set; }

        public int SpellRef { get; set; }

        public int Hit { get; set; }
        public int Damage { get; set; }
    }
}
