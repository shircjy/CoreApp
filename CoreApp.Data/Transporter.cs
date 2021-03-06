using System;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class Transporter
    {
        [Key]
        public Guid TransporterId { get; set; }
        [Required]
        public User UserId { get; set; }
        [Required]
        public string PassNum { get; set; }
        [Required]
        public string Company { get; set; }
        [Required]
        public string VehicleNo { get; set; }
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
