import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private currentMemberId: number | any;
  private currentMemberfirstname: string | any;
  private currentMembertype: string | any;
  private isLogin: boolean = false;

  public setcurrentMemberId(currentMemberId: number): void{
    this.currentMemberId = currentMemberId;
  }

  public getcurrentMemberId(): number{
    return this.currentMemberId;
  }

  public setcurrentMemberfirstname(firstname: string): void{
     this.currentMemberfirstname = firstname;
  }

  public getcurrentMemberfirstname(): string{
    return this.currentMemberfirstname;
  }

  public setcurrentMembertype(firstname: string): void{
    this.currentMembertype = firstname;
 }

 public getcurrentMembertype(): string{
   return this.currentMembertype;
 }

  public setIsLogin(isLogin: boolean): void{
    this.isLogin = isLogin;
  }

  public getIsLogin(): boolean{
    return this.isLogin;
  }
}
