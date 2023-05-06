use juniper::RootNode;

struct Todo {
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
}

fn main() {
    println!("Hello, World!");
}
