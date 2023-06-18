import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-newterminalrequest',
  templateUrl: './newterminalrequest.component.html',
  styleUrls: ['./newterminalrequest.component.scss']
})
export class NewterminalrequestComponent {

  bodyText: string = "";
  showModal = false;


  constructor(private modalService: ModalService) { }

  ngOnInit() {
      this.bodyText = 'This text can be updated in modal 1';
  }

  openModal(id: string) {
      this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }

  toggleModal(){
    this.showModal = !this.showModal;
  }

}
