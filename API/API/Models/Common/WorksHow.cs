﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    [Table("WorksHow")]
    public class WorksHow
    {
        [Key]
        [Required]
        public int Ref { get; set; }
        public string Key { get; set; }
        public string Description { get; set; }


    }
}
