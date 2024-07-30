import { Component } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { DataCodeService } from '../data-code.service';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage {
  allowedFormats = [
    BarcodeFormat.QR_CODE,
    BarcodeFormat.EAN_13,
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.CODABAR,
    BarcodeFormat.MAXICODE,
    BarcodeFormat.UPC_A,
    BarcodeFormat.UPC_E,
    BarcodeFormat.EAN_8,
    BarcodeFormat.CODE_39,
    BarcodeFormat.ITF,
    BarcodeFormat.PDF_417,
    BarcodeFormat.AZTEC
  ];
  codigo: any;

  constructor(private dataService: DataCodeService) { }

  scanSuccess(result: string) {
    this.codigo = result;
    this.dataService.addCode(result);
  }
}
