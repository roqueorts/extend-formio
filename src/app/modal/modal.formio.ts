import { Injector } from '@angular/core';
import { FormioCustomComponentInfo, registerCustomFormioComponent } from 'angular-formio';
import { ModalButtonComponent } from './modalButton.component';
import ModalEditForm from './editForm';

const COMPONENT_OPTIONS: FormioCustomComponentInfo = {
    title: 'Extra information',
    type: 'ask-modal',
    // To avoid problems when using the component as a regular angular component
    // choose a different selector from the angular component selector
    selector: 'ask-formio-modal',
    group: 'basic',
    icon: 'minus-square',
    emptyValue: "",
    weight: 40,
    editForm: ModalEditForm,
    fieldOptions: ['template'],
    extraValidators: ['pattern']
};

export function registerAutocompleteComponent(injector: Injector) {
    registerCustomFormioComponent(COMPONENT_OPTIONS, ModalButtonComponent, injector);
}
