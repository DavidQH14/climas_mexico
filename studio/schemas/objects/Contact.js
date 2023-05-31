export default {
    localize: true,
    name: 'contact',
    title: "Contacto",
    type: "object",
    fields: [
        {
            name: 'section_title',
            title: 'Section title',
            type: 'string'
        },
        {
            name: 'text',
            title: 'Texto de sección',
            type: 'string'
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