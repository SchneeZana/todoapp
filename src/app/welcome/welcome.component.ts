import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  message= 'Some Welcome Message'
  name=''
  welcomeMessageFromService:string = ''

  constructor( private route:ActivatedRoute,
    private service: WelcomeDataService) {

   }
ngOnInit(){

  this.name = this.route.snapshot.params['name'];

}


getWelcomeMessageWithParameter(){

  //console.log(this.service.executeHelloWorldBeanService());

  this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
    response => this.handleSuccessfulResponse(response),
    error => this.handleErrorResponse(error)
  );
  console.log('last line of getWelcomeMessage');
}
handleSuccessfulResponse(response: any){
  //console.log(response);
  //console.log(response.message);
  this.welcomeMessageFromService = response.message;
}
handleErrorResponse(error: any){
  this.welcomeMessageFromService = error.error.message;

}

}
