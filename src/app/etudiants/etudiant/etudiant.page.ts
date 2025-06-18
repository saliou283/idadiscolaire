import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.page.html',
  styleUrls: ['./students-list.page.scss'],
})
export class EtudiantPage {

  students = [
    { id: '1', firstName: 'Alice', lastName: 'Dupont' },
    { id: '2', firstName: 'Bob', lastName: 'Martin' }
  ];

  constructor(private router: Router) {}

  viewStudentDetails(studentId: string) {
    // Naviguer vers la page de détails de l'étudiant en passant l'ID
    // Le chemin doit correspondre à votre configuration de route (ex: /students/details/:id)
    this.router.navigate(['/students', 'details', studentId]);
  }
}