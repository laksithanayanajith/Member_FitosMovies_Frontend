import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ticketDTO } from '../ticket.module';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-index-ticket',
  templateUrl: './index-ticket.component.html',
  styleUrls: ['./index-ticket.component.css']
})
export class IndexTicketComponent implements OnInit {

  constructor(private ticketService: TicketService, private router: Router) { }

  ngOnInit(): void {
    this.DisplayAllTickets();
  }

  viewtickets!: ticketDTO[]

  DisplayAllTickets(){
    this.ticketService.getAllMovies().subscribe((ticket: ticketDTO[])=>{
      this.viewtickets = ticket;
      console.log(ticket);
    })
  }

  delete(ticketid: number){

    Swal.fire({
      title: 'Are you sure you want delete' + ticketid + " ticket id?",
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.ticketService.delete(ticketid).subscribe(()=>{
          this.DisplayAllTickets();
        });
      }
    })
    
  }

}
