import { Injectable } from '@angular/core';
import { RoomConfig } from '../room';
import { HttpClient, HttpParams } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  rooms$ = this.http.get<RoomConfig[]>('/api/v1/hotel-inventory').pipe(
    shareReplay(1)
  );

  // roomList : RoomConfig[] = [
  //   {
  //     roomNumber: 1,
  //     roomType: "Deluxe",
  //     amenities: "Air Conditioner, TV, Kitchen, Free Wi-Fi",
  //     price: 200,
  //     photos: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fHww",
  //     checkInTime: new Date('11-Mar-2024'),
  //     checkOutTime: new Date('13-Mar-2024')
  //   },
  //   {
  //     roomNumber: 2,
  //     roomType: "Deluxe",
  //     amenities: "Air Conditioner, TV, Kitchen, Free Wi-Fi",
  //     price: 300,
  //     photos: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fHww",
  //     checkInTime: new Date('11-Mar-2024'),
  //     checkOutTime: new Date('13-Mar-2024')
  //   },
  //   {
  //     roomNumber: 3,
  //     roomType: "Private Suite",
  //     amenities: "Air Conditioner, TV, Kitchen, Free Wi-Fi",
  //     price: 500,
  //     photos: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fHww",
  //     checkInTime: new Date('11-Mar-2024'),
  //     checkOutTime: new Date('13-Mar-2024')
  //   }
  // ]

  constructor(private http: HttpClient) {
    console.log(`Rooms Service Initialized`);
   }

  getRooms() {
    return this.http.get<RoomConfig[]>('/api/v1/hotel-inventory');
  }

  addRoom(room: RoomConfig) {
    return this.http.post('/api/v1/hotel-inventory', room);
  }

  updateRoom(room: RoomConfig) {
    return this.http.put('/api/v1/hotel-inventory', room);
  }

  deleteRoom(roomNumber: number) {
    const params = new HttpParams().set('roomNumber', roomNumber);

    return this.http.delete('/api/v1/hotel-inventory', {params});
  }
}
