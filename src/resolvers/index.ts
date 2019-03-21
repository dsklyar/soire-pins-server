import { IResolvers } from "graphql-tools";
import { pinsResolvers } from "./pinsResolver";
import { usersResolvers } from "./usersResolver";

export const resolvers: IResolvers = { ...pinsResolvers, ...usersResolvers };
