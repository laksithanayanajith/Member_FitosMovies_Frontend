import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ticketCreationDTO } from '../ticket.module';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {

  constructor(private router: Router, private ticketService: TicketService) { }

  ngOnInit(): void {
  }

  saveChanges(ticketCreationDTO: ticketCreationDTO){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'New Ticket Added Successfully!',
      showConfirmButton: false,
      timer: 1500
    })
    this.ticketService.create(ticketCreationDTO).subscribe(()=>{
      console.log(ticketCreationDTO);
      this.router.navigate(['/ticket']);
    });
  }

}
