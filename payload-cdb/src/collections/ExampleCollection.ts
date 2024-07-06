import { CollectionConfig } from 'payload/types'

export const ExampleCollection: CollectionConfig = {
  slug: 'example-collection',
  fields: [
    {
      name: 'slider',
      type: 'array', 
      label: 'Image Slider',
      minRows: 2,
      maxRows: 10,
      interfaceName: 'CardSlider', 
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
        },
      ]
    }
  ],
}

export default ExampleCollection