export default {
    localize: true,
    name: 'cover',
    title: "Cover",
    type: "object",
    fields: [
        {
            name: 'section_title',
            title: 'Section title',
            type: 'string'
        },
        {
            name: 'text1',
            title: 'Párrafo Uno',
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
            name: 'text2',
            title: 'Párrafo Dos',
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