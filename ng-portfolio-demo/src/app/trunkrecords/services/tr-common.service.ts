import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product, Products } from '../interfaces/tr-interface';

@Injectable({
  providedIn: 'root',
})
export class TrCommonService {
  private server = environment.server;

  constructor(private http: HttpClient) {}

  getAllproduct() {
    return this.http.get<Products>(
      this.server + '/api/apparelpages?populate=deep'
    );
  }

  getproductByID(id: number) {
    return this.http.get<{ data: Product }>(
      this.server + '/api/apparelpages/' + id + '?populate=deep'
    );
  }

  login(data: any) {
    return this.http.post<{ jwt: string }>(
      this.server + '/api/auth/local',
      data
    );
  }

  register(data: any) {
    return this.http.post(this.server + '/api/auth/local/register', data);
  }

  addNewProduct(data: any) {
    return this.http.post<{ data: Product }>(
      this.server + '/api/apparelpages',
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('jwt'),
        },
      }
    );
  }

  updateProduct(id: any, data: any) {
    return this.http.put<{ data: Product }>(
      this.server + '/api/apparelpages/' + id,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('jwt'),
        },
      }
    );
  }

  updateDisplay(id: any, displaydata: any) {
    return this.http.put<{ data: Product }>(
      this.server + '/api/apparelpages/' + id,
      displaydata,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('jwt'),
        },
      }
    );
  }

  deleteProduct(id: number) {
    return this.http.delete<{ data: Product }>(
      this.server + '/api/apparelpages/' + id,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('jwt'),
        },
      }
    );
  }

  // For guard.ts
  isLoggedIn() {
    if (localStorage.getItem('jwt')) {
      return true;
    } else {
      return false;
    }
  }
}
