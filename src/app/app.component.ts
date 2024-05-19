import { AfterViewInit, Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { InitService } from './init.service';

@Component({
  selector: 'hotelinvapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('component', {read: ViewContainerRef}) vcr!: ViewContainerRef;
  @ViewChild('div') divRef!: ElementRef;

  constructor(private initService : InitService) {
    console.log(initService.config);
    
  }

  ngAfterViewInit(): void {
    const component = this.vcr?.createComponent(RoomsComponent);
    // component.instance.numberOfRooms = 20;

    // this.divRef.nativeElement.innerText = "Hello From Down Here";
  }
  title = 'hotelinventoryapp';
}
