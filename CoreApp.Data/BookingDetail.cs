using System;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class BookingDetail
    {
        [Key]
        public Guid BookingDetailId { get; set; }
        [Required]
        public Booking BookingId { get; set; }
        [Required]
        public string BookingName { get; set; }
        [Required]
        public DateTime BookingCreated { get; set; }
        [Required]
        public string BookingStatus { get; set; }
        [Required]
        public BookingSlot BookingSlotId { get; set; }
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
