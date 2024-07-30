import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  light = false;
  videoStream: MediaStream | null = null;

  constructor() {}

  toggleLight() {
    this.light = !this.light;

    const constraints = {
      advanced: [
        { width: 640, height: 480 },
        { torch: this.light }
      ]
    };

    // Se a luz estiver sendo desligada, pare todos os tracks de vídeo
    if (!this.light && this.videoStream) {
      this.videoStream.getTracks().forEach(track => track.stop());
      this.videoStream = null;
      return;
    }

    navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' }
    }).then((stream) => {
      this.videoStream = stream;

      // Obter o canal ativo do stream e ativar o flash caso tenha
      const track = stream.getVideoTracks()[0];
      track.applyConstraints(constraints);
    }).catch(
      err => console.error('Falha: ', err)
    );
  }
}
