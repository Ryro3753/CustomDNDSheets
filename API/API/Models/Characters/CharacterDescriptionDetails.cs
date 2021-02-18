using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    [Table("CharacterDescriptionDetails")]
    public class CharacterDescriptionDetails
    {
        public int CharacterRef { get; set; }
        public string PersonalityTraits { get; set; }
        public string Ideals { get; set; }
        public string Bonds { get; set; }
        public string Flaws { get; set; }
        public string Allies { get; set; }
        public string Backstory { get; set; }
        public string Alignment { get; set; }


    }
}
