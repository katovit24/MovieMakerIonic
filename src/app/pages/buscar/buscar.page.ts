import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonSearchbar, IonButton, IonProgressBar, IonList, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonToast } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { Movie } from 'src/app/interfaces/movie';
import { HttpomdbService } from 'src/app/services/httpomdb.service';
import { MoviesManagerService } from 'src/app/services/movies-manager.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
  standalone: true,
  imports: [IonToast, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonItemOption, IonItemOptions, IonLabel, IonItem, IonItemSliding, IonList, IonProgressBar, IonButton, IonSearchbar, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class BuscarPage implements OnInit {

  public peliculas : string = "";
  public peliculasBuscadas : Movie[] = [];
  public guardado : boolean = false;
  public mensaje : string = "";
  public cargando : boolean = false;

  constructor(private servicio : HttpomdbService, private managerservice : MoviesManagerService) { }

  ngOnInit() {
  }


  
  
  buscar(){
    this.cargando = true;
    this.servicio.getPeliculas(this.peliculas).subscribe( data =>{
      this.cargando=false;
    this.peliculasBuscadas=data.Search    }
  )
  }

  guardar(pelicula : Movie){
    try{
      pelicula.fav=false;
      this.managerservice.addpelicula(pelicula);
      this.mensaje= "Pelicula guardada";
      this.guardado=true;
      this.peliculasBuscadas.splice(this.peliculasBuscadas.indexOf(pelicula), 1)
      
    } catch{
      this.mensaje= "La película ya esta guardada";
      this.guardado=true;
    }
    
  }

  cerrarToast(){
    this.guardado=false;  
  }
}
