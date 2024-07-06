import { CollectionConfig } from 'payload/types';
import Hero from './Hero';

const Home: CollectionConfig = {
  slug: 'home',
  fields: [
    {
      name: 'heroSection',
      type: 'relationship',
      relationTo: 'hero', 
      required: true,
    },
  ],
};

export default Home;
