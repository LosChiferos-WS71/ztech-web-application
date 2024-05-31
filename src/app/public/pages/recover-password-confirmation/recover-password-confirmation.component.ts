import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recover-password-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './recover-password-confirmation.component.html',
  styleUrl: './recover-password-confirmation.component.css'
})
export class RecoverPasswordConfirmationComponent implements OnInit{
  message!: string;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['message'] === 'invalid') {
        this.message = 'Email not sent!';
      } else if (params['message'] === 'valid') {
        this.message = 'Email sent!';
      }
    });

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);
  }
}
