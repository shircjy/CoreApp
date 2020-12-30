﻿using System;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class LayoutObject
    {
        [Key]
        public Guid LayoutObjId { get; set; }
        [Required]
        public Layout LayoutId { get; set; }
        public Lot LotId { get; set; }
        public Rack RackId { get; set; }
        public Restricted RestrictedId { get; set; }
        [Required]
        public bool IsActive { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public string CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
    }
}
