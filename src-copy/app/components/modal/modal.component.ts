import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';


@Component({ 
    selector: 'app-modal', 
    templateUrl: 'modal.component.html', 
    styleUrls: ['modal.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ModalComponent{
    @Input() showModal: boolean = false;
    @Output() closeModal = new EventEmitter<void>();
  
    toggleModal(): void {
      this.closeModal.emit();
    }
}
