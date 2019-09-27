import { PackageType } from './packageType';

export interface Product {
    id: number;
    name: string;
    description: string;
    quantity: number;
    packageTypeId: number;
    packageType: PackageType;
}
