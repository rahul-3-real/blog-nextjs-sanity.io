import {defineField, defineType} from 'sanity'

const blogType = defineType({
  name: 'blog',
  title: 'Blog Post',
  type: 'document',
  fields: [
    // Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    // Slug
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-'),
      },
    }),

    // Category
    defineField({
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required(),
      description: 'The category this post belongs to.',
      options: {
        layout: 'single',
      },
    }),

    // Cover Image
    defineField({
      name: 'cover_image',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'caption',
          title: 'Caption',
          type: 'string',
        }),
        defineField({
          name: 'attribution',
          title: 'Attribution',
          type: 'string',
        }),
      ],
    }),

    // Content
    defineField({
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    }),

    defineField({
      name: 'created_at',
      title: 'Created at',
      type: 'datetime',
    }),
  ],
})

export default blogType
