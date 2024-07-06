import { CollectionConfig } from 'payload/types';
import Orders from './Orders'; 

const Purchases: CollectionConfig = {
  slug: 'purchases',
  fields: [
    {
      name: 'orderDetails',
      type: 'relationship',
      relationTo: 'orders',
      required: true,
    },
  ],
};

export default Purchases;
