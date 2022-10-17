import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ticketCreationDTO, ticketDTO } from './ticket.module';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private httpClient: HttpClient) { }

  private apiURL = environment.apiURL_ticket + 'tickets';

  getAllMovies(): Observable<ticketDTO[]>{
    return this.httpClient.get<ticketDTO[]>(this.apiURL);
  }

  getByID(id: number): Observable<ticketDTO>{
    return this.httpClient.get<ticketDTO>(`${this.apiURL}/${id}`);
  }

  create(ticketCreationDTO: ticketCreationDTO): any{
    return this.httpClient.post(this.apiURL, ticketCreationDTO);
  }

  edit(id: number, ticketCreationDTO: ticketCreationDTO): any{
    return this.httpClient.put(`${this.apiURL}/${id}`, ticketCreationDTO);
  }

  delete(id: number): any{
    return this.httpClient.delete<ticketDTO>(`${this.apiURL}/${id}`);
  }
}
