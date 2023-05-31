export default {
    localize: true,
    name: 'faqs',
    title: "Preguntas Frecuentes",
    type: "object",
    fields: [
        {
            name: 'section_title',
            title: 'Section title',
            type: 'string'
        },
        {
            name: 'faqs',
            title: 'Preguntas y respuestas',
            type: 'array',
            of: [{
                type: 'document',
                fields: [
                    {
                        name: 'text1',
                        title: 'Pregunta',
                        type: 'string'
                    },
                    {
                        name: 'text2',
                        title: 'Respuesta',
                        type: 'string'
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