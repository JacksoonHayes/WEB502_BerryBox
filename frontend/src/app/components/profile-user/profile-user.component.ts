import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile-user.component.html',
  styleUrl: './profile-user.component.css'
})

export class ProfileUserComponent implements OnInit {
  orders: any[] = [];
  user: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUserOrders();
  }

  getUserOrders(): void {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });

    this.http.get<any[]>('http://localhost:3000/orders', { headers }).subscribe(
      (orders) => (this.orders = orders),
      (err) => console.error('Failed to retrieve orders:', err)
    );
  }
}