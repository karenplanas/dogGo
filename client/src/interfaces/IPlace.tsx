export interface IPlace {
  fsq_id: string
  name: string
  categories: {
    id: number
  }[]
  geocodes: {
    main: {
      latitude: number,
      longitude: number
    }
  }
  location: {
    formatted_address: string
  }
}