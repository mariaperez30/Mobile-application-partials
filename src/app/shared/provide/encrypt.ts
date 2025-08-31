import { Injectable } from '@angular/core';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  
  async encryptPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10); 
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }

  
  async comparePassword(password: string, hash: string): Promise<boolean> {
    const result = await bcrypt.compare(password, hash);
    return result;
  }
}
