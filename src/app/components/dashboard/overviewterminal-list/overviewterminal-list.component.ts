import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-overviewterminal-list',
  templateUrl: './overviewterminal-list.component.html',
  styleUrls: ['./overviewterminal-list.component.scss']
})
export class OverviewterminalListComponent implements OnInit {


  ngOnInit() {
    this.loadData();
  }

  loadData() {
    console.log("hello world")
  }
}
