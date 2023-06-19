import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-new-refund-form',
  templateUrl: './new-refund-form.component.html',
  styleUrls: ['./new-refund-form.component.scss']
})
export class NewRefundFormComponent {

  showModal = false;

  constructor(private modalService: ModalService) { }

  toggleModal(): void {
    this.showModal = !this.showModal;
  }

  openModal(id: string) {
    this.modalService.open(id);
}
}
