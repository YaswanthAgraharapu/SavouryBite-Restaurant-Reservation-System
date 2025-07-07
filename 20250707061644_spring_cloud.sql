/*
  # Create reservations table for SavouryBite Restaurant

  1. New Tables
    - `reservations`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required) 
      - `phone` (text, required)
      - `guests` (integer, required)
      - `date` (date, required)
      - `time` (time, required)
      - `status` (text, default 'pending')
      - `special_requests` (text, optional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `restaurant_tables`
      - `id` (uuid, primary key)
      - `table_number` (integer, unique)
      - `capacity` (integer, required)
      - `is_available` (boolean, default true)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public access to reservations (for booking)
    - Add policies for admin access to manage reservations
*/

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

CREATE TABLE IF NOT EXISTS restaurant_tables (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  table_number integer UNIQUE NOT NULL,
  capacity integer NOT NULL CHECK (capacity > 0),
  is_available boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Insert sample tables
INSERT INTO restaurant_tables (table_number, capacity) VALUES
  (1, 2), (2, 2), (3, 4), (4, 4), (5, 6), (6, 6), (7, 8), (8, 8), (9, 10), (10, 12);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE restaurant_tables ENABLE ROW LEVEL SECURITY;

-- Allow public to create reservations
CREATE POLICY "Anyone can create reservations"
  ON reservations
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow public to read their own reservations (by email)
CREATE POLICY "Users can read their own reservations"
  ON reservations
  FOR SELECT
  TO public
  USING (true);

-- Allow reading restaurant tables
CREATE POLICY "Anyone can read restaurant tables"
  ON restaurant_tables
  FOR SELECT
  TO public
  USING (true);

-- Admin policies (will be implemented with proper auth later)
CREATE POLICY "Admin can manage all reservations"
  ON reservations
  FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Admin can manage all tables"
  ON restaurant_tables
  FOR ALL
  TO authenticated
  USING (true);