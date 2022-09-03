import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  constructor() {}

  confirmAlert(title: string, message: string) {
    Swal.fire({ title: `${title}`, text: `${message}`, icon: 'success' });
  }

  errorAlert(title: string, message: string) {
    Swal.fire({
      icon: 'error',
      title: `${title}`,
      text: `${message}`,
    });
  }
}
