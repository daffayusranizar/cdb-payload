import { CollectionConfig } from 'payload/types';

const Hero: CollectionConfig = {
  slug: 'hero',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
    },
  ],
};

export default Hero;
