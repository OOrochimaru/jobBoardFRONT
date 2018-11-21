export interface JobConfig {
    type: string;
    filter: {
        name: string;
        location: string;
        limit: number;
        offset: number;
    }
}