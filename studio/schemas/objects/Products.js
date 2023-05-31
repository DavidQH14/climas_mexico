export default {
    localize: true,
    name: 'products',
    title: "Productos",
    type: "object",
    fields: [
        {
            name: 'section_title',
            title: 'Section title',
            type: 'string'
        },
        {
            name: 'categories',
            title: 'Categorías',
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
                        name: 'all_products',
                        title: 'Productos',
                        type: 'array',
                        of: [{
                            type: 'reference',
                            to: [{ type:'singleProduct' }]
                        }]
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