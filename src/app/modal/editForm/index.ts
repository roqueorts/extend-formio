import modalEditDisplay from "./modal.edit.display"

export default function () {
    return {
        components: [
            { key: 'type', type: 'hidden' },
            {
                label: 'Tabs',
                components: [
                    modalEditDisplay
                ],
                key: 'tabs',
                type: 'tabs',
                input: false,
                tableView: false
            }
        ]
    }
}
