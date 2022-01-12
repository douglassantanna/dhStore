import { MatDialog } from '@angular/material/dialog';
import { NewClient, UpdateClient, ViewClient } from './../../interfaces/iclient';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { EditClientComponent } from '../edit-client/edit-client.component';

@Component({
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  title: string = 'Clientes';
  clients: ViewClient[] = [];
  columns: string[] = ['name', 'option'];

  constructor(private clientService: ClientService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getClients();
  }
  getClients() {
    this.clientService.getClients().subscribe((x) => {
      this.clients = x;
    });
  }
  addClient(){
    const dialogRef = this.dialog.open(EditClientComponent, {
      width: '450px',
    });
    dialogRef.afterClosed()
    .pipe(
      switchMap((x: NewClient) => {
      if (x == undefined) return of();
      return this.clientService.createClient(x);
    })
    ).subscribe(() => {
      this.getClients();
    });
  }

  updateClient(client: ViewClient) {
    const dialofRef = this.dialog.open(EditClientComponent, {
      width: '450px',
      data: client,
    });
    dialofRef.afterClosed().pipe(
      switchMap((x: UpdateClient) => {
        if (x == undefined) return of();
        return this.clientService.updateClient(x);
      })
    ).subscribe(() => {
      this.getClients();
    })
  }

  deleteClient(id: ViewClient){
    this.clientService.deleteClient(id)
    .subscribe(() => {
      this.getClients();
    });
  }
}
