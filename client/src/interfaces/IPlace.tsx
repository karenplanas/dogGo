export interface IPlace {
  fsq_id: string
  name: string
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