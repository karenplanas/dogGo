import { Key } from "react";

export interface ISitter {
  _id: Key | null | undefined;
  name: string;
  quote: string;
  avatar: string;
}
