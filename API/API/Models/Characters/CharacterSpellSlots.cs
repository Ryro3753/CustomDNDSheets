using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    [Table("CharacterSpellSlots")]
    public class CharacterSpellSlots
    {
        [Key]
        [Required]
        public int Ref { get; set; }
        public string CharacterRef { get; set; }
        public bool UsedSlots { get; set; }
        public int SlotOne { get; set; }
        public int SlotTwo { get; set; }
        public int SlotThree { get; set; }
        public int SlotFour { get; set; }
        public int SlotFive { get; set; }
        public int SlotSix { get; set; }
        public int SlotSeven { get; set; }
        public int SlotEight { get; set; }
        public int SlotNine { get; set; }


    }
}
