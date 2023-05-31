export default {
    // This property says we should have all fields localized,
    // except any field that explicitly says localize: false
    localize: true,
    name: "page",
    title: "Pages",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            localize: false,
            name: "content",
            title: "Page sections",
            type: "array",
            of: [
                { type: "cover" },
                { type: "products" },
                { type: "how-it-works" },
                { type: "faqs" },
                { type: "contact" }
            ],
        }
    ],
    preview: {
        select: {
            title: "title",
            media: "openGraphImage",
        },
    }
};