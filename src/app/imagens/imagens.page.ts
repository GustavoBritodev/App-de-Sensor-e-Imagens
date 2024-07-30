import { Component, OnInit } from '@angular/core';
import { DataCodeService } from '../data-code.service';

@Component({
  selector: 'app-imagens',
  templateUrl: './imagens.page.html',
  styleUrls: ['./imagens.page.scss'],
})
export class ImagensPage implements OnInit {
  codes: string[] = [];

  constructor(private dataService: DataCodeService) { }

  ngOnInit() {
    this.codes = this.dataService.getCodes();
  }

}
