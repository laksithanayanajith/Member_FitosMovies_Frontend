import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { usersCreationDTO, usersDTO } from './users.module';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private httpClient: HttpClient) { }

  private apiURL = environment.apiURL_member + 'users';
  private apiURL_register = environment.apiURL_member + 'users-member';

  getAllMembers(): Observable<usersDTO[]>{
    return this.httpClient.get<usersDTO[]>(this.apiURL);
  }

  getByUsername(username: any): Observable<usersDTO>{
    return this.httpClient.get<usersDTO>(`${this.apiURL}/${username}`);
  }

  create(userCreationDTO: usersCreationDTO): any{
    return this.httpClient.post(this.apiURL_register, userCreationDTO);
  }
}
