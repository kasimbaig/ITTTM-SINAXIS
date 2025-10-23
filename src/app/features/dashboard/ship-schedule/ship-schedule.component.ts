import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MaintenanceEvent {
  type: string;
  startDate: Date;
  duration: number; // days
  color: string;
  label: string;
  icon: string;
}

interface Ship {
  id: string;
  name: string;
  type: string;
  avatar: string;
  maintenanceEvents: MaintenanceEvent[];
}

@Component({
  selector: 'app-ship-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ship-schedule.component.html',
  styleUrl: './ship-schedule.component.scss'
})
export class ShipScheduleComponent implements OnInit {
  ships: Ship[] = [];
  dateHeaders: Date[] = [];
  startDate: Date = new Date(2025, 6, 23); // July 23, 2025
  dayCount: number = 7;

  ngOnInit(): void {
    this.generateDateHeaders();
    this.loadShipsData();
  }

  generateDateHeaders(): void {
    this.dateHeaders = [];
    for (let i = 0; i < this.dayCount; i++) {
      const date = new Date(this.startDate);
      date.setDate(this.startDate.getDate() + i);
      this.dateHeaders.push(date);
    }
  }

  loadShipsData(): void {
    this.ships = [
      {
        id: '1',
        name: 'INS Chennai',
        type: 'Naval Vessel',
        avatar: 'C',
        maintenanceEvents: [
          {
            type: 'Medium Refit',
            startDate: new Date(2025, 6, 23),
            duration: 5,
            color: '#F59E0B',
            label: 'Medium Refit - INS Chennai',
            icon: 'wrench'
          }
        ]
      },
      {
        id: '2',
        name: 'INS Kamorta',
        type: 'Naval Vessel',
        avatar: 'K',
        maintenanceEvents: [
          {
            type: 'Docking',
            startDate: new Date(2025, 6, 24),
            duration: 2,
            color: '#3B82F6',
            label: 'Docking',
            icon: 'anchor'
          }
        ]
      },
      {
        id: '3',
        name: 'INS Kochi',
        type: 'Naval Vessel',
        avatar: 'K',
        maintenanceEvents: [
          {
            type: 'Minor Re',
            startDate: new Date(2025, 6, 24),
            duration: 1,
            color: '#A855F7',
            label: 'Minor Re',
            icon: 'tools'
          }
        ]
      },
      {
        id: '4',
        name: 'INS Kolkata',
        type: 'Naval Vessel',
        avatar: 'K',
        maintenanceEvents: [
          {
            type: 'Schedule',
            startDate: new Date(2025, 6, 25),
            duration: 2,
            color: '#14B8A6',
            label: 'Schedule',
            icon: 'calendar'
          }
        ]
      },
      {
        id: '5',
        name: 'INS Mumbai',
        type: 'Naval Vessel',
        avatar: 'M',
        maintenanceEvents: [
          {
            type: 'Propulsion Overhaul',
            startDate: new Date(2025, 6, 26),
            duration: 2,
            color: '#8B5CF6',
            label: 'Propulsion Overhaul',
            icon: 'gear'
          }
        ]
      },
      {
        id: '6',
        name: 'INS Shivalik',
        type: 'Naval Vessel',
        avatar: 'S',
        maintenanceEvents: [
          {
            type: 'Short Refit',
            startDate: new Date(2025, 6, 25),
            duration: 1,
            color: '#10B981',
            label: 'Short Refit',
            icon: 'screwdriver'
          }
        ]
      },
      {
        id: '7',
        name: 'INS Vikramaditya',
        type: 'Naval Vessel',
        avatar: 'V',
        maintenanceEvents: [
          {
            type: 'Long Refit',
            startDate: new Date(2025, 6, 25),
            duration: 5,
            color: '#EF4444',
            label: 'Long Refit - INS Vikramaditya',
            icon: 'hammer'
          }
        ]
      },
      {
        id: '8',
        name: 'INS Vikrant',
        type: 'Naval Vessel',
        avatar: 'V',
        maintenanceEvents: [
          {
            type: 'Major Refit',
            startDate: new Date(2025, 6, 23),
            duration: 3,
            color: '#F97316',
            label: 'Major Refit - INS Vikrant',
            icon: 'industry'
          }
        ]
      }
    ];
  }

  getEventPosition(event: MaintenanceEvent): { left: string; width: string } {
    const daysDiff = Math.floor(
      (event.startDate.getTime() - this.startDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    const left = (daysDiff / this.dayCount) * 100;
    const width = (event.duration / this.dayCount) * 100;
    
    return {
      left: `${left}%`,
      width: `${width}%`
    };
  }

  formatDate(date: Date): string {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
  }
}
