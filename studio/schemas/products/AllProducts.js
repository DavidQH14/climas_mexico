export default {
    name: 'singleProduct',
    title: 'Productos',
    type: 'document',
    fields: [
        {
            name: 'text1',
            title: 'Título',
            type: 'string',
        },
        {
            name: 'text2',
            title: 'Descripción',
            type: 'string'
        },
        {
            name: 'text3',
            title: 'Texto Previo',
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
            name: 'image_preview',
            title: 'Imagen Previa',
            type: 'image'
        },
        {
            localize: false,
            name: "content",
            title: "Secciones de la página",
            type: "array",
            of: [
                { type: "sectionOne" },
                { type: "types" },
                { type: "howItWorksSteps" }
            ]
        },
        {
            name: 'all_benefits',
            title: 'Beneficios',
            type: 'array',
            of: [{
                type: 'document',
                fields: [
                    {
                        name: 'text',
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
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'text1',
                maxLength: 96,
            },
        }
    ]
}