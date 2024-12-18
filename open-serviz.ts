import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { CoreConfigService } from "@core/services/config.service";

@Component({
  selector: "app-open-service-centre",
  templateUrl: "./open-service-centre.component.html",
  styleUrls: ["./open-service-centre.component.scss"],
})
export class OpenServiceCentreComponent implements OnInit {
  partnershipGroup: FormGroup;
  constructor(private _coreConfigService: CoreConfigService) {
    this._coreConfigService.config = {
      layout: {
        navbar: {
          hidden: true,
        },
        footer: {
          hidden: true,
        },
        menu: {
          hidden: true,
        },
        customizer: false,
        enableLocalStorage: false,
      },
    };
  }

  ngOnInit(): void {}
  submit() {
    if (this.partnershipGroup.valid) {
      console.log("valid");
    } else {
      this.partnershipGroup.markAllAsTouched();
    }
  }
  onFileSelected(event: any, controlName: string) {
    const file = event.target.files[0];
    // this.partnershipForm.get(controlName)?.setValue(file);
  }
}
