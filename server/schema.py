import graphene
from graphene_django import DjangoObjectType
from graphql_auth.schema import UserQuery, MeQuery
import users.schema
import tracks.schema

# import graphql_jwt


class Query(UserQuery, MeQuery, tracks.schema.TrackQuery, DjangoObjectType, graphene.ObjectType):
    pass


class Mutation(users.schema.AuthMutation, users.schema.Mutation, DjangoObjectType, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
