export default {
    label: 'Display ola k ase',
    key: 'display',
    components: [
        {
            weight: 0,
            type: 'textfield',
            input: true,
            key: 'Label',
            label: 'Button label',
            placeholder: 'Button label',
            tooltip: 'The text for this button that will appear inside to it.',
            validate: {
                required: true
            }
        },

        {
            weight: 0,
            type: 'textfield',
            input: true,
            key: 'customOptions.buttonLabel',
            label: 'Button label',
            placeholder: 'Button label',
            tooltip: 'The text for this button that will appear inside to it.',
            validate: {
                required: true
            }
        },
        {
            weight: 0,
            type: 'textfield',
            input: true,
            key: 'customOptions.modalTitle',
            label: 'Modal title',
            placeholder: 'Modal title',
            tooltip: 'The text for the modal title that will open on click',
            validate: {
                required: true
            }
        },
        {
            weight: 0,
            type: 'textfield',
            input: true,
            key: 'customOptions.modalDescription',
            label: 'Modal description',
            placeholder: 'Modal description',
            tooltip: 'The text for the modal description that will open on click',
            validate: {
                required: true
            }
        }

    ]
}
