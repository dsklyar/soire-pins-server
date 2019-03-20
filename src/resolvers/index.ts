import { IResolvers } from "graphql-tools";
import { pinsResolvers } from "./pinsResolver";

export const resolvers: IResolvers = { ...pinsResolvers };
