import { createClient } from '@supabase/supabase-js';
import { mockApi } from './mockData';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if Supabase credentials are available
const hasSupabaseCredentials = supabaseUrl && supabaseAnonKey;

export const supabase = hasSupabaseCredentials 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Use mock API if Supabase is not configured
export const api = hasSupabaseCredentials ? {
  getReservations: async () => {
    const { data, error } = await supabase!
      .from('reservations')
      .select('*')
      .order('created_at', { ascending: false });
    return { data: data || [], error };
  },
  
  createReservation: async (reservation: any) => {
    const { data, error } = await supabase!
      .from('reservations')
      .insert([reservation])
      .select()
      .single();
    return { data, error };
  },
  
  updateReservationStatus: async (id: string, status: string) => {
    const { data, error } = await supabase!
      .from('reservations')
      .update({ status })
      .eq('id', id)
      .select()
      .single();
    return { data, error };
  },
  
  getTables: async () => {
    const { data, error } = await supabase!
      .from('restaurant_tables')
      .select('*')
      .order('table_number');
    return { data: data || [], error };
  }
} : mockApi;

export type Database = {
  public: {
    Tables: {
      reservations: {
        Row: {
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
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          phone: string;
          guests: number;
          date: string;
          time: string;
          status?: 'pending' | 'confirmed' | 'cancelled';
          special_requests?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          phone?: string;
          guests?: number;
          date?: string;
          time?: string;
          status?: 'pending' | 'confirmed' | 'cancelled';
          special_requests?: string;
        };
      };
      restaurant_tables: {
        Row: {
          id: string;
          table_number: number;
          capacity: number;
          is_available: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          table_number: number;
          capacity: number;
          is_available?: boolean;
        };
        Update: {
          id?: string;
          table_number?: number;
          capacity?: number;
          is_available?: boolean;
        };
      };
    };
  };
};