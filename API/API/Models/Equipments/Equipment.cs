using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models.Equipments
{
    [Table("Equipment")]
    public class Equipment
    {
        [Key]
        [Required]
        public int Ref { get; set; }
        public string EquipmentName { get; set; }
        public string Description { get; set; }
        public int Cost { get; set; }
        public int HasIcon { get; set; }
    }
}
