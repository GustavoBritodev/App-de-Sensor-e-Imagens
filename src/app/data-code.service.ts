import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataCodeService {
  private cacheKey = 'cachedCodes';
  private codes: string[] = [];

  constructor() {
    // Carregar códigos do cache ao inicializar o serviço
    const cachedData = localStorage.getItem(this.cacheKey);
    if (cachedData) {
      this.codes = JSON.parse(cachedData);
    }
  }

  addCode(code: string) {
    this.codes.push(code);
    this.saveToCache();
  }

  getCodes(): string[] {
    return this.codes;
  }

  private saveToCache() {
    localStorage.setItem(this.cacheKey, JSON.stringify(this.codes));
  }
}
