import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'productDemo';

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
