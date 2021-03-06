import { ICreateCarsDTO } from '../dtos/ICreateCarsDTO';
import { Car } from '../infra/typeorm/entities/Car';

interface ICarsRepository {
  create(data: ICreateCarsDTO): Promise<Car>;
  findByLicensePlate(licensePlate: string): Promise<Car>;
}

export { ICarsRepository };
