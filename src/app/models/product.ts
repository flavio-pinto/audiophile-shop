export interface Product {
  id: 1,
  slug: string,
  name: string,
  image: {
    mobile: string,
    tablet: string,
    desktop: string
  },
  category: string,
  categoryImage: {
    mobile: string,
    tablet: string,
    desktop: string
  },
  new: boolean,
  showcase: boolean,
  showcaseName: string,
  showcaseDescription: string,
  price: number,
  description: string,
  includes: [
    {
      quantity: number,
      item: string
    },
    {
      quantity: number,
      item: string
    },
    {
      quantity: number,
      item: string
    },
    {
      quantity: number,
      item: string
    },
    {
      quantity: number,
      item: string
    }
  ],
  gallery: {
    first: {
      mobile: string,
      tablet: string,
      desktop: string
    },
    second: {
      mobile: string,
      tablet: string,
      desktop: string
    },
    third: {
      mobile: string,
      tablet: string,
      desktop: string
    }
  },
  others: [
    {
      slug: string,
      name: string,
      image: {
        mobile: string,
        tablet: string,
        desktop: string
      }
    },
    {
      slug: string,
      name: string,
      image: {
        mobile: string,
        tablet: string,
        desktop: string
      }
    },
    {
      slug: string,
      name: string,
      image: {
        mobile: string,
        tablet: string,
        desktop: string
      }
    }
  ]
}
