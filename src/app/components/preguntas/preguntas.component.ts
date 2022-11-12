import { Component, ElementRef, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms'

import Swal from 'sweetalert2';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit, OnChanges {

  @ViewChild('botonNo') botonNo?: ElementRef;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {

  }

  ngOnChanges( changes: SimpleChanges): void{
    console.log("En este instante el componente cambio")

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
    '¿Me haces muy feliz, lo sabias? 👀',
    '¿Pero , tu eres feliz conmigo? 🥺',
    '¿Me dejarias formar parte de tu vida? 💘',
    '¿Estas segurisimaaaa? 🤔',
    '¿Quieres ser mi novia? 🥰',

  ];

  formulario1 : FormGroup  = this.fb.group({
    respuesta_si : ['✔️'],
    respuesta_no : ['❌']
  })


  //Funcion para capturar respuesta
  capturarRespuesta (pregunta : number){

    // while(this.respuesta==4){
    //   const boton2 = this.botonNo?.nativeElement;
    //   this.botonNo?.nativeElement.addEventListener('mouseover',  () => {
    //   console.log('Hola desde boton no')
    //   let randomX: number = (Math.random()*100);
    //   let randomY: number = (Math.random()*100);
    //   boton2?.style.setProperty('top',randomY+'%');
    //   boton2?.style.setProperty('left',randomX+'%');
    //   boton2?.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
    // });

    // }
        Swal.fire({
          title: 'Cargando  🙈',
          timer: 500,
          timerProgressBar: true,
          heightAuto: false,
          didOpen: () => {
            //Mientras este abierto , cargara el loading.
            Swal.showLoading()
            this.moverBoton();

          },
          didDestroy: () => {
            this.respuesta = this.respuesta+1;
            this.moverBoton();
          }

        })
  }

  //Mostrar alerta al presionar NO
  alerta(){
    Swal.fire({
      title: 'Esta no es una respuesta valida!😡',
      icon: 'error',
      confirmButtonText: 'Intentar de nuevo',
      heightAuto: false
    })
  }

  //Mover boton
  moverBoton(){
    const boton2 = this.botonNo?.nativeElement;
    this.botonNo?.nativeElement.addEventListener('mouseover',  () => {
      console.log('Hola desde boton no')
      let randomX: number = (Math.random()*100);
      let randomY: number = (Math.random()*100);
      boton2?.style.setProperty('top',randomY+'%');
      boton2?.style.setProperty('left',randomX+'%');
      boton2?.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
    });

  }






}
