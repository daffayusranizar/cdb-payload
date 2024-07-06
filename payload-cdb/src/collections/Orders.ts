
import { CollectionConfig } from 'payload/types';

const Orders: CollectionConfig = {
  slug: 'orders', // Unique identifier for this collection
  fields: [

    {
      name: 'total',
      type: 'number',
      required: true,
    },
  ],
};

export default Orders;
