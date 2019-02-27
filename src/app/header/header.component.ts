import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
}
)
export class HeaderComponent {
    @Output() selectedFeature = new EventEmitter<String>();

    onSelect(feature: string) {
        console.log(feature);
        this.selectedFeature.emit(feature);
    }
}