import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }
  numero?: number;
  numeros: number[]= [0,1,2,3,4,5,6]
  ngOnInit(): void {

    this.numero= Math.floor((Math.random() * this.numeros.length));
    console.log(Math.round(this.numero));
  }
  frases : string [] = [

    'Eres una persona capaz de superar todo, es algo que siempre he admirado de ti, sé que lo lograrás y si necesitas apoyo, yo estaré para ti, eres lo mas especial que llego a mi vida, te adoro',
    'No todo depende de ti, haces siempre lo que puedes y das lo mejor de ti, eso es lo que más valoro de ti, animo hermosa, te quiero mucho!',
    'Puede que esta vez las cosas no esten saliendo como esperabas, pero ni por un instante pierdo la fe en ti, siempre voy estar para ti, te quiero mucho',
    'Me rompe el corazón verte tan triste, pero quiero que sepas que estaré contigo hasta el final. Puedes contar conmigo para todo lo que necesites, te quiero mucho!',
    'Siempre he creído que eras especial y ahora lo sigo pensando más. Las personas especiales se hacen grandes en los momentos difíciles, animo preciosa, te quiero!',
    'Puedes contarme lo que quieras, expresar todas tus emociones. Aquí estaré para tratar de sostenerte y caer cuando sea necesario. Te quiero mucho!',
    '¿Sabes? A veces mirar las cosas desde otra óptica puede ayudar a darnos cuenta de que siempre hay solución y motivos por los que sonreír. Si quieres, puedo ayudarte a hacerlo',

  ];

}
