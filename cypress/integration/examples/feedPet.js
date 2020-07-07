
import {BasePage} from "../examples/BasePage"
import {pricingPage} from "../examples/pricingPage"
import { OrderSummaryPage } from "./OrderSummaryPage"
import { CheckoutPage } from "./CheckoutPage";

var I = new BasePage()
var pricing = new pricingPage()
var orderSummary = new OrderSummaryPage()
var checkout = new CheckoutPage()

describe('test feedPet website', ()=> {
    it("Launch website", ()=>{
        I.open("https://fmfb-v2-dev.netlify.app/pricing/")
        
        // I.click(pricing.closeCovid)
        I.type(pricing.dogName, "Nemo")
        I.select(pricing.yearOfBirth, '4')  
        I.select(pricing.month, '7')
        I.type(pricing.weight, 30)
        I.click(pricing.lifeStyle_typical)
        I.click(pricing.IdontFeed)
        I.type(pricing.firstName, "naveen")
        I.type(pricing.email, "nkaagaya@gmail.com")
        I.click(pricing.fetchPlan)

        I.click(orderSummary.ContinueToCheckout)
        I.checkTextboxContains(checkout.email, "nkaagaya@gmail.com")
        I.checkTextboxContains(checkout.firstName, "naveen")
        // 34 Hacketts Road, RD 10, Palmerston North 4470
        I.type(checkout.address, "34 Hacketts Road, RD 10")
        I.click(checkout.addressSuggestion + 'contains("34 Hacketts Road, RD 10")')
        // I.switchToFrame(checkout.cardNumberFrame)
        I.typeInFrame(checkout.cardNumberFrame, checkout.cardNumber, "4242424242424242")


    })

})