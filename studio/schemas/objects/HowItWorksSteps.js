export default {
    localize: true,
    name: 'howItWorksSteps',
    title: "Cómo funciona",
    type: "object",
    fields: [
        {
            name: 'all_steps',
            title: 'Elementos',
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