// Mock data for local development
export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  special_requests: string;
  created_at: string;
  updated_at: string;
}

export interface RestaurantTable {
  id: string;
  table_number: number;
  capacity: number;
  is_available: boolean;
  created_at: string;
}

// Mock reservations data
export const mockReservations: Reservation[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91 9876543210',
    guests: 4,
    date: '2024-01-15',
    time: '19:00',
    status: 'pending',
    special_requests: 'Window seat preferred',
    created_at: '2024-01-10T10:00:00Z',
    updated_at: '2024-01-10T10:00:00Z'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+91 9876543211',
    guests: 2,
    date: '2024-01-16',
    time: '20:00',
    status: 'confirmed',
    special_requests: 'Anniversary celebration',
    created_at: '2024-01-11T14:30:00Z',
    updated_at: '2024-01-11T14:30:00Z'
  }
];

// Mock tables data
export const mockTables: RestaurantTable[] = [
  { id: '1', table_number: 1, capacity: 2, is_available: true, created_at: '2024-01-01T00:00:00Z' },
  { id: '2', table_number: 2, capacity: 2, is_available: true, created_at: '2024-01-01T00:00:00Z' },
  { id: '3', table_number: 3, capacity: 4, is_available: true, created_at: '2024-01-01T00:00:00Z' },
  { id: '4', table_number: 4, capacity: 4, is_available: false, created_at: '2024-01-01T00:00:00Z' },
  { id: '5', table_number: 5, capacity: 6, is_available: true, created_at: '2024-01-01T00:00:00Z' }
];

// Mock API functions
export const mockApi = {
  // Get all reservations
  getReservations: async (): Promise<{ data: Reservation[]; error: null }> => {
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
    return { data: [...mockReservations], error: null };
  },

  // Create a new reservation
  createReservation: async (reservation: Omit<Reservation, 'id' | 'created_at' | 'updated_at'>): Promise<{ data: Reservation; error: null }> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const newReservation: Reservation = {
      ...reservation,
      id: Math.random().toString(36).substr(2, 9),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    mockReservations.push(newReservation);
    return { data: newReservation, error: null };
  },

  // Update reservation status
  updateReservationStatus: async (id: string, status: 'confirmed' | 'cancelled'): Promise<{ data: Reservation; error: null }> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const reservation = mockReservations.find(r => r.id === id);
    if (reservation) {
      reservation.status = status;
      reservation.updated_at = new Date().toISOString();
      return { data: reservation, error: null };
    }
    throw new Error('Reservation not found');
  },

  // Get all tables
  getTables: async (): Promise<{ data: RestaurantTable[]; error: null }> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return { data: [...mockTables], error: null };
  }
};