import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms'

import Swal from 'sweetalert2';


@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  title = 'Propuesta';
  respuesta : number= 0;

  // Funcion para cargar el spinner
  showSpinner : boolean = false;
  cargarSpinner(){

    this.showSpinner= true;
    setTimeout(()=>{
      this.showSpinner=false;
    },50000)
  }

  // Preguntas que mostraremos en los input
  preguntas : string [] = [

    '¿Me contestarias 5 preguntas? 🙏',
    '¿Crees en el amor? 👀',
    '¿Eres feliz conmigo? 🥺',
    '¿Me dejarias formar parte de tu vida? 💘',
    '¿Estas lista? 🤔',
    '¿Quieres ser mi novia? 🥰',

  ];

  formulario1 : FormGroup  = this.fb.group({
    respuesta_si : ['✔️'],
    respuesta_no : ['❌']
  })

  //Funcion para capturar respuesta
  capturarRespuesta (){
    Swal.fire({
      title: 'Cargando',
      timer: 500,
      timerProgressBar: true,
      heightAuto: false,
      didOpen: () => {
        //Mientras este abierto , cargara el loading.
        Swal.showLoading()
      },
      didClose: () =>{
        this.respuesta = this.respuesta+1;
      }

    })
    // this.respuesta = this.respuesta+1;
  }

  //Mostrar alerta al presionar NO
  alerta(){
    Swal.fire({
      title: '¿Estas segura de la respuesta?',
      icon: 'error',
      confirmButtonText: 'Intentar de nuevo',
      heightAuto: false
    })
  }

}
