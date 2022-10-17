import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketIntractService {

  constructor() { }

  private date: any;

  public setDate(date: any){
    this.date = date;
  }

  public getDate(): any{
    return this.date;
  }
}
