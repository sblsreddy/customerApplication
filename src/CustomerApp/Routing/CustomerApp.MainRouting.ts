
import { CustomerAppComponent } from "../Customer/CustomerApp.CustomerComponent";
import { HomeComponent } from "../Home/CustomerApp.HomeComponent";
import { ThankYouComponent } from "../Home/CustomerApp.ThankYouComponent";
import { SupplierComponent } from "../Supplier/CustomerApp.SupplierComponent";

export const MainRoutes =[
    {path: 'Home', component: HomeComponent },
    {path: 'Supplier', component: SupplierComponent },
    {path: 'Customer', component: CustomerAppComponent },
    {path: 'ThankYou', component: ThankYouComponent },
    {path: '', component: HomeComponent }
]