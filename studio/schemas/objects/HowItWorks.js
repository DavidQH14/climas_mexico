export default {
    localize: true,
    name: 'how-it-works',
    title: "Cómo trabajamos",
    type: "object",
    fields: [
        {
            name: 'section_title',
            title: 'Section title',
            type: 'string'
        },
        {
            name: 'steps',
            title: 'Pasos',
            type: 'array',
            of: [{
                type: 'document',
                fields: [
                    {
                        name: 'text1',
                        title: 'Título',
                        type: 'string'
                    },
                    {
                        name: 'text2',
                        title: 'Descripción',
                        type: 'string'
                    }
                ],
            }]
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