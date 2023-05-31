export default {
    localize: true,
    name: 'types',
    title: "Tipos",
    type: "object",
    fields: [
        {
            name: 'text1',
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
            name: 'image1',
            title: 'Imagen uno',
            type: 'image'
        },
        {
            name: 'image2',
            title: 'Imagen dos',
            type: 'image'
        },
        {
            name: 'image3',
            title: 'Imagen tres',
            type: 'image'
        },
        {
            name: 'text2',
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
            name: 'image4',
            title: 'Imagen cuatro',
            type: 'image'
        },
        {
            name: 'image5',
            title: 'Imagen cinco',
            type: 'image'
        },
        {
            name: 'image6',
            title: 'Imagen seis',
            type: 'image'
        },
        {
            name: 'all_types',
            title: 'Tipos',
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
                    },
                    {
                        name: 'image',
                        title: 'Imagen',
                        type: 'image'
                    }
                ],
            }]
        }
    ],
    preview: {
        select: {
            title: "section_title"
        }
    }
}