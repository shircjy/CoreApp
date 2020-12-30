using System;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class BookingSlot
    {
        [Key]
        public Guid BookingSlotId { get; set; }
        [Required]
        public int SlotAvail { get; set; }
        [Required]
        public DateTime SlotDate { get; set; }
        [Required]
        public DateTime SlotTime { get; set; }
        [Required]
        public string SlotBooking { get; set; }
        [Required]
        public Booking BookingId { get; set; }
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
