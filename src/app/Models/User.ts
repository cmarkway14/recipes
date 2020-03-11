import { Weight } from './Weight';
import { Address } from './Address';

export interface User {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;    
    address?: Address;
    weight?: Weight[];
}

