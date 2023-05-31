export default {
    localize: true,
    name: 'sectionOne',
    title: "Sección Uno",
    type: "object",
    fields: [
        {
            name: 'text',
            title: 'Texto de sección',
            type: 'array',
            of: [
                {
                    title: 'Bloque',
                    type: 'block',
                    styles: [{title: 'Normal', value: 'normal'}],
                    lists: [],
                },
            ],
        },
        {
            name: 'image',
            title: 'Imagen',
            type: 'image'
        }
    ],
    preview: {
        select: {
            title: "section_title"
        }
    }
}