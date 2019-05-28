using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HELPS.Models
{
    public class Workshop
    {
        public int Id { get; set; }
        public string StartTime { get; set; }
        public int Duration { get; set; }
        public string RoomId { get; set; }
        public string Title { get; set; }
        public int CutOff { get; set; }
        public int Maximum { get; set; }
        public string TargetGroup { get; set; }
        public string Description { get; set; }
        public int AvailablePlaces { get; set; }
    }
}
