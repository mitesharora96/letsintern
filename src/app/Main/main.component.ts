import {Component,OnInit} from '@angular/core'
import{DataService} from '../data.service'
import {ActivatedRoute} from '@angular/router'


@Component({
    selector:'main',
    templateUrl:'./main.component.html',
	styleUrls:['./main.component.css'],
	providers:[DataService]
})

export class MainComponent implements OnInit{

    ccc:string="mitesh";
    InternshipList:any[];
	Role="All";
	City="All";
	Paid="Paid";
	Stipend="4000";
	
	constructor(private dataservice:DataService, private AR:ActivatedRoute){}
    
ngOnInit(){

	this.dataservice.FetchData().subscribe(
		(data)=>this.InternshipList=data
	);

	this.City=this.AR.snapshot.params['city']
}


}