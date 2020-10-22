import { Component, NgZone } from "@angular/core";
import { ICustomWindow, WindowRefService } from "./window-ref.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  private _window: ICustomWindow;
  public rzp: any;
  public options: any = {
    key: "rzp_test_lo6ipMpqAj0D92", // add razorpay key here
    name: "PaymentApp",
    description: "Shopping",
    amount: 80000, // razorpay takes amount in paisa
    prefill: {
      name: "PaymentApp",
      email: "pt00501803@techmahindra.com",
    },
    notes: {},
    theme: {
      color: "#3880FF",
    },
    handler: this.paymentHandler.bind(this),
    modal: {
      ondismiss: () => {
        this.zone.run(() => {
          // add current page routing if payment fails
        });
      },
    },
  };
  constructor(private zone: NgZone, private winRef: WindowRefService) {
    this._window = this.winRef.nativeWindow;
  }
  initPay(): void {
    this.rzp = new this.winRef.nativeWindow["Razorpay"](this.options);
    this.rzp.open();
  }
  paymentHandler(res: any) {
    this.zone.run(() => {
      // add API call here
    });
  }
}
