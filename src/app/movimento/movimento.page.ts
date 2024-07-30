import { Component } from '@angular/core';
// Biblioteca para arredondar valores double
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-movimento',
  templateUrl: './movimento.page.html',
  styleUrls: ['./movimento.page.scss'],
})
export class MovimentoPage {
  gyro_x!: any;
  gyro_y!: any;
  gyro_z!: any;
  accel_x!: any;
  accel_y!: any;
  accel_z!: any;

  gyro = false;
  accel = false;

  constructor(public decimal: DecimalPipe) { }

  formata(num: any) {
    return this.decimal.transform(num, '1.2');
  }

  myCallback1 = (data1: DeviceMotionEvent) => {
    this.accel_x = data1.accelerationIncludingGravity?.x;
    this.accel_y = data1.accelerationIncludingGravity?.y;
    this.accel_z = data1.accelerationIncludingGravity?.z;
    console.log('DeviceMotionEvent data:', { x: this.accel_x, y: this.accel_y, z: this.accel_z });
  }

  myCallback2 = (data2: DeviceOrientationEvent) => {
    this.gyro_x = data2.beta;
    this.gyro_y = data2.gamma;
    this.gyro_z = data2.alpha;
    console.log('DeviceOrientationEvent data:', { beta: this.gyro_x, gamma: this.gyro_y, alpha: this.gyro_z });
  }

  toggle_Accel() {
    this.accel = !this.accel;
    if (this.accel) {
      console.log('Adding DeviceMotionEvent listener');
      window.addEventListener('devicemotion', this.myCallback1);
    } else {
      console.log('Removing DeviceMotionEvent listener');
      window.removeEventListener('devicemotion', this.myCallback1);
    }
  }

  toggle_Gyro() {
    this.gyro = !this.gyro;
    if (this.gyro) {
      console.log('Adding DeviceOrientationEvent listener');
      window.addEventListener('deviceorientation', this.myCallback2);
    } else {
      console.log('Removing DeviceOrientationEvent listener');
      window.removeEventListener('deviceorientation', this.myCallback2);
    }
  }

  meiaVolta(value: any) {
    if (value > 180) {
      return true;
    } else {
      return false;
    }
  }
}
