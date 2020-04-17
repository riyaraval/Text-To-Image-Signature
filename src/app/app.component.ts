import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TextToSignature';

  @Input() fullname:string ='Your Name';
  @Input() initial:string = 'YN';

  selectedScreen:ElementRef;
  @ViewChild('screen1',{static:false}) screen1: ElementRef;
  @ViewChild('screen2',{static:false}) screen2: ElementRef;
  @ViewChild('screen3',{static:false}) screen3: ElementRef;
  @ViewChild('canvas',{static:false}) canvas: ElementRef;
  @ViewChild('downloadLink',{static:false}) downloadLink: ElementRef;
  
  createSignature(screen){
    console.log(screen)
    if(screen=='screen1'){
      this.selectedScreen=this.screen1;
      html2canvas(this.screen1.nativeElement).then(canvas => {
        this.canvas.nativeElement.src = canvas.toDataURL();
      });
    }

    if(screen=='screen2'){
      this.selectedScreen=this.screen2;
      html2canvas(this.screen2.nativeElement).then(canvas => {
        this.canvas.nativeElement.src = canvas.toDataURL();
      });
    }

    if(screen=='screen3'){
      this.selectedScreen=this.screen3;
      html2canvas(this.screen3.nativeElement).then(canvas => {
        this.canvas.nativeElement.src = canvas.toDataURL();
      });
    }
  }

  createLink(){
    html2canvas(this.selectedScreen.nativeElement).then(canvas => {
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png;base64');
      this.downloadLink.nativeElement.download = 'Signature.png';
      this.downloadLink.nativeElement.click();
    });
  }
}
