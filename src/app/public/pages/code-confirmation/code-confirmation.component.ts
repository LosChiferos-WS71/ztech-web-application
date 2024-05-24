import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-code-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './code-confirmation.component.html',
  styleUrl: './code-confirmation.component.css'
})
export class CodeConfirmationComponent implements OnInit{
  message!: string;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['message'] === 'invalid') {
        this.message = 'Invalid code';
      } else if (params['message'] === 'valid') {
        this.message = 'Aggregate correctly';
      }
    });

    setTimeout(() => {
      this.router.navigate(['/add/pot']);
    }, 3000);
  }
}