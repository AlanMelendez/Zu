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

    'Hola mundo',
    'Bienvenidos',
    'Ami pagina',
    'Cheves o culon',

  ];

  formulario1 : FormGroup  = this.fb.group({
    respuesta_si : ['yes'],
    respuesta_no : ['no']
  })

  //Funcion para capturar respuesta
  capturarRespuesta (){
    this.cargarSpinner();
    this.respuesta = this.respuesta+1;
  }

  //Mostrar alerta al presionar NO
  alerta(){
    Swal.fire({
      title: 'Whats going on?',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'This is cool'
    })
  }

}
