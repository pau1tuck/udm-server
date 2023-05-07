/* https://www.section.io/engineering-education/rust-graphql-server-with-mongodb-juniper-and-actix-web/ */

use juniper::{graphql_value, GraphQLObject};
#[derive(GraphQLObject)]
#[graphql(description = "Track information")]
struct Track {
    #[graphql(description = "Database ID")]
    id: i32,
    #[graphql(description = "Track YouTube ID")]
    track_id: String,
    #[graphql(description = "Artist")]
    artist: String,
    #[graphql(description = "Title")]
    title: String,
    #[graphql(description = "Version / remix")]
    version: String,
    #[graphql(description = "Record label")]
    label: String,
    #[graphql(description = "Release month")]
    month: u8,
    #[graphql(description = "Release year")]
    year: u8,
    #[graphql(description = "Length of track")]
    duration: String,
    #[graphql(description = "URL to purchase the track")]
    buy_url: String,
    #[graphql(description = "Number of user votes")]
    votes: u32,
    #[graphql(description = "Database entry creation time")]
    created_at: String,
    #[graphql(description = "Database entry most recent update time")]
    updated_at: String,
}

impl Track {
    pub fn new(
        id: i32,
        track_id: String,
        artist: String,
        title: String,
        version: String,
        label: String,
        month: u8,
        year: u8,
        duration: String,
        buy_url: String,
        votes: u32,
        created_at: String,
        updated_at: String,
    ) -> Track {
        Track {
            id,
            track_id,
            artist,
            title,
            version,
            label,
            month,
            year,
            duration,
            buy_url,
            votes,
            created_at,
            updated_at,
        }
    }

    pub fn id(&self) -> i32 {
        self.id
    }

    pub fn track_id(&self) -> &str {
        &self.track_id
    }

    pub fn artist(&self) -> &str {
        &self.artist
    }

    pub fn title(&self) -> &str {
        &self.title
    }

    pub fn version(&self) -> &str {
        &self.version
    }

    pub fn label(&self) -> &str {
        &self.label
    }

    pub fn month(&self) -> u8 {
        self.month
    }

    pub fn year(&self) -> u8 {
        self.year
    }

    pub fn duration(&self) -> &str {
        &self.duration
    }

    pub fn buy_url(&self) -> &str {
        &self.buy_url
    }

    pub fn votes(&self) -> u32 {
        self.votes
    }

    pub fn created_at(&self) -> &str {
        &self.created_at
    }

    pub fn updated_at(&self) -> &str {
        &self.updated_at
    }
}

fn main() {
    println!("Hello, World!");
}
