/*
  # Restaurant Reservation System Database Schema

  1. New Tables
    - `reservations`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `guests` (integer)
      - `date` (date)
      - `time` (time)
      - `status` (text, default 'pending')
      - `special_requests` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `restaurant_tables`
      - `id` (uuid, primary key)
      - `table_number` (integer, unique)
      - `capacity` (integer)
      - `is_available` (boolean, default true)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public access to create reservations
    - Add policies for public access to read reservations
    - Add policies for authenticated users (admin) to manage all data
*/

-- Create reservations table
CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  guests integer NOT NULL CHECK (guests > 0 AND guests <= 20),
  date date NOT NULL,
  time time NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  special_requests text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create restaurant_tables table
CREATE TABLE IF NOT EXISTS restaurant_tables (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  table_number integer UNIQUE NOT NULL,
  capacity integer NOT NULL CHECK (capacity > 0),
  is_available boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE restaurant_tables ENABLE ROW LEVEL SECURITY;

-- Policies for reservations table
CREATE POLICY "Anyone can create reservations"
  ON reservations
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can read their own reservations"
  ON reservations
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Admin can manage all reservations"
  ON reservations
  FOR ALL
  TO authenticated
  USING (true);

-- Policies for restaurant_tables table
CREATE POLICY "Anyone can read restaurant tables"
  ON restaurant_tables
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Admin can manage all tables"
  ON restaurant_tables
  FOR ALL
  TO authenticated
  USING (true);

-- Insert some sample tables
INSERT INTO restaurant_tables (table_number, capacity) VALUES
  (1, 2),
  (2, 2),
  (3, 4),
  (4, 4),
  (5, 6),
  (6, 6),
  (7, 8),
  (8, 8),
  (9, 10),
  (10, 12)
ON CONFLICT (table_number) DO NOTHING;

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for reservations table
DROP TRIGGER IF EXISTS update_reservations_updated_at ON reservations;
CREATE TRIGGER update_reservations_updated_at
  BEFORE UPDATE ON reservations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();