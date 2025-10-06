export type GetCharacter = {
    info:    Info;
    results: Character[];
}

export type Info = {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export type Character = {
    id:       number;
    name:     string;
    status:   Status;
    species:  Species;
    type:     string;
    gender:   Gender;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export type Gender = "Male" | "Female" | "unknown";

export type Location = {
    name: string;
    url:  string;
}

export type Species = "Human" | "Alien";

export type Status = "Alive" | "unknown" | "Dead";
