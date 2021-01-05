using System;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class Tag
    {
        [Key]
        public string TagId { get; set; }
        [Required]
        public bool IsForklift { get; set; }
        [Required]
        public bool isAssigned { get; set; }
        public Forklift ForkliftId { get; set; }
        public Cargo CargoId { get; set; }
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