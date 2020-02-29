import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { client } from '../../../models/client.model';
import { ClientService } from "../../../services/client.service";
import { MatTableDataSource, MatDialogConfig } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { EditsComponent } from '../edits/edits.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  clients: client[] = [];
  user: client;
  listData = new MatTableDataSource<client>();
  displayedColumns: string[] = ['nomClient', 'prenomClient', 'statutClient', 'telClient', 'emailClient', 'adressClient', 'abonnement', 'villeClient', 'actions'];

  constructor(private clientService: ClientService, private router: Router, public notification: MatSnackBar, private dialog: MatDialog) { }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ngOnInit() {
    this.fetchElements();
  }

  fetchElements() {
    this.clientService.findAll().subscribe(
      res => {
        if (!res) return;
        console.log(res);
        this.listData = new MatTableDataSource(res as any);
        this.listData.paginator = this.paginator;
      }
    )
  };

  applyFilter(filterValue: string) {
    this.listData.filter = filterValue.trim().toLowerCase();
  }


  onEdit(row) {
    this.clientService.populateform(row);
    const dialConfig = new MatDialogConfig();
    dialConfig.disableClose = false;
    dialConfig.autoFocus = true;
    dialConfig.width = '80%';
    dialConfig.height = '80%';
    this.dialog.open(EditsComponent, dialConfig).afterClosed().subscribe(data => this.fetchElements());

  }

  onDelete(id) {
    if (confirm('Are sure?')) {
      this.delete(id);
    }
  }



  delete(id) {
    this.clientService.delete(id).subscribe(() => {
      this.clients = this.clients.filter(data => data.id != id);
      console.log(this.clients);
      // this.notification.openSnackBar("Success Delete...!");
      this.notification.open('Succes Delete ...')._dismissAfter(5000);
      this.fetchElements();
    });
  }




}
