export default {
    name: 'page_settings',
    title: 'Configuración del Sitio',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Titulo del Sitio',
            type: 'string'
        },
        {
            name: 'metadescription',
            title: 'Meta descripción',
            type: 'string'
        },
        {
            name: 'keywords',
            title: 'Palabras clave',
            type: 'string'
        }
    ]
}