import graphene
from graphene_django import DjangoObjectType

from .models import Track


class TrackType(DjangoObjectType):
    class Meta:
        model = Track


class TrackQuery(graphene.ObjectType):
    tracks = graphene.List(TrackType)
    track = graphene.Field(TrackType, id=graphene.String())

    def resolve_tracks(self, info, **kwargs):
        return Track.objects.all()

    def resolve_track(self, info, id):
        return Track.objects.get(pk=id)