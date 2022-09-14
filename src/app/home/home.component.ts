import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AppCacheService } from '../services/app-cache.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public get name() {
    return this.cache.username;
  }

  public formData: UntypedFormGroup = new UntypedFormGroup({
    name: new UntypedFormControl(Validators.required)
  });

  public nameSubmitted: boolean = false;

  constructor(private cache: AppCacheService) {
    if (this.name.length > 0) {
      this.nameSubmitted = true;
    }
   }

  ngOnInit(): void {
    this.formData.reset({name: this.cache.username});
  }

  public saveName() {
    if (this.formData.valid && this.formData.controls['name'].value.length > 0) {
      this.nameSubmitted = true;
      this.cache.username = this.formData.controls['name'].value;
    }
  }

}
