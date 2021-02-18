using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    [Table("Character")]
    public class Character
    {
        [Key]
        [Required]
        public int Ref { get; set; }

        public string CharacterName { get; set; }
        public string Class { get; set; }
        public string Race { get; set; }

    }
}
