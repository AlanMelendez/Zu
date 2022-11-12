import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  dateSpecial : number = 10102022;
  validarAlert() {

    Swal.fire({
      title: 'Ingresalo correctamente',
      input: 'number',
      text: 'Fecha del primer dia que fui a verte',
      icon: 'question',
      confirmButtonText: 'Ingresar',
      heightAuto: false,
    }).then((data) => {
      if (data.value == this.dateSpecial) {
        Swal.fire({
          title: 'Espera un momento u.u',
          timer: 5000,
          timerProgressBar: true,
          heightAuto: false,
          didOpen: () => {
            //Mientras este abierto , cargara el loading.
            Swal.showLoading()
          }

        }).then(value =>{
          console.log(value)
          this.router.navigateByUrl('/inicio/preguntas');

        })

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Fecha incorrecta',
          text: 'Intentalo de nuevo :(',
          // footer: '<a href="">Why do I have this issue?</a>',
          heightAuto: false
        });
      }
    });
  }

  botonEnojada(){
    Swal.fire({
      title: 'Espera un momento u.u',
      timer: 2000,
      timerProgressBar: true,
      heightAuto: false,
      didOpen: () => {
        //Mientras este abierto , cargara el loading.
        Swal.showLoading()
      }

    }).then(value =>{
      console.log(value)
      this.router.navigateByUrl('/inicio/parati');

    })

  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
