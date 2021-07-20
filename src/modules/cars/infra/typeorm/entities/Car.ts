import { v4 as uuidv4 } from 'uuid';

class Car {
  id: string;

  name: string;

  description: string;

  daily_rate: number;

  available: boolean;

  license_plate: string;

  brand: string;

  category_id: string;

  created_at: Date;

  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.available = true;
      this.created_at = new Date();
      this.updated_at = new Date();
    }
  }
}

export { Car };
