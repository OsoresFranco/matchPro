import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bet-match',
  templateUrl: './bet-match.component.html',
  styleUrls: ['./bet-match.component.scss'],
})
export class BetMatchComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      local: [0, [Validators.min(0), Validators.max(19)]],
      visitante: [0, [Validators.min(0), Validators.max(19)]],
    });
  }

  test() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

  ngOnInit(): void {}
}
