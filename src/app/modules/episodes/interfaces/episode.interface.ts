export type GetEpisodes = {
    info:    Info;
    results: Episode[];
}

export type Info = {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export type Episode = {
    id:         number;
    name:       string;
    air_date:   string;
    episode:    string;
    characters: string[];
    url:        string;
    created:    Date;
}
