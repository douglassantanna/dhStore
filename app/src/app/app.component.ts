import { TokenService } from './identity-access/services/token.service';
import { Component, OnInit } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
})
export class AppComponent implements OnInit {
  constructor(public tokenService: TokenService) {}
  ngOnInit(): void {}
}
