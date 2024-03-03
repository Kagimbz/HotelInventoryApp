export interface RoomInfo {
    totalRooms?: number,
    availableRooms: number,
    bookedRooms?: number
}


export interface RoomConfig {
    roomNumber: number,
    roomType: string,
    amenities: string,
    price: number,
    photos: string,
    checkInTime: Date,
    checkOutTime: Date
}